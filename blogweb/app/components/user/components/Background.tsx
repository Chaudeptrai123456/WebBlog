"use client";

import { useEffect, useRef } from "react";

export default function Background() {
  const smoothY = useRef(0);
  const targetY = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      targetY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let raf: number;

    const smooth = () => {
      smoothY.current += (targetY.current - smoothY.current) * 0.08;
      const y = Math.min(smoothY.current, 500);

      const el = containerRef.current;
      if (el) {
        el.style.setProperty("--y1", `${y * 0.03}px`);
        el.style.setProperty("--y2", `${y * 0.08}px`);
        el.style.setProperty("--y3", `${y * 0.15}px`);
        el.style.setProperty("--r1", `${y * 0.0005}deg`);
        el.style.setProperty("--r2", `${-y * 0.0008}deg`);
      }

      raf = requestAnimationFrame(smooth);
    };

    raf = requestAnimationFrame(smooth);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-20 pointer-events-none overflow-hidden"
    >
      <div className="absolute inset-0 bg-black" />

      <div
        className="absolute inset-0 opacity-60"
        style={{ transform: "translateY(var(--y1)) scale(1.05)" }}
      >
        <div className="w-full h-full bg-[radial-gradient(circle,_rgba(255,255,255,0.25)_1px,_transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div
        className="absolute inset-0 opacity-70"
        style={{
          transform: "translateY(var(--y2)) scale(1.08) rotate(var(--r1))",
        }}
      >
        <div className="w-full h-full bg-[radial-gradient(circle,_rgba(255,255,255,0.35)_1px,_transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div
        className="absolute inset-0 opacity-90"
        style={{
          transform: "translateY(var(--y3)) scale(1.12) rotate(var(--r2))",
        }}
      >
        <div className="w-full h-full bg-[radial-gradient(circle,_rgba(255,255,255,0.5)_1px,_transparent_1px)] bg-[size:30px_30px]" />
      </div>
    </div>
  );
}
