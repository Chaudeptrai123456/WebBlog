// "use client";

// import { useEffect, useState } from "react";

// export default function Astronaut() {
//   const [mouse, setMouse] = useState({ x: 0, y: 0 });
//   const [blink, setBlink] = useState(false);

//   // 👀 theo chuột
//   useEffect(() => {
//     const move = (e: MouseEvent) => {
//       setMouse({
//         x: (e.clientX / window.innerWidth - 0.5) * 10,
//         y: (e.clientY / window.innerHeight - 0.5) * 10,
//       });
//     };
//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   // 😌 chớp mắt random
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBlink(true);
//       setTimeout(() => setBlink(false), 200);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="fixed right-6 bottom-10 z-50">
//       <svg
//         viewBox="0 0 200 200"
//         className="w-[90px] md:w-[120px] animate-float"
//       >
//         {/* Helmet */}
//         <circle
//           cx="100"
//           cy="70"
//           r="45"
//           fill="#e5e7eb"
//           stroke="#1f2937"
//           strokeWidth="4"
//         />

//         {/* Visor */}
//         <ellipse
//           cx="100"
//           cy="75"
//           rx="30"
//           ry="22"
//           fill="#7dd3fc"
//           stroke="#1f2937"
//           strokeWidth="3"
//         />

//         {/* 👀 Eyes */}
//         <g transform={`translate(${mouse.x}, ${mouse.y})`}>
//           {!blink ? (
//             <>
//               <circle cx="90" cy="75" r="4" fill="#1f2937" />
//               <circle cx="110" cy="75" r="4" fill="#1f2937" />
//             </>
//           ) : (
//             <>
//               <line
//                 x1="85"
//                 y1="75"
//                 x2="95"
//                 y2="75"
//                 stroke="#1f2937"
//                 strokeWidth="2"
//               />
//               <line
//                 x1="105"
//                 y1="75"
//                 x2="115"
//                 y2="75"
//                 stroke="#1f2937"
//                 strokeWidth="2"
//               />
//             </>
//           )}
//         </g>

//         {/* Body */}
//         <rect
//           x="55"
//           y="105"
//           width="90"
//           height="65"
//           rx="30"
//           fill="#e5e7eb"
//           stroke="#1f2937"
//           strokeWidth="4"
//         />

//         {/* Arms */}
//         <rect
//           x="20"
//           y="110"
//           width="40"
//           height="50"
//           rx="20"
//           fill="#e5e7eb"
//           stroke="#1f2937"
//           strokeWidth="4"
//         />
//         <rect
//           x="140"
//           y="110"
//           width="40"
//           height="50"
//           rx="20"
//           fill="#e5e7eb"
//           stroke="#1f2937"
//           strokeWidth="4"
//         />

//         {/* Line */}
//         <line
//           x1="100"
//           y1="105"
//           x2="100"
//           y2="150"
//           stroke="#1f2937"
//           strokeWidth="3"
//         />

//         {/* Badge */}
//         <circle
//           cx="120"
//           cy="130"
//           r="8"
//           fill="#facc15"
//           stroke="#1f2937"
//           strokeWidth="2"
//         />
//       </svg>

//       <style jsx>{`
//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//         }

//         @keyframes float {
//           0% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-12px);
//           }
//           100% {
//             transform: translateY(0px);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
export default function Astronaut() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 8,
        y: (e.clientY / window.innerHeight - 0.5) * 8,
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="right-6 bottom-10 z-50">
      <svg
        viewBox="0 0 200 200"
        className="w-[90px] md:w-[120px] animate-float"
      >
        {/* 👒 STRAW HAT */}
        <ellipse
          cx="100"
          cy="45"
          rx="50"
          ry="15"
          fill="#facc15"
          stroke="#1f2937"
          strokeWidth="3"
        />
        <rect
          x="70"
          y="35"
          width="60"
          height="20"
          rx="10"
          fill="#fde68a"
          stroke="#1f2937"
          strokeWidth="3"
        />
        {/* dây mũ */}
        <line
          x1="100"
          y1="55"
          x2="100"
          y2="95"
          stroke="#1f2937"
          strokeWidth="2"
        />

        {/* 👦 HEAD */}
        <circle
          cx="100"
          cy="75"
          r="28"
          fill="#fde68a"
          stroke="#1f2937"
          strokeWidth="3"
        />

        {/* 👀 EYES (follow + blink giữ nguyên) */}
        <g transform={`translate(${mouse.x}, ${mouse.y})`}>
          {!blink ? (
            <>
              <circle cx="90" cy="75" r="3.5" fill="#1f2937" />
              <circle cx="110" cy="75" r="3.5" fill="#1f2937" />
            </>
          ) : (
            <>
              <line
                x1="85"
                y1="75"
                x2="95"
                y2="75"
                stroke="#1f2937"
                strokeWidth="2"
              />
              <line
                x1="105"
                y1="75"
                x2="115"
                y2="75"
                stroke="#1f2937"
                strokeWidth="2"
              />
            </>
          )}
        </g>

        {/* 😁 SMILE */}
        <path
          d="M85 88 Q100 100 115 88"
          stroke="#1f2937"
          strokeWidth="2"
          fill="none"
        />

        {/* 👕 BODY (áo đỏ Luffy) */}
        <rect
          x="55"
          y="105"
          width="90"
          height="65"
          rx="30"
          fill="#ef4444"
          stroke="#1f2937"
          strokeWidth="4"
        />

        {/* 🍗 BỤNG (vibe đùi gà 😂) */}
        <ellipse cx="100" cy="130" rx="20" ry="14" fill="#fde68a" />

        {/* 💪 ARMS */}
        {/* <rect
          x="20"
          y="110"
          width="40"
          height="50"
          rx="20"
          fill="#fde68a"
          stroke="#1f2937"
          strokeWidth="4"
        />
        <rect
          x="140"
          y="110"
          width="40"
          height="50"
          rx="20"
          fill="#fde68a"
          stroke="#1f2937"
          strokeWidth="4"
        /> */}
        <g className="gear3-arm">
          <rect
            x="20"
            y="110"
            width="40"
            height="50"
            rx="20"
            fill="#fde68a"
            stroke="#1f2937"
            strokeWidth="4"
          />
        </g>
        <rect
          x="140"
          y="110"
          width="40"
          height="50"
          rx="20"
          fill="#fde68a"
          stroke="#1f2937"
          strokeWidth="4"
        />
        {/* 🔘 BUTTON */}
        <circle
          cx="120"
          cy="130"
          r="6"
          fill="#facc15"
          stroke="#1f2937"
          strokeWidth="2"
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
            transform: translateY(-12px) rotate(2deg);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
}
