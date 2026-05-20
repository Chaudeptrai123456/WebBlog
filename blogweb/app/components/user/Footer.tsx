"use client";

export default function Footer() {
  return (
    <footer className="relative mt-32 text-white">
      {/* nền nhẹ */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-[#050510] to-transparent" />

      {/* glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[1px] bg-cyan-400/30 blur-sm" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* copyright */}
        <p className="text-sm text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Châu Blog. All rights reserved.
        </p>

        {/* contact */}
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span className="hover:text-white transition cursor-pointer">
            📧 phamchaugiatu123@example.com
          </span>
          <span className="hover:text-white transition cursor-pointer">
            🌐 portfolio
          </span>
        </div>
      </div>
    </footer>
  );
}
