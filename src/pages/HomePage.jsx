import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Layers, Activity, Compass, ShieldCheck, Cpu, ArrowUpRight, CheckCircle2 } from "lucide-react";
import EarthGlobe from "../components/EarthGlobe";
import ProjectModal from "../components/ProjectModal";
import { PROJECTS, SERVICES } from "../data/projectsData";

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProjects = PROJECTS.slice(0, 3);

  const marqueeItems = [
    "Geospatial Digital Twins",
    "Climate Intelligence",
    "Ecological UX/UI",
    "Planetary Worldbuilding",
    "Earth Observation",
    "Sensor Mesh Design",
    "Biosphere Systems",
    "Satellite Telemetry",
  ];

  const workflowSteps = [
    {
      num: "01",
      title: "Orbit & Discovery",
      desc: "We analyze raw satellite feeds, stakeholder challenges, and ecological datasets to define the planetary problem space.",
    },
    {
      num: "02",
      title: "Atmospheric Modeling",
      desc: "Rapid algorithmic prototyping and interactive 3D simulations validate cognitive clarity and scientific accuracy early.",
    },
    {
      num: "03",
      title: "Biosphere Synthesis",
      desc: "Full-stack WebGL shaders, responsive React architectures, and accessibility-certified UI components come alive.",
    },
    {
      num: "04",
      title: "Mission Launch",
      desc: "Global CDN edge deployment, continuous telemetry monitoring, and hands-on researcher training.",
    },
  ];

  return (
    <div className="home-page">
      {/* 1. HERO SECTION ---------------------------------------------------- */}
      <section
        style={{
          minHeight: "calc(100vh - var(--header-height))",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          paddingBlock: "4rem 2rem",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              alignItems: "center",
              gap: "3.5rem",
            }}
          >
            {/* Left Content */}
            <div style={{ maxWidth: "620px" }}>
              <span className="eyebrow">
                Planetary Design &amp; Technology Studio — Greenwich &amp; Global
              </span>
              <h1
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
                  letterSpacing: "-0.03em",
                  marginBottom: "1.5rem",
                  lineHeight: 1.1,
                }}
              >
                Designing living worlds for{" "}
                <span className="gradient-text">Planet Earth</span>.
              </h1>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "2.25rem",
                }}
              >
                Terra merges geospatial science, real-time 3D simulation, and ecological art direction to craft digital experiences that protect, visualize, and celebrate our living biosphere.
              </p>

              {/* Action Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  marginBottom: "2.5rem",
                }}
              >
                <Link to="/work" className="btn btn--primary btn--lg">
                  <span>Explore Planetary Work</span>
                  <ArrowRight style={{ width: 18, height: 18 }} />
                </Link>
                <Link to="/contact" className="btn btn--ghost btn--lg">
                  <span>Deploy a Mission</span>
                  <ArrowRight style={{ width: 18, height: 18 }} />
                </Link>
              </div>

              {/* Status & Coordinates */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  flexWrap: "wrap",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  color: "var(--color-text-muted)",
                }}
              >
                <div className="status-beacon">
                  <span className="status-beacon__pulse" />
                  <span style={{ color: "#fff" }}>Accepting Q2/2026 Missions</span>
                </div>
                <span>·</span>
                <span>Est. 2019</span>
                <span>·</span>
                <span style={{ color: "var(--color-cyan-core)" }}>51°28′ N — 0°00′ W</span>
              </div>
            </div>

            {/* Right Visual: Interactive 3D Earth Globe */}
            <div>
              <EarthGlobe />
            </div>
          </div>
        </div>

        {/* Scroll Cue */}
        <div
          className="container"
          style={{
            marginTop: "3rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "0.85rem",
            color: "var(--color-text-muted)",
            fontFamily: "var(--font-mono)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span>Scroll to explore Earth systems</span>
            <div
              style={{
                width: 40,
                height: 1,
                background: "var(--color-space-border)",
              }}
            />
          </div>
          <span>Terra Collective © 2026</span>
        </div>
      </section>

      {/* 2. MARQUEE BANNER -------------------------------------------------- */}
      <div className="marquee-wrapper" aria-hidden="true">
        <div className="marquee-content">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div key={idx} className="marquee-item">
              <span>{item}</span>
              <span className="marquee-glyph">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. MANIFESTO & IMPACT NUMBERS -------------------------------------- */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "4rem",
              alignItems: "start",
              marginBottom: "5rem",
            }}
          >
            <div>
              <span className="eyebrow">Our Planetary Belief</span>
              <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", lineHeight: 1.2 }}>
                Design is not just decoration. It is the operating system of a{" "}
                <span className="gradient-text">living biosphere</span>.
              </h2>
            </div>
            <div>
              <p style={{ marginBottom: "1.5rem", fontSize: "1.1rem" }}>
                Earth is an interconnected symphony of ocean currents, atmospheric jet streams, and carbon flows. We operate at the convergence of environmental science, real-time WebGL, and human empathy—where a single clear visualization can illuminate the trajectory of an entire ecosystem.
              </p>
              <p style={{ marginBottom: "2rem", fontSize: "1.1rem" }}>
                We start with fundamental ecological truths, prototype at satellite fidelity, and refine until every interaction—from planetary zoom to telemetry tooltip—inspires stewardship.
              </p>
              <Link
                to="/about"
                className="btn btn--ghost"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                <span>Read our full philosophy &amp; origin</span>
                <ArrowRight style={{ width: 16, height: 16 }} />
              </Link>
            </div>
          </div>

          {/* Impact Stats Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              { num: "14.2M+", label: "Planetary data points rendered live", tag: "Real-time" },
              { num: "42", label: "Global environmental missions shipped", tag: "All Continents" },
              { num: "99.8%", label: "Sensor telemetry ingestion accuracy", tag: "High Precision" },
              { num: "12", label: "International climate & design laurels", tag: "Recognition" },
            ].map((stat, idx) => (
              <div key={idx} className="glass-card" style={{ padding: "2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <span className="chip" style={{ fontSize: "0.7rem" }}>{stat.tag}</span>
                  <Activity style={{ width: 16, height: 16, color: "var(--color-cyan-core)" }} />
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.75rem",
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1,
                    marginBottom: "0.75rem",
                  }}
                >
                  <span className="gradient-text">{stat.num}</span>
                </div>
                <div style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PLANETARY MISSIONS ------------------------------------ */}
      <section className="section" style={{ background: "rgba(4, 14, 33, 0.4)" }}>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Selected Missions</span>
              <h2>Pioneering Planetary Experiences</h2>
            </div>
            <div>
              <Link to="/work" className="btn btn--ghost">
                <span>View all 6 missions</span>
                <ArrowRight style={{ width: 16, height: 16 }} />
              </Link>
            </div>
          </div>

          {/* Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {featuredProjects.map((p) => (
              <div
                key={p.id}
                className="glass-card"
                onClick={() => setSelectedProject(p)}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  padding: 0,
                }}
              >
                {/* Visual Banner */}
                <div style={{ height: "220px", position: "relative", overflow: "hidden" }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, transparent 40%, rgba(7, 23, 51, 0.95) 100%)",
                    }}
                  />
                  <span
                    className="chip"
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      background: "rgba(3, 12, 23, 0.8)",
                    }}
                  >
                    <span className="chip__dot" />
                    {p.category}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: "1.75rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--color-cyan-core)" }}>
                      {p.client}
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                      {p.year}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.5rem", marginBottom: "0.75rem", color: "#fff" }}>
                    {p.title}
                  </h3>

                  <p style={{ fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem", flex: 1 }}>
                    {p.summary}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderTop: "1px solid var(--color-space-border)",
                      paddingTop: "1rem",
                      color: "var(--color-cyan-core)",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                    }}
                  >
                    <span>Inspect Case Study</span>
                    <ArrowUpRight style={{ width: 18, height: 18 }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CAPABILITIES / SERVICES OVERVIEW -------------------------------- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Core Disciplines</span>
              <h2>Four Capabilities,<br />One Living Ecosystem.</h2>
            </div>
            <div>
              <p>
                From planetary satellite data streaming to tactile mobile tools for rangers in the canopy, our capabilities form a complete end-to-end mission loop.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {SERVICES.map((srv) => (
              <div key={srv.id} className="glass-card" style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "1.1rem",
                      color: "var(--color-cyan-core)",
                    }}
                  >
                    {srv.number}
                  </span>
                  <Globe style={{ width: 20, height: 20, color: "var(--color-emerald-light)" }} />
                </div>

                <h3 style={{ fontSize: "1.3rem", marginBottom: "0.75rem", color: "#fff" }}>
                  {srv.title}
                </h3>
                <p style={{ fontSize: "0.95rem", marginBottom: "1.5rem", flex: 1 }}>
                  {srv.description}
                </p>

                <Link
                  to="/services"
                  style={{
                    color: "var(--color-cyan-core)",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <span>Explore full capabilities</span>
                  <ArrowRight style={{ width: 14, height: 14 }} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PLANETARY WORKFLOW STEPS ---------------------------------------- */}
      <section className="section" style={{ background: "rgba(4, 14, 33, 0.4)" }}>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Methodology</span>
              <h2>The Planetary Lifecycle</h2>
            </div>
            <div>
              <p>
                How we navigate from ambiguous environmental data to world-class interactive experiences.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="glass-card">
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "rgba(56, 189, 248, 0.35)",
                    marginBottom: "1rem",
                  }}
                >
                  {step.num}
                </div>
                <h3 style={{ fontSize: "1.2rem", color: "#fff", marginBottom: "0.75rem" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA CALL TO ACTION ---------------------------------------------- */}
      <section className="section" style={{ paddingBlock: "8rem" }}>
        <div className="container">
          <div
            className="glass-card"
            style={{
              padding: "4.5rem 2.5rem",
              textAlign: "center",
              background: "radial-gradient(circle at 50% 0%, rgba(14, 165, 233, 0.25) 0%, rgba(4, 14, 33, 0.95) 70%)",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              boxShadow: "0 0 50px rgba(56, 189, 248, 0.15)",
            }}
          >
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              Initiate Collaboration
            </span>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                marginBottom: "1.25rem",
                maxWidth: "750px",
                marginInline: "auto",
              }}
            >
              Ready to pioneer the next digital frontier for our{" "}
              <span className="gradient-text">planet</span>?
            </h2>
            <p
              style={{
                maxWidth: "600px",
                marginInline: "auto",
                marginBottom: "2.5rem",
                fontSize: "1.15rem",
              }}
            >
              Whether you are an Earth observation agency, a climate tech startup, or an environmental nonprofit, let's architect experiences that leave a lasting imprint.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              <Link to="/contact" className="btn btn--primary btn--lg">
                <span>Deploy a Mission</span>
                <ArrowRight style={{ width: 18, height: 18 }} />
              </Link>
              <Link to="/about" className="btn btn--ghost btn--lg">
                <span>Meet Our Team</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Dialog */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(p) => setSelectedProject(p)}
        />
      )}
    </div>
  );
}

