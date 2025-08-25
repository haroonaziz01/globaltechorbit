// src/components/Skills.jsx
import React from "react";

export default function Skills({ data }) {
  const skills =
    data || {
      "Programming & Scripting": [
        "Python",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5/CSS3",
        "SQL",
        "Shell Scripting",
        "C++",
        "Bash",
      ],
      "AI / ML / Data Science": [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "Hugging Face Transformers",
        "NLP",
        "Computer Vision (OpenCV, YOLO)",
        "MLflow",
        "Optuna",
        "ONNX",
        "TensorRT",
      ],
      "Full-Stack Development": [
        "React.js",
        "Next.js",
        "Redux",
        "Flask",
        "Django",
        "FastAPI",
        "Node.js",
        "Express.js",
        "Bootstrap",
        "Tailwind CSS",
        "GraphQL",
      ],
      "Cloud & DevOps": [
        "AWS (EC2, S3, RDS, Lambda, IAM, CloudWatch)",
        "Huawei Cloud",
        "Google Cloud (BigQuery, Firebase)",
        "Microsoft Azure (Blob Storage, ML Studio)",
        "Docker",
        "Kubernetes",
        "Ansible",
        "VMware",
        "VirtualBox",
      ],
      "Databases": [
        "MySQL",
        "PostgreSQL",
        "SQLite",
        "MongoDB",
        "TiDB",
        "Firebase Firestore",
        "DynamoDB",
      ],
      "Data Analytics & Visualization": [
        "Power BI",
        "Tableau",
        "Streamlit",
        "Dash",
        "Matplotlib",
        "Seaborn",
        "Plotly",
        "Bokeh",
        "Altair",
      ],
      "Tools & Platforms": [
        "Git & GitHub",
        "GitLab",
        "Bitbucket",
        "Jira",
        "Trello",
        "Slack",
        "VS Code",
        "PyCharm",
        "Jupyter Notebook",
        "JupyterLab",
        "Google Data Studio",
      ],
      "IT & Networking": [
        "Linux Administration",
        "System Troubleshooting",
        "Security Hardening",
        "Performance Optimization",
        "CCNA",
        "Subnetting",
        "Switching",
      ],
    };

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #030303ff, #0b0c0cff, #060708ff)",
        padding: "72px 20px",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Decorative background shapes */}
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
          <linearGradient id="skills-grad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <polygon points="0,0 280,0 0,200" fill="url(#skills-grad)" />
        <polygon points="800,600 540,600 800,380" fill="url(#skills-grad)" />
      </svg>

      {/* Section Title */}
      <div
        className="section-title"
        style={{
          textAlign: "center",
          marginBottom: "48px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2 id="skills-heading" style={{ fontSize: "2.6rem", fontWeight: 800, marginBottom: 8 }}>
          Skills
        </h2>
        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)" }}>
          My professional expertise & technical toolkit
        </p>
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <article key={category} className="skill-card">
            <h3 className="skill-title">{category}</h3>
            <div className="skill-items">
              {items.map((i) => (
                <span key={i} className="skill-item">
                  {i}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* CSS */}
      <style>
        {`
          .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 24px;
            max-width: 1100px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
          }

          .skill-card {
            background: rgba(255,255,255,0.045);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 18px;
            padding: 20px;
            color: #e9eeff;
            line-height: 1.65;
            transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
            backdrop-filter: blur(6px);
          }

          .skill-card:hover {
            transform: translateY(-3px);
            border-color: rgba(124,58,237,0.35);
            box-shadow: 0 18px 40px rgba(0,0,0,0.4);
          }

          .skill-title {
            font-size: 1.15rem;
            font-weight: 700;
            margin-bottom: 10px;
            color: #dbe6ff;
          }

          .skill-items {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }

          .skill-item {
            font-size: 0.78rem;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid rgba(124,58,237,0.35);
            background: linear-gradient(135deg, rgba(124,58,237,0.15), rgba(34,211,238,0.12));
            color: #dbe6ff;
            letter-spacing: 0.2px;
            user-select: none;
            transition: transform 0.2s ease;
          }

          .skill-item:hover {
            transform: scale(1.05);
          }

          @media (max-width: 900px) {
            .skills-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 520px) {
            .section-title h2 { font-size: 2rem; }
            .skill-title { font-size: 1.05rem; }
            .skill-card { padding: 16px; }
            .skill-item {
              padding: 5px 8px;
              font-size: 0.75rem;
            }
          }
        `}
      </style>
    </section>
  );
}
