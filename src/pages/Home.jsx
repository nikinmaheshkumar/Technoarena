import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiInstagram, SiLinkedin, SiMedium } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const eventLogo = "/event logo.png";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    document.title = "Techno Arena | One Arena. One Code.";
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden px-6 md:px-12 lg:px-20">
      {/* Main Content Grid */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-8 lg:space-y-12 relative z-10"
        >
          {/* Main Heading */}
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight neon-text"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.span
                className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                TECHNO
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mt-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                ARENA
              </motion.span>
            </motion.h1>

            {/* Stranger Things "Upside Down" Shadow */}
            <motion.div
              className="absolute top-full left-0 text-9xl font-black text-red-900 opacity-10 pointer-events-none select-none transform -scale-y-100"
              animate={{
                opacity: [0.05, 0.1, 0.05],
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              TECHNO ARENA
            </motion.div>

            {/* Animated Background Text */}
            <div className="absolute -inset-4 opacity-5 text-9xl font-black text-red-500 select-none pointer-events-none">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.05, 0.1, 0.05],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ARENA
              </motion.div>
            </div>
          </div>

          {/* Interactive Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="space-y-4"
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300 leading-relaxed">
              One Arena. One Code.
            </p>
            <motion.p
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-400"
              animate={{
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Infinite Loops.
            </motion.p>
          </motion.div>

          {/* Social Media Links */}
          <div className="mt-6 flex flex-col divide-y divide-gray-600 text-white text-lg max-w-max">
            <a
              href="#"
              className="flex items-center gap-3 py-3 hover:underline group"
              title="Follow on Instagram"
            >
              <SiInstagram
                size={28}
                color="#E4405F"
                className="group-hover:animate-pulse transition"
              />
              <span className="underline-offset-4 group-hover:underline transition">
                Follow on Instagram
              </span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 py-3 hover:underline group"
              title="Connect to LinkedIn"
            >
              <SiLinkedin
                size={28}
                color="#0077B5"
                className="group-hover:animate-pulse transition"
              />
              <span className="underline-offset-4 group-hover:underline transition">
                Connect to LinkedIn
              </span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 py-3 hover:underline group"
              title="Follow on Medium"
            >
              <SiMedium
                size={28}
                color="#000000"
                className="group-hover:animate-pulse transition"
              />
              <span className="underline-offset-4 group-hover:underline transition">
                Follow on Medium
              </span>
            </a>

            {/* Website Button */}
            <a
              href="https://ieeeras-vit.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold text-sm sm:text-base transition transform hover:scale-105 hover:shadow-lg animate-pulse-slow"
              title="Visit Our Website"
            >
              Visit Our Website <FiExternalLink />
            </a>
          </div>
        </motion.div>

        {/* Right Side - Event Logo */}
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Interactive Logo Container */}
          <motion.div
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            {/* Main Logo */}
            <motion.img
              src={eventLogo}
              alt="Techno Arena Event Logo"
              className="w-80 sm:w-96 md:w-[28rem] lg:w-[32rem] mx-auto relative z-10"
              animate={{
                y: [0, -10, 0],
                rotateY: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                rotateY: [0, 15, -15, 0],
                scale: 1.1,
                filter: "drop-shadow(0 0 30px rgba(239, 68, 68, 0.5))",
              }}
            />

            {/* Interactive Glow Effects */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-red-600/30 to-red-700/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
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
          animate={{
            backgroundPositionX: [0, 50],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-500 rounded-full opacity-40"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 800),
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

      {/* Fog / Smoke Layer */}
      <motion.div
        className="absolute inset-0 bg-[url('/fog.png')] bg-cover bg-center opacity-20 mix-blend-screen pointer-events-none"
        animate={{
          backgroundPositionX: ["0%", "100%", "0%"],
          backgroundPositionY: ["0%", "50%", "0%"],
          opacity: [0.1, 0.3, 0.15],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      {/* Scan Line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-60"
        animate={{
          x: [-200, 1200],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
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
