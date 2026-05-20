import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      {" "}
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-20 items-center">
        {/* 🧠 LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="relative inline-block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Châu
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 blur-2xl opacity-30 -z-10"></span>
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Backend Developer
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 max-w-lg">
            I’m a backend developer in the early stage of my journey, focused on
            building real-world systems and improving step by step. I have been
            working with Spring Boot, Docker, and RESTful APIs, while exploring
            how backend systems operate behind the scenes — from handling data
            to structuring services. This is where I document what I build and
            what I learn as I grow into a better developer.
          </p>
          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            {/* Contact */}
            <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 transition">
              Contact Me
            </button>

            {/* Projects */}
            <button className="px-6 py-3 rounded-2xl border border-gray-600 text-gray-300 hover:border-purple-400 hover:text-white transition">
              View Projects
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Glow circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 blur-3xl opacity-30 animate-pulse" />

            {/* Avatar */}
            <img
              src="https://res.cloudinary.com/tienanh/image/upload/v1778263509/avatar_pnpgak.png"
              alt="avatar"
              className="relative rounded-full w-full h-full object-cover border-4 border-white/10 shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
