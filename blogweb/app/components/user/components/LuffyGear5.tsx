"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function LuffyGear5() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [blink, setBlink] = useState(false);

  // 👀 FOLLOW CHUỘT
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 6,
        y: (e.clientY / window.innerHeight - 0.5) * 6,
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // 😌 BLINK
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 180);
    }, 2500);
    setMounted(true);

    return () => clearInterval(interval);
  }, []);
  const [mounted, setMounted] = useState(false);
  if (!mounted) return null;

  return createPortal(
    <div className="fixed right-6 bottom-10 z-50">
      <svg viewBox="0 0 200 200" className="w-[100px] animate-float">
        {/* ☁️ HAIR */}
        <path
          d="M50 60 
             Q40 30 70 40 
             Q80 15 100 35 
             Q120 10 140 40 
             Q170 30 150 60 
             Q160 80 130 75 
             Q120 95 100 85 
             Q80 100 70 75 
             Q40 80 50 60"
          fill="#ffffff"
          stroke="#1f2937"
          strokeWidth="3"
        />

        {/* 😏 FACE */}
        <circle
          cx="100"
          cy="85"
          r="30"
          fill="#fde68a"
          stroke="#1f2937"
          strokeWidth="3"
        />

        {/* 👀 EYES (FOLLOW + BLINK) */}
        <g transform={`translate(${mouse.x}, ${mouse.y})`}>
          {!blink ? (
            <>
              <circle cx="88" cy="80" r="3.5" fill="#1f2937" />
              <circle cx="112" cy="80" r="3.5" fill="#1f2937" />
            </>
          ) : (
            <>
              <line
                x1="83"
                y1="80"
                x2="93"
                y2="80"
                stroke="#1f2937"
                strokeWidth="2"
              />
              <line
                x1="107"
                y1="80"
                x2="117"
                y2="80"
                stroke="#1f2937"
                strokeWidth="2"
              />
            </>
          )}
        </g>

        {/* 😆 SMILE */}
        <path
          d="M80 95 Q100 115 120 95"
          stroke="#1f2937"
          strokeWidth="3"
          fill="none"
        />
        <rect x="88" y="96" width="24" height="6" fill="#ffffff" />

        {/* 👕 BODY */}
        <rect
          x="60"
          y="115"
          width="80"
          height="55"
          rx="25"
          fill="#ffffff"
          stroke="#1f2937"
          strokeWidth="3"
        />

        {/* 💪 ARMS */}
        <rect
          x="25"
          y="120"
          width="35"
          height="45"
          rx="20"
          fill="#fde68a"
          stroke="#1f2937"
          strokeWidth="3"
        />
        <rect
          x="140"
          y="120"
          width="35"
          height="45"
          rx="20"
          fill="#fde68a"
          stroke="#1f2937"
          strokeWidth="3"
        />
      </svg>

      <style jsx>{`
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>,
    document.body,
  );
}
