import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight, Filter, Globe, Activity } from "lucide-react";
import ProjectModal from "../components/ProjectModal";
import { PROJECTS, CATEGORIES } from "../data/projectsData";

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Check URL hash for deep linking (e.g. #terrapulse-3d)
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      const found = PROJECTS.find((p) => p.slug === hash || p.id === hash);
      if (found) {
        setSelectedProject(found);
      }
    }
  }, [location.hash]);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    navigate(`/work#${project.slug}`, { replace: true });
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    navigate(`/work`, { replace: true });
  };

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="work-page">
      {/* 1. PAGE HERO ------------------------------------------------------- */}
      <section style={{ paddingBlock: "5rem 3rem" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <span className="eyebrow">Planetary Portfolio</span>
            <span style={{ fontFamily: "var(--font-mono)", color: "var(--color-cyan-core)", fontSize: "0.85rem" }}>
              Registry: 02
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
            Visualizing the delicate systems of a{" "}
            <span className="gradient-text">living world</span>.
          </h1>

          <p style={{ fontSize: "1.2rem", maxWidth: "700px", lineHeight: 1.7, marginBottom: "3rem" }}>
            Explore our curated archive of planetary digital twins, marine conservation monitors, interactive climate platforms, and ecological simulators deployed across six continents.
          </p>

          {/* Category Filter Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              flexWrap: "wrap",
              borderBlock: "1px solid var(--color-space-border)",
              paddingBlock: "1.25rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginRight: "1rem", color: "var(--color-text-muted)" }}>
              <Filter style={{ width: 16, height: 16 }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", textTransform: "uppercase" }}>Filter:</span>
            </div>

            {CATEGORIES.map((cat) => {
              const count =
                cat === "All"
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.category === cat).length;
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.5rem 1.15rem",
                    borderRadius: "9999px",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    transition: "all var(--transition-fast)",
                    background: isActive ? "rgba(56, 189, 248, 0.2)" : "rgba(7, 23, 51, 0.6)",
                    border: isActive
                      ? "1px solid var(--color-cyan-core)"
                      : "1px solid var(--color-space-border)",
                    color: isActive ? "#ffffff" : "var(--color-text-secondary)",
                  }}
                >
                  <span>{cat}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: isActive ? "var(--color-cyan-core)" : "var(--color-text-muted)",
                    }}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. PROJECTS GRID --------------------------------------------------- */}
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-card"
                onClick={() => handleOpenProject(project)}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  padding: 0,
                  transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                {/* Artwork Card Header */}
                <div style={{ height: "260px", position: "relative", overflow: "hidden", background: "#020917" }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s ease",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, transparent 40%, rgba(6, 21, 45, 0.95) 100%)",
                    }}
                  />
                  <span
                    className="chip"
                    style={{
                      position: "absolute",
                      top: "1.25rem",
                      left: "1.25rem",
                      background: "rgba(3, 12, 23, 0.85)",
                    }}
                  >
                    <span className="chip__dot" />
                    {project.category}
                  </span>

                  <span
                    className="chip"
                    style={{
                      position: "absolute",
                      top: "1.25rem",
                      right: "1.25rem",
                      background: "rgba(3, 12, 23, 0.85)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {project.year}
                  </span>
                </div>

                {/* Card Content */}
                <div style={{ padding: "2rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--color-cyan-core)" }}>
                      {project.client}
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                      {project.field}
                    </span>
                  </div>

                  <h2 style={{ fontSize: "1.65rem", marginBottom: "0.75rem", color: "#fff" }}>
                    {project.title}
                  </h2>

                  <p style={{ fontSize: "1rem", lineHeight: 1.6, marginBottom: "2rem", flex: 1 }}>
                    {project.summary}
                  </p>

                  {/* Quick Metric Pill */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div
                      style={{
                        background: "rgba(11, 34, 71, 0.4)",
                        borderRadius: "8px",
                        padding: "0.75rem 1rem",
                        marginBottom: "1.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        border: "1px solid rgba(56, 189, 248, 0.12)",
                      }}
                    >
                      <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                        {project.metrics[0].label}
                      </span>
                      <strong style={{ color: "var(--color-emerald-light)", fontFamily: "var(--font-mono)", fontSize: "1.1rem" }}>
                        {project.metrics[0].value}
                      </strong>
                    </div>
                  )}

                  {/* Footer link */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderTop: "1px solid var(--color-space-border)",
                      paddingTop: "1.25rem",
                      color: "var(--color-cyan-core)",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                    }}
                  >
                    <span>Read Full Mission Study</span>
                    <ArrowUpRight style={{ width: 18, height: 18 }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseProject}
          onSelectProject={(p) => handleOpenProject(p)}
        />
      )}
    </div>
  );
}

