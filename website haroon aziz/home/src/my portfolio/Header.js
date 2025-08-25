// src/components/Hero.jsx
import React from "react";
import profilePic from "../assets/haroonaziz.jpeg";
import cvFile from "../assets/Khawaja Muhammad Haroon.pdf";

export default function Hero() {
  return (
    <section
      id="hero"
      className="section"
      style={{
        padding: "60px 20px",
        background: "linear-gradient(135deg, #0f0f0fff, #08090cff, #101011ff)",
        color: "#eaf2ff",
        textAlign: "center",
      }}
    >
      {/* Section Title */}
      <div className="section-title" style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2.8rem", marginBottom: "10px" }}>
          Hi, I’m <span style={{ color: "#FFD700" }}>Khawaja Muhammad Haroon</span>
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#aeb7d0" }}>
          AI Engineer · Full-Stack Developer · Data Scientist · IT Administrator
        </p>
      </div>

      {/* Hero Card */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          maxWidth: "800px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "18px",
          padding: "30px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
        }}
      >
        <img
          src={profilePic}
          alt="Khawaja Muhammad Haroon"
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #FFD700",
            boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
          }}
        />

        <p style={{ maxWidth: "600px", lineHeight: "1.6", color: "#aeb7d0" }}>
          Highly skilled in AI/ML, Full-Stack Web Development, Data Analytics, Cloud Computing,
          and IT Administration. I build modern apps, deliver technical training, and solve
          complex problems with technology.
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
          <a
            href="#projects"
            style={{
              padding: "12px 25px",
              backgroundColor: "#FFD700",
              color: "#2E0047",
              borderRadius: "8px",
              fontWeight: "600",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            View Projects
          </a>

          <a
            href="#experience"
            style={{
              padding: "12px 25px",
              backgroundColor: "rgba(255,255,255,0.08)",
              color: "#FFD700",
              border: "2px solid #FFD700",
              borderRadius: "8px",
              fontWeight: "600",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#FFD700";
              e.target.style.color = "#2E0047";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "rgba(255,255,255,0.08)";
              e.target.style.color = "#FFD700";
            }}
          >
            Experience
          </a>

          <a
            href={cvFile}
            download
            style={{
              padding: "12px 25px",
              backgroundColor: "transparent",
              border: "2px solid #FFD700",
              color: "#FFD700",
              borderRadius: "8px",
              fontWeight: "600",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#FFD700";
              e.target.style.color = "#2E0047";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#FFD700";
            }}
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
