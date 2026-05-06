import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FixedParallax } from "@/components/FixedParallax";
import { Polaroid } from "@/components/Polaroid";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { ExperienceSection } from "@/components/ExperienceSection";
import { services } from "@/lib/portfolio-data";
import h1 from "@/assets/hero-1.jpg";
import h2 from "@/assets/hero-2.jpg";
import h3 from "@/assets/hero-3.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
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

      {/* ── 1 · HERO PARALLAX ─────────────────────────────── */}
      <FixedParallax image={h1} height="100vh" overlay="soft">
        <div className="mx-auto max-w-[1280px] w-full h-full px-6 lg:px-12 grid grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3 }}
            className="col-span-12 md:col-span-6"
          >
            <span className="block w-20 h-px bg-background/60 mb-8" />
            <p className="text-background/80 text-[11px] uppercase tracking-luxe mb-8">Maison Lumière · est. 2014</p>
            <h1
              className="font-serif text-background leading-[1.1]"
              style={{ fontSize: "clamp(56px, 7vw, 96px)", maxWidth: 520 }}
            >
              Capturing <span className="font-script" style={{ fontSize: "1.1em" }}>love</span>,
              <br />stories and
              <br /><span className="font-script" style={{ fontSize: "1.1em" }}>timeless</span> moments.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="hidden md:flex col-span-6 justify-end"
          >
            <div
              className="polaroid animate-float"
              style={{
                width: 280,
                ["--rot" as never]: "4deg",
                transform: "rotate(4deg)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              }}
            >
              <div style={{ width: "100%", height: 340, overflow: "hidden" }}>
                <img src={g2} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="font-script text-center text-base mt-3 text-foreground/80">forever, yours</div>
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

      {/* ── 2 · BEIGE CONTENT ─────────────────────────────── */}
      <section className="bg-background" style={{ paddingTop: 120, paddingBottom: 120 }}>
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-6">— a few words</p>
            <h2 className="font-serif leading-[1.05]" style={{ fontSize: "clamp(44px, 4.5vw, 64px)" }}>
              Award-winning
              <br />
              <span className="font-script" style={{ fontSize: "1.15em" }}>wedding</span> photographer.
            </h2>
            <span className="divider-sm mt-8" />
            <p className="mt-8 max-w-md text-base leading-[1.8] text-muted-foreground">
              We don't chase moments — we let them arrive. Editorial in eye, documentary in heart.
              Every frame is grain, light, and the truth of being loved.
            </p>
            <Link to="/about" className="inline-block mt-10 text-[11px] uppercase tracking-luxe border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors">
              Read our story
            </Link>
          </div>

          <div className="lg:col-span-7 relative" style={{ height: 600 }}>
            {/* Image 1 — base 320px, -3deg */}
            <Polaroid src={g2} alt="Bride" caption="alex, tuscany" width={320} rotate={-3}
              style={{ position: "absolute", top: 40, left: 40, zIndex: 1 }} imageHeight={400} />
            {/* Image 2 — 260px, 5deg, top-right overlap */}
            <Polaroid src={g6} alt="Veil" caption="elsa, dolomites" width={260} rotate={5}
              style={{ position: "absolute", top: -10, right: 60, zIndex: 2 }} imageHeight={320} delay={0.15} />
            {/* Image 3 — 180px, -6deg, bottom-left */}
            <Polaroid src={g1} alt="Rings" caption="i do." width={180} rotate={-6}
              style={{ position: "absolute", bottom: 0, left: 200, zIndex: 3 }} imageHeight={220} delay={0.3} />
          </div>
        </div>
      </section>

      {/* ── 3 · PARALLAX BREAK ───────────────────────────── */}
      <FixedParallax image={h2} height="70vh" overlay="dark">
        <div className="h-full w-full flex items-center justify-center text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 1.4 }}
            className="text-background uppercase"
            style={{ fontSize: 18, letterSpacing: "0.3em" }}
          >
            Crafted with intention
          </motion.p>
        </div>
      </FixedParallax>

      {/* ── 4 · EXPERIENCE (replaces memories) ───────────── */}
      <ExperienceSection bigImages={[g2, g4, g6, g1]} smallImage={g3} />

      {/* ── 5 · PARALLAX ─────────────────────────────────── */}
      <FixedParallax image={h3} height="70vh" overlay="soft" />

      {/* ── 6 · BEIGE · SERVICE GRID ─────────────────────── */}
      <section className="bg-background" style={{ paddingTop: 120, paddingBottom: 120 }}>
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-3">02 — what we offer</p>
            <h2 className="font-serif" style={{ fontSize: "clamp(44px, 5vw, 64px)" }}>
              A house of <span className="font-script" style={{ fontSize: "1.15em" }}>services</span>
            </h2>
          </div>

          <div className="hairline" />
          <div className="grid grid-cols-1 md:grid-cols-3 relative" style={{ gap: 0 }}>
            {Object.values(services).map((s, i) => (
              <Link to="/services/$slug" params={{ slug: s.slug }} key={s.slug}
                className="group block relative" style={{ padding: "60px 30px" }}>
                {i > 0 && <div className="hidden md:block vrule absolute left-0 top-10 bottom-10" />}
                <div className="overflow-hidden bg-muted" style={{ height: 260 }}>
                  <img src={s.hero} alt={s.name} loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
                </div>
                <div className="mx-auto" style={{ width: 60, height: 1, background: "var(--color-border)", margin: "20px auto" }} />
                <h3 className="font-serif text-center" style={{ fontSize: 22 }}>{s.name}</h3>
                <p className="font-script text-center text-lg text-muted-foreground -mt-1">{s.tagline}</p>
                <p className="mt-4 text-center text-muted-foreground" style={{ fontSize: 14, lineHeight: 1.7 }}>{s.description}</p>
                <div className="text-center mt-6">
                  <span className="inline-block text-[11px] uppercase tracking-luxe border-b border-foreground pb-1">More →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="hairline" />
        </div>
      </section>

      {/* ── 7 · PARALLAX · TESTIMONIAL ──────────────────── */}
      <FixedParallax image={g3} height="90vh" overlay="dark">
        <div className="h-full w-full flex items-center">
          <TestimonialCarousel />
        </div>
      </FixedParallax>

      {/* ── 8 · BEIGE · CTA ─────────────────────────────── */}
      <section className="bg-background" style={{ paddingTop: 120, paddingBottom: 120 }}>
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12 text-center">
          <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-6">— let's begin</p>
          <h2 className="font-serif leading-[1.05]" style={{ fontSize: "clamp(44px, 5.5vw, 72px)" }}>
            Tell us your <span className="font-script" style={{ fontSize: "1.15em" }}>story</span>.
          </h2>
          <span className="divider-sm mx-auto mt-8" />
          <p className="mt-8 max-w-md mx-auto text-muted-foreground leading-[1.8]">
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

