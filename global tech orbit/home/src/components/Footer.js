// src/components/Footer.js
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #000000, #222222)",
        color: "#fff",
        padding: "8px 10px",
        width: "100%",
        height: "50px", // ~1 inch
        position: "fixed",
        bottom: 0,
        left: 0,
        display: "flex",
        flexDirection: "column", // icons aur text ek hi column me
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 -2px 10px rgba(0,0,0,0.4)",
        zIndex: 1000,
      }}
    >
      {/* Company Name */}
      <span style={{ fontSize: "12px", fontWeight: "bold", marginBottom: "4px" }}>
        © {new Date().getFullYear()} Global Tech Orbit
      </span>

      {/* Social Icons */}
      <div>
        <a href="https://facebook.com" style={iconStyle}>
          <FaFacebook />
        </a>
        <a href="https://twitter.com" style={iconStyle}>
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" style={iconStyle}>
          <FaLinkedin />
        </a>
        <a href="https://instagram.com" style={iconStyle}>
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}

const iconStyle = {
  color: "#fff",
  fontSize: "14px",
  margin: "0 6px",
  textDecoration: "none",
};
