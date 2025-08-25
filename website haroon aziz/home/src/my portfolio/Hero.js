// src/components/Hero.jsx
import React from "react";

export default function Hero({
  name = "Khawaja Muhammad Haroon",
  title = "AI Engineer · Full-Stack Developer · IT Administrator",
  cvLink = "/Khawaja_Muhammad_Haroon.pdf",
  highlights = [
    "AI & Python Trainer",
    "1+ years experience",
    "Hands-on workshops & projects",
  ],
}) {
  return (
    <section
      id="hero"
      className="section"
      style={{
        padding: "60px 20px",
        background: "linear-gradient(135deg, #0f1630, #1f2a4d, #2b3a6d)",
        color: "#eaf2ff",
      }}
    >
      {/* Section Title (optional, can remove if not needed) */}
      <div className="section-title" style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 style={{ fontSize: "2.8rem", fontWeight: "700", marginBottom: "10px" }}>
          Welcome
        </h2>
        <span style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.85)" }}>
          Know more about me
        </span>
      </div>

      <div
        className="hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Left Card */}
        <div
          className="hero-card"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "18px",
            padding: "28px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <span
            className="hero-badge"
            style={{
              display: "inline-block",
              padding: "6px 12px",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "20px",
              fontSize: "14px",
              marginBottom: "10px",
            }}
          >
            👋 Hello
          </span>

          <h1 style={{ margin: "10px 0", fontSize: "2.5rem" }}>{name}</h1>
          <p style={{ margin: "0 0 18px 0", fontSize: "1.1rem", color: "#aeb7d0" }}>{title}</p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href={cvLink}
              download
              style={{
                padding: "10px 16px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "500",
                background: "#2563eb",
                color: "#fff",
                transition: "all 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            >
              Download CV
            </a>
            <a
              href="#contact"
              style={{
                padding: "10px 16px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "500",
                background: "rgba(255,255,255,0.08)",
                color: "#eaf2ff",
                transition: "all 0.3s",
              }}
              onMouseOver={(e) => {
                e.target.style.background = "#2563eb";
                e.target.style.color = "#fff";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "rgba(255,255,255,0.08)";
                e.target.style.color = "#eaf2ff";
              }}
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Card */}
        <div
          className="hero-card"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "18px",
            padding: "28px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
          }}
        >
          <h3 style={{ marginTop: 0, marginBottom: "12px" }}>Highlights</h3>
          <div style={{ display: "grid", gap: "8px" }}>
            {highlights.map((h) => (
              <div key={h} style={{ color: "#aeb7d0", fontSize: "0.95rem" }}>
                • {h}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>
        {`
          @media (max-width: 900px) {
            h1 {
              font-size: 2rem !important;
            }
            p {
              font-size: 1rem !important;
            }
          }
          @media (max-width: 480px) {
            h1 {
              font-size: 1.7rem !important;
            }
            p {
              font-size: 0.95rem !important;
            }
          }
        `}
      </style>
    </section>
  );
}
