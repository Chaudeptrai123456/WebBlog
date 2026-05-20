"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      className="relative min-h-screen overflow-hidden"
    >
      {/* ☁️ CLOUD */}
      <motion.div
        key={pathname + "-cloud"} // 👈 ép re-render luôn cloud
        initial={{
          clipPath: "circle(0% at 50% 50%)",
          opacity: 1,
        }}
        animate={{
          clipPath: "circle(150% at 50% 50%)",
          opacity: 0,
        }}
        transition={{
          duration: 0.9,
          ease: "easeInOut",
        }}
        className="fixed inset-0 z-[9999] pointer-events-none bg-white"
        style={{
          filter: "blur(40px)",
        }}
      />

      {/* 🌌 PAGE */}
      <motion.div
        key={pathname + "-page"} // 👈 rất quan trọng
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
          duration: 0.8,
          delay: 0.2,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
