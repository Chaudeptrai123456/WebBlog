"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ContentBlock =
  | { type: "heading"; value: string }
  | { type: "paragraph"; value: string }
  | { type: "image"; src: string; caption?: string };

export default function BlogRenderer({ content }: { content: ContentBlock[] }) {
  return (
    <section className="relative z-0 min-h-screen py-20 overflow-hidden">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0 text-white">
        <div className="space-y-10 leading-relaxed">
          {content.map((block, index) => {
            const baseAnimation = {
              initial: { opacity: 0, y: 40 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: index * 0.05 },
              viewport: { once: true },
            };

            switch (block.type) {
              case "heading":
                return (
                  <motion.div key={index} {...baseAnimation} className="mt-16">
                    <h2 className=" text-3xl sm:text-4xl font-semibold  bg-gradient-to-r from-white via-purple-200 to-white/40  bg-clip-text text-transparent tracking-wide leading-tight drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                      {block.value}
                    </h2>

                    {/* underline glow */}
                    <div className="mt-3 h-[1px] w-20 bg-gradient-to-r from-purple-400/60 to-transparent" />
                  </motion.div>
                );
              case "paragraph":
                return (
                  <motion.p
                    key={index}
                    {...baseAnimation}
                    className="text-base sm:text-lg text-white/90 leading-8 tracking-[0.2px] first-letter:text-3xl first-letter:font-semibold first-letter:text-white "
                  >
                    {block.value}
                  </motion.p>
                );

              case "image":
                return (
                  <motion.figure
                    key={index}
                    {...baseAnimation}
                    className="my-16 space-y-5"
                  >
                    <div
                      className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_120px_rgba(120,119,198,0.2)] group     "
                    >
                      <Image
                        src={block.src}
                        alt={block.caption || "blog image"}
                        fill
                        className="
          object-cover
          group-hover:scale-110
          transition duration-700 ease-out
        "
                      />
                      {/* cinematic overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

                      {/* subtle border glow */}
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-purple-400/30 transition" />
                    </div>

                    {block.caption && (
                      <figcaption className="text-sm text-white/40 text-center italic">
                        {block.caption}
                      </figcaption>
                    )}
                  </motion.figure>
                );
              default:
                return null;
            }
          })}
        </div>
      </article>
    </section>
  );
}
