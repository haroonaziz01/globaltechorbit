// src/components/Education.jsx
import React from "react";

export default function Education({ entries }) {
  const data =
    entries || [
      {
        degree: "BS Computer Science",
        inst: "Virtual University",
        period: "2025 – 2029",
      },
    ];

  return (
    <section
      id="education"
      className="section"
      style={{
        background: "linear-gradient(135deg, #080808ff, #060608ff, #090a0eff)",
        padding: "60px 20px",
        color: "#fff",
      }}
    >
      {/* Section Title */}
      <div className="section-title" style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 style={{ fontSize: "2.8rem", fontWeight: "700", marginBottom: "10px" }}>
          Education
        </h2>
        <span style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.85)" }}>
          Academic background & qualifications
        </span>
      </div>

      {/* Grid Container */}
      <div className="education-grid">
        {data.map((d, index) => (
          <article key={index} className="edu-card">
            <h3>{d.degree}</h3>
            <p className="edu-info">
              {d.inst} • {d.period}
            </p>
          </article>
        ))}
      </div>

      {/* CSS */}
      <style>
        {`
          .education-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 24px;
            max-width: 1000px;
            margin: 0 auto;
          }

          .edu-card {
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 18px;
            padding: 24px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.35);
            color: #eaf2ff;
            line-height: 1.6;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .edu-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.45);
          }

          .edu-card h3 {
            margin-bottom: 10px;
            font-size: 1.2rem;
            font-weight: 600;
          }

          .edu-info {
            color: #7b88a8;
            font-size: 0.95rem;
          }

          /* Tablets */
          @media (max-width: 900px) {
            .education-grid {
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
            .edu-card {
              padding: 18px;
              font-size: 0.95rem;
            }
          }
        `}
      </style>
    </section>
  );
}
