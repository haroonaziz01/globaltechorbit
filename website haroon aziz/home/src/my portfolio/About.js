// src/components/About.jsx
import profilePic from "../assets/haroonaziz.jpeg";

export default function About() {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #010307 0%, #0b0c10 35%, #080808 100%)",
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
          <linearGradient id="about-grad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <polygon points="0,0 280,0 0,200" fill="url(#about-grad)" />
        <polygon points="800,600 540,600 800,380" fill="url(#about-grad)" />
      </svg>

      {/* Section Title */}
      <div style={{ textAlign: "center", marginBottom: "30px", position: "relative", zIndex: 1 }}>
        <h2 style={{ fontSize: "2.6rem", fontWeight: 800, marginBottom: 8 }}>About Me</h2>
        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)" }}>
          Who I am & what I do
        </p>
      </div>

      {/* Profile Picture at Top */}
      <div style={{ textAlign: "center", marginBottom: "30px", position: "relative", zIndex: 1 }}>
        <img
          src={profilePic}
          alt="Khawaja Muhammad Haroon"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #FFD700",
            boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>

      {/* Paragraph Content */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.045)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "18px",
          padding: "28px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
          backdropFilter: "blur(6px)",
          position: "relative",
          zIndex: 1,
          textAlign: "justify",
          lineHeight: "1.7",
        }}
      >
        <p>
          I’m <strong>Khawaja Muhammad Haroon</strong>, a certified{" "}
          <b>AI Engineer, Full-Stack Developer, Data Scientist, and IT Administrator</b> passionate about building intelligent systems, modern web applications, and delivering hands-on technical training.
          My expertise spans <b>AI/ML model development, cloud computing, data analytics,</b> and <b>system administration</b>.
        </p>

        <p>
          I design scalable solutions that bridge the gap between innovation and practicality — whether it's automating workflows with Python, deploying AI-powered tools, or building responsive web apps that deliver real impact.
          Alongside development work, I’ve delivered training sessions on <b>Artificial Intelligence, Python, Linux, and Cloud</b>, helping individuals and organizations adopt emerging technologies.
        </p>

        <p>
          <b>Core Specialties:</b>
        </p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Python Development & Automation</li>
          <li>Machine Learning, NLP & AI-powered Solutions</li>
          <li>Full-Stack Web Development (React, Django, Flask, FastAPI)</li>
          <li>Data Visualization (Power BI, Tableau, Python Libraries)</li>
          <li>Cloud Infrastructure & Linux System Administration</li>
        </ul>
      </div>

      {/* Responsive */}
      <style>
        {`
          @media (max-width: 520px) {
            h2 {
              font-size: 2rem !important;
            }
            img {
              width: 160px !important;
              height: 160px !important;
            }
            div[style*="padding: 28px"] {
              padding: 20px !important;
            }
          }
        `}
      </style>
    </section>
  );
}
