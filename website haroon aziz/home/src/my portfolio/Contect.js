// src/components/Contact.jsx
import React from "react";
import { GitHub, Linkedin, Phone, Mail } from "react-feather"; // Added Mail icon

export default function Contact() {
  const links = [
    {
      name: "GitHub",
      icon: <GitHub size={20} />,
      url: "https://github.com/haroonaziz01",
      color: "#fff",
      bg: "#333",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/haroon-aziz-6172a4365",
      color: "#0A66C2",
      bg: "rgba(255,255,255,0.05)",
    },
    {
      name: "WhatsApp",
      icon: <Phone size={20} />,
      url: "https://wa.me/923430042510", // ✅ WhatsApp link with country code
      color: "#25D366",
      bg: "rgba(255,255,255,0.05)",
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      url: "mailto:haroonazizjune2006@gmail.com", // ✅ Email link
      color: "#FFD700",
      bg: "rgba(255,255,255,0.05)",
    },
  ];

  return (
    <section
      id="contact"
      className="section"
      style={{
        padding: "60px 20px",
        background: "linear-gradient(135deg, #0c0c0cff, #050505ff, #040405ff)",
        color: "#eaf2ff",
        textAlign: "center",
      }}
    >
      <div className="section-title" style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "2.8rem", fontWeight: "700", marginBottom: "10px" }}>
          Contact Me
        </h2>
        <span style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.85)" }}>
          Connect with me
        </span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 25px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "600",
              background: link.bg,
              color: link.color,
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {link.icon}
            {link.name}
          </a>
        ))}
      </div>
    </section>
  );
}
