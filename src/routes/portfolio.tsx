import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Lightbox } from "@/components/Lightbox";
import { allImages } from "@/lib/portfolio-data";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Maison Lumière" },
      { name: "description", content: "A complete archive of editorial weddings, engagements and elopements." },
      { property: "og:title", content: "Portfolio — Maison Lumière" },
      { property: "og:description", content: "A complete archive of editorial weddings, engagements and elopements." },
    ],
  }),
  component: Portfolio,
});

const FILTERS = ["All", "Ceremony", "Couple", "Details"] as const;

// asymmetric masonry sizes
const sizes = [
  "row-span-2", "row-span-1", "row-span-2", "row-span-1",
  "row-span-1", "row-span-2", "row-span-1", "row-span-2", "row-span-1",
];

function Portfolio() {
  const [filter, setFilter] = useState<typeof FILTERS[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const imgs = [...allImages, ...allImages].slice(0, 14);
  const lb = imgs.map((src, i) => ({ src, alt: `Image ${i + 1}` }));

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <section className="pt-40 pb-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <p className="font-script text-3xl text-muted-foreground">the archive</p>
          <h1 className="font-serif text-6xl md:text-8xl mt-2">Portfolio</h1>
          <div className="hairline mt-12" />
          <div className="flex flex-wrap gap-8 mt-6 text-[11px] uppercase tracking-luxe">
            {FILTERS.map((f) => (
              <button key={f} onClick={() => setFilter(f)}
                className={`pb-1 border-b transition-colors ${filter === f ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-4 md:gap-6">
            {imgs.map((src, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.8, delay: (i % 4) * 0.05 }}
                onClick={() => setLightbox(i)}
                className={`group relative overflow-hidden bg-muted ${sizes[i % sizes.length]}`}
              >
                <img src={src} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/25 transition-colors duration-500" />
              </motion.button>
            ))}
          </div>
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
