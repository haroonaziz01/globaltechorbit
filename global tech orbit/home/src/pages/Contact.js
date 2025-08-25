import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { GitHub, Linkedin, Phone, Mail } from "react-feather";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const links = [
    {
      name: "GitHub",
      icon: <GitHub size={22} />,
      url: "https://github.com/globaltechorbit",
      bg: "linear-gradient(135deg, #333, #000)",
      shadow: "0 0 15px rgba(255,255,255,0.2)",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={22} />,
      url: "https://www.linkedin.com/in/globaltechorbit",
      bg: "linear-gradient(135deg, #0077B5, #004182)",
      shadow: "0 0 15px rgba(0,119,181,0.4)",
    },
    {
      name: "WhatsApp",
      icon: <Phone size={22} />,
      url: "https://wa.me/923349410890",
      bg: "linear-gradient(135deg, #25D366, #128C7E)",
      shadow: "0 0 15px rgba(37,211,102,0.4)",
    },
    {
      name: "Email",
      icon: <Mail size={22} />,
      url: "mailto:globaltechorbit@gmail.com",
      bg: "linear-gradient(135deg, #FFD700, #FFA500)",
      shadow: "0 0 15px rgba(255,215,0,0.4)",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_vkksmz4",
        "template_6f67hn9",
        form.current,
        "L_skaVESmdORSmV8b"
      )
      .then(
        () => {
          setStatus({ type: "success", text: "Message sent successfully!" });
          form.current.reset();
          setLoading(false);
        },
        () => {
          setStatus({ type: "error", text: "Failed to send message." });
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        padding: "50px 20px",
        backgroundImage: "url('https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Dark Overlay */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0,0,0,0.6)"
      }} />

      <div style={{
        position: "relative",
        zIndex: 2,
        maxWidth: "500px",
        width: "100%",
        background: "rgba(255, 255, 255, 0.15)",
        borderRadius: "10px",
        backdropFilter: "blur(10px)",
        overflow: "hidden",
        boxShadow: "0 0 20px rgba(0,0,0,0.5)"
      }}>
        
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(135deg, #0077B5, #004182)",
            color: "#fff",
            padding: "15px",
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Contact Me
        </div>

        {/* Form */}
        <div style={{ padding: "20px" }}>
          {status && (
            <p
              style={{
                color: status.type === "success" ? "lightgreen" : "#ff7f7f",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              {status.text}
            </p>
          )}

          <form
            ref={form}
            onSubmit={sendEmail}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <input type="text" name="user_name" placeholder="Your Name" required style={input} />
            <input type="email" name="user_email" placeholder="Your Email" required style={input} />
            <input type="text" name="user_phone" placeholder="Phone Number" required style={input} />
            <input type="text" name="subject" placeholder="Subject" required style={input} />
            <textarea name="message" placeholder="Your Message" required style={textarea}></textarea>
            <button type="submit" disabled={loading} style={button}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
            padding: "15px",
            background: "rgba(255,255,255,0.05)",
          }}
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 15px",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: "600",
                background: link.bg,
                color: "#fff",
                boxShadow: link.shadow,
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.07)";
                e.currentTarget.style.boxShadow = "0 0 25px rgba(0,0,0,0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = link.shadow;
              }}
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const input = {
  padding: "12px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  outline: "none",
  background: "rgba(255, 255, 255, 0.9)",
};

const textarea = {
  padding: "12px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  minHeight: "100px",
  outline: "none",
  background: "rgba(255, 255, 255, 0.9)",
};

const button = {
  padding: "12px",
  background: "linear-gradient(135deg, #0077B5, #004182)",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "0.3s",
};
