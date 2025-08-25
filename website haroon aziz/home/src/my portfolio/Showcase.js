// src/components/Showcase.jsx
import React from "react";

export default function Showcase({ items }) {
  const data =
    items || [
      { title: "Project One", img: "", repo: "#" },
      { title: "Project Two", img: "", repo: "#" },
    ];

  return (
    <section
      id="showcase"
      className="section"
      style={{
        background: "linear-gradient(135deg, #0f1630, #1f2a4d, #2b3a6d)",
        padding: "60px 20px",
        color: "#fff",
      }}
    >
      {/* Section Title */}
      <div className="section-title" style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 style={{ fontSize: "2.8rem", fontWeight: "700", marginBottom: "10px" }}>
          Portfolio Showcase
        </h2>
        <span style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.85)" }}>
          Projects & demos I have built
        </span>
      </div>

      {/* Grid Container */}
      <div className="showcase-grid">
        {data.map((p, index) => (
          <article key={index} className="showcase-card">
            {p.img && <img src={p.img} alt={p.title} className="showcase-img" />}
            <h3>{p.title}</h3>
            {p.repo && (
              <a href={p.repo} target="_blank" rel="noopener noreferrer" className="repo-btn">
                View Repo
              </a>
            )}
          </article>
        ))}
      </div>

      {/* CSS */}
      <style>
        {`
          .showcase-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 24px;
            max-width: 1200px;
            margin: 0 auto;
          }

          .showcase-card {
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 18px;
            padding: 24px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.35);
            color: #eaf2ff;
            line-height: 1.6;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .showcase-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.45);
          }

          .showcase-card h3 {
            margin: 15px 0 10px 0;
            font-size: 1.2rem;
            font-weight: 600;
          }

          .showcase-img {
            width: 100%;
            max-height: 180px;
            object-fit: cover;
            border-radius: 12px;
          }

          .repo-btn {
            margin-top: auto;
            padding: 8px 14px;
            background: #6a0dad;
            color: #fff;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 500;
            transition: background 0.3s ease;
          }

          .repo-btn:hover {
            background: #9b59b6;
          }

          /* Tablets */
          @media (max-width: 900px) {
            .showcase-grid {
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
            .showcase-card {
              padding: 18px;
              font-size: 0.95rem;
            }
          }
        `}
      </style>
    </section>
  );
}
