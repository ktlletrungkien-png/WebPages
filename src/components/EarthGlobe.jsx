import React, { useRef, useEffect, useState } from "react";
import { Compass, Radio, Satellite, Globe, Navigation, Eye, Play, Pause, Layers } from "lucide-react";

// Simplified continental landmass points [lat, lon, size]
const CONTINENT_POINTS = [
  // North America
  [45, -100, 4], [55, -115, 3.5], [38, -95, 4], [30, -90, 3.5], [60, -135, 3], [65, -150, 2.5],
  [50, -85, 3.5], [42, -75, 3], [32, -105, 3], [25, -102, 3], [19, -99, 2.5], [52, -60, 2.5],
  // South America
  [5, -60, 3], [-3, -62, 4], [-12, -55, 4], [-22, -45, 3.5], [-34, -60, 3], [-45, -70, 2.5],
  [-10, -75, 3], [-2, -78, 2.5], [-15, -48, 3.5],
  // Europe
  [50, 10, 3.5], [48, 2, 3], [55, -3, 2.5], [60, 15, 3], [40, -4, 2.5], [42, 12, 2.5],
  [38, 23, 2.5], [58, 25, 3], [64, 26, 2.5], [52, 20, 3],
  // Africa
  [30, 25, 3], [25, 12, 3.5], [15, 0, 3.5], [10, 20, 4], [0, 25, 4.5], [-10, 22, 4],
  [-20, 25, 3.5], [-30, 25, 3], [8, -12, 3], [5, 40, 3], [12, 38, 3], [-18, 47, 2.5],
  // Asia
  [60, 80, 4], [55, 60, 4], [50, 105, 4], [62, 130, 3.5], [40, 115, 4], [35, 105, 4],
  [28, 85, 3.5], [22, 78, 4], [15, 100, 3.5], [10, 107, 3], [36, 138, 3.5], [38, 127, 2.5],
  [24, 121, 2.5], [45, 40, 3], [32, 53, 3], [25, 45, 3], [1, 103, 2.5], [-3, 115, 3],
  // Australia & Oceania
  [-24, 134, 4], [-32, 140, 3.5], [-20, 140, 3.5], [-22, 120, 3], [-33, 116, 2.5],
  [-37, 145, 2.5], [-42, 147, 2], [-41, 174, 2.5], [-38, 176, 2],
  // Greenland & Arctic
  [72, -40, 3], [76, -45, 2.5], [78, 16, 2.5]
];

// Special Earth Observatories / Stations
const OBSERVATORIES = [
  { id: "london", name: "Prime Station", lat: 51.5, lon: 0, tag: "Greenwich 00°", color: "#38bdf8", status: "Nominal" },
  { id: "tokyo", name: "Pacific Hub", lat: 35.7, lon: 139.7, tag: "Tokyo Node", color: "#34d399", status: "Active" },
  { id: "amazon", name: "Amazon Sensor", lat: -3.5, lon: -62.2, tag: "Canopy Mesh", color: "#10b981", status: "Transmitting" },
  { id: "arctic", name: "Arctic Sentinel", lat: 78.2, lon: 15.6, tag: "Polar Array", color: "#00f2fe", status: "Telemetry 99.8%" },
];

export default function EarthGlobe() {
  const canvasRef = useRef(null);
  const [rotationX, setRotationX] = useState(0.25); // Tilt
  const [rotationY, setRotationY] = useState(0); // Longitude rotation
  const [isDragging, setIsDragging] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [showSatellites, setShowSatellites] = useState(true);
  const [showGrid, setShowGrid] = useState(true);
  const [activeStation, setActiveStation] = useState(OBSERVATORIES[0]);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });

  // Rotate smoothly to a specific observatory station
  const focusStation = (station) => {
    setActiveStation(station);
    // target lon in radians
    const targetRotY = -((station.lon * Math.PI) / 180);
    const targetRotX = Math.max(-0.6, Math.min(0.6, (station.lat * Math.PI) / 180 * 0.4));
    setRotationY(targetRotY);
    setRotationX(targetRotX);
  };

  // Track dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - lastMousePos.x;
    const deltaY = e.clientY - lastMousePos.y;

    setRotationY((prev) => prev + deltaX * 0.007);
    setRotationX((prev) => Math.max(-0.8, Math.min(0.8, prev + deltaY * 0.007)));
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let localRotY = rotationY;
    let localRotX = rotationX;
    let satelliteAngle = 0;

    const render = () => {
      // Auto rotate if not dragging and autoRotate is on
      if (!isDragging && autoRotate) {
        localRotY += 0.0035;
      } else {
        localRotY = rotationY;
        localRotX = rotationX;
      }
      satelliteAngle += 0.018;

      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.38;

      ctx.clearRect(0, 0, width, height);

      // 1. Atmosphere Rim Outer Glow
      const glowGrad = ctx.createRadialGradient(
        centerX, centerY, radius * 0.85,
        centerX, centerY, radius * 1.35
      );
      glowGrad.addColorStop(0, "rgba(56, 189, 248, 0.45)");
      glowGrad.addColorStop(0.3, "rgba(14, 165, 233, 0.2)");
      glowGrad.addColorStop(0.7, "rgba(16, 185, 129, 0.08)");
      glowGrad.addColorStop(1, "transparent");

      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.35, 0, Math.PI * 2);
      ctx.fill();

      // 2. Earth Sphere Core (Deep Ocean Gradient)
      const oceanGrad = ctx.createRadialGradient(
        centerX - radius * 0.35, centerY - radius * 0.35, radius * 0.1,
        centerX, centerY, radius
      );
      oceanGrad.addColorStop(0, "#083366");
      oceanGrad.addColorStop(0.5, "#041b38");
      oceanGrad.addColorStop(0.85, "#020c1d");
      oceanGrad.addColorStop(1, "#010610");

      ctx.fillStyle = oceanGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      // Earth edge border
      ctx.strokeStyle = "rgba(56, 189, 248, 0.5)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Helper for 3D sphere projection
      const project = (latDeg, lonDeg) => {
        const lat = (latDeg * Math.PI) / 180;
        const lon = (lonDeg * Math.PI) / 180 + localRotY;

        // Spherical to 3D Cartesian
        const x3 = radius * Math.cos(lat) * Math.sin(lon);
        const y3 = -radius * Math.sin(lat);
        const z3 = radius * Math.cos(lat) * Math.cos(lon);

        // Rotate around X axis (tilt)
        const cosX = Math.cos(localRotX);
        const sinX = Math.sin(localRotX);

        const yRot = y3 * cosX - z3 * sinX;
        const zRot = y3 * sinX + z3 * cosX;

        return {
          x: centerX + x3,
          y: centerY + yRot,
          z: zRot,
          visible: zRot > -10
        };
      };

      // 3. Draw Parallels (Latitudes) if grid enabled
      if (showGrid) {
        const latitudes = [-60, -30, 0, 30, 60];
        latitudes.forEach((lat) => {
          ctx.beginPath();
          let started = false;
          for (let lon = -180; lon <= 180; lon += 5) {
            const pt = project(lat, lon);
            if (pt.visible) {
              if (!started) {
                ctx.moveTo(pt.x, pt.y);
                started = true;
              } else {
                ctx.lineTo(pt.x, pt.y);
              }
            } else {
              started = false;
            }
          }
          ctx.strokeStyle = lat === 0 ? "rgba(56, 189, 248, 0.45)" : "rgba(56, 189, 248, 0.12)";
          ctx.lineWidth = lat === 0 ? 1.5 : 0.8;
          ctx.setLineDash(lat === 0 ? [] : [3, 4]);
          ctx.stroke();
          ctx.setLineDash([]);
        });

        // 4. Draw Meridians (Longitudes)
        for (let lon = 0; lon < 360; lon += 30) {
          ctx.beginPath();
          let started = false;
          for (let lat = -90; lat <= 90; lat += 5) {
            const pt = project(lat, lon);
            if (pt.visible) {
              if (!started) {
                ctx.moveTo(pt.x, pt.y);
                started = true;
              } else {
                ctx.lineTo(pt.x, pt.y);
              }
            } else {
              started = false;
            }
          }
          ctx.strokeStyle = lon === 0 ? "rgba(16, 185, 129, 0.45)" : "rgba(56, 189, 248, 0.12)";
          ctx.lineWidth = lon === 0 ? 1.4 : 0.8;
          ctx.stroke();
        }
      }

      // 5. Draw Continents Points (Biomes / Landmasses)
      CONTINENT_POINTS.forEach(([lat, lon, size]) => {
        const pt = project(lat, lon);
        if (pt.visible) {
          const depthAlpha = Math.max(0.15, pt.z / radius);
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, size * (0.8 + depthAlpha * 0.4), 0, Math.PI * 2);

          // Emerald landmass with depth shading
          ctx.fillStyle = `rgba(52, 211, 153, ${0.4 + depthAlpha * 0.55})`;
          ctx.fill();

          // Land dot inner glow
          if (depthAlpha > 0.5) {
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, size * 0.4, 0, Math.PI * 2);
            ctx.fillStyle = "#ffffff";
            ctx.fill();
          }
        }
      });

      // 6. Draw Observatories / Active Hotspots
      OBSERVATORIES.forEach((station) => {
        const pt = project(station.lat, station.lon);
        if (pt.visible) {
          const isSelected = activeStation?.id === station.id;

          // Outer pulsing ring
          const pulseR = (isSelected ? 10 : 7) + Math.sin(Date.now() * 0.006) * 3;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, pulseR, 0, Math.PI * 2);
          ctx.strokeStyle = station.color;
          ctx.lineWidth = isSelected ? 1.8 : 1;
          ctx.stroke();

          // Station dot
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, isSelected ? 4.5 : 3, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.fill();

          // Station Label HUD
          ctx.font = isSelected ? "bold 10px 'JetBrains Mono', monospace" : "9px 'JetBrains Mono', monospace";
          ctx.fillStyle = isSelected ? "#ffffff" : station.color;
          ctx.fillText(`● ${station.name}`, pt.x + 12, pt.y + 3);
        }
      });

      // 7. Orbiting Satellite Ring & Satellite
      if (showSatellites) {
        const satRadius = radius * 1.28;
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(-0.35); // Orbital inclination

        // Orbital ellipse track
        ctx.beginPath();
        ctx.ellipse(0, 0, satRadius, satRadius * 0.4, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(56, 189, 248, 0.22)";
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 6]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Satellite position
        const satX = satRadius * Math.cos(satelliteAngle);
        const satY = satRadius * 0.4 * Math.sin(satelliteAngle);

        // Satellite icon / beacon
        ctx.fillStyle = "#38bdf8";
        ctx.beginPath();
        ctx.arc(satX, satY, 4, 0, Math.PI * 2);
        ctx.fill();

        // Solar panels
        ctx.strokeStyle = "#34d399";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(satX - 8, satY);
        ctx.lineTo(satX + 8, satY);
        ctx.stroke();

        // Satellite radio waves
        const satWaveR = 6 + (Math.sin(Date.now() * 0.008) + 1) * 4;
        ctx.beginPath();
        ctx.arc(satX, satY, satWaveR, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(56, 189, 248, 0.4)";
        ctx.lineWidth = 0.8;
        ctx.stroke();

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [rotationX, rotationY, isDragging, autoRotate, showSatellites, showGrid, activeStation]);

  return (
    <div className="earth-globe-wrapper" style={{ position: "relative", userSelect: "none" }}>
      {/* Interactive Canvas */}
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          width: "100%",
          maxWidth: "480px",
          height: "auto",
          aspectRatio: "1/1",
          cursor: isDragging ? "grabbing" : "grab",
          display: "block",
          margin: "0 auto",
        }}
      />

      {/* Floating HUD Badges around the Earth */}
      <div
        className="chip"
        style={{
          position: "absolute",
          top: "8%",
          left: "2%",
          background: "rgba(3, 12, 23, 0.85)",
          border: "1px solid rgba(56, 189, 248, 0.3)",
          backdropFilter: "blur(8px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
        }}
      >
        <span className="chip__dot" />
        <span>Live Biosphere Feed</span>
      </div>

      <div
        className="chip"
        style={{
          position: "absolute",
          top: "16%",
          right: "2%",
          background: "rgba(3, 12, 23, 0.85)",
          border: "1px solid rgba(16, 185, 129, 0.3)",
          backdropFilter: "blur(8px)",
          color: "#34d399",
        }}
      >
        <Radio style={{ width: 12, height: 12 }} />
        <span>Sentinel-6 Satellite Lock</span>
      </div>

      {/* Control Layer Buttons Below the Globe */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.5rem",
          flexWrap: "wrap",
          marginTop: "1rem",
        }}
      >
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className="chip"
          style={{
            cursor: "pointer",
            background: autoRotate ? "rgba(56, 189, 248, 0.2)" : "rgba(7, 23, 51, 0.6)",
            borderColor: autoRotate ? "var(--color-cyan-core)" : "var(--color-space-border)",
            color: autoRotate ? "#fff" : "var(--color-text-muted)",
          }}
          title="Toggle Auto Rotation"
        >
          {autoRotate ? <Pause style={{ width: 12, height: 12 }} /> : <Play style={{ width: 12, height: 12 }} />}
          <span>{autoRotate ? "Pause Orbit" : "Rotate Orbit"}</span>
        </button>

        <button
          onClick={() => setShowSatellites(!showSatellites)}
          className="chip"
          style={{
            cursor: "pointer",
            background: showSatellites ? "rgba(16, 185, 129, 0.2)" : "rgba(7, 23, 51, 0.6)",
            borderColor: showSatellites ? "var(--color-emerald-light)" : "var(--color-space-border)",
            color: showSatellites ? "#fff" : "var(--color-text-muted)",
          }}
          title="Toggle Satellite Trajectory"
        >
          <Satellite style={{ width: 12, height: 12 }} />
          <span>Satellites</span>
        </button>

        <button
          onClick={() => setShowGrid(!showGrid)}
          className="chip"
          style={{
            cursor: "pointer",
            background: showGrid ? "rgba(56, 189, 248, 0.2)" : "rgba(7, 23, 51, 0.6)",
            borderColor: showGrid ? "var(--color-cyan-core)" : "var(--color-space-border)",
            color: showGrid ? "#fff" : "var(--color-text-muted)",
          }}
          title="Toggle Coordinate Grid"
        >
          <Layers style={{ width: 12, height: 12 }} />
          <span>Grid</span>
        </button>
      </div>

      {/* Ground Station Quick Navigation Focus */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
          flexWrap: "wrap",
          marginTop: "0.75rem",
        }}
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
          Focus Node:
        </span>
        {OBSERVATORIES.map((st) => (
          <button
            key={st.id}
            onClick={() => focusStation(st)}
            style={{
              padding: "0.25rem 0.65rem",
              borderRadius: "6px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              background: activeStation?.id === st.id ? "rgba(56, 189, 248, 0.25)" : "transparent",
              border: activeStation?.id === st.id ? `1px solid ${st.color}` : "1px solid rgba(56, 189, 248, 0.15)",
              color: activeStation?.id === st.id ? "#fff" : "var(--color-text-secondary)",
              cursor: "pointer",
              transition: "all var(--transition-fast)",
            }}
          >
            {st.name}
          </button>
        ))}
      </div>
    </div>
  );
}
