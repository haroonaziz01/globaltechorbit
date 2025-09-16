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
  padding: "12px 25px",
  background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
  color: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  flexWrap: "wrap", // ✅ Mobile support
};

const leftStyle = {
  display: "flex",
  alignItems: "center",
};

// 📌 Responsive Logo Size
const getLogoStyle = () => {
  if (window.innerWidth <= 480) return { height: "50px", marginRight: "10px" };
  if (window.innerWidth <= 768) return { height: "60px", marginRight: "12px" };
  return { height: "70px", marginRight: "15px" };
};

// 📌 Responsive Title Size
const getTitleStyle = () => {
  let fontSize = "22px";
  if (window.innerWidth <= 480) fontSize = "16px";
  else if (window.innerWidth <= 768) fontSize = "18px";

  return {
    margin: 0,
    fontSize,
    fontFamily: "'Orbitron', sans-serif",
    textTransform: "uppercase",
    fontWeight: "bold",
    background: "linear-gradient(90deg, #00f7ff, #00ff85)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "1px",
  };
};

const navStyle = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap", // ✅ Mobile par line break
  justifyContent: "center",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  marginLeft: "12px",
  fontWeight: "500",
  fontFamily: "'Poppins', sans-serif",
  padding: "6px 8px",
  borderRadius: "6px",
  transition: "all 0.3s ease",
};
