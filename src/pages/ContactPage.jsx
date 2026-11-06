import React, { useState } from "react";
import { Mail, Copy, Check, Send, MapPin, Radio, Clock, ShieldCheck, ArrowRight, RotateCcw } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    service: "Geospatial Digital Twin",
    timeline: "Q2 2026 (Immediate)",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("missions@terra.earth");
      showToast("Copied missions@terra.earth to clipboard!");
    } catch {
      showToast("Email: missions@terra.earth");
    }
  };

  const handleCopyCoords = async () => {
    try {
      await navigator.clipboard.writeText("51°28′38″ N, 0°00′00″ W");
      showToast("Copied Prime Meridian Coordinates: 51°28′38″ N, 0°00′00″ W");
    } catch {
      showToast("Coordinates: 51°28′38″ N, 0°00′00″ W");
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please provide your full name (at least 2 characters).";
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid mission email address.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = "Please share a few details about your mission (at least 15 characters).";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // Trigger planetary confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#38bdf8", "#10b981", "#34d399", "#00f2fe"],
      });
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      organization: "",
      email: "",
      service: "Geospatial Digital Twin",
      timeline: "Q2 2026 (Immediate)",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="contact-page">
      {/* 1. PAGE HERO ------------------------------------------------------- */}
      <section style={{ paddingBlock: "5rem 3rem" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <span className="eyebrow">Direct Transmission</span>
            <span style={{ fontFamily: "var(--font-mono)", color: "var(--color-cyan-core)", fontSize: "0.85rem" }}>
              Registry: 04
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
            Connect with Earth Command &amp;{" "}
            <span className="gradient-text">global stations</span>.
          </h1>

          <p style={{ fontSize: "1.2rem", maxWidth: "700px", lineHeight: 1.7 }}>
            Whether you have an established scientific dataset ready for digital twin modeling or an exploratory hypothesis, transmit a mission brief to our team.
          </p>
        </div>
      </section>

      {/* 2. MAIN INTERACTIVE CONTACT SECTION -------------------------------- */}
      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "3.5rem",
              alignItems: "start",
            }}
          >
            {/* Left: Observatories & Quick Actions */}
            <div>
              <div className="glass-card" style={{ marginBottom: "2rem", padding: "2.5rem" }}>
                <span className="eyebrow">Fast Frequency</span>
                <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem", color: "#fff" }}>
                  Direct Transmission Channels
                </h2>
                <p style={{ fontSize: "1rem", marginBottom: "2rem" }}>
                  For general inquiries, press dispatches, or direct scientific collaboration requests:
                </p>

                {/* Copy Email Box */}
                <div
                  style={{
                    background: "rgba(11, 34, 71, 0.6)",
                    border: "1px solid var(--color-space-border)",
                    borderRadius: "12px",
                    padding: "1rem 1.25rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <Mail style={{ width: 18, height: 18, color: "var(--color-cyan-core)" }} />
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.95rem", color: "#fff" }}>
                      missions@terra.earth
                    </span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="btn btn--sm btn--ghost"
                    title="Copy Email"
                    style={{ padding: "0.45rem 0.85rem", fontSize: "0.8rem" }}
                  >
                    <Copy style={{ width: 14, height: 14 }} />
                    <span>Copy</span>
                  </button>
                </div>

                {/* Copy Coordinates Box */}
                <div
                  style={{
                    background: "rgba(11, 34, 71, 0.6)",
                    border: "1px solid var(--color-space-border)",
                    borderRadius: "12px",
                    padding: "1rem 1.25rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "2rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <MapPin style={{ width: 18, height: 18, color: "var(--color-emerald-light)" }} />
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>
                      51°28′38″ N · 0°00′00″ W
                    </span>
                  </div>
                  <button
                    onClick={handleCopyCoords}
                    className="btn btn--sm btn--ghost"
                    title="Copy Coordinates"
                    style={{ padding: "0.45rem 0.85rem", fontSize: "0.8rem" }}
                  >
                    <Copy style={{ width: 14, height: 14 }} />
                    <span>Coords</span>
                  </button>
                </div>

                {/* Telemetry Status Bar */}
                <div
                  style={{
                    borderTop: "1px solid var(--color-space-border)",
                    paddingTop: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    fontSize: "0.85rem",
                    color: "var(--color-text-muted)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Clock style={{ width: 16, height: 16, color: "var(--color-cyan-core)" }} />
                    <span>Mean Response Latency: &lt; 24 Orbital Hours</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <ShieldCheck style={{ width: 16, height: 16, color: "var(--color-emerald-light)" }} />
                    <span>Encrypted &amp; Confidential Scientific Channels</span>
                  </div>
                </div>
              </div>

              {/* Station Map Nodes */}
              <div className="glass-card" style={{ padding: "2rem" }}>
                <h3 style={{ fontSize: "1.2rem", color: "#fff", marginBottom: "1rem" }}>
                  Global Observatories
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.9rem" }}>
                  <div>
                    <strong style={{ color: "#fff", display: "block" }}>London Prime Station (UK)</strong>
                    <span style={{ color: "var(--color-text-muted)" }}>51°28′ N · 0°00′ W — Worldbuilding &amp; Direction</span>
                  </div>
                  <div>
                    <strong style={{ color: "#fff", display: "block" }}>Tokyo Pacific Hub (JP)</strong>
                    <span style={{ color: "var(--color-text-muted)" }}>35°40′ N · 139°45′ E — 3D Shaders &amp; High-Perf WebGL</span>
                  </div>
                  <div>
                    <strong style={{ color: "#fff", display: "block" }}>Zurich Alpine Lab (CH)</strong>
                    <span style={{ color: "var(--color-text-muted)" }}>47°22′ N · 8°32′ E — ESG Interfaces &amp; Data Architecture</span>
                  </div>
                  <div>
                    <strong style={{ color: "#fff", display: "block" }}>Manaus Canopy Unit (BR)</strong>
                    <span style={{ color: "var(--color-text-muted)" }}>3°07′ S · 60°01′ W — Bio-Acoustics &amp; Wildlife Sensors</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Transmission Form */}
            <div className="glass-card" style={{ padding: "2.5rem" }}>
              {isSubmitted ? (
                /* Success State */
                <div style={{ textAlign: "center", paddingBlock: "3rem 2rem" }}>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: "50%",
                      background: "rgba(16, 185, 129, 0.2)",
                      border: "1px solid var(--color-emerald-light)",
                      display: "grid",
                      placeItems: "center",
                      margin: "0 auto 1.5rem auto",
                      color: "var(--color-emerald-light)",
                    }}
                  >
                    <Check style={{ width: 36, height: 36 }} />
                  </div>

                  <span className="eyebrow" style={{ justifyContent: "center" }}>
                    Transmission Received
                  </span>
                  <h2 style={{ fontSize: "2.25rem", color: "#fff", marginBottom: "1rem" }}>
                    Thank you, {formData.name}.
                  </h2>
                  <p style={{ maxWidth: "480px", marginInline: "auto", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                    Your planetary mission brief has entered our telemetry queue. A Terra mission architect will review your parameters and respond within 24 hours.
                  </p>

                  <div
                    style={{
                      background: "rgba(11, 34, 71, 0.5)",
                      border: "1px solid var(--color-space-border)",
                      borderRadius: "12px",
                      padding: "1.25rem",
                      maxWidth: "400px",
                      margin: "0 auto 2.5rem auto",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.85rem",
                      textAlign: "left",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    <div><strong style={{ color: "#fff" }}>Contact:</strong> {formData.email}</div>
                    <div><strong style={{ color: "#fff" }}>Discipline:</strong> {formData.service}</div>
                    <div><strong style={{ color: "#fff" }}>Timeline:</strong> {formData.timeline}</div>
                    <div><strong style={{ color: "var(--color-cyan-core)" }}>Station Status:</strong> In Review</div>
                  </div>

                  <button onClick={handleReset} className="btn btn--ghost">
                    <RotateCcw style={{ width: 16, height: 16 }} />
                    <span>Transmit Another Message</span>
                  </button>
                </div>
              ) : (
                /* Form State */
                <form onSubmit={handleSubmit} noValidate>
                  <span className="eyebrow">Mission Parameters</span>
                  <h2 style={{ fontSize: "1.75rem", marginBottom: "1.5rem", color: "#fff" }}>
                    Transmit a Mission Brief
                  </h2>

                  {/* Name */}
                  <div className="form-group">
                    <label className="form-label">
                      Your Name / Commander <span style={{ color: "var(--color-cyan-core)" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-input ${errors.name ? "has-error" : ""}`}
                      placeholder="e.g. Dr. Maya Lin"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {errors.name && <span className="form-error-msg">{errors.name}</span>}
                  </div>

                  {/* Email & Organization */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                    <div className="form-group">
                      <label className="form-label">
                        Mission Email <span style={{ color: "var(--color-cyan-core)" }}>*</span>
                      </label>
                      <input
                        type="email"
                        className={`form-input ${errors.email ? "has-error" : ""}`}
                        placeholder="maya@climaterecon.org"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      {errors.email && <span className="form-error-msg">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Organization / Lab</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. Global Forest Watch"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Discipline & Timeline */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                    <div className="form-group">
                      <label className="form-label">Primary Discipline</label>
                      <select
                        className="form-select"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="Geospatial Digital Twin">Geospatial Digital Twin</option>
                        <option value="Ecological UX/UI">Ecological UX/UI &amp; Dashboards</option>
                        <option value="Planetary Simulator / Game">Planetary Simulator / Game</option>
                        <option value="Environmental Brand Identity">Environmental Brand System</option>
                        <option value="Other / Exploratory">Other / Exploratory Mission</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Target Timeline</label>
                      <select
                        className="form-select"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      >
                        <option value="Q2 2026 (Immediate)">Q2 2026 (Immediate Launch)</option>
                        <option value="Q3 2026">Q3 2026</option>
                        <option value="Q4 2026 / 2027">Q4 2026 / 2027</option>
                        <option value="Exploratory Consultation">Exploratory Consultation</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label className="form-label">
                      Mission Brief &amp; Context <span style={{ color: "var(--color-cyan-core)" }}>*</span>
                    </label>
                    <textarea
                      rows={5}
                      className={`form-textarea ${errors.message ? "has-error" : ""}`}
                      placeholder="Describe your environmental objective, datasets available (e.g., satellite feeds, sensor meshes), target audience, and ideal outcomes..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                    {errors.message && <span className="form-error-msg">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn btn--primary btn--lg" style={{ width: "100%", marginTop: "1rem" }}>
                    <span>Transmit Mission Brief</span>
                    <Send style={{ width: 16, height: 16 }} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="earth-toast">
          <Check style={{ width: 16, height: 16, color: "var(--color-emerald-light)" }} />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

