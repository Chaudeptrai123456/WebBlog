"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { heroList } from "@/app/mock/heroData";
import Astronaut from "./components/Astronaut";

export default function FeaturedPosts() {
  const router = useRouter();
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const topPosts = [...heroList]
    .sort((a, b) => (b.stats?.views ?? 0) - (a.stats?.views ?? 0))
    .slice(0, 5);

  const glow = [
    "shadow-[0_0_50px_rgba(255,215,0,0.18)]",
    "shadow-[0_0_50px_rgba(192,192,192,0.15)]",
    "shadow-[0_0_50px_rgba(205,127,50,0.15)]",
    "shadow-[0_0_50px_rgba(100,149,237,0.15)]",
    "shadow-[0_0_50px_rgba(255,105,180,0.12)]",
  ];

  const handleMouseMove = (e: React.MouseEvent, id: string) => {
    const card = cardRefs.current[id];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -10;
    const rotateY = (x / rect.width - 0.5) * 10;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  };

  const resetTilt = (id: string) => {
    const card = cardRefs.current[id];
    if (!card) return;

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  return (
    <section className="py-28 text-white">
      <div className="flex justify-between items-center mb-16 w-full bg-parent">
        <h2 className="text-5xl font-bold">Featured Posts</h2>
        <div className="bg-parent">
          {/* <Astronaut /> */}
        </div>
        <div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-6">
        {topPosts.map((post, index) => (
          <motion.div
            key={post.id}
            ref={(el) => {
              cardRefs.current[post.id] = el;
            }}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            onClick={() => router.push(`/blog/${post.id}`)}
            onMouseMove={(e) => handleMouseMove(e, post.id)}
            onMouseLeave={() => resetTilt(post.id)}
            className={`
              relative cursor-pointer rounded-3xl overflow-hidden
              h-[420px]
              border border-white/20
              transition-all duration-300
              ${glow[index]}
              hover:z-30
            `}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* BACKGROUND IMAGE */}
            {/* BACKGROUND IMAGE */}
            <img
              src={post.image}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-500 hover:scale-125"
            />

            {/* 🌌 GLASS DEPTH OVERLAY (QUAN TRỌNG) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* 🌠 VIGNETTE (tạo chiều sâu galaxy) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.6))]" />

            {/* LIGHT GLOW EFFECT */}
            <div className="absolute inset-0">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 blur-3xl rotate-45" />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 p-6 flex flex-col justify-end h-full backdrop-blur-[1px]">
              <h3 className="text-lg font-semibold line-clamp-2">
                {post.title}
              </h3>

              <p className="text-sm text-gray-300 mt-2 line-clamp-2">
                {post.subtitle}
              </p>

              <div className="mt-4 text-xs text-gray-300">
                👁 {post.stats?.views ?? 0} views
              </div>

              <p className="text-sm text-white mt-5 opacity-80">Explore →</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
