import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FixedParallax } from "@/components/FixedParallax";
import { StackedPolaroids } from "@/components/StackedPolaroids";
import { ScatterGallery } from "@/components/ScatterGallery";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { services, allImages } from "@/lib/portfolio-data";
import h1 from "@/assets/hero-1.jpg";
import h2 from "@/assets/hero-2.jpg";
import h3 from "@/assets/hero-3.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g5 from "@/assets/gallery-5.jpg";
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

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Header />

      {/* ── SECTION 1 · HERO PARALLAX ─────────────────────────────── */}
      <FixedParallax image={[h1, h3]} height="100vh" overlay="soft" switchInterval={6500}>
        <div className="mx-auto max-w-[1400px] w-full h-full px-5 md:px-12 grid grid-cols-12 gap-6 md:gap-8 items-center pt-[var(--nav-h)] md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="col-span-12 md:col-span-7 text-center md:text-left"
            style={{ maxWidth: "90%", marginInline: "auto" }}
          >
            <p className="text-background/80 text-[11px] uppercase tracking-luxe mb-4 md:mb-6">Maison Lumière · est. 2014</p>
            <h1 className="font-serif text-background text-[34px] md:text-7xl lg:text-8xl leading-[1.1] md:leading-[0.95]">
              Capturing love,
              <br />
              <span className="font-script text-[26px] md:text-8xl lg:text-9xl">stories</span> &amp; timeless
              <br />
              moments.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
            className="col-span-12 md:col-span-5 flex justify-center md:justify-end mt-6 md:mt-0"
          >
            <div className="relative md:pr-[20px] md:translate-x-[-30px] md:translate-y-[30px]">
              <div
                className="polaroid animate-float w-[200px] md:w-[260px]"
                style={{
                  padding: "10px",
                  ["--rot" as never]: "5deg",
                  transform: "rotate(5deg)",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.18)",
                }}
              >
                <div className="h-[230px] md:h-[330px] w-full overflow-hidden">
                  <img src={g2} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-background/80 text-[10px] uppercase tracking-luxe"
        >
          scroll ↓
        </motion.div>
      </FixedParallax>

      {/* ── SECTION 2 · BEIGE · STACKED SWITCHING ─────────────────── */}
      <section className="bg-background py-32 lg:py-40">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-8">— a few words</p>
            <h2 className="font-serif leading-[1.1]" style={{ fontSize: "64px", maxWidth: 420 }}>
              Award-winning
              <br />
              <span className="font-script" style={{ fontSize: "76px" }}>wedding</span> photographer.
            </h2>
            <p
              className="mt-10 text-muted-foreground leading-relaxed"
              style={{ fontSize: 14, letterSpacing: "1.5px", maxWidth: 360 }}
            >
              We don't chase moments — we let them arrive. Editorial in eye, documentary in heart.
              Every frame is grain, light, and the truth of being loved.
            </p>
            <Link to="/about" className="inline-block mt-10 text-[11px] uppercase tracking-luxe border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors">
              Read our story
            </Link>
          </div>

          <div className="flex justify-center">
            <StackedPolaroids
              backImages={[g2, g6, g1]}
              frontImage={g5}
              backSize={{ w: 320, h: 420 }}
              frontSize={{ w: 220, h: 280 }}
              backRotate={0}
              frontRotate={6}
            />
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

      {/* ── SECTION 6 · BEIGE · SCATTER GALLERY ───────────────────── */}
      <section className="bg-background" style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div className="text-center px-6">
          <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-3">03 — the archive</p>
          <h2 className="font-serif text-5xl md:text-6xl">
            Loose <span className="font-script text-6xl md:text-7xl">moments</span>
          </h2>
          <p className="mt-6 max-w-md mx-auto text-sm text-muted-foreground">
            Paper-thin and faintly tilted. Tap any to open.
          </p>
        </div>

        <ScatterGallery images={allImages.concat(allImages).slice(0, 13)} />
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

      <Footer />
    </div>
  );
}
