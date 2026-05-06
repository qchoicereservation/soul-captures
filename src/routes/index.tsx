import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FixedParallax } from "@/components/FixedParallax";
import { Polaroid } from "@/components/Polaroid";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Lightbox } from "@/components/Lightbox";
import { services, allImages } from "@/lib/portfolio-data";
import h1 from "@/assets/hero-1.jpg";
import h2 from "@/assets/hero-2.jpg";
import h3 from "@/assets/hero-3.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Lumière — Editorial Wedding Photography" },
      { name: "description", content: "Cinematic, editorial wedding & elopement photography. Capturing love, stories and timeless moments — Paris & worldwide." },
      { property: "og:title", content: "Maison Lumière — Editorial Wedding Photography" },
      { property: "og:description", content: "Cinematic, editorial wedding & elopement photography." },
      { property: "og:image", content: h1 },
    ],
  }),
  component: Index,
});

// Scattered memories config (deterministic)
const scattered = Array.from({ length: 12 }).map((_, i) => {
  const seed = i * 9301 + 49297;
  const r1 = (seed % 233280) / 233280;
  const r2 = ((seed * 17) % 233280) / 233280;
  const r3 = ((seed * 31) % 233280) / 233280;
  const sizes = [160, 220, 280];
  return {
    top: 4 + r1 * 80,
    left: 3 + r2 * 84,
    rotate: -8 + r3 * 16,
    width: sizes[i % 3],
    z: Math.floor(r3 * 12),
    delay: r1 * 0.5,
  };
});

function Index() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const memoryImgs = scattered.map((_, i) => allImages[i % allImages.length]);
  const lb = memoryImgs.map((src, i) => ({ src, alt: `Memory ${i + 1}` }));

  return (
    <div className="bg-background text-foreground">
      <Header />

      {/* ── SECTION 1 · HERO PARALLAX ─────────────────────────────── */}
      <FixedParallax image={h1} height="100vh" overlay="soft">
        <div className="mx-auto max-w-[1400px] w-full h-full px-6 lg:px-12 grid grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3 }}
            className="col-span-12 md:col-span-7"
          >
            <p className="text-background/80 text-[11px] uppercase tracking-luxe mb-6">Maison Lumière · est. 2014</p>
            <h1 className="font-serif text-background text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
              Capturing love,
              <br />
              <span className="font-script text-6xl md:text-8xl lg:text-9xl">stories</span> &amp; timeless
              <br />
              moments.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="hidden md:block col-span-5"
          >
            <div className="relative h-full flex items-center justify-end" style={{ paddingRight: 80 }}>
              <div
                className="polaroid animate-float"
                style={{
                  width: 260,
                  padding: "10px 10px 10px 10px",
                  ["--rot" as never]: "5deg",
                  transform: "rotate(5deg)",
                }}
              >
                <div style={{ width: "100%", height: 320, overflow: "hidden" }}>
                  <img src={g2} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-background/80 text-[10px] uppercase tracking-luxe"
        >
          scroll ↓
        </motion.div>
      </FixedParallax>

      {/* ── SECTION 2 · BEIGE CONTENT ─────────────────────────────── */}
      <section className="bg-background py-32 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-8">— a few words</p>
            <h2 className="font-serif text-5xl md:text-7xl leading-[1.05]">
              Award-winning
              <br />
              <span className="font-script text-6xl md:text-8xl">wedding</span> photographer.
            </h2>
            <p className="mt-10 max-w-md text-base leading-relaxed text-muted-foreground">
              We don't chase moments — we let them arrive. Editorial in eye, documentary in heart.
              Every frame is grain, light, and the truth of being loved.
            </p>
            <Link to="/about" className="inline-block mt-10 text-[11px] uppercase tracking-luxe border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors">
              Read our story
            </Link>
          </div>

          <div className="lg:col-span-6 relative h-[560px]">
            <Polaroid src={g2} alt="Bride" caption="alex, tuscany" width={260} rotate={-6}
              style={{ position: "absolute", top: 20, left: 20, zIndex: 1 }} imageHeight={340} />
            <Polaroid src={g6} alt="Veil" caption="elsa, dolomites" width={230} rotate={5}
              style={{ position: "absolute", top: 60, right: 40, zIndex: 2 }} imageHeight={300} delay={0.15} />
            <Polaroid src={g1} alt="Rings" caption="i do." width={200} rotate={-3}
              style={{ position: "absolute", bottom: 20, left: 120, zIndex: 3 }} imageHeight={240} delay={0.3} />
          </div>
        </div>
      </section>

      {/* ── SECTION 3 · PARALLAX TRANSITION ───────────────────────── */}
      <FixedParallax image={h2} height="80vh" overlay="dark">
        <div className="h-full w-full flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 1.4 }}
          >
            <p className="font-script text-background/90 text-4xl md:text-6xl">a slow afternoon</p>
            <p className="mt-4 text-background/70 text-[11px] uppercase tracking-luxe">— moments worth keeping</p>
          </motion.div>
        </div>
      </FixedParallax>

      {/* ── SECTION 4 · BEIGE · SERVICE GRID ──────────────────────── */}
      <section className="bg-background py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-3">02 — what we offer</p>
              <h2 className="font-serif text-5xl md:text-6xl">
                A house of <span className="font-script text-6xl md:text-7xl">services</span>
              </h2>
            </div>
            <Link to="/portfolio" className="hidden md:inline-block text-[11px] uppercase tracking-luxe border-b border-foreground pb-1">
              View portfolio
            </Link>
          </div>

          <div className="hairline" />
          <div className="grid grid-cols-1 md:grid-cols-3 relative">
            {Object.values(services).map((s, i) => (
              <Link to="/services/$slug" params={{ slug: s.slug }} key={s.slug}
                className="group block px-0 md:px-8 py-10 relative">
                {i > 0 && <div className="hidden md:block vrule absolute left-0 top-10 bottom-10" />}
                <div className="aspect-square overflow-hidden bg-muted">
                  <img src={s.hero} alt={s.name} loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
                </div>
                <div className="hairline mt-8" />
                <h3 className="font-serif text-3xl mt-6">{s.name}</h3>
                <p className="font-script text-xl text-muted-foreground -mt-1">{s.tagline}</p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                <span className="mt-6 inline-block text-[11px] uppercase tracking-luxe border-b border-foreground pb-1">More →</span>
              </Link>
            ))}
          </div>
          <div className="hairline" />
        </div>
      </section>

      {/* ── SECTION 5 · PARALLAX BREAK ────────────────────────────── */}
      <FixedParallax image={h3} height="70vh" overlay="soft">
        <div className="h-full w-full flex items-center justify-center text-center">
          <motion.h3
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="font-script text-background text-5xl md:text-7xl"
          >
            scattered memories
          </motion.h3>
        </div>
      </FixedParallax>

      {/* ── SECTION 6 · BEIGE · MEMORIES (SCATTERED) ──────────────── */}
      <section className="bg-background py-32">
        <div className="text-center px-6">
          <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-3">03 — the archive</p>
          <h2 className="font-serif text-5xl md:text-6xl">
            Loose <span className="font-script text-6xl md:text-7xl">moments</span>
          </h2>
          <p className="mt-6 max-w-md mx-auto text-sm text-muted-foreground">
            Paper-thin and faintly tilted. Tap any to open.
          </p>
        </div>

        <div className="relative mx-auto max-w-[1500px] mt-16 h-[1100px] md:h-[900px]">
          {scattered.map((p, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 30, rotate: p.rotate * 1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: p.rotate }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: p.delay, ease: [0.2, 0.8, 0.2, 1] }}
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
                <img src={memoryImgs[i]} alt="" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="font-script text-center text-sm mt-2 text-foreground/70">
                no. {String(i + 1).padStart(2, "0")}
              </div>
            </motion.button>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/memories" className="text-[11px] uppercase tracking-luxe border-b border-foreground pb-1">
            See all memories →
          </Link>
        </div>
      </section>

      {/* ── SECTION 7 · PARALLAX · TESTIMONIAL CAROUSEL ───────────── */}
      <FixedParallax image={g3} height="90vh" overlay="dark">
        <div className="h-full w-full flex items-center">
          <TestimonialCarousel />
        </div>
      </FixedParallax>

      {/* ── SECTION 8 · BEIGE · CTA ──────────────────────────────── */}
      <section className="bg-background py-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12 text-center">
          <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-6">— let's begin</p>
          <h2 className="font-serif text-5xl md:text-7xl leading-[1.05]">
            Tell us your <span className="font-script text-6xl md:text-8xl">story</span>.
          </h2>
          <p className="mt-8 max-w-md mx-auto text-muted-foreground">
            Now booking destinations through 2027. We answer every inquiry personally, within 48 hours.
          </p>
          <Link to="/inquire" className="inline-block mt-12 px-10 py-4 border border-foreground text-[11px] uppercase tracking-luxe hover:bg-foreground hover:text-background transition-colors">
            Inquire
          </Link>
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
