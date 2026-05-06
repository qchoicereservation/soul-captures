import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (d: number) => setI((x) => (x + d + testimonials.length) % testimonials.length);

  return (
    <div className="relative z-10 mx-auto max-w-[1100px] px-6 lg:px-12 text-background w-full">
      <p className="font-script text-3xl mb-8 text-background/80">— a kind word</p>
      <div className="relative min-h-[260px] md:min-h-[220px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <blockquote className="font-serif italic text-2xl md:text-4xl leading-tight max-w-3xl">
              "{t.quote}"
            </blockquote>
            <p className="mt-8 text-[11px] uppercase tracking-luxe text-background/80">
              — {t.name}, {t.place}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-10 flex items-center gap-6">
        <button
          onClick={() => go(-1)}
          aria-label="Previous"
          className="w-12 h-12 border border-background/40 rounded-full flex items-center justify-center hover:bg-background hover:text-foreground transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next"
          className="w-12 h-12 border border-background/40 rounded-full flex items-center justify-center hover:bg-background hover:text-foreground transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
        <span className="ml-4 text-[11px] uppercase tracking-luxe text-background/70">
          {String(i + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
