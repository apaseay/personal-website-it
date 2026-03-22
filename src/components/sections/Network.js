import React from "react";

function Network() {
  const assignments = [
    {
      title: "A1 — Physical Network Design",
      description: "Site layout, containment design, rack/cabinet locations, cableways, APs, and security camera placement for the Electric Petrol greenfield site.",
      tags: ["Layer 1", "Containment", "Rack Design", "Cable Routing"],
    },
    {
      title: "A2 — Wirelist",
      description: "Initial wirelist documenting all cable connections corresponding to the physical drawings and containment design from A1.",
      tags: ["Wirelist", "Layer 1", "Documentation"],
    },
    {
      title: "A3 — VLANs & Logical Design",
      description: "VLAN architecture, switch configuration sheets, and logical network diagram aligned to the physical design.",
      tags: ["VLANs", "Layer 2", "Switch Config", "Logical Diagram"],
    },
    {
      title: "A4 — Prototype Network (GNS3)",
      description: "Built a prototype LAN for the Electric Petrol site in GNS3 using Cisco IOS switches, configuring VLANs, trunks, and inter-VLAN routing.",
      tags: ["GNS3", "Cisco IOS", "VLANs", "Switching"],
    },
    {
      title: "A5 — WAN Prototype (OSPF)",
      description: "Designed and configured a multi-area OSPF WAN prototype connecting Data Centre 1 & 2, Head Office, and Maynooth using GNS3.",
      tags: ["OSPF", "WAN", "GNS3", "Multi-Area", "Routing"],
    },
    {
      title: "A6 — Perimeter Security (FortiGate VPN)",
      description: "Configured a full-mesh site-to-site IPsec VPN across four FortiGate 6.4 firewalls. Implemented DMZ services, internet connectivity, and perimeter security policies.",
      tags: ["FortiGate", "IPsec VPN", "DMZ", "Firewall", "NAT", "GNS3"],
    },
  ];

  return (
    <section className="section" id="network">
      <div className="container">
        <h1 className="title">Networking</h1>
        <p className="has-text-grey is-size-6 mb-2">
          <strong>Network design and infrastructure assignments for the Electric Petrol greenfield site.</strong>
        </p>
        <p className="has-text-grey is-size-6 mb-6">
          Full project documentation available on{" "}
          <a
            href="https://github.com/apaseay/networking-electric-petrol-site"
            target="_blank"
            rel="noopener noreferrer"
            className="has-text-link"
          >
            <span className="icon is-small">
              <i className="fab fa-github"></i>
            </span>
            <span> GitHub</span>
          </a>
        </p>
        <div className="columns is-multiline">
          {assignments.map((item, index) => (
            <div key={index} className="column is-6">
              <div className="card skill-card" style={{ height: "100%" }}>
                <div className="card-content">
                  <div className="media" style={{ marginBottom: "0.75rem" }}>
                    <div className="media-left">
                      <span className="skill-icon has-text-link is-size-3 fa-solid fa-network-wired"></span>
                    </div>
                    <div className="media-content">
                      <p className="skill-title is-size-6">{item.title}</p>
                    </div>
                  </div>
                  <p className="has-text-grey is-size-7" style={{ marginBottom: "0.75rem" }}>
                    {item.description}
                  </p>
                  <div className="tags">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="tag is-link is-light is-small">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Network;
