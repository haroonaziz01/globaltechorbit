// src/pages/MissionVision.js
import React, { useState, useEffect } from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.avif";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.webp";

export default function MissionVision() {
  const backgrounds = [img1, img2, img3, img4];
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  const missionCards = [
    {
      title: "Empower Through Education",
      desc: "Providing accessible and high-quality tech education to learners worldwide.",
    },
    {
      title: "Innovative Learning",
      desc: "Creating modern, practical, and hands-on learning experiences.",
    },
  ];

  const visionCards = [
    {
      title: "Global Tech Leaders",
      desc: "Shaping the next generation of innovators and industry leaders.",
    },
    {
      title: "Sustainable Future",
      desc: "Using technology to solve real-world challenges for a better tomorrow.",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${backgrounds[currentBg]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "50px 20px",
        color: "white",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div style={{ backgroundColor: "rgba(0,0,0,0.6)", padding: "40px", borderRadius: "12px" }}>
        <h1 style={{ fontSize: "36px", textAlign: "center", marginBottom: "30px" }}>
          Our Mission & Vision
        </h1>

        {/* Mission Section */}
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>Mission</h2>
        <div style={gridStyle}>
          {missionCards.map((card, index) => (
            <div key={index} style={cardStyle}>
              <h3 style={cardTitle}>{card.title}</h3>
              <p style={cardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Vision Section */}
        <h2 style={{ fontSize: "28px", margin: "40px 0 20px" }}>Vision</h2>
        <div style={gridStyle}>
          {visionCards.map((card, index) => (
            <div key={index} style={cardStyle}>
              <h3 style={cardTitle}>{card.title}</h3>
              <p style={cardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
};

const cardStyle = {
  backgroundColor: "rgba(255,255,255,0.1)",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  backdropFilter: "blur(5px)",
  transition: "transform 0.3s ease",
};

const cardTitle = {
  fontSize: "20px",
  marginBottom: "10px",
  fontWeight: "bold",
};

const cardDesc = {
  fontSize: "16px",
  lineHeight: "1.5",
};
