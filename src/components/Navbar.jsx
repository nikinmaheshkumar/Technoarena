import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GooeyNav from "./GooeyNav"; // Adjust path if needed

export default function Navbar() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", onClick: () => { setMobileMenuOpen(false); navigate("/"); } },
    { label: "About RAS", onClick: () => { setMobileMenuOpen(false); navigate("/about-ras"); } },
    { label: "About Event", onClick: () => { setMobileMenuOpen(false); navigate("/about-event"); } },
    { label: "Timeline", onClick: () => { setMobileMenuOpen(false); navigate("/timeline"); } },
  ];

  return (
    <>
      {/* Desktop gooey nav */}
      <div className="hidden md:block w-full fixed top-0 left-0 z-50 px-4 md:px-8">
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

      {/* Mobile hamburger bar */}
      <header className="md:hidden fixed top-0 left-0 w-full z-50 bg-red-600 flex items-center justify-between px-4 h-12">
        <button
          className="text-black focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        {/* Optional title or logo */}
        <div className="text-black font-semibold">Menu</div>
      </header>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden fixed top-12 left-0 w-full bg-red-600 z-40 flex flex-col p-2 space-y-1">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className="text-black py-2 px-3 rounded hover:bg-black hover:text-white text-left"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </>
  );
}
