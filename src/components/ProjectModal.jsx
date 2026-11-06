import React, { useEffect } from "react";
import { X, ExternalLink, ArrowRight, ArrowLeft, CheckCircle2, Cpu } from "lucide-react";
import { PROJECTS } from "../data/projectsData";

export default function ProjectModal({ project, onClose, onSelectProject }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!project) return null;

  // Find next and previous projects
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Case Study">
          <X style={{ width: 20, height: 20 }} />
        </button>

        {/* Modal Header Artwork */}
        <div
          style={{
            height: "280px",
            background: "#020917",
            position: "relative",
            overflow: "hidden",
            borderBottom: "1px solid var(--color-space-border)",
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.9)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, rgba(2,7,18,0.2) 0%, rgba(6,21,45,0.95) 100%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "1.5rem",
              left: "2rem",
              right: "2rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "0.5rem" }}>
                <span className="chip">
                  <span className="chip__dot" />
                  {project.category}
                </span>
                <span className="chip" style={{ color: "var(--color-cyan-core)" }}>
                  {project.year}
                </span>
              </div>
              <h2 style={{ fontSize: "2.25rem", color: "#fff" }}>{project.title}</h2>
            </div>
            <div style={{ textAlign: "right" }}>
              <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", display: "block" }}>
                Client / Partner
              </span>
              <strong style={{ color: "var(--color-cyan-core)", fontSize: "1rem" }}>{project.client}</strong>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ padding: "2.5rem" }}>
          {/* Executive Summary */}
          <div
            style={{
              background: "rgba(7, 23, 51, 0.5)",
              border: "1px solid var(--color-space-border)",
              borderRadius: "12px",
              padding: "1.25rem 1.75rem",
              marginBottom: "2.5rem",
              fontSize: "1.15rem",
              color: "#e2e8f0",
              lineHeight: 1.6,
            }}
          >
            "{project.summary}"
          </div>

          {/* Key Metrics Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.25rem",
              marginBottom: "3rem",
            }}
          >
            {project.metrics?.map((m, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(11, 34, 71, 0.4)",
                  border: "1px solid var(--color-space-border)",
                  borderRadius: "12px",
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "var(--color-emerald-light)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {m.value}
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>{m.label}</div>
              </div>
            ))}
          </div>

          {/* Deep Narrative: Challenge -> Approach -> Outcome */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", marginBottom: "3rem" }}>
            <div>
              <h3
                style={{
                  fontSize: "1.35rem",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.75rem",
                }}
              >
                <span className="gradient-text">01.</span> Planetary Challenge
              </h3>
              <p>{project.challenge}</p>
            </div>

            <div>
              <h3
                style={{
                  fontSize: "1.35rem",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.75rem",
                }}
              >
                <span className="gradient-text">02.</span> Architectural Approach
              </h3>
              <p>{project.approach}</p>
            </div>

            <div>
              <h3
                style={{
                  fontSize: "1.35rem",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.75rem",
                }}
              >
                <span className="gradient-text">03.</span> Tangible Impact & Outcome
              </h3>
              <p>{project.outcome}</p>
            </div>
          </div>

          {/* Tech Stack */}
          {project.technologies && (
            <div style={{ marginBottom: "3rem" }}>
              <h4
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  color: "var(--color-cyan-core)",
                  letterSpacing: "0.1em",
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Cpu style={{ width: 14, height: 14 }} />
                <span>Planetary Tech Stack</span>
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="chip"
                    style={{
                      background: "rgba(11, 34, 71, 0.7)",
                      borderColor: "rgba(56, 189, 248, 0.25)",
                      color: "#e2e8f0",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Navigation to Prev / Next project */}
          <div
            style={{
              borderTop: "1px solid var(--color-space-border)",
              paddingTop: "2rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <button
              onClick={() => onSelectProject(prevProject)}
              className="btn btn--ghost btn--sm"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              <ArrowLeft style={{ width: 14, height: 14 }} />
              <span>Prev: {prevProject.title}</span>
            </button>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="btn btn--ghost btn--sm"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              <span>Next: {nextProject.title}</span>
              <ArrowRight style={{ width: 14, height: 14 }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

