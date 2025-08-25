// src/pages/Home.js
import React, { useState, useEffect } from "react";
import img2 from "../assets/8.jpeg";
import img4 from "../assets/6.jpeg";
import img5 from "../assets/5.jpeg";
import img3 from "../assets/7.jpeg";
import img1 from "../assets/9.jpeg";

export default function Home() {
  const backgrounds = [img1, img2, img3, img4, img5];
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url(${backgrounds[currentBg]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "40px",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            padding: "30px",
            borderRadius: "12px",
            maxWidth: "900px",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
            Welcome to GlobalTech Orbit
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
            Your trusted partner in the digital world, delivering innovative
            technology solutions, professional training, and a commitment to
            excellence in every project we undertake.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section
        style={{
          backgroundImage: `url(${img2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            padding: "30px",
            borderRadius: "12px",
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "center",
            color: "white",
          }}
        >
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
            About GlobalTech Orbit
          </h2>
          <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
            At <strong>GlobalTech Orbit</strong>, we are more than just an IT company — we are
            innovators, educators, and solution providers. We specialize in delivering services
            that include <strong>Automation</strong>, <strong>AI & Machine Learning</strong>,{" "}
            <strong>Web Development</strong>, <strong>Cloud Computing</strong>,{" "}
            <strong>Cybersecurity</strong>, and <strong>Data Analytics</strong>. Our goal is to
            help businesses achieve sustainable growth and prepare individuals for the future of
            work through training and mentorship.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      {/* Why Choose Us Section */}
<section
  style={{
    backgroundImage: `url(${img3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "60px 20px",
  }}
>
  <div
    style={{
      backgroundColor: "rgba(0,0,0,0.6)",
      padding: "30px",
      borderRadius: "12px",
      maxWidth: "1000px",
      margin: "0 auto",
      textAlign: "center",
      color: "white",
    }}
  >
    <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Why Choose Us</h2>
    <div
      style={{
        display: "grid",
        gap: "20px",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      }}
    >
      {[
 
        "Cutting-edge technology solutions",
        "Custom strategies for your unique needs",
        "Proven track record of success",
        "24/7 dedicated customer support",
        "Affordable and transparent pricing",
        "Long-term partnership and after-project assistance",
        "Global clientele with industry-specific expertise",
        "Innovative approach to every project",
        "Tailor-made IT solutions for your business",
        "Fast delivery without compromising quality",
        "Continuous innovation with latest technologies",
        "Proven results across diverse industries",
      ].map((reason, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            color: "white",
          }}
        >
          <p style={{ fontSize: "16px", lineHeight: "1.5" }}>{reason}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Services Overview */}
      <section
        style={{
          backgroundImage: `url(${img4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            padding: "30px",
            borderRadius: "12px",
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "center",
            color: "white",
          }}
        >
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
            Our Services Overview
          </h2>
          <p style={{ fontSize: "18px", marginBottom: "40px" }}>
            Explore our core services designed to transform your business and skills:
          </p>
          <div
            style={{
              display: "grid",
              gap: "20px",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            }}
          >
            {[
              { title: "Automation", desc: "Smart automation solutions to save time and resources." },
              { title: "AI & Machine Learning", desc: "Data-driven AI systems to innovate your workflow." },
              { title: "Web Development", desc: "Modern, responsive websites to boost your online presence." },
              { title: "Cloud Solutions", desc: "Scalable and secure cloud services for any business." },
              { title: "Cybersecurity", desc: "Protect your digital assets with our advanced security tools." },
              { title: "Data Analytics", desc: "Turn raw data into actionable insights for decision-making." },
            ].map((service, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                  color: "white",
                }}
              >
                <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
