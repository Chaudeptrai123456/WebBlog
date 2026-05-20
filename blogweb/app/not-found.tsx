"use client";

import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white flex items-center justify-center">
      {/* 🌌 Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050510] to-[#02020a]" />

      {/* ✨ Stars layer */}
      <div className="absolute inset-0 bg-[url('/stars.png')] opacity-20 animate-pulse" />

      {/* 🌠 Floating glow orbs */}
      <motion.div
        className="absolute w-[300px] h-[300px] bg-purple-500 rounded-full blur-[120px] opacity-30"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[200px] h-[200px] bg-blue-500 rounded-full blur-[100px] opacity-30"
        animate={{
          x: [0, -120, 120, 0],
          y: [0, 80, -80, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 🚀 Content */}
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          404
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Lost in the galaxy...
        </motion.p>

        <motion.a
          href="/"
          className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Go Home 🌍
        </motion.a>
      </div>
    </div>
  );
}
