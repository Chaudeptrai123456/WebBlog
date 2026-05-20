"use client";

import { useContext, useState } from "react";
import { UserContext } from "@/app/context/UserContext";
import AuthLoading from "@/app/components/loading/AuthLoading";

export default function LoginPage() {
  const ctx = useContext(UserContext);

  if (!ctx) {
    return <div>Initializing...</div>;
  }

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    setLoading(true);
    setError("");

    try {
      const loginUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/google`;

      window.location.href = loginUrl;
    } catch (err) {
      console.error(err);
      setError("Đăng nhập thất bại");
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 🌌 BACKGROUND assumed global */}

      {/* 🔲 LOGIN CARD */}
      <div
        className="relative z-10 w-full max-w-sm
        bg-white/10 backdrop-blur-xl
        border border-white/20
        shadow-[0_0_40px_rgba(0,0,0,0.6)]
        rounded-2xl p-6 space-y-5
      "
      >
        <h1 className="text-xl font-semibold text-center text-white">
          Đăng nhập
        </h1>

        {error && (
          <div className="text-red-400 text-sm text-center">{error}</div>
        )}

        <button
          onClick={handleLogin}
          disabled={loading}
          className="
            w-full
            bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400
            hover:from-purple-400 hover:via-blue-400 hover:to-cyan-300
            text-white font-medium
            py-2 rounded-lg
            transition-all duration-300
            shadow-lg shadow-blue-500/20
            disabled:opacity-50
          "
        >
          {loading ? <AuthLoading /> : "Đăng nhập với Google"}
        </button>
      </div>
    </div>
  );
}
