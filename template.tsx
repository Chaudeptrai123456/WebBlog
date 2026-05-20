"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    const count = Number(localStorage.getItem("visitCount") || "0") + 1;
    localStorage.setItem("visitCount", count.toString());

    if (count < 5)
      setSpeed(1); // full effect
    else if (count < 15)
      setSpeed(0.7); // nhẹ hơn
    else setSpeed(0.4); // gần như tắt
  }, [pathname]);

  return (
    <motion.div
      key={pathname}
      className="relative min-h-screen overflow-hidden"
    >
      {/* ☁️ CLOUD */}
      <motion.div
        key={pathname + "-cloud"}
        initial={{
          clipPath: "circle(0% at 50% 50%)",
          opacity: 1,
        }}
        animate={{
          clipPath: "circle(150% at 50% 50%)",
          opacity: 0,
        }}
        transition={{
          duration: 0.9 * speed,
          ease: "easeInOut",
        }}
        className="fixed inset-0 z-[9999] pointer-events-none bg-white"
        style={{ filter: "blur(40px)" }}
      />

      {/* 🌌 PAGE */}
      <motion.div
        key={pathname + "-page"}
        initial={{
          opacity: 0,
          scale: 0.96,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.8 * speed,
          delay: 0.2 * speed,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
