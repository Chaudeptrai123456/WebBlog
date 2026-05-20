"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      {/* 🌌 subtle glow background */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          About{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Me
          </span>
        </h2>
        <p className="text-gray-400 leading-relaxed">
          I’m a backend developer at the beginning of my journey, focused on
          building real-world systems and improving step by step.
        </p>
        <p className="text-gray-400 leading-relaxed">
          I enjoy working with Spring Boot, Docker, and designing backend logic
          that handles data efficiently. I’m especially interested in how
          systems are structured, how services communicate, and how performance
          can be improved.
        </p>
        {/* 🔥 signature line */}
        <p className="italic text-sm text-gray-500 border-l-2 border-purple-500 pl-4">
          I believe consistency and curiosity are the key to becoming a better
          engineer.{" "}
        </p>

        {/* INFO */}
        <div className="grid grid-cols-2 gap-4 pt-4 text-sm">
          <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2">
            📍 Vietnam (Open to Remote Opportunities)
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2">
            🎓 Student
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2">
            💻 Backend Focus
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2">
            ⚙️ Java, Spring Boot
          </div>
        </div>
      </motion.div>

      {/* RIGHT CARD */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 blur-2xl opacity-20 rounded-2xl" />

        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:scale-[1.02] transition duration-300">
          <h3 className="text-xl font-semibold mb-6">Highlights</h3>

          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3">
              <span className="text-purple-400">●</span>
              Built RESTful APIs with Spring Boot
            </li>
            <li className="flex items-center gap-3">
              <span className="text-cyan-400">●</span>
              Containerized backend services using Docker
            </li>
            <li className="flex items-center gap-3">
              <span className="text-purple-400">●</span>
              Designed basic microservice architecture
            </li>
            <li className="flex items-center gap-3">
              <span className="text-cyan-400">●</span>
              Exploring system design and scalability
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
