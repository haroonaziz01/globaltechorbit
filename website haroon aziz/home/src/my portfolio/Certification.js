// src/components/Certifications.jsx
import React from "react";

export default function Certifications({ items }) {
  // Default 20 certifications with dummy PDF links
  const defaultCerts = Array.from({ length: 20 }, (_, i) => ({
    name: `Certification ${i + 1}`,
    pdf: `/certificates/cert-${i + 1}.pdf`, // Path to PDF files in public folder
  }));

  const certs = items || defaultCerts;

  return (
    <section
      id="certifications"
      className="section"
      style={{
        background: "linear-gradient(135deg, #0a0a0aff, #07080cff, #101011ff)",
        padding: "60px 20px",
        color: "#fff",
      }}
    >
      {/* Section Title */}
      <div className="section-title" style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 style={{ fontSize: "2.8rem", fontWeight: "700", marginBottom: "10px" }}>
          Certifications
        </h2>
        <span style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.85)" }}>
          Achievements & professional credentials
        </span>
      </div>

      {/* Grid Container */}
      <div className="certs-grid">
        {certs.map((c, index) => (
          <article key={index} className="cert-card">
            <h3>{c.name}</h3>
            {c.pdf && (
              <a
                href={c.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-btn"
              >
                View PDF
              </a>
            )}
          </article>
        ))}
      </div>

      {/* CSS */}
      <style>
        {`
          .certs-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 24px;
            max-width: 1200px;
            margin: 0 auto;
          }

          .cert-card {
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 18px;
            padding: 24px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.35);
            color: #eaf2ff;
            line-height: 1.6;
            font-size: 1rem;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .cert-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.45);
          }

          .cert-card h3 {
            margin-bottom: 15px;
            font-size: 1.1rem;
            font-weight: 600;
          }

          .cert-btn {
            display: inline-block;
            margin-top: 10px;
            padding: 8px 16px;
            background: #6a0dad;
            color: #fff;
            border-radius: 8px;
            text-decoration: none;
            font-size: 0.9rem;
            transition: background 0.3s ease;
          }

          .cert-btn:hover {
            background: #9b59b6;
          }

          /* Tablets */
          @media (max-width: 900px) {
            .certs-grid {
              grid-template-columns: 1fr;
            }
          }

          /* Mobile */
          @media (max-width: 480px) {
            .section-title h2 {
              font-size: 2rem;
            }
            .section-title span {
              font-size: 1rem;
            }
            .cert-card {
              padding: 18px;
              font-size: 0.95rem;
            }
          }
        `}
      </style>
    </section>
  );
}
