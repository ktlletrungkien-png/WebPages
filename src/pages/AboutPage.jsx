import React from "react";
import { Link } from "react-router-dom";
import { Globe, Award, Compass, ArrowRight, ShieldCheck, Heart, Sparkles, Zap, Radio } from "lucide-react";
import { TEAM_MEMBERS, MILESTONES } from "../data/projectsData";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      num: "01",
      title: "Biosphere-First Design",
      desc: "Every pixel, shader, and data vector we construct respects ecological integrity. We never sacrifice scientific truth for superficial visual gimmickry.",
    },
    {
      icon: Globe,
      num: "02",
      title: "Open Planetary Science",
      desc: "We stand for open data. Wherever possible, our pipelines build upon open geospatial standards, verifiable carbon algorithms, and transparent APIs.",
    },
    {
      icon: Sparkles,
      num: "03",
      title: "Sensory Wonder Over Dread",
      desc: "Climate fatigue is real. We reject doomist aesthetics in favor of interactive wonder—showing people the intricate, living beauty of Earth systems to spark proactive care.",
    },
    {
      icon: Zap,
      num: "04",
      title: "Regenerative Speed",
      desc: "The planet is changing fast; digital tools must keep pace. We take missions from raw satellite ingestion to production-ready deployments in 8 to 16 weeks.",
    },
  ];

  const awards = [
    {
      title: "Earthshot Digital Innovation Finalist",
      year: "2025",
      issuer: "The Earthshot Prize",
      note: "Awarded for the Gaia Marine Sentinel platform",
    },
    {
      title: "Awwwards Site of the Month",
      year: "2025",
      issuer: "Awwwards International",
      note: "Recognizing real-time WebGL Earth rendering benchmarks",
    },
    {
      title: "Webby Award: Best Science UI",
      year: "2024",
      issuer: "International Academy of Digital Arts",
      note: "For the Tectonic Atlas interactive 4D globe",
    },
    {
      title: "FWA of the Day & Developer Award",
      year: "2024",
      issuer: "Favorite Website Awards",
      note: "Honoring Boreal Echoes environmental simulation",
    },
  ];

  return (
    <div className="about-page">
      {/* 1. PAGE HERO ------------------------------------------------------- */}
      <section style={{ paddingBlock: "5rem 4rem", position: "relative" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <span className="eyebrow">Studio Origin &amp; Philosophy</span>
            <span style={{ fontFamily: "var(--font-mono)", color: "var(--color-cyan-core)", fontSize: "0.85rem" }}>
              Station Registry: 01
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              maxWidth: "920px",
              lineHeight: 1.1,
              marginBottom: "1.75rem",
            }}
          >
            Designing for the only home <span className="gradient-text">we have</span>.
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
              Terra was founded on a simple observation: humanity has built miraculous satellites and planetary observation arrays, yet the interfaces through which we experience this knowledge remain locked in obscure scientific repositories. We bridge Earth sciences with world-class interactive digital craftsmanship.
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
                  2019
                </strong>
                <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Founded in Greenwich</span>
              </div>
              <div>
                <strong style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "#fff", display: "block" }}>
                  04
                </strong>
                <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Global Stations</span>
              </div>
              <div>
                <strong style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "var(--color-emerald-light)", display: "block" }}>
                  100%
                </strong>
                <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Mission Driven</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE STORY / GENESIS --------------------------------------------- */}
      <section className="section" style={{ background: "rgba(4, 14, 33, 0.4)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <div>
              <span className="eyebrow">The Terra Genesis</span>
              <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: "1.5rem" }}>
                From Polar Ice Arrays to Global Pavilions
              </h2>
              <p style={{ marginBottom: "1.25rem" }}>
                Our journey began in 2019 in a small observatory studio overlooking the Prime Meridian in Greenwich. A team of climate researchers and digital designers came together to solve an urgent challenge: translating satellite radar scans of shrinking Arctic ice shelves into an interactive model that maritime leaders and policymakers could comprehend instantly.
              </p>
              <p style={{ marginBottom: "1.25rem" }}>
                That prototype proved that when rigorous planetary data is presented with sensory elegance, clarity replaces confusion, and decision paralysis turns into decisive conservation action.
              </p>
              <p>
                Today, Terra has grown into a globally distributed collective with observatories in London, Tokyo, Zurich, and the Brazilian Amazon. We have designed climate twins for the United Nations, real-time ocean protection platforms, and ecological simulators played by hundreds of thousands worldwide.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "2.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <Radio style={{ width: 22, height: 22, color: "var(--color-cyan-core)" }} />
                <h3 style={{ fontSize: "1.25rem", color: "#fff" }}>Terra Station Coordinates</h3>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <li style={{ borderBottom: "1px solid var(--color-space-border)", paddingBottom: "1rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <strong style={{ color: "#fff" }}>Station 01 — Prime Meridian (HQ)</strong>
                    <span style={{ fontFamily: "var(--font-mono)", color: "var(--color-cyan-core)" }}>London, UK</span>
                  </div>
                  <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                    51°28′38″ N · 0°00′00″ W — Mission Operations &amp; Worldbuilding
                  </span>
                </li>
                <li style={{ borderBottom: "1px solid var(--color-space-border)", paddingBottom: "1rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <strong style={{ color: "#fff" }}>Station 02 — Pacific Node</strong>
                    <span style={{ fontFamily: "var(--font-mono)", color: "var(--color-cyan-core)" }}>Tokyo, Japan</span>
                  </div>
                  <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                    35°40′53″ N · 139°45′58″ E — High-Performance WebGL &amp; Ocean Shaders
                  </span>
                </li>
                <li style={{ borderBottom: "1px solid var(--color-space-border)", paddingBottom: "1rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <strong style={{ color: "#fff" }}>Station 03 — Alpine Laboratory</strong>
                    <span style={{ fontFamily: "var(--font-mono)", color: "var(--color-cyan-core)" }}>Zurich, Switzerland</span>
                  </div>
                  <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                    47°22′38″ N · 8°32′43″ E — Climate Data Architecture &amp; ESG UX
                  </span>
                </li>
                <li>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <strong style={{ color: "#fff" }}>Station 04 — Canopy Field Unit</strong>
                    <span style={{ fontFamily: "var(--font-mono)", color: "var(--color-emerald-light)" }}>Manaus, Brazil</span>
                  </div>
                  <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                    3°07′00″ S · 60°01′00″ W — Bio-Acoustics &amp; Edge Field Sensor Testing
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PLANETARY VALUES ------------------------------------------------ */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Guiding Compass</span>
              <h2>Four Pillars of Planetary Craft</h2>
            </div>
            <div>
              <p>The unbreakable principles that anchor every interface, simulator, and data visualization we craft.</p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {values.map((v, idx) => {
              const IconComp = v.icon;
              return (
                <div key={idx} className="glass-card">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--color-cyan-core)",
                        fontSize: "0.9rem",
                      }}
                    >
                      {v.num}
                    </span>
                    <IconComp style={{ width: 22, height: 22, color: "var(--color-emerald-light)" }} />
                  </div>
                  <h3 style={{ fontSize: "1.3rem", color: "#fff", marginBottom: "0.75rem" }}>
                    {v.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CHRONOLOGY / TIMELINE ------------------------------------------- */}
      <section className="section" style={{ background: "rgba(4, 14, 33, 0.4)" }}>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Chronology</span>
              <h2>Milestones Across Orbits</h2>
            </div>
            <div>
              <p>How we evolved from a singular Arctic experiment to an international planetary digital studio.</p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {MILESTONES.map((item, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  alignItems: "center",
                  gap: "2rem",
                  padding: "1.75rem 2.25rem",
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "var(--color-cyan-core)",
                    }}
                  >
                    {item.year}
                  </span>
                </div>
                <div>
                  <h3 style={{ fontSize: "1.3rem", color: "#fff", marginBottom: "0.25rem" }}>
                    {item.title}
                  </h3>
                </div>
                <div style={{ gridColumn: "span 2" }}>
                  <p style={{ fontSize: "0.95rem" }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TEAM / FELLOWS -------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">The Terra Fellows</span>
              <h2>Multidisciplinary Explorers</h2>
            </div>
            <div>
              <p>Scientists, software architects, visual artists, and environmental storytellers uniting for Earth.</p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="glass-card" style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #0284c7 0%, #10b981 100%)",
                    display: "grid",
                    placeItems: "center",
                    marginBottom: "1.25rem",
                    color: "#fff",
                    fontWeight: 700,
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                  }}
                >
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>

                <h3 style={{ fontSize: "1.25rem", color: "#fff", marginBottom: "0.25rem" }}>
                  {member.name}
                </h3>
                <span style={{ fontSize: "0.85rem", color: "var(--color-cyan-core)", fontFamily: "var(--font-mono)", marginBottom: "0.75rem" }}>
                  {member.role}
                </span>

                <p style={{ fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1.25rem", flex: 1 }}>
                  {member.bio}
                </p>

                <div
                  style={{
                    borderTop: "1px solid var(--color-space-border)",
                    paddingTop: "0.85rem",
                    fontSize: "0.8rem",
                    color: "var(--color-text-muted)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  <span>Specialty: {member.specialty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AWARDS & RECOGNITION -------------------------------------------- */}
      <section className="section" style={{ background: "rgba(4, 14, 33, 0.4)" }}>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Laurels &amp; Commendations</span>
              <h2>Global Recognition for Ecological Design</h2>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {awards.map((aw, idx) => (
              <div key={idx} className="glass-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <Award style={{ width: 22, height: 22, color: "var(--color-amber-glow)" }} />
                  <span className="chip">{aw.year}</span>
                </div>
                <h3 style={{ fontSize: "1.15rem", color: "#fff", marginBottom: "0.5rem" }}>
                  {aw.title}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--color-cyan-core)", marginBottom: "0.5rem" }}>
                  Issued by {aw.issuer}
                </p>
                <p style={{ fontSize: "0.9rem" }}>{aw.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA ------------------------------------------------------------- */}
      <section className="section" style={{ paddingBlock: "6rem" }}>
        <div className="container">
          <div
            className="glass-card"
            style={{
              padding: "4rem 2rem",
              textAlign: "center",
              background: "radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.2) 0%, rgba(4, 14, 33, 0.95) 70%)",
            }}
          >
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: "1rem" }}>
              Join us in shaping the digital future of our planet.
            </h2>
            <p style={{ maxWidth: "550px", marginInline: "auto", marginBottom: "2rem" }}>
              Have an Earth observation initiative or environmental product to build? Let's connect.
            </p>
            <Link to="/contact" className="btn btn--primary btn--lg">
              <span>Initiate Mission</span>
              <ArrowRight style={{ width: 18, height: 18 }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

