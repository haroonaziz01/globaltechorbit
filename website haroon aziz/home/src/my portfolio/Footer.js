// src/components/Footer.jsx
import React from "react";
import { GitHub, Linkedin, Phone, Mail, Code } from "react-feather";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Credit Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #141822, #1b2235)",
          color: "#eaf2ff",
          padding: "20px",
          textAlign: "center",
          fontSize: "1rem",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Code size={18} style={{ marginRight: "6px", verticalAlign: "middle", color: "#FFD700" }} />
        Designed & Developed by{" "}
        <span style={{ color: "#FFD700", fontWeight: "600" }}>
          Khawaja Muhammad Haroon
        </span>
      </div>

      {/* Footer Section */}
      <footer
        style={{
          background: "linear-gradient(135deg, #0f1630, #1f2a4d, #2b3a6d)",
          color: "#eaf2ff",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        {/* Social Links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "15px",
          }}
        >
          <a
            href="https://github.com/haroonaziz01"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", transition: "0.3s" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#FFD700")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
          >
            <GitHub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/haroon-aziz-6172a4365"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0A66C2", transition: "0.3s" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#FFD700")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#0A66C2")}
          >
            <Linkedin size={20} />
          </a>

          <a
            href="tel:+923430042510"
            style={{ color: "#25D366", transition: "0.3s" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#FFD700")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#25D366")}
          >
            <Phone size={20} />
          </a>

          <a
            href="mailto:haroonazizjune2006@gmail.com"
            style={{ color: "#FFD700", transition: "0.3s" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#FFD700")}
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Footer Text */}
        <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.75)" }}>
          © {year} Khawaja Muhammad Haroon — All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
