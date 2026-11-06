import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe, ArrowUpRight, Radio, Compass, Send, Check } from "lucide-react";

export default function Footer() {
  const [utcTime, setUtcTime] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().slice(17, 25) + " UTC");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail("");
      }, 4000);
    }
  };

  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-space-border)",
        background: "linear-gradient(180deg, #020712 0%, #01040a 100%)",
        position: "relative",
        zIndex: 2,
        paddingTop: "5rem",
        paddingBottom: "3rem",
      }}
    >
      <div className="container">
        {/* Top Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "3.5rem",
            marginBottom: "4rem",
          }}
        >
          {/* Column 1: Studio Brand & Telemetry */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #0284c7 0%, #10b981 100%)",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Globe style={{ width: 18, height: 18, color: "#fff" }} />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  letterSpacing: "0.06em",
                  color: "#fff",
                }}
              >
                TERRA
              </span>
            </Link>

            <p style={{ fontSize: "0.95rem", lineHeight: 1.6, maxWidth: "340px" }}>
              An independent planetary design and technology studio crafting digital twins,
              climate interfaces, and interactive simulations for planet Earth.
            </p>

            <div className="status-beacon">
              <span className="status-beacon__pulse" />
              <span>Telemetry: 100% Operational · {utcTime}</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--color-cyan-core)",
                marginBottom: "1.25rem",
              }}
            >
              Exploration
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <li>
                <Link to="/" style={{ color: "var(--color-text-secondary)" }}>
                  Home Command
                </Link>
              </li>
              <li>
                <Link to="/work" style={{ color: "var(--color-text-secondary)" }}>
                  Planetary Missions (Work)
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ color: "var(--color-text-secondary)" }}>
                  Capabilities & Services
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: "var(--color-text-secondary)" }}>
                  About & Philosophy
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: "var(--color-text-secondary)" }}>
                  Initiate Mission (Contact)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Earth Stations */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--color-cyan-core)",
                marginBottom: "1.25rem",
              }}
            >
              Observatory Stations
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9rem" }}>
              <li style={{ color: "var(--color-text-secondary)" }}>
                <strong style={{ color: "#fff" }}>Prime Station (HQ):</strong> Greenwich, London (51°28′ N · 0°00′ W)
              </li>
              <li style={{ color: "var(--color-text-secondary)" }}>
                <strong style={{ color: "#fff" }}>Pacific Node:</strong> Tokyo, Japan (35°40′ N · 139°45′ E)
              </li>
              <li style={{ color: "var(--color-text-secondary)" }}>
                <strong style={{ color: "#fff" }}>Alpine Data Lab:</strong> Zurich, Switzerland (47°22′ N · 8°32′ E)
              </li>
              <li style={{ color: "var(--color-text-secondary)" }}>
                <strong style={{ color: "#fff" }}>Canopy Field Unit:</strong> Manaus, Brazil (3°07′ S · 60°01′ W)
              </li>
            </ul>
          </div>

          {/* Column 4: Planetary Dispatch Newsletter */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--color-cyan-core)",
                marginBottom: "1.25rem",
              }}
            >
              Planetary Dispatch
            </h4>
            <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>
              Quarterly briefings on climate visualization, satellite telemetry interfaces, and digital earth twins.
            </p>
            {subscribed ? (
              <div
                style={{
                  padding: "0.75rem 1rem",
                  borderRadius: "8px",
                  background: "rgba(16, 185, 129, 0.15)",
                  border: "1px solid var(--color-emerald-light)",
                  color: "var(--color-emerald-light)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.85rem",
                }}
              >
                <Check style={{ width: 16, height: 16 }} />
                <span>Station coordinates recorded. Welcome!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: "flex", gap: "0.5rem" }}>
                <input
                  type="email"
                  required
                  placeholder="scientist@organization.org"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  style={{
                    flex: 1,
                    background: "rgba(7, 23, 51, 0.6)",
                    border: "1px solid var(--color-space-border)",
                    borderRadius: "8px",
                    padding: "0.6rem 0.85rem",
                    color: "#fff",
                    fontSize: "0.85rem",
                    outline: "none",
                  }}
                />
                <button type="submit" className="btn btn--sm btn--primary" style={{ paddingInline: "1rem" }}>
                  <Send style={{ width: 14, height: 14 }} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(56, 189, 248, 0.1)",
            paddingTop: "2rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
            fontSize: "0.85rem",
            color: "var(--color-text-muted)",
          }}
        >
          <div>
            <span>Terra Studio © 2026. All planetary rights reserved.</span>
          </div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}
            >
              GitHub <ArrowUpRight style={{ width: 12, height: 12 }} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}
            >
              X / Twitter <ArrowUpRight style={{ width: 12, height: 12 }} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}
            >
              LinkedIn <ArrowUpRight style={{ width: 12, height: 12 }} />
            </a>
            <a
              href="https://earthdata.nasa.gov"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}
            >
              NASA Earthdata <ArrowUpRight style={{ width: 12, height: 12 }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

