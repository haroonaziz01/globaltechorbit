// src/components/Projects.jsx
import React from "react";

export default function Projects({ projects }) {
  const data =
    projects ||
    [
      {
        title: "AI Chatbot",
        summary:
          "Developed an intelligent chatbot using NLP and transformer models to automate responses and handle complex user queries. Integrated with Python backend and deployed for real-time use.",
        highlights: [
          "Trained on domain-specific datasets for accurate responses.",
          "Used Hugging Face Transformers and spaCy for NLP pipeline.",
          "Supports sentiment analysis and context retention.",
        ],
        tags: ["Python", "NLP", "Transformers", "spaCy", "Flask"],
        automation: true,
      },
      {
        title: "House Price Prediction",
        summary:
          "Machine learning model predicting house prices based on multiple features like location, size, and amenities.",
        highlights: [
          "Applied Linear Regression and feature engineering.",
          "Used Scikit-learn, Pandas, and Matplotlib for training and visualization.",
          "Optimized performance with cross-validation.",
        ],
        tags: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
        automation: true,
      },
      {
        title: "Heart Disease Prediction Model",
        summary:
          "Classification model to predict the likelihood of heart disease from patient data, supporting preventive healthcare.",
        highlights: [
          "Applied Logistic Regression and Random Forest for classification.",
          "Data preprocessing and feature scaling improved accuracy.",
          "Visualization with Seaborn for pattern detection.",
        ],
        tags: ["Python", "Scikit-learn", "Seaborn", "NumPy"],
        automation: true,
      },
      {
        title: "AI Layered Architecture Implementation",
        summary:
          "Designed a modular AI system separating data preprocessing, model training, and deployment pipelines.",
        highlights: [
          "Ensured scalability and easy integration of multiple AI/ML models.",
          "Experiment tracking with MLflow.",
          "Deployed using Docker for portability.",
        ],
        tags: ["Python", "TensorFlow", "MLflow", "Docker"],
        automation: true,
      },
      {
        title: "Data Visualization Dashboard",
        summary:
          "Interactive dashboard to visualize and analyze datasets for decision-making.",
        highlights: [
          "Used Power BI and Tableau for dynamic reports.",
          "Created automated Python ETL scripts for fresh data feeds.",
          "Designed KPIs and filters for business teams.",
        ],
        tags: ["Power BI", "Tableau", "Python", "Pandas"],
        automation: false,
      },
      {
        title: "Responsive Web Application",
        summary:
          "Full-stack web application with authentication, data management, and cloud integration.",
        highlights: [
          "Frontend built with React and Tailwind CSS.",
          "Backend APIs developed with Flask and Express.js.",
          "Hosted on AWS with S3 and EC2 integration.",
        ],
        tags: ["React", "Flask", "Express.js", "AWS"],
        automation: false,
      },
    ];

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section"
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #050507 0%, #040508 35%, #131418 100%)",
        padding: "72px 20px",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Decorative background */}
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
          <linearGradient id="proj-grad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <polygon points="0,0 280,0 0,200" fill="url(#proj-grad)" />
        <polygon points="800,600 540,600 800,380" fill="url(#proj-grad)" />
      </svg>

      {/* Section Title */}
      <div
        className="section-title"
        style={{ textAlign: "center", marginBottom: "48px", position: "relative", zIndex: 1 }}
      >
        <h2 id="projects-heading" style={{ fontSize: "2.6rem", fontWeight: 800, marginBottom: 8 }}>
          Projects
        </h2>
        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)" }}>
          AI solutions, full-stack apps, and data-driven tools
        </p>
      </div>

      {/* Timeline */}
      <ol className="timeline" role="list">
        {data.map((p, idx) => (
          <li key={idx} className="tl-item" tabIndex={0} aria-label={p.title}>
            <div className="tl-node" aria-hidden="true" />
            <article className={`tl-card ${p.automation ? "automation" : ""}`}>
              <header className="tl-header">
                <h3 className="tl-title">{p.title}</h3>
              </header>

              <p className="tl-summary">{p.summary}</p>

              {p.highlights?.length ? (
                <ul className="tl-highlights">
                  {p.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              ) : null}

              {p.tags?.length ? (
                <div className="tag-row">
                  {p.tags.map((t, i) => (
                    <span key={i} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          </li>
        ))}
      </ol>

      {/* CSS */}
      <style>
        {`
          .timeline {
            position: relative;
            max-width: 1100px;
            margin: 0 auto;
            padding-left: 12px;
            list-style: none;
            z-index: 1;
          }

          .timeline::before {
            content: "";
            position: absolute;
            left: 20px;
            top: 0;
            bottom: 0;
            width: 2px;
            background: linear-gradient(180deg, rgba(34,211,238,0.9), rgba(124,58,237,0.9));
            border-radius: 2px;
          }

          .tl-item {
            position: relative;
            margin: 0 0 32px 0;
            outline: none;
          }

          .tl-item:focus .tl-card {
            box-shadow: 0 0 0 3px rgba(34,211,238,0.45);
          }

          .tl-node {
            position: absolute;
            left: 11px;
            top: 14px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: radial-gradient(circle at 30% 30%, #7c3aed, #22d3ee);
            box-shadow: 0 0 0 4px rgba(34,211,238,0.2), 0 0 16px rgba(124,58,237,0.35);
          }

          .tl-card {
            margin-left: 56px;
            background: rgba(255,255,255,0.045);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 18px;
            padding: 20px;
            color: #e9eeff;
            line-height: 1.65;
            transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
            backdrop-filter: blur(6px);
          }

          .tl-card:hover {
            transform: translateY(-3px);
            border-color: rgba(34,211,238,0.35);
            box-shadow: 0 18px 40px rgba(0,0,0,0.4);
          }

          .tl-card.automation .tl-title::before {
            content: "⚡ ";
            color: #22d3ee;
          }

          .tl-title {
            font-size: 1.15rem;
            font-weight: 700;
            margin: 0;
          }

          .tl-summary {
            margin: 6px 0 10px;
            color: #c7cdea;
          }

          .tl-highlights {
            margin: 0 0 8px 18px;
            padding: 0;
            color: #aeb7d0;
          }
          .tl-highlights li {
            margin-bottom: 6px;
          }

          .tag-row {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }
          .tag {
            font-size: 0.78rem;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid rgba(34,211,238,0.35);
            background: linear-gradient(135deg, rgba(34,211,238,0.15), rgba(124,58,237,0.12));
            color: #dbe6ff;
            letter-spacing: 0.2px;
            user-select: none;
          }

          @media (max-width: 900px) {
            .timeline::before { left: 16px; }
            .tl-node { left: 7px; }
            .tl-card { margin-left: 48px; }
          }

          @media (max-width: 520px) {
            .section-title h2 { font-size: 2rem; }
            .tl-title { font-size: 1.05rem; }
            .tl-card { padding: 16px; }
          }
        `}
      </style>
    </section>
  );
}
