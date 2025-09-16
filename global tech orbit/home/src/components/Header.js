import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header style={headerStyle}>
      {/* Left Side - Logo + Name */}
      <div style={leftStyle}>
        <img src={logo} alt="Logo" style={getLogoStyle()} />
        <h1 style={getTitleStyle()}>Global Tech Orbit</h1>
      </div>

      {/* Right Side - Navigation */}
      <nav style={navStyle}>
        {links.map((link) => (
          <Link key={link.path} to={link.path} style={linkStyle}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

const links = [
  { path: "/", label: "Home" },
  { path: "/mission", label: "Mission & Vision" },
  { path: "/courses", label: "Courses" },
  { path: "/services", label: "Services" },
  { path: "/contact", label: "Contact" },
  { path: "/founder", label: "About Us" },
];

// 🎨 Styles
const headerStyle = {
  padding: "4px 12px", // ✅ half padding
  background: "linear-gradient(90deg, #0a061cff, #295293ff, #0e1812ff)",
  color: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 2px 4px rgba(0,0,0,0.25)", // ✅ lighter shadow
  position: "sticky",
  top: 0,
  zIndex: 1000,
  flexWrap: "wrap",
};

const leftStyle = {
  display: "flex",
  alignItems: "center",
};

// 📌 Super Slim Logo
const getLogoStyle = () => {
  if (window.innerWidth <= 480) return { height: "22px", marginRight: "4px" };
  if (window.innerWidth <= 768) return { height: "28px", marginRight: "6px" };
  return { height: "32px", marginRight: "8px" }; // ✅ almost half of old size
};

// 📌 Slim Title
const getTitleStyle = () => {
  let fontSize = "14px";
  if (window.innerWidth <= 480) fontSize = "11px";
  else if (window.innerWidth <= 768) fontSize = "12px";

  return {
    margin: 0,
    fontSize,
    fontFamily: "'Orbitron', sans-serif",
    textTransform: "uppercase",
    fontWeight: "bold",
    background: "linear-gradient(90deg, #00f7ff, #1498c5ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "0.5px",
  };
};

const navStyle = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "center",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  marginLeft: "6px", // ✅ reduced spacing
  fontWeight: "500",
  fontSize: "12px", // ✅ smaller text
  fontFamily: "'Poppins', sans-serif",
  padding: "2px 4px", // ✅ very slim padding
  borderRadius: "4px",
  transition: "all 0.3s ease",
};
