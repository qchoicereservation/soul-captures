import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Working with Maison Lumière was a dream. They didn't just photograph our wedding — they made us a film of the most important day of our lives.",
    name: "Alex & Théo",
    place: "Provence, 2024",
  },
  {
    quote:
      "Every frame breathes. Looking through the gallery felt like reliving the entire weekend, slower and more beautiful than we remembered.",
    name: "Léa & Marin",
    place: "Dolomites, 2024",
  },
  {
    quote:
      "Quiet, attentive, invisible when we needed it — and somehow always in the right place at the right time. We are forever grateful.",
    name: "Elsa & Hugo",
    place: "Tuscany, 2023",
  },
];

export function TestimonialCarousel() {
  const [[i, dir], setI] = useState<[number, number]>([0, 1]);
  const t = testimonials[i];
  const go = (d: number) => setI(([x]) => [(x + d + testimonials.length) % testimonials.length, d]);

  return (
    <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-12 text-background w-full">
      <div className="mx-auto text-center" style={{ maxWidth: 600 }}>
        <span className="block w-20 h-px bg-background/50 mx-auto mb-8" />
        <p className="font-script text-3xl mb-10 text-background/80">— a kind word</p>
        <div className="relative min-h-[280px] overflow-hidden">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={i}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <blockquote className="font-serif italic text-2xl md:text-4xl leading-tight">
                "{t.quote}"
              </blockquote>
              <p className="mt-8 text-[11px] uppercase tracking-luxe text-background/80">
                — {t.name}, {t.place}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-0 right-6 lg:right-12 flex items-center gap-8">
        <span className="text-[11px] uppercase tracking-luxe text-background/70">
          {String(i + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
        </span>
        <button onClick={() => go(-1)} aria-label="Previous"
          className="text-background/80 hover:text-background text-2xl transition-colors">←</button>
        <button onClick={() => go(1)} aria-label="Next"
          className="text-background/80 hover:text-background text-2xl transition-colors">→</button>
      </div>
    </div>
  );
}
