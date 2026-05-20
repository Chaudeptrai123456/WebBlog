"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactSection() {
  return (
    <div className="relative  px-6 text-white pb-10">
      {/* 🌌 background glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="max-w-4xl mx-auto text-center">
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Get In{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Touch
          </span>
        </motion.h1>

        {/* SUB */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-gray-400 mt-6 max-w-xl mx-auto"
        >
          I'm always open to learning opportunities, collaborations, or just a
          simple conversation about backend development and system design.
        </motion.p>

        {/* CONTACT CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-16 relative"
        >
          {/* glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 blur-2xl opacity-20 rounded-2xl" />

          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {/* LEFT INFO */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>

                <p className="text-gray-300">
                  📧 Email:{" "}
                  <span className="text-white">
                    anhtiennguyen2001.dev@gmail.com
                  </span>
                </p>

                <p className="text-gray-300">
                  💻 GitHub:{" "}
                  <a
                    href="https://github.com/Chaudeptrai123456"
                    target="_blank"
                    className="text-purple-400 hover:underline"
                  >
                    https://github.com/Chaudeptrai123456
                  </a>
                </p>

                <p className="text-gray-300">
                  🔗 LinkedIn:{" "}
                  <a href="#" className="text-cyan-400 hover:underline">
                    https://www.linkedin.com/in/nguy%E1%BB%85n-ti%E1%BA%BFn-anh-81679b220/
                  </a>
                </p>

                <p className="text-gray-300">📍 Vietnam (Open to Remote)</p>
              </div>

              {/* RIGHT CTA */}
              <div className="flex flex-col justify-center items-start space-y-6">
                <p className="text-gray-400">
                  Feel free to reach out if you want to collaborate, discuss a
                  project, or just connect.
                </p>

                <div className="flex gap-4">
                  <a
                    href="mailto:your.email@gmail.com"
                    className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 transition"
                  >
                    Send Email
                  </a>

                  <Link
                    href="/blog"
                    className="px-6 py-3 rounded-2xl border border-gray-600 text-gray-300 hover:border-purple-400 hover:text-white transition"
                  >
                    Read Blog
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
