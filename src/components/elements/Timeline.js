import React from "react";
import TimelineItem from "./TimelineItem";
import TimelineHeader from "./TimelineHeader";
import Resume from "../../resume.json";

const formatDate = (value) => {
  if (!value) return "Present";
  const d = new Date(value);
  if (isNaN(d)) return value;
  return d.toLocaleString("en-GB", { month: "long", year: "numeric" });
};

export default function Timeline() {
  let globalIndex = 0;

  const years = Array.from(
    new Set(Resume.work.map((w) => new Date(w.startDate).getFullYear()))
  ).sort((a, b) => b - a);

  return (
    <div className="timeline is-centered">
      <header className="timeline-header">
        <span className="tag is-medium is-dark">
          {new Date().getFullYear()}
        </span>
      </header>

      {years.map((year) => {
        const items = Resume.work.filter(
          (w) => new Date(w.startDate).getFullYear() === year
        );

        return (
          <React.Fragment key={year}>
            <TimelineHeader year={year} />

            {items.map((item) => {
              const side = globalIndex % 2 === 0 ? "is-left" : "is-right";
              globalIndex++;

              return (
                <TimelineItem
                  key={`${year}-${item.company}`}
                  side={side}
                  date={`${formatDate(item.startDate)} – ${formatDate(item.endDate)}`}
                  company={item.company}
                  summary={item.summary}
                />
              );
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
}