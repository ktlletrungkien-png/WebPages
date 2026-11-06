import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Globe, ArrowRight, Menu, X, Satellite, Mail } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/work", label: "Work" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "var(--header-height)",
          zIndex: 100,
          transition: "all var(--transition-normal)",
          background: isScrolled ? "rgba(2, 7, 18, 0.88)" : "transparent",
          backdropFilter: isScrolled ? "blur(14px)" : "none",
          borderBottom: isScrolled ? "1px solid var(--color-space-border)" : "1px solid transparent",
        }}
      >
        <div
          className="container"
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Brand Logo */}
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #0284c7 0%, #10b981 100%)",
                display: "grid",
                placeItems: "center",
                boxShadow: "0 0 16px rgba(56, 189, 248, 0.4)",
                position: "relative",
              }}
            >
              <Globe style={{ width: 22, height: 22, color: "#ffffff" }} />
              <span
                style={{
                  position: "absolute",
                  top: 2,
                  right: 2,
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#38bdf8",
                  boxShadow: "0 0 6px #38bdf8",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  letterSpacing: "0.06em",
                  color: "#ffffff",
                  textTransform: "uppercase",
                }}
              >
                Terra
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  color: "var(--color-cyan-core)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginTop: "-3px",
                }}
              >
                Planetary Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: "none",
              gap: "2.5rem",
              alignItems: "center",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                style={({ isActive }) => ({
                  fontFamily: "var(--font-display)",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: isActive ? "var(--color-cyan-core)" : "var(--color-text-secondary)",
                  position: "relative",
                  paddingBlock: "0.5rem",
                  transition: "color var(--transition-fast)",
                })}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "16px",
                          height: "2px",
                          borderRadius: "1px",
                          background: "var(--color-cyan-core)",
                          boxShadow: "0 0 8px var(--color-cyan-core)",
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Header Action Button */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link to="/contact" className="btn btn--sm btn--primary header-cta-btn">
              <span>Initiate Mission</span>
              <ArrowRight style={{ width: 14, height: 14 }} />
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
              className="mobile-toggle-btn"
              style={{
                width: 40,
                height: 40,
                borderRadius: "10px",
                background: "rgba(7, 23, 51, 0.7)",
                border: "1px solid var(--color-space-border)",
                display: "grid",
                placeItems: "center",
                color: "var(--color-text-primary)",
              }}
            >
              {mobileMenuOpen ? <X style={{ width: 20, height: 20 }} /> : <Menu style={{ width: 20, height: 20 }} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            top: "var(--header-height)",
            background: "rgba(2, 7, 18, 0.96)",
            backdropFilter: "blur(20px)",
            zIndex: 99,
            padding: "2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <span className="eyebrow">Planetary Navigation</span>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                style={({ isActive }) => ({
                  fontFamily: "var(--font-display)",
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  color: isActive ? "var(--color-cyan-core)" : "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBlock: "0.5rem",
                  borderBottom: "1px solid rgba(56, 189, 248, 0.1)",
                })}
              >
                <span>{link.label}</span>
                <ArrowRight style={{ width: 20, height: 20, opacity: 0.5 }} />
              </NavLink>
            ))}
          </div>

          <div
            style={{
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--color-space-border)",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div className="status-beacon">
              <span className="status-beacon__pulse" />
              <span>Earth Station Status: Operational</span>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
              Prime Station HQ: 51°28′ N · 0°00′ W (Greenwich, UK)
            </p>
            <Link to="/contact" className="btn btn--primary" style={{ width: "100%" }}>
              <span>Initiate Mission</span>
              <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
          </div>
        </div>
      )}

      {/* Responsive Inline CSS for Desktop Nav display */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .header-cta-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}

