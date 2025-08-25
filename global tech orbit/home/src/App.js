import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from './components/Footer'
import Home from "./pages/Home";
import MissionVision from "./pages/MissionVision";
import Courses from "./pages/Courses";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Founder from "./pages/Founder";
export default function App() {
  return (
    <Router>
      <Header />
      <Footer /> {/* ✅ Always visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<MissionVision />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/services" element={<Services />} /> {/* ✅ Match */}
        <Route path="/contact" element={<Contact />} />
         <Route path="/Founder" element={<Founder />} />
      </Routes>
    </Router>
  );
}
