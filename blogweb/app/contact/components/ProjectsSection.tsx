"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { projectList } from "@/app/mock/projectData";

export default function ProjectsSection() {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-28 text-white px-6">
      {/* TITLE */}
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-bold">My Projects</h1>
        <p className="text-gray-400 mt-4">Things I've actually built 🚀</p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectList.map((project, index) => {
          const isFlipped = flipped[project.id];

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group [perspective:1200px] cursor-pointer"
              onClick={() => toggleFlip(project.id)}
            >
              {/* CARD */}
              <div
                className={`relative h-[420px] w-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  isFlipped ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* FRONT */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/20 [backface-visibility:hidden]">
                  <img
                    src={project.image}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* ✨ HINT */}
                  <div className="absolute top-4 right-4 z-20 text-xs text-white/70 bg-black/40 px-3 py-1 rounded-full backdrop-blur animate-pulse">
                    Click to flip ↻
                  </div>
                  <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                    <h2 className="text-xl font-semibold">{project.title}</h2>

                    <p className="text-sm text-gray-300 mt-2">
                      {project.short}
                    </p>

                    {/* 🔥 GITHUB FRONT */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        className="mt-4 inline-block text-xs px-3 py-1 bg-white/20 rounded-full hover:bg-white/30 transition"
                      >
                        View Code →
                      </a>
                    )}
                  </div>
                  <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                    <h2 className="text-xl font-semibold">{project.title}</h2>

                    <p className="text-sm text-gray-300 mt-2">
                      {project.short}
                    </p>
                  </div>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/20 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <img
                    src={project.image}
                    className="absolute inset-0 w-full h-full object-cover scale-110 blur-md opacity-30"
                  />

                  <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

                  <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 blur-3xl rotate-45" />

                  {/* ✨ HINT BACK */}
                  <div className="absolute top-4 right-4 z-20 text-xs text-white/70 bg-black/40 px-3 py-1 rounded-full backdrop-blur">
                    Click again ↻
                  </div>

                  <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                    <div>
                      <h2 className="text-xl font-semibold">{project.title}</h2>

                      <p className="text-sm text-gray-300 mt-3 leading-relaxed line-clamp-4">
                        {project.description}
                      </p>

                      {/* TECH */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2 py-1 bg-white/10 rounded-full"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* LINKS */}
                    <div className="flex gap-4 text-sm mt-6">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          className="hover:text-white/80 transition"
                        >
                          GitHub →
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          className="hover:text-white/80 transition"
                        >
                          Live →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
