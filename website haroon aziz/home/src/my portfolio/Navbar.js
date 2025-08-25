// Sidebar.jsx
import React, { useState } from "react";
import profilePic from "../assets/haroonaziz.jpeg"; 
import { Home, User, Code, Award, Briefcase, Book, Mail, MoreHorizontal, X } from "react-feather";

export default function Sidebar() {
  const links = [
    { label: "Home", href: "#hero", icon: <Home size={20} /> },
    { label: "About", href: "#about", icon: <User size={20} /> },
    { label: "Skills", href: "#skills", icon: <Code size={20} /> },
    { label: "Projects", href: "#projects", icon: <Code size={20} /> },
    { label: "Certifications", href: "#certifications", icon: <Award size={20} /> },
    { label: "Experience", href: "#experience", icon: <Briefcase size={20} /> },
    { label: "Education", href: "#education", icon: <Book size={20} /> },
    { label: "Contact", href: "#contact", icon: <Mail size={20} /> },
  ];

  const [activeLink, setActiveLink] = useState("#hero");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger Button */}
      <div
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          zIndex: 300,
          background: "#FFD700",
          padding: "8px",
          borderRadius: "50%",
          cursor: "pointer",
          display: "none",
        }}
        className="mobile-toggle"
      >
        {sidebarOpen ? <X size={24} /> : <MoreHorizontal size={24} />}
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            zIndex: 200,
          }}
        />
      )}

      {/* Sidebar */}
      <aside
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "240px",
          background: "linear-gradient(180deg, #0d0d0d, #1a1a1a, #2b2b2b)",
          borderRight: "1px solid rgba(255,255,255,.08)",
          padding: "20px 10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflowY: "auto",
          zIndex: 250,
          transition: "all 0.3s ease",
        }}
        className="sidebar"
      >
        {/* Profile Image */}
        <img
          src={profilePic}
          alt="Profile"
          style={{
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "16px",
            border: "3px solid #FFD700",
            boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.1)";
            e.target.style.boxShadow = "0 12px 30px rgba(0,0,0,0.7)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 8px 25px rgba(0,0,0,0.5)";
          }}
        />

        {/* Navigation Links */}
        <nav style={{ flex: 1, width: "100%", marginTop: "30px", display: "flex", flexDirection: "column" }}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => { setActiveLink(link.href); setSidebarOpen(false); }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 16px",
                margin: "6px 0",
                color: activeLink === link.href ? "#FFD700" : "#eaf2ff",
                textDecoration: "none",
                borderRadius: "8px",
                fontWeight: "500",
                textAlign: "left",
                background: activeLink === link.href ? "rgba(255, 215, 0, 0.1)" : "transparent",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.background = "rgba(255,255,255,0.1)";
                e.target.style.color = "#FFD700";
                e.target.style.transform = "translateX(5px)";
              }}
              onMouseOut={(e) => {
                e.target.style.background = activeLink === link.href ? "rgba(255, 215, 0, 0.1)" : "transparent";
                e.target.style.color = activeLink === link.href ? "#FFD700" : "#eaf2ff";
                e.target.style.transform = "translateX(0)";
              }}
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div
          style={{
            marginTop: "15px",
            padding: "8px 14px",
            width: "80%",
            textAlign: "center",
            background: "linear-gradient(135deg, #FFD700, #FFA500)",
            borderRadius: "10px",
            color: "#1a1a1a",
            fontWeight: "600",
            fontSize: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 6px 18px rgba(0,0,0,0.6)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.4)";
          }}
        >
          © 2025 Khawaja Muhammad Haroon
        </div>
      </aside>

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 500px) {
            .mobile-toggle {
              display: block !important;
            }
            .sidebar {
              left: ${sidebarOpen ? "0" : "-250px"};
              transition: all 0.3s ease;
              width: 220px;
            }
          }
        `}
      </style>
    </>
  );
}
