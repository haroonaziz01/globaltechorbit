import React from "react";
import aiImg from "../assets/AI.jpeg";
import cloudImg from "../assets/CC.jpeg";
import automationImg from "../assets/AU.jpeg";
import fullstackImg from "../assets/FD.jpg";
import networkingImg from "../assets/5.jpeg";
import cyberImg from "../assets/C.jpeg";
import dataImg from "../assets/7.jpeg";
import projectImg from "../assets/P.jpeg"; 
import consultingImg from "../assets/CCC.jpeg"; 
import bgImg from "../assets/AI.jpeg";  // ✅ background image import

export default function Services() {
  const services = [
    { img: aiImg, title: "Artificial Intelligence", desc: "Smart AI solutions for automation and innovation." },
    { img: cloudImg, title: "Cloud Computing", desc: "Deploy and manage apps in the cloud." },
    { img: automationImg, title: "Automation", desc: "Streamline tasks with automated workflows." },
    { img: fullstackImg, title: "Full-Stack Development", desc: "Modern web & mobile applications." },
    { img: networkingImg, title: "Networking", desc: "Secure and efficient network infrastructure." },
    { img: cyberImg, title: "Cybersecurity", desc: "Protect systems from digital threats." },
    { img: dataImg, title: "Data Analytics", desc: "Insights from complex data." },
    { img: consultingImg, title: "IT Consulting", desc: "Expert guidance for your technology strategy." },
  ];

  return (
    <div>
      {/* Services Section */}
      <section style={{ ...sectionStyle, backgroundImage: `url(${bgImg})` }}>
        <h1 style={titleStyle}>Our Services</h1>
        <div style={gridStyle}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                ...cardStyle,
                backgroundImage: `url(${service.img})`,
              }}
            >
              <div style={overlayStyle}>
                <h3 style={headingStyle}>{service.title}</h3>
                <p style={descStyle}>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Styles
const sectionStyle = {
  padding: "40px",
  backgroundSize: "cover",      // ✅ cover background
  backgroundPosition: "center", // ✅ center align
  backgroundRepeat: "no-repeat", // ✅ no repeat
};

const titleStyle = {
  textAlign: "center",
  marginBottom: "30px",
  fontSize: "32px",
  fontWeight: "bold",
  color: "#fff", // ✅ white text (visible on bg)
  textShadow: "1px 1px 4px rgba(0,0,0,0.6)", // ✅ better readability
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
};

const cardStyle = {
  height: "200px",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  overflow: "hidden",
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  padding: "15px",
  textAlign: "center",
};

const headingStyle = {
  fontSize: "20px",
  marginBottom: "10px",
  fontWeight: "bold",
};

const descStyle = {
  fontSize: "14px",
};
