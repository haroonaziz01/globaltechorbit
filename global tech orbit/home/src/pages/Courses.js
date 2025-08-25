// src/pages/Courses.js
import bgImage from "../assets/2.avif"; // <-- Import your image

export default function Courses() {
  const courses = [
    {
      title: "Full-Stack Automation & Web Development",
      desc: "Master HTML, CSS, JavaScript, React, Node.js, and backend automation tools to build high-performance, fully automated applications.",
      level: "Advanced",
    },
    {
      title: "Data Science, AI & Business Process Automation",
      desc: "Learn Python, Machine Learning, AI model deployment, and intelligent automation workflows for real-world data-driven decision-making.",
      level: "Advanced",
    },
    {
      title: "Cloud Automation & DevOps",
      desc: "Gain expertise in AWS, Azure, Google Cloud, and CI/CD pipelines, automating deployments, scaling, and monitoring using industry-standard tools.",
      level: "Advanced",
    },
    {
      title: "Cybersecurity & Automated Threat Detection",
      desc: "Master ethical hacking, AI-powered intrusion detection, automated vulnerability scanning, and enterprise-level security frameworks.",
      level: "Advanced",
    },
    {
      title: "Networking & Infrastructure Automation",
      desc: "Learn advanced networking concepts, automated configuration management, and software-defined networking (SDN) solutions.",
      level: "Advanced",
    },
    {
      title: "AI-Powered Application Development",
      desc: "Develop intelligent applications integrating AI models, natural language processing, and computer vision into real-world projects.",
      level: "Advanced",
    },
    {
      title: "Robotic Process Automation (RPA)",
      desc: "Automate repetitive business processes using tools like UiPath, Blue Prism, and Automation Anywhere to improve efficiency.",
      level: "Advanced",
    },
  ];

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "50px 20px",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "#fff",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 0,
        }}
      ></div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2.5rem",
            textShadow: "0 4px 10px rgba(0,0,0,0.9)",
          }}
        >
          Advanced Automation Courses
        </h1>

        <div style={gridStyle}>
          {courses.map((course, index) => (
            <div
              key={index}
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-10px) scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(0, 255, 200, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 5px 20px rgba(0, 0, 0, 0.3)";
              }}
            >
              <h2 style={{ marginBottom: "10px", color: "#00ffcc" }}>
                {course.title}
              </h2>
              <p style={{ opacity: 0.9 }}>{course.desc}</p>
              <p>
                <strong>Level:</strong> {course.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "25px",
};

const cardStyle = {
  background: "rgba(0, 0, 0, 0.6)",
  padding: "20px",
  borderRadius: "15px",
  backdropFilter: "blur(8px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
  transition: "all 0.3s ease",
  cursor: "pointer",
};
