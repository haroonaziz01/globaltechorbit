import React from "react";
import bgImage from "../assets/2.avif";

export default function Founder() {
  return (
    <section style={sectionStyle}>
      <div style={overlayStyle}>
        <h1 style={titleStyle}>Meet Our Founders</h1>

        <div style={containerStyle}>
          {/* Founder */}
          <div style={founderBoxStyle}>
            <h2 style={nameStyle}>Khawaja Muhammad Haroon</h2>
            <h4 style={roleStyle}>Founder & CEO – Global Tech Orbit</h4>
            <p style={paraGradient}>
              I am <b>Khawaja Muhammad Haroon</b>, a passionate technologist and
              visionary entrepreneur with a relentless drive to innovate and
              create. My journey started with a strong curiosity about how
              technology can transform lives, and today I lead <b>Global Tech
              Orbit</b> with the mission of empowering organizations, students,
              and industries worldwide.
            </p>
            <p style={paraStyle}>
              With expertise in <b>Artificial Intelligence,  Cloud
              Computing, Full-Stack Development, and Project Management</b>, I
              believe in solving real-world problems by blending creativity with
              technology. My focus is not just on building IT solutions but also
              on creating sustainable growth and long-term impact for every
              client and partner we work with.
            </p>
            <p style={paraStyle}>
              Beyond technology, my leadership philosophy revolves around
              <b> mentoring young talent, fostering innovation, and building a
              culture of collaboration</b>. I strongly believe that the future
              belongs to those who can combine technical excellence with
              strategic vision — and at <b>Global Tech Orbit</b>, we are doing
              exactly that.
            </p>
            <p style={paraStyle}>
              Whether it’s developing cutting-edge AI solutions, managing
              enterprise-level projects, or delivering end-to-end consulting, my
              goal is to make <b>Global Tech Orbit</b> a symbol of trust,
              innovation, and excellence across the globe.
            </p>
          </div>
        </div>

        {/* About Company */}
        <div style={aboutBoxStyle}>
          <h2 style={aboutTitleStyle}>About Global Tech Orbit</h2>
          <p style={aboutTextStyle}>
            At <b>Global Tech Orbit</b>, we go beyond traditional IT services.
            Along with cutting-edge solutions in <b>AI, Cloud, Cybersecurity, and Development</b>,
            we also specialize in <b>Project Management</b> to help organizations plan, execute,
            and deliver successful outcomes with precision and efficiency.
          </p>
          <p style={aboutTextStyle}>
            For students and learners, we provide <b>hands-on training, mentorship, and
            real-world projects</b> so they can gain practical knowledge and skills that prepare
            them for a competitive tech industry. Our mission is to not just serve businesses,
            but also to empower the next generation of innovators.
          </p>
          <p style={aboutTextStyle}>
            We also provide <b>Bulletin Project Services</b> tailored especially for
            <b> PSUs (Public Sector Units)</b>, ensuring robust, secure, and scalable
            solutions that meet the unique demands of the public sector.
          </p>
          <p style={aboutTextStyle}>
            Whether you are a startup looking for complete digital solutions, an enterprise
            aiming for <b>scalable IT infrastructure</b>, or a student eager to build your
            future, <b>Global Tech Orbit</b> is your trusted partner. We combine
            <b> innovation, strategy, and execution</b> to ensure long-term growth and success.
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

const paraStyle = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#eee",
  marginBottom: "15px",
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
