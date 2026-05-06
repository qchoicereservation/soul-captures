import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Lightbox } from "@/components/Lightbox";
import { allImages } from "@/lib/portfolio-data";

export const Route = createFileRoute("/memories")({
  head: () => ({
    meta: [
      { title: "Memories — Maison Lumière" },
      { name: "description", content: "A scattered archive of small moments, polaroid by polaroid." },
      { property: "og:title", content: "Memories — Maison Lumière" },
      { property: "og:description", content: "A scattered archive of small moments, polaroid by polaroid." },
    ],
  }),
  component: Memories,
});

// Pre-computed scattered positions (deterministic so SSR matches)
const scattered = Array.from({ length: 18 }).map((_, i) => {
  const seed = i * 9301 + 49297;
  const r1 = ((seed % 233280) / 233280);
  const r2 = (((seed * 17) % 233280) / 233280);
  const r3 = (((seed * 31) % 233280) / 233280);
  const r4 = (((seed * 53) % 233280) / 233280);
  return {
    top: 6 + r1 * 78,        // %
    left: 4 + r2 * 84,        // %
    rotate: -10 + r3 * 20,
    width: 150 + Math.floor(r4 * 140),
    z: Math.floor(r4 * 18),
    delay: r1 * 0.6,
  };
});

function Memories() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const imgs = scattered.map((_, i) => allImages[i % allImages.length]);
  const lb = imgs.map((src, i) => ({ src, alt: `Memory ${i + 1}` }));

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <section className="pt-40 pb-12 text-center">
        <p className="font-script text-4xl text-muted-foreground">a scattered archive</p>
        <h1 className="font-serif text-6xl md:text-8xl mt-2">Memories</h1>
        <p className="mt-6 max-w-md mx-auto text-sm text-muted-foreground px-6">
          Loose moments, paper-thin and faintly tilted. Tap any to open.
        </p>
      </section>

      <section className="relative">
        <div className="relative mx-auto max-w-[1500px] h-[1400px] md:h-[1100px]">
          {scattered.map((p, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 30, rotate: p.rotate * 1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: p.rotate }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: p.delay, ease: [0.2,0.8,0.2,1] }}
              onClick={() => setLightbox(i)}
              className="polaroid animate-float absolute"
              style={{
                top: `${p.top}%`, left: `${p.left}%`,
                width: p.width, zIndex: p.z,
                ["--rot" as never]: `${p.rotate}deg`,
                animationDelay: `${p.delay}s`,
              }}
            >
              <div style={{ width: "100%", height: p.width * 1.15, overflow: "hidden" }}>
                <img src={imgs[i]} alt="" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="font-script text-center text-sm mt-2 text-foreground/70">
                no. {String(i + 1).padStart(2, "0")}
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <Lightbox images={lb} index={lightbox}
        onClose={() => setLightbox(null)}
        onPrev={() => setLightbox((i) => i === null ? null : (i - 1 + lb.length) % lb.length)}
        onNext={() => setLightbox((i) => i === null ? null : (i + 1) % lb.length)}
      />
      <Footer />
    </div>
  );
}
