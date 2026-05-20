"use client";

import { useEffect, useState } from "react";

export default function SolarSystem({ activeIndex }: { activeIndex?: number }) {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 0.01);
    }, 16);

    return () => clearInterval(interval);
  }, []);

  // 🧠 helper tính vị trí orbit
  const getPosition = (radius: number, speed: number) => {
    const a = angle * speed;
    return {
      x: 150 + radius * Math.cos(a),
      y: 150 + radius * Math.sin(a),
    };
  };

  const p1 = getPosition(50, 1); // nhanh
  const p2 = getPosition(80, 0.6); // trung bình
  const p3 = getPosition(110, 0.3); // chậm

  return (
    <div
      className="    fixed bottom-4 right-4 
    md:bottom-6 md:right-6
    z-50 
    pointer-events-none 
    opacity-80
    w-[120px] sm:w-[140px] md:w-[180px] lg:w-[220px]
    aspect-square
    bg-white/5 backdrop-blur-xl
    rounded-2xl
    p-2 md:p-3 bg-white/5 p-4 rounded-xl z-[-1]"
    >
      <svg
        viewBox="0 0 300 300"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* ☀️ Sun */}
        <circle cx="150" cy="150" r="18" fill="yellow" />

        {/* Orbit lines */}
        <circle
          cx="150"
          cy="150"
          r="50"
          stroke="white"
          fill="none"
          opacity="0.2"
        />
        <circle
          cx="150"
          cy="150"
          r="80"
          stroke="white"
          fill="none"
          opacity="0.2"
        />
        <circle
          cx="150"
          cy="150"
          r="110"
          stroke="white"
          fill="none"
          opacity="0.2"
        />

        {/* 🪐 Planet 1 */}
        <circle
          cx={p1.x}
          cy={p1.y}
          r="6"
          fill={activeIndex === 0 ? "cyan" : "white"}
        />

        {/* 🪐 Planet 2 */}
        <circle
          cx={p2.x}
          cy={p2.y}
          r="8"
          fill={activeIndex === 1 ? "orange" : "white"}
        />

        {/* 🪐 Planet 3 */}
        <circle
          cx={p3.x}
          cy={p3.y}
          r="10"
          fill={activeIndex === 2 ? "purple" : "white"}
        />
      </svg>
    </div>
  );
}
