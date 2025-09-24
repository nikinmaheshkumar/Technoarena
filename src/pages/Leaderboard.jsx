import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronUpIcon, ChevronDownIcon, MinusIcon } from "@heroicons/react/24/solid";
import leaderboardData from "../data/leaderboard.json";
import Sparkline from "../components/Sparkline";

export default function Leaderboard() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Techno Arena | Leaderboard";
    
    // Simulate data loading
    setTimeout(() => {
      // Process teams data: calculate totals and position changes
      const processedTeams = leaderboardData.map(team => ({
        ...team,
        totalPoints: team.points.reduce((sum, points) => sum + points, 0),
        currentPoints: team.points[team.points.length - 1] || 0,
        previousPoints: team.points.length > 1 ? team.points[team.points.length - 2] : team.points[0] || 0
      }));

      // Sort teams by total points to get current positions
      const sortedTeams = processedTeams.sort((a, b) => b.totalPoints - a.totalPoints);
      
      // Calculate position changes based on points progression
      const teamsWithPositionChanges = sortedTeams.map((team, index) => {
        const currentPosition = index + 1;
        
        // Calculate what the position would have been without the last round
        const teamsWithoutLastRound = processedTeams.map(t => ({
          ...t,
          tempTotal: t.points.slice(0, -1).reduce((sum, points) => sum + points, 0)
        })).sort((a, b) => b.tempTotal - a.tempTotal);
        
        const previousPosition = teamsWithoutLastRound.findIndex(t => t.teamName === team.teamName) + 1;
        const positionChange = previousPosition - currentPosition;
        
        return {
          ...team,
          positionChange
        };
      });

      setTeams(teamsWithPositionChanges);
      setLoading(false);
    }, 500);
  }, []);

  const getPositionIcon = (change) => {
    if (change > 0) {
      return <ChevronUpIcon className="w-4 h-4 text-green-400" />;
    } else if (change < 0) {
      return <ChevronDownIcon className="w-4 h-4 text-red-400" />;
    } else {
      return <MinusIcon className="w-4 h-4 text-gray-400" />;
    }
  };

  const getPositionBadge = (position) => {
    if (position === 1) {
      return "🥇";
    } else if (position === 2) {
      return "🥈";
    } else if (position === 3) {
      return "🥉";
    }
    return position;
  };

  const isTopThree = (position) => position <= 3;

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-xl font-Asimovian">Loading Leaderboard...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full px-6 md:px-12 lg:px-20 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-Asimovian mb-4">
          <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            LEADERBOARD
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 font-light">
          Current team standings and rankings
        </p>
      </motion.div>

      {/* Leaderboard Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        {/* Headers */}
        <div className="hidden md:grid grid-cols-14 gap-4 mb-6 px-6 py-4 text-gray-300 font-semibold text-sm uppercase tracking-wider">
          <div className="col-span-1 text-center">Rank</div>
          <div className="col-span-3">Team Name</div>
          <div className="col-span-3">Members</div>
          <div className="col-span-2 text-center">Points</div>
          <div className="col-span-3 text-center">Progress</div>
          <div className="col-span-2 text-center">Change</div>
        </div>

        {/* Team List */}
        <div className="space-y-4">
          {teams.map((team, index) => {
            const position = index + 1;
            const topThree = isTopThree(position);
            
            return (
              <motion.div
                key={team.teamName}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`
                  relative overflow-hidden rounded-xl
                  ${topThree 
                    ? "bg-gradient-to-r from-red-900/40 to-red-800/30 border-2 border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.3)]" 
                    : "bg-black/30 border border-white/20"
                  }
                  backdrop-filter backdrop-blur-md
                  hover:scale-[1.02] hover:shadow-2xl
                  transition-all duration-300
                `}
                style={{
                  background: topThree 
                    ? "linear-gradient(135deg, rgba(139, 0, 0, 0.4) 0%, rgba(239, 68, 68, 0.2) 50%, rgba(0, 0, 0, 0.6) 100%)"
                    : "rgba(0, 0, 0, 0.3)"
                }}
              >
                {/* Mobile Layout */}
                <div className="md:hidden p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`
                        text-2xl font-bold font-Asimovian flex items-center justify-center
                        w-12 h-12 rounded-full
                        ${topThree ? "bg-red-600/50 text-white" : "bg-gray-600/50 text-gray-300"}
                      `}>
                        {getPositionBadge(position)}
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold font-Asimovian ${topThree ? "text-red-300" : "text-white"}`}>
                          {team.teamName}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {team.teamMembers.join(", ")}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${topThree ? "text-red-400" : "text-white"}`}>
                        {team.totalPoints.toLocaleString()}
                      </div>
                      <div className="flex items-center justify-end mt-1">
                        {getPositionIcon(team.positionChange)}
                        <span className="ml-1 text-sm text-gray-400">
                          {Math.abs(team.positionChange) || "−"}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Mobile Sparkline */}
                  <div className="mt-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xs text-gray-400 mb-2">Points Progress</div>
                      <Sparkline 
                        data={team.points} 
                        width={120} 
                        height={40} 
                        color={topThree ? "#f87171" : "#6b7280"}
                      />
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid grid-cols-14 gap-4 items-center p-6">
                  {/* Rank */}
                  <div className="col-span-1 text-center">
                    <div className={`
                      text-2xl font-bold font-Asimovian flex items-center justify-center
                      w-12 h-12 rounded-full mx-auto
                      ${topThree ? "bg-red-600/50 text-white" : "bg-gray-600/50 text-gray-300"}
                    `}>
                      {getPositionBadge(position)}
                    </div>
                  </div>

                  {/* Team Name */}
                  <div className="col-span-3">
                    <h3 className={`text-xl md:text-2xl font-bold font-Asimovian ${topThree ? "text-red-300" : "text-white"}`}>
                      {team.teamName}
                    </h3>
                  </div>

                  {/* Members */}
                  <div className="col-span-3">
                    <div className="space-y-1">
                      {team.teamMembers.map((member, memberIndex) => (
                        <div key={memberIndex} className="text-gray-300 text-sm">
                          {member}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Points */}
                  <div className="col-span-2 text-center">
                    <div className={`text-2xl md:text-3xl font-bold ${topThree ? "text-red-400" : "text-white"}`}>
                      {team.totalPoints.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">points</div>
                  </div>

                  {/* Progress Sparkline */}
                  <div className="col-span-3 text-center">
                    <div className="flex flex-col items-center">
                      <div className="text-xs text-gray-400 mb-2">Points Progress</div>
                      <Sparkline 
                        data={team.points} 
                        width={100} 
                        height={35} 
                        color={topThree ? "#f87171" : "#6b7280"}
                      />
                      <div className="text-xs text-gray-500 mt-1">
                        {team.points.length} rounds
                      </div>
                    </div>
                  </div>

                  {/* Position Change */}
                  <div className="col-span-2 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      {getPositionIcon(team.positionChange)}
                      <span className="text-lg font-semibold text-gray-300">
                        {Math.abs(team.positionChange) || "−"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Top 3 Glow Effect */}
                {topThree && (
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10 pointer-events-none"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Background Animation */}
      <motion.div
        className="fixed inset-0 pointer-events-none overflow-hidden -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-500 rounded-full opacity-30"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, -30, 30, -30],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes neon-pulse {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(239, 68, 68, 0.5);
          }
          50% { 
            box-shadow: 0 0 40px rgba(239, 68, 68, 0.8);
          }
        }
        
        .neon-glow {
          animation: neon-pulse 2s infinite;
        }
      `}</style>
    </div>
  );
}