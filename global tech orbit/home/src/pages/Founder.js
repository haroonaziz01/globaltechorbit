import React from "react";
import bgImage from "../assets/2.avif";

export default function Founder() {
  return (
    <section style={sectionStyle}>
      <div style={overlayStyle}>
        <h1 style={titleStyle}>Meet Our Founders</h1>

        <div style={containerStyle}>
          {/* Founder 1 */}
          <div style={founderBoxStyle}>
            <h2 style={nameStyle}>Khawaja Muhammad Haroon</h2>
            <h4 style={roleStyle}>Founder & CEO – Global Tech Orbit</h4>
            <p style={paraGradient}>
              With an unwavering passion for technology and innovation, I
              established <b>Global Tech Orbit</b> to deliver groundbreaking
              IT solutions across the globe. From Artificial Intelligence to
              Cybersecurity, our mission is to empower businesses with
              transformative digital strategies that ensure long-term success.
            </p>
          </div>
        </div>

        {/* About Company */}
        <div style={aboutBoxStyle}>
          <h2 style={aboutTitleStyle}>About Global Tech Orbit</h2>
          <p style={aboutTextStyle}>
            At <b>Global Tech Orbit</b>, we are dedicated to bridging the gap
            between businesses and technology. Our core belief is that
            innovation should be accessible to everyone, enabling companies to
            grow faster, operate smarter, and serve their customers better.
          </p>
          <p style={aboutTextStyle}>
            Whether it's Artificial Intelligence, Full-Stack Development, or
            advanced Cloud & Security solutions — our team thrives on turning
            ideas into impactful realities. We are not just a service provider;
            we are your trusted technology partner in the journey toward
            success.
          </p>
        </div>
      </div>
    </section>
  );
}

// Styles
const sectionStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  padding: "50px 20px",
  color: "#fff",
  position: "relative",
};

const overlayStyle = {
  backgroundColor: "rgba(0,0,0,0.6)",
  padding: "40px",
  borderRadius: "12px",
};

const titleStyle = {
  textAlign: "center",
  fontSize: "36px",
  fontWeight: "bold",
  marginBottom: "40px",
  color: "#fff",
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  maxWidth: "900px",
  margin: "0 auto",
};

const founderBoxStyle = {
  background: "rgba(255,255,255,0.1)",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
};

const nameStyle = {
  fontSize: "26px",
  fontWeight: "bold",
  color: "#ffb347",
};

const roleStyle = {
  fontSize: "18px",
  fontWeight: "600",
  margin: "10px 0",
  color: "#ddd",
};

const paraGradient = {
  fontSize: "16px",
  lineHeight: "1.6",
  background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "500",
};

const aboutBoxStyle = {
  marginTop: "40px",
  padding: "20px",
  background: "rgba(255,255,255,0.1)",
  borderRadius: "12px",
};

const aboutTitleStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "10px",
  color: "#fff",
};

const aboutTextStyle = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#eee",
  marginBottom: "10px",
};
