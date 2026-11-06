import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Plus, Check, ArrowRight, Layers, Cpu, Server, Compass, HelpCircle } from "lucide-react";
import { SERVICES, FAQS } from "../data/projectsData";

export default function ServicesPage() {
  const [openService, setOpenService] = useState("digital-twins");
  const [openFaq, setOpenFaq] = useState(0);

  const engagementModels = [
    {
      title: "Sprint Mission",
      duration: "3 – 5 Weeks",
      focus: "Rapid Prototyping & Validation",
      description: "Ideal for climate startups or labs needing a high-impact interactive 3D proof-of-concept for investors, grant applications, or scientific summits.",
      features: [
        "Interactive WebGL prototype",
        "Sample satellite dataset integration",
        "Core UI architecture & user journey",
        "Interactive executive demo",
      ],
      badge: "Fast Track",
    },
    {
      title: "Flagship Digital Twin",
      duration: "10 – 16 Weeks",
      focus: "Production-Grade Deployment",
      description: "Our comprehensive engagement for research alliances, NGOs, and enterprises seeking a scalable, multi-layer environmental intelligence platform.",
      features: [
        "Full-fidelity 3D Earth / regional simulation",
        "Real-time Copernicus/NASA API pipelines",
        "Complete React design system with 80+ components",
        "Telemetry analytics, export modules & WCAG AAA compliance",
        "Complete documentation & engineer onboarding",
      ],
      badge: "Most Popular",
      isPopular: true,
    },
    {
      title: "Planetary Studio Retainer",
      duration: "6 – 12 Months",
      focus: "Continuous Innovation & Maintenance",
      description: "Dedicated cross-disciplinary pod acting as your specialized ecological digital design and WebGL engineering arm throughout your scaling horizon.",
      features: [
        "Dedicated creative director & 3D engineers",
        "Bi-weekly feature releases & shader optimizations",
        "Emerging satellite constellation integrations",
        "Ongoing security, performance & uptime SLAs",
      ],
      badge: "Strategic Alliance",
    },
  ];

  const techStack = [
    {
      category: "Geospatial & Planetary Engines",
      items: ["WebGL 2.0", "Three.js", "GLSL Custom Shaders", "CesiumJS", "Mapbox GL", "GeoJSON & NetCDF Streaming"],
    },
    {
      category: "Application & Interface",
      items: ["React 19", "TypeScript", "D3.js Data Architecture", "Tailwind CSS", "Framer Motion", "Web Audio API"],
    },
    {
      category: "Telemetry & Satellite Ingestion",
      items: ["NASA Earthdata API", "Copernicus Sentinel Hub", "NOAA Buoy WebSockets", "WASM Kinematics", "GDAL Pipelines"],
    },
  ];

  return (
    <div className="services-page">
      {/* 1. PAGE HERO ------------------------------------------------------- */}
      <section style={{ paddingBlock: "5rem 4rem" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <span className="eyebrow">Studio Capabilities</span>
            <span style={{ fontFamily: "var(--font-mono)", color: "var(--color-cyan-core)", fontSize: "0.85rem" }}>
              Registry: 03
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              maxWidth: "960px",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            From raw planetary data to{" "}
            <span className="gradient-text">living experiences</span>.
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
              alignItems: "end",
            }}
          >
            <p style={{ fontSize: "1.2rem", lineHeight: 1.7 }}>
              We don't deliver static mockups and disappear. Terra journeys alongside your organization through every layer—from initial climate data architecture to the final launch telemetry.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1.5rem",
                borderTop: "1px solid var(--color-space-border)",
                paddingTop: "1.5rem",
              }}
            >
              <div>
                <strong style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "#fff", display: "block" }}>
                  04
                </strong>
                <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Core Disciplines</span>
              </div>
              <div>
                <strong style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "#fff", display: "block" }}>
                  03
                </strong>
                <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Engagement Tiers</span>
              </div>
              <div>
                <strong style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "var(--color-emerald-light)", display: "block" }}>
                  100%
                </strong>
                <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Source Code Handover</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES ACCORDION LIST ----------------------------------------- */}
      <section className="section" style={{ background: "rgba(4, 14, 33, 0.4)" }}>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Detailed Capabilities</span>
              <h2>Four Interconnected Disciplines</h2>
            </div>
            <div>
              <p>Select any discipline to inspect technical capabilities, methodologies, and deliverables.</p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {SERVICES.map((srv) => {
              const isOpen = openService === srv.id;

              return (
                <div
                  key={srv.id}
                  className="earth-accordion"
                  style={{
                    background: isOpen ? "rgba(7, 23, 51, 0.45)" : "transparent",
                  }}
                >
                  <div
                    className="earth-accordion__summary"
                    onClick={() => setOpenService(isOpen ? null : srv.id)}
                  >
                    <span className="earth-accordion__num">{srv.number}</span>
                    <span className="earth-accordion__title">{srv.title}</span>
                    <span className="earth-accordion__hint">{srv.subtitle}</span>
                    <div
                      className="earth-accordion__icon"
                      style={{
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        background: isOpen ? "rgba(56, 189, 248, 0.15)" : "transparent",
                      }}
                    >
                      <Plus style={{ width: 16, height: 16 }} />
                    </div>
                  </div>

                  {isOpen && (
                    <div className="earth-accordion__body">
                      <p style={{ marginBottom: "1.75rem", fontSize: "1.1rem" }}>{srv.description}</p>

                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                          gap: "2rem",
                          marginBottom: "2rem",
                        }}
                      >
                        <div>
                          <h4
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.85rem",
                              color: "var(--color-cyan-core)",
                              textTransform: "uppercase",
                              letterSpacing: "0.1em",
                              marginBottom: "1rem",
                            }}
                          >
                            Technical Capabilities:
                          </h4>
                          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                            {srv.capabilities.map((cap, idx) => (
                              <li key={idx} style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "#e2e8f0" }}>
                                <Check style={{ width: 14, height: 14, color: "var(--color-emerald-light)", flexShrink: 0 }} />
                                <span>{cap}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.85rem",
                              color: "var(--color-cyan-core)",
                              textTransform: "uppercase",
                              letterSpacing: "0.1em",
                              marginBottom: "1rem",
                            }}
                          >
                            Typical Deliverables:
                          </h4>
                          <div
                            style={{
                              background: "rgba(11, 34, 71, 0.4)",
                              border: "1px solid var(--color-space-border)",
                              borderRadius: "10px",
                              padding: "1.25rem",
                              fontSize: "0.95rem",
                              lineHeight: 1.6,
                              color: "var(--color-text-secondary)",
                            }}
                          >
                            {srv.deliverables}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. TECH STACK MATRIX ----------------------------------------------- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Engineering Arsenal</span>
              <h2>Planetary Technology Stack</h2>
            </div>
            <div>
              <p>Cutting-edge graphics and real-time data ingestion built for maximum performance and sustainability.</p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {techStack.map((col, idx) => (
              <div key={idx} className="glass-card">
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <Cpu style={{ width: 20, height: 20, color: "var(--color-cyan-core)" }} />
                  <h3 style={{ fontSize: "1.2rem", color: "#fff" }}>{col.category}</h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                  {col.items.map((item, i) => (
                    <span
                      key={i}
                      className="chip"
                      style={{
                        background: "rgba(11, 34, 71, 0.7)",
                        borderColor: "rgba(56, 189, 248, 0.2)",
                        color: "#e2e8f0",
                        fontSize: "0.85rem",
                        padding: "0.45rem 0.9rem",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ENGAGEMENT MODELS / TIERS --------------------------------------- */}
      <section className="section" style={{ background: "rgba(4, 14, 33, 0.4)" }}>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Partnership Tiers</span>
              <h2>How We Collaborate</h2>
            </div>
            <div>
              <p>Flexible frameworks tailored to match your mission timeline and organizational scale.</p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {engagementModels.map((model, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderColor: model.isPopular ? "var(--color-cyan-core)" : "var(--color-space-border)",
                  boxShadow: model.isPopular ? "0 0 35px rgba(56, 189, 248, 0.2)" : "none",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <span
                    className="chip"
                    style={{
                      background: model.isPopular ? "rgba(56, 189, 248, 0.25)" : "rgba(7, 23, 51, 0.7)",
                      borderColor: model.isPopular ? "var(--color-cyan-core)" : "var(--color-space-border)",
                      color: model.isPopular ? "#fff" : "var(--color-text-secondary)",
                    }}
                  >
                    {model.badge}
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--color-emerald-light)" }}>
                    {model.duration}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.6rem", color: "#fff", marginBottom: "0.25rem" }}>
                  {model.title}
                </h3>
                <span style={{ fontSize: "0.85rem", color: "var(--color-cyan-core)", fontFamily: "var(--font-mono)", marginBottom: "1rem" }}>
                  {model.focus}
                </span>

                <p style={{ fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "2rem" }}>
                  {model.description}
                </p>

                <div style={{ borderTop: "1px solid var(--color-space-border)", paddingTop: "1.5rem", marginBottom: "2rem", flex: 1 }}>
                  <h4
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--color-text-muted)",
                      marginBottom: "1rem",
                    }}
                  >
                    Key Inclusions:
                  </h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {model.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.9rem", color: "#e2e8f0" }}>
                        <Check style={{ width: 14, height: 14, color: "var(--color-emerald-light)", marginTop: 3, flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className={`btn ${model.isPopular ? "btn--primary" : "btn--ghost"}`}
                  style={{ width: "100%" }}
                >
                  <span>Select Model</span>
                  <ArrowRight style={{ width: 16, height: 16 }} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION ----------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Frequently Asked</span>
              <h2>Planetary Mission FAQs</h2>
            </div>
            <div>
              <p>Everything you need to know about working with Terra Studio.</p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: "1.75rem 2rem",
                    cursor: "pointer",
                    transition: "all var(--transition-fast)",
                  }}
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                    <h3 style={{ fontSize: "1.2rem", color: "#fff", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <HelpCircle style={{ width: 18, height: 18, color: "var(--color-cyan-core)", flexShrink: 0 }} />
                      <span>{faq.question}</span>
                    </h3>
                    <div
                      style={{
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 0.25s ease",
                        color: "var(--color-cyan-core)",
                      }}
                    >
                      <Plus style={{ width: 18, height: 18 }} />
                    </div>
                  </div>

                  {isOpen && (
                    <p style={{ marginTop: "1.25rem", fontSize: "1.05rem", lineHeight: 1.7, color: "var(--color-text-secondary)" }}>
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CTA ------------------------------------------------------------- */}
      <section className="section" style={{ paddingBlock: "6rem" }}>
        <div className="container">
          <div
            className="glass-card"
            style={{
              padding: "4rem 2rem",
              textAlign: "center",
              background: "radial-gradient(circle at 50% 0%, rgba(2, 132, 199, 0.25) 0%, rgba(4, 14, 33, 0.95) 70%)",
            }}
          >
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: "1rem" }}>
              Have a unique planetary challenge?
            </h2>
            <p style={{ maxWidth: "600px", marginInline: "auto", marginBottom: "2rem" }}>
              We regularly create tailored engagements for multi-lateral environmental consortiums and specialized research institutes.
            </p>
            <Link to="/contact" className="btn btn--primary btn--lg">
              <span>Initiate Consultation</span>
              <ArrowRight style={{ width: 18, height: 18 }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

