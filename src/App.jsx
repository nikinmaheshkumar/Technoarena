import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust path as needed
import Home from "./pages/Home";
import AboutRAS from "./pages/AboutRAS";
import AboutEvent from "./pages/AboutEvent";
import Timeline from "./pages/Timeline";

export default function App() {
  return (
    <Router>
      <Navbar />
      {/* Content padding top to avoid being hidden under fixed navbar */}
      <div className="pt-32 min-h-screen">
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
