"use client";

import { useEffect, useState, useRef } from "react";
import { heroList } from "@/app/mock/heroData";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroList.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % heroList.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? heroList.length - 1 : prev - 1));
  };

  return (
    <section
      className="relative h-[70vh] md:h-[80vh] lg:h-[85vh] overflow-hidden"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {/* Slides */}
      {heroList.map((item, i) => (
        <div
          key={item.id}
          className={`
            absolute inset-0 transition-all duration-1000 ease-in-out
            ${
              i === index
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-110 z-0"
            }
          `}
        >
          {/* Background */}
          <img
            src={item.backgroundImage}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-10">
            <div className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-center text-white px-2 sm:px-4">
              {/* Tag */}
              <div className="  inline-block  px-3 py-1  bg-black/30  backdrop-blur-md  rounded-full">
                <span className="  text-[10px] sm:text-xs uppercase tracking-widest  text-white  [text-shadow:0_0_2px_rgba(0,0,0,0.8)]">
                  {item.tag}
                </span>
              </div>

              {/* Title */}
              <h1
                className="mt-2 font-light leading-tight
                text-2xl sm:text-3xl md:text-5xl lg:text-6xl"
              >
                {item.title}
              </h1>

              {/* Subtitle */}
              <p
                className="mt-3 text-white/70
                text-sm sm:text-base md:text-lg"
              >
                {item.subtitle}
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4">
                <img
                  src={item.author.avatar}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-fit border border-white/20"
                />
                <span className="text-xs sm:text-sm text-white/70">
                  {item.author.name}
                </span>
              </div>

              {/* CTA */}
              <a
                href={item.ctaLink}
                className="
                  inline-block mt-6 sm:mt-8
                  px-4 sm:px-6 py-2 sm:py-3
                  bg-white text-black
                  rounded-full
                  text-xs sm:text-sm
                  hover:bg-white/90 transition
                "
              >
                {item.ctaText} →
              </a>

              {/* Stats */}
              <div className="flex justify-center gap-4 sm:gap-6 mt-4 sm:mt-6 text-[10px] sm:text-xs text-white/50">
                <span>{item.stats.views} views</span>
                <span>{item.stats.likes} likes</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Controls (ẩn mobile) */}
      <button
        onClick={prev}
        className="
          hidden md:flex
          absolute left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20
          bg-white/10 backdrop-blur-md
          p-2 lg:p-3 rounded-full
          hover:bg-white/20 transition
          text-white
        "
      >
        ←
      </button>

      <button
        onClick={next}
        className="
          hidden md:flex
          absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20
          bg-white/10 backdrop-blur-md
          p-2 lg:p-3 rounded-full
          hover:bg-white/20 transition
          text-white
        "
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-6 w-full flex justify-center gap-2 z-20">
        {heroList.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              h-2 rounded-full transition-all
              ${i === index ? "w-6 sm:w-8 bg-white" : "w-2 bg-white/40"}
            `}
          />
        ))}
      </div>
    </section>
  );
}
