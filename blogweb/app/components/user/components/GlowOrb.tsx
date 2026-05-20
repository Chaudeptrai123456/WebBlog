import { motion } from "framer-motion";

export default function GlowOrb() {
  return (
    <div className="relative w-[200px] h-[200px] flex items-center justify-center">
      {/* ánh sáng lan */}
      <motion.div
        className="absolute w-full h-full rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,215,0,0.6) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* lõi quả cầu */}
      <motion.div
        className="w-[120px] h-[120px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #fff, #ffd700, #ff8c00)",
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
