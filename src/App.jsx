import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import GooeyNav from "./components/GooeyNav";
import Home from "./pages/Home";
import AboutRAS from "./pages/AboutRAS";
import AboutEvent from "./pages/AboutEvent";
import Timeline from "./pages/Timeline";

function GooeyNavbar() {
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", onClick: () => navigate("/") },
    { label: "About RAS", onClick: () => navigate("/about-ras") },
    { label: "About Event", onClick: () => navigate("/about-event") },
    { label: "Timeline", onClick: () => navigate("/timeline") },
  ];

  return (
    <div className="w-full fixed top-0 left-0 z-50 px-4 md:px-8">
      <div className="flex justify-center pt-4">
        <div
          className="p-3 rounded-2xl shadow-lg"
          style={{
            background: "rgba(255, 255, 255, 0.05)", // Transparent glass background
            backdropFilter: "blur(12px)", // Blur effect for glassmorphism
            WebkitBackdropFilter: "blur(12px)", // Safari support
            border: "1px solid rgba(255, 255, 255, 0.2)", // Subtle glass border
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)", // Smooth shadow
          }}
        >
          <GooeyNav
            items={navItems}
            particleCount={15}
            particleDistances={[80, 15]}
            particleR={90}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <GooeyNavbar />
      {/* Gradient Background */}
      <div
        className="pt-32  min-h-screen"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-ras" element={<AboutRAS />} />
          <Route path="/about-event" element={<AboutEvent />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </div>
    </Router>
  );
}
