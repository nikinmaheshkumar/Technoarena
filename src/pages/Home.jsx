import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiInstagram, SiLinkedin, SiMedium } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import GooeyNav from "../components/GooeyNav";
const eventLogo = "/event logo.png";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    document.title = "Techno Arena | One Arena. One Code.";
  }, []);

  return (
    <div className="min-h-screen w-full flex items-start lg:items-center justify-center relative overflow-hidden px-6 md:px-12 lg:px-20 pt-4 sm:pt-6 lg:pt-20">
      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-20">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
          className="relative flex justify-center items-center order-1 lg:order-2"
        >
          <motion.div className="relative group cursor-pointer" whileHover={{ scale: 1.05 }}>
            <motion.img
              src={eventLogo}
              alt="Techno Arena Event Logo"
              className="w-40 sm:w-56 md:w-80 lg:w-[32rem] mx-auto relative z-10"
              animate={{ y: [0, -10, 0], rotateY: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{
                rotateY: [0, 15, -15, 0],
                scale: 1.1,
                filter: "drop-shadow(0 0 30px rgba(239, 68, 68, 0.5))",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-6 lg:space-y-12 relative z-10 text-center lg:text-left order-2 lg:order-1"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black leading-none tracking-tight neon-text heading"
          >
            <motion.div
              className="flex flex-col md:items-start items-center mt-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://fontmeme.com/permalink/250910/e2b66775309d9b3d9cd3efd2f5fdc9a6.png"
                alt="Stranger Things Logo"
                className="
                  w-auto
                  h-32 md:h-44 lg:h-52
                  mx-auto md:mx-0
                "
              />
            </motion.div>
          </motion.h1>

          {/* Tagline */}
          <motion.div className="space-y-2 sm:space-y-4">
            <p className="text-base sm:text-lg md:text-2xl font-light text-gray-300 leading-relaxed font-Asimovian">
              One Arena. One Code.
            </p>
            <motion.p
              className="text-lg sm:text-xl md:text-3xl font-bold text-red-400 font-Asimovian neon-text inline-block"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Infinite Loops.
            </motion.p>
          </motion.div>

          {/* Social Media Links */}
          <div className="mt-4 sm:mt-6 flex flex-col divide-y divide-gray-600 text-white text-sm sm:text-base max-w-max mx-auto lg:mx-0">
            <a href="#" className="flex items-center gap-2 sm:gap-3 py-2 sm:py-3 group font-Frijole italic">
              <SiInstagram size={22} color="#E4405F" />
              <span>Follow on Instagram</span>
            </a>
            <a href="#" className="flex items-center gap-2 sm:gap-3 py-2 sm:py-3 group font-Frijole italic">
              <SiLinkedin size={22} color="#0077B5" />
              <span>Connect to LinkedIn</span>
            </a>
            <a href="#" className="flex items-center gap-2 sm:gap-3 py-2 sm:py-3 group font-Frijole italic">
              <SiMedium size={22} color="#000000" />
              <span>Follow on Medium</span>
            </a>

            <a
              href="https://ieeeras-vit.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 sm:mt-6 inline-flex items-center justify-center gap-2 px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md font-Asimovian font-semibold text-sm transition mx-auto sm:mx-0"
            >
              Visit Our Website <FiExternalLink />
            </a>
          </div>


        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
          animate={{ backgroundPositionX: [0, 50] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-500 rounded-full opacity-40"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, -30, 30, -30],
              x: [null, -20, 20, -20],
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Fog */}
      <motion.div
        className="absolute inset-0 bg-[url('/fog.png')] bg-cover bg-center opacity-20 mix-blend-screen pointer-events-none"
        animate={{
          backgroundPositionX: ["0%", "100%", "0%"],
          backgroundPositionY: ["0%", "50%", "0%"],
          opacity: [0.1, 0.3, 0.15],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Scan Line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-60"
        animate={{ x: [-200, 1200] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />

      <style jsx>{`
        .neon-text {
          text-shadow: 0 0 6px #ff0000, 0 0 12px #ff4c4c;
          animation: neon-flicker 3s infinite alternate;
        }
        @keyframes neon-flicker {
          0% { text-shadow: 0 0 3px #ff0000, 0 0 8px #ff4c4c; }
          50% { text-shadow: 0 0 6px #ff0000, 0 0 12px #ff4c4c; }
          100% { text-shadow: 0 0 4px #ff0000, 0 0 9px #ff4c4c; }
        }
      `}</style>
    </div>
  );
}
