import React from "react";

function TimelineItem({ date, company, summary, type }) {
  const isEducation = type === "education";

  return (
    <div className="timeline-item is-success is-right">
      <div className={`timeline-marker ${isEducation ? "is-icon is-info" : "is-32x32"}`}>
      {isEducation && <i className="fa-solid fa-graduation-cap"></i>}
      </div>

      <div className="timeline-content">
        <p className="heading">{date}</p>
        <h1 className="title is-4">{company}</h1>

        {Array.isArray(summary) ? (
          <ul className="timeline-summary">
            {summary.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="timeline-summary-text">{summary}</p>
        )}
      </div>
    </div>
  );
}

export default TimelineItem;
