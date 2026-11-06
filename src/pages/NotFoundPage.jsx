import React from "react";
import { Link } from "react-router-dom";
import { Globe, ArrowLeft, Radio, Compass } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - var(--header-height) - 150px)",
        display: "grid",
        placeItems: "center",
        padding: "4rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div className="container" style={{ maxWidth: "680px" }}>
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "rgba(7, 23, 51, 0.8)",
            border: "1px solid var(--color-space-border)",
            display: "grid",
            placeItems: "center",
            margin: "0 auto 2rem auto",
            color: "var(--color-cyan-core)",
            boxShadow: "0 0 30px rgba(56, 189, 248, 0.2)",
          }}
        >
          <Radio style={{ width: 40, height: 40 }} />
        </div>

        <span className="eyebrow" style={{ justifyContent: "center" }}>
          Coordinates Out of Earth Orbit
        </span>

        <h1
          style={{
            fontSize: "clamp(4rem, 10vw, 7rem)",
            fontFamily: "var(--font-display)",
            lineHeight: 1,
            marginBottom: "1rem",
            color: "#fff",
          }}
        >
          <span className="gradient-text">404</span>
        </h1>

        <h2 style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "#fff" }}>
          Telemetry Lost in Deep Space
        </h2>

        <p style={{ fontSize: "1.15rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
          You have drifted past Earth's exosphere. The requested orbital path does not map to any active station or planetary database.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <Link to="/" className="btn btn--primary btn--lg">
            <ArrowLeft style={{ width: 18, height: 18 }} />
            <span>Return to Earth Command</span>
          </Link>
          <Link to="/work" className="btn btn--ghost btn--lg">
            <Globe style={{ width: 18, height: 18 }} />
            <span>Explore Missions</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

