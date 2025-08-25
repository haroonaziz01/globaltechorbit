// src/components/Experience.jsx
import React from "react";

/**
 * Props:
 *  - entries: [
 *      {
 *        role, org, period?, summary, highlights?:[], tags?:[]
 *      }
 *    ]
 *  - showPeriods?: boolean  // default: false (no years)
 */
export default function Experience({ entries, showPeriods = false }) {
  const data =
    entries ||
    [
      {
        role: "IT Trainer & IT Administrator",
        org: "— Office / Training Center",
        // period intentionally present but hidden by default (showPeriods=false)
        period: "Present",
        summary:
          "Deliver practical training in Artificial Intelligence, Python, and Linux while running day-to-day IT operations. I design hands-on labs, streamline help-desk workflows, and keep networks, endpoints, and users secure and productive. I’m big on automation—where a script can save time, I write it.",
        highlights: [
          "Built and maintained secure office networks, backups, and user access (Linux-first mindset).",
          "Wrote Python scripts for onboarding, log parsing, and weekly health reports.",
          "Ran workshops on AI, data analysis, and cloud basics to upskill staff and students.",
          "Documented troubleshooting playbooks that cut ticket resolution time.",
        ],
        tags: ["Linux", "Automation", "Python", "Help-Desk", "Security"],
      },
      {
        role: "Full-Stack Developer",
        org: "— Product & Internal Tools",
        period: "—",
        summary:
          "I build clean, scalable web apps—front to back. From React/Next.js UIs to REST/GraphQL APIs with Python (FastAPI/Django/Flask) and Node/Express, I ship features that feel fast and reliable. I prefer typed code where it helps and prioritize DX, tests, and readable architecture.",
        highlights: [
          "Auth, role-based access, and dashboards for ops teams.",
          "Reusable UI components with React, Tailwind, and TypeScript.",
          "APIs with pagination, caching layers, and background jobs.",
          "SQL design and query tuning for fast reads/writes.",
        ],
        tags: ["React", "Next.js", "FastAPI", "Django", "Node", "SQL"],
      },
      {
        role: "AI/ML Engineer & Data Scientist",
        org: "— Applied AI",
        period: "—",
        summary:
          "From classic ML to deep learning, I turn data into deployable models. I’ve worked with TensorFlow/PyTorch, scikit-learn, and Hugging Face for NLP and vision. I track experiments, tune hyper-parameters, and package models for production with ONNX/TensorRT when needed.",
        highlights: [
          "NLP chatbots and assistants using Transformers.",
          "Forecasting and classification pipelines with MLflow tracking.",
          "Computer vision prototypes with OpenCV/YOLO and robust data pre-processing.",
          "Layered AI architecture separating data, training, and deployment.",
        ],
        tags: ["PyTorch", "TensorFlow", "Transformers", "MLflow", "ONNX"],
      },
      {
        role: "Data Analytics & Visualization",
        org: "— Decision Support",
        period: "—",
        summary:
          "I explore, shape, and visualize data to answer the ‘why’. From pandas/NumPy EDA to interactive dashboards, my goal is clear insights that drive action—no fluff, just signal.",
        highlights: [
          "Dashboards and reports in Power BI/Tableau/Streamlit.",
          "Automated ETL with Python for clean, fresh datasets.",
          "A/B style comparisons and KPI tracking for leadership.",
        ],
        tags: ["Pandas", "NumPy", "Power BI", "Tableau", "Plotly"],
      },
      {
        role: "Cloud, DevOps & Tooling",
        org: "— Infra & Reliability",
        period: "—",
        summary:
          "Comfortable across AWS and Linux servers, I use containers and IaC-style habits to keep environments reproducible. I like logs tidy, alerts meaningful, and deploys boring.",
        highlights: [
          "AWS fundamentals (EC2, S3, RDS, Lambda, IAM) and monitoring with CloudWatch.",
          "Dockerized services, CI/CD on GitHub, and secret management best practices.",
          "Security hardening, backups, and disaster-recovery drills.",
        ],
        tags: ["AWS", "Docker", "CI/CD", "Linux", "Security"],
      },
    ];

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section"
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #070708 0%, #0b0b0d 35%, #09090b 100%)",
        padding: "72px 20px",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Decorative gradient triangles */}
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
          <linearGradient id="grad1" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <polygon points="0,0 300,0 0,220" fill="url(#grad1)" />
        <polygon points="800,600 520,600 800,360" fill="url(#grad1)" />
      </svg>

      {/* Section Title */}
      <div
        className="section-title"
        style={{ textAlign: "center", marginBottom: "48px", position: "relative", zIndex: 1 }}
      >
        <h2 id="experience-heading" style={{ fontSize: "2.6rem", fontWeight: 800, marginBottom: 8 }}>
          Experience
        </h2>
        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)" }}>
          Professional roles, automation, and hands-on training
        </p>
      </div>

      {/* Timeline */}
      <ol className="timeline" role="list">
        {data.map((e, idx) => (
          <li key={idx} className="tl-item" tabIndex={0} aria-label={`${e.role} ${e.org}`}>
            <div className="tl-node" aria-hidden="true" />
            <article className="tl-card">
              <header className="tl-header">
                <h3 className="tl-title">
                  {e.role} <span className="muted">{e.org}</span>
                </h3>
                {showPeriods && e.period ? <span className="tl-period">{e.period}</span> : null}
              </header>

              <p className="tl-summary">{e.summary}</p>

              {e.highlights?.length ? (
                <ul className="tl-highlights">
                  {e.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              ) : null}

              {e.tags?.length ? (
                <div className="tag-row" aria-label="skills and tools">
                  {e.tags.map((t, i) => (
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

          /* vertical line */
          .timeline::before {
            content: "";
            position: absolute;
            left: 20px;
            top: 0;
            bottom: 0;
            width: 2px;
            background: linear-gradient(180deg, rgba(124,58,237,0.9), rgba(34,211,238,0.9));
            border-radius: 2px;
          }

          .tl-item {
            position: relative;
            margin: 0 0 32px 0;
            outline: none;
          }

          .tl-item:focus .tl-card {
            box-shadow: 0 0 0 3px rgba(124,58,237,0.45);
          }

          .tl-node {
            position: absolute;
            left: 11px;
            top: 14px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: radial-gradient(circle at 30% 30%, #22d3ee, #7c3aed);
            box-shadow: 0 0 0 4px rgba(124,58,237,0.2), 0 0 16px rgba(34,211,238,0.35);
          }

          .tl-card {
            margin-left: 56px;
            background: rgba(255,255,255,0.045);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 18px;
            padding: 20px 20px 16px;
            color: #e9eeff;
            line-height: 1.65;
            transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
            backdrop-filter: blur(6px);
          }

          .tl-card:hover {
            transform: translateY(-3px);
            border-color: rgba(124,58,237,0.35);
            box-shadow: 0 18px 40px rgba(0,0,0,0.4);
          }

          .tl-header {
            display: flex;
            align-items: start;
            gap: 12px;
            justify-content: space-between;
            margin-bottom: 6px;
            flex-wrap: wrap;
          }

          .tl-title {
            font-size: 1.15rem;
            font-weight: 700;
            margin: 0;
          }

          .muted {
            color: #aab3d6;
            font-weight: 600;
          }

          .tl-period {
            color: #8a93b5;
            font-size: 0.95rem;
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
            border: 1px solid rgba(124,58,237,0.35);
            background: linear-gradient(135deg, rgba(124,58,237,0.15), rgba(34,211,238,0.12));
            color: #dbe6ff;
            letter-spacing: 0.2px;
            user-select: none;
          }

          /* Responsive */
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

          /* Motion sensitivity */
          @media (prefers-reduced-motion: reduce) {
            .tl-card, .tl-card:hover {
              transform: none !important;
              transition: none !important;
            }
          }
        `}
      </style>
    </section>
  );
}
