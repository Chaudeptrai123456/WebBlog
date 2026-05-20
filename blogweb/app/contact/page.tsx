// app/blog/page.tsx
"use client";

import HeroSection from "@/app/contact/components/HeroSection";
import AboutSection from "@/app/contact/components/AboutSection";
import SkillsSection from "@/app/contact/components/SkillsSection";
import ProjectsSection from "@/app/contact/components/ProjectsSection";
import BlogSection from "@/app/contact/components/BlogSection";
import ContactSection from "@/app/contact/components/ContactSection";

export default function BlogPage() {
  return (
    <main className="relative min-h-screen bg-[#020617] text-white overflow-hidden">
      {/* 🌌 Background Layer */}
      {/* 🌌 Background Layer */}
      <div className="fixed inset-0 -z-20">
        {" "}
        {/* đổi -z-10 → -z-20 */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#050510] to-[#020617]" />
        <div className="absolute inset-0 bg-[url('/stars.png')] opacity-20" />
      </div>

      {/* 🚀 CONTENT */}
      <div className="flex flex-col gap-20 md:gap-24 px-6 md:px-12 lg:px-24">
        {" "}
        {/* 1. HERO */}
        <section id="hero">
          <HeroSection />
        </section>
        {/* 2. ABOUT */}
        <section id="about">
          <AboutSection />
        </section>
        {/* 3. PROJECTS */}
        <section id="projects">
          <ProjectsSection />
        </section>
        {/* 4. CONTACT ME */}
         <section id="contact">
          <ContactSection />
        </section>
      </div>
    </main>
  );
}
