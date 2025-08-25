// src/components/Services.jsx
import React from "react";
import { Cpu, Code, Database, BarChart2, Users, Cloud, Zap, Shield, Globe, BookOpen } from "react-feather";

export default function Services({ list }) {
  const services =
    list || [
      { icon: <Cpu size={22} />, title: "AI Development", desc: "Custom AI solutions including chatbots, NLP models, and automation pipelines." },
      { icon: <BarChart2 size={22} />, title: "Data Analysis", desc: "Data cleaning, visualization, and actionable insights using Python & BI tools." },
      { icon: <Code size={22} />, title: "Web Development", desc: "Full-stack responsive applications with modern frameworks." },
      { icon: <BookOpen size={22} />, title: "Training Sessions", desc: "Professional training on AI, Python, Linux, and Cloud technologies." },
      { icon: <Cloud size={22} />, title: "Cloud & DevOps", desc: "Deployments on AWS, Huawei Cloud, and containerized apps using Docker." },
      { icon: <Zap size={22} />, title: "Workflow Automation", desc: "Automating repetitive business processes to save time and reduce costs." },
      { icon: <Shield size={22} />, title: "Cybersecurity Basics", desc: "Secure configurations and best practices for networks and servers." },
      { icon: <Database size={22} />, title: "Database Management", desc: "SQL/NoSQL design, optimization, and maintenance." },
      { icon: <Globe size={22} />, title: "Networking Support", desc: "LAN/WAN setup, switching, subnetting, and troubleshooting." },
      { icon: <Users size={22} />, title: "IT Consultation", desc: "Advisory services for upgrading infrastructure and adopting new tech." },
    ];

  return (
    <section
      id="services"
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #0f1011ff 0%, #0d0e11ff 35%, #131314ff 100%)",
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
          <linearGradient id="srv-grad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <polygon points="0,0 280,0 0,200" fill="url(#srv-grad)" />
        <polygon points="800,600 540,600 800,380" fill="url(#srv-grad)" />
      </svg>

      {/* Section Title */}
      <div style={{ textAlign: "center", marginBottom: "48px", position: "relative", zIndex: 1 }}>
        <h2 style={{ fontSize: "2.6rem", fontWeight: 800, marginBottom: 8 }}>Services</h2>
        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)" }}>What I provide & specialize in</p>
      </div>

      {/* Services Grid */}
      <div
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
        {services.map((s, idx) => (
          <article
            key={idx}
            style={{
              background: "rgba(255,255,255,0.045)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "18px",
              padding: "20px",
              color: "#eaf2ff",
              boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
              backdropFilter: "blur(6px)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div style={{ color: "#22d3ee", marginBottom: "10px" }}>{s.icon}</div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "6px" }}>{s.title}</h3>
            <p style={{ fontSize: "0.95rem", color: "#c7cdea", lineHeight: "1.5" }}>{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
