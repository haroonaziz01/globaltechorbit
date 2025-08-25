// src/components/Achievements.jsx
import React from "react";
import { Award, Zap, Cpu, BarChart2, Server, Globe, BookOpen } from "react-feather";

export default function Achievements({ items }) {
  const ach =
    items || [
      { icon: <Award size={22} />, text: "Delivered multiple AI & Python cohort trainings" },
      { icon: <Cpu size={22} />, text: "Built production-ready AI & ML models" },
      { icon: <Zap size={22} />, text: "Automated complex workflows using Python" },
      { icon: <BarChart2 size={22} />, text: "Designed interactive data visualization dashboards" },
      { icon: <Server size={22} />, text: "Managed cloud infrastructure and Linux servers" },
      { icon: <Globe size={22} />, text: "Developed and deployed responsive full-stack web apps" },
      { icon: <BookOpen size={22} />, text: "Authored AI & IT training material for professionals" },
    ];

  return (
    <section
      id="achievements"
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #04050a 0%, #02040a 35%, #090a0c 100%)",
        padding: "72px 20px",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Decorative Background */}
      <svg
        aria-hidden="true"
        width="100%"
        height="100%"
        viewBox="0 0 800 600"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.12,
          filter: "blur(20px)",
          pointerEvents: "none",
        }}
      >
        <defs>
          <linearGradient id="ach-grad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <polygon points="0,0 280,0 0,200" fill="url(#ach-grad)" />
        <polygon points="800,600 540,600 800,380" fill="url(#ach-grad)" />
      </svg>

      {/* Section Title */}
      <div style={{ textAlign: "center", marginBottom: "48px", position: "relative", zIndex: 1 }}>
        <h2 style={{ fontSize: "2.6rem", fontWeight: 800, marginBottom: 8 }}>Achievements</h2>
        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)" }}>
          Things I’ve accomplished & automated
        </p>
      </div>

      {/* Grid */}
      <div
        className="ach-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "24px",
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {ach.map((a, idx) => (
          <article
            key={idx}
            style={{
              background: "rgba(255,255,255,0.045)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "18px",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
              color: "#eaf2ff",
              boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
              backdropFilter: "blur(6px)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div style={{ color: "#22d3ee" }}>{a.icon}</div>
            <span style={{ lineHeight: "1.5" }}>{a.text}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
