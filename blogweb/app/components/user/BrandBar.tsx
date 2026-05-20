"use client";

import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { heroList } from "@/app/mock/heroData";
import Astronaut from "./components/Astronaut";
import { motion, useMotionValue } from "framer-motion";
export default function BrandBar() {
  const router = useRouter();
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [index, setIndex] = useState(0);
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
  const handleDragEnd = (_: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    // 👇 độ nhạy (Châu chỉnh số này nếu muốn)
    const threshold = 80;

    if (offset < -threshold || velocity < -500) {
      setIndex((prev) => (prev + 1) % topPosts.length);
    } else if (offset > threshold || velocity > 500) {
      setIndex((prev) => (prev - 1 + topPosts.length) % topPosts.length);
    }
  };
  const dragX = useMotionValue(0);
  useEffect(() => {
    dragX.set(0);

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % topPosts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
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
        <h2 className="text-5xl font-bold">Chưa biết đặt tên</h2>
        <div></div>
      </div>
      <div className="relative flex items-center justify-center w-full px-6 md:px-16">
        {/* LEFT BUTTON */}
        <button
          onClick={() =>
            setIndex((prev) => (prev - 1 + topPosts.length) % topPosts.length)
          }
          className="absolute left-2 md:left-6 z-30 px-4 py-3 bg-white/10 hover:bg-white/20  rounded-xl backdrop-blur-md  transition "
        >
          ←
        </button>
        {/* CAROUSEL */}
        <motion.div
          className="relative h-[500px] flex items-center justify-center perspective-[1200px] cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.04}
          dragMomentum={false}
          onDragEnd={handleDragEnd}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative h-[500px] flex items-center justify-center perspective-[1200px]">
            {topPosts.map((post, i) => {
              const total = topPosts.length;
              const offset = (i - index + total) % total;
              const position = offset > total / 2 ? offset - total : offset;

              return (
                <motion.div
                  key={post.id}
                  onClick={() => router.push(`/blog/${post.id}`)}
                  animate={{
                    rotateY: position * 50,
                    translateX: position * 220,
                    scale: position === 0 ? 1.1 : 0.85,
                    opacity: position === 0 ? 1 : 0.4,
                    zIndex: position === 0 ? 20 : 10,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className={`absolute w-[260px] h-[420px] rounded-3xl overflow-hidden border border-white/20 cursor-pointer transition-all duration-500
              ${
                position === 0
                  ? "shadow-[0_0_70px_rgba(0,255,255,0.35)] scale-[1.12] border-cyan-300/40"
                  : "shadow-[0_0_25px_rgba(255,255,255,0.08)] scale-[0.85] opacity-60"
              }
            `}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img
                    src={post.image}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="relative z-10 p-5 flex flex-col justify-end h-full">
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                    <p className="text-sm text-gray-300 mt-2 line-clamp-2">
                      {post.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        <button
          onClick={() => setIndex((prev) => (prev + 1) % topPosts.length)}
          className="absolute right-2 md:right-6 z-30 px-4 py-3 bg-white/10 hover:bg-white/20 rounded-xl backdrop-blur-md transition "
        >
          →
        </button>
      </div>
    </section>
  );
}
