import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code, Zap, Terminal, Cpu } from "lucide-react";

const eventLogo = "/event logo.png";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    document.title = "Techno Arena | One Arena. One Code.";
  }, []);

  const codeSnippets = ["<Arena/>", "while(true)", "{ code }", "++score"];
  const techIcons = [Code, Zap, Terminal, Cpu];

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
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight"
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
            
            {/* Animated Background Text */}
            <div className="absolute -inset-4 opacity-5 text-9xl font-black text-red-500 select-none pointer-events-none">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.05, 0.1, 0.05]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
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
                ease: "easeInOut"
              }}
            >
              Infinite Loops.
            </motion.p>
          </motion.div>

          {/* Interactive Code Elements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-2 md:gap-3"
          >
            {codeSnippets.map((snippet, index) => (
              <motion.div
                key={index}
                className="px-3 py-2 bg-gray-900/60 border border-red-500/20 rounded-lg font-mono text-xs md:text-sm text-gray-300 cursor-pointer backdrop-blur-sm hover:bg-red-500/10 transition-colors duration-300"
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(239, 68, 68, 0.4)",
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  y: [0, -1, 0],
                }}
                transition={{
                  duration: 2.5 + index * 0.3,
                  repeat: Infinity,
                  delay: index * 0.1,
                  ease: "easeInOut"
                }}
              >
                {snippet}
              </motion.div>
            ))}
          </motion.div>

          {/* Tech Icons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex gap-6 items-center"
          >
            {techIcons.map((Icon, index) => (
              <motion.div
                key={index}
                className="p-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl cursor-pointer"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  backgroundColor: "#dc2626"
                }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3 + index,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut"
                }}
              >
                <Icon size={24} className="text-gray-400" />
              </motion.div>
            ))}
          </motion.div>
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
                ease: "easeInOut"
              }}
              whileHover={{
                rotateY: [0, 15, -15, 0],
                scale: 1.1,
                filter: "drop-shadow(0 0 30px rgba(239, 68, 68, 0.5))"
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
                ease: "easeInOut"
              }}
            />

            {/* Orbiting Elements */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-red-500 rounded-full"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  top: "50%",
                  left: "50%",
                  transformOrigin: `${120 + i * 40}px 0px`,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Interactive Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic Grid */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px"
          }}
          animate={{
            backgroundPositionX: [0, 50],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating Interactive Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-500 rounded-full opacity-40"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
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
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Interactive Scan Line Effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-60"
        animate={{
          y: [0, typeof window !== 'undefined' ? window.innerHeight : 800, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}