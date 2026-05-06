import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ParallaxHero } from "@/components/ParallaxHero";
import { Polaroid } from "@/components/Polaroid";
import { heroImages, services } from "@/lib/portfolio-data";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g6 from "@/assets/gallery-6.jpg";
import h1 from "@/assets/hero-1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Lumière — Editorial Wedding Photography" },
      { name: "description", content: "Cinematic, editorial wedding & elopement photography. Capturing love, stories and timeless moments — Paris & worldwide." },
      { property: "og:title", content: "Maison Lumière — Editorial Wedding Photography" },
      { property: "og:description", content: "Cinematic, editorial wedding & elopement photography. Paris & worldwide." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Header />

      {/* HERO */}
      <section className="relative">
        <ParallaxHero images={heroImages} />
        <div className="absolute inset-0 z-10 flex items-end pb-32 pointer-events-none">
          <div className="mx-auto max-w-[1400px] w-full px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.3 }}
              className="max-w-2xl"
            >
              <p className="text-background/80 text-[11px] uppercase tracking-luxe mb-6">Maison Lumière · est. 2014</p>
              <h1 className="font-script text-background text-6xl md:text-8xl leading-[0.95]">
                Capturing love,<br/>stories &amp; timeless<br/>moments
              </h1>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-background/80 text-[10px] uppercase tracking-luxe"
        >
          scroll ↓
        </motion.div>
      </section>

      {/* INTRO + POLAROIDS */}
      <section className="py-32 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-8">— A few words</p>
            <h2 className="font-serif text-5xl md:text-7xl leading-[1.05]">
              Photographs that <span className="font-script text-6xl md:text-8xl">feel</span><br/>
              like a slow afternoon.
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

      {/* CATEGORY STRIP */}
      <section>
        <div className="hairline" />
        <div className="grid grid-cols-1 md:grid-cols-3 relative">
          {(Object.values(services)).map((s, i) => (
            <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }}
              className="group relative h-[280px] md:h-[340px] overflow-hidden flex items-center justify-center text-center bg-background"
            >
              {i > 0 && <div className="hidden md:block vrule absolute left-0 top-8 bottom-8" />}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <img src={s.hero} alt="" className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[2000ms]" />
                <div className="absolute inset-0 bg-foreground/40" />
              </div>
              <div className="relative z-10 transition-colors duration-500 group-hover:text-background">
                <p className="font-script text-2xl text-foreground/60 group-hover:text-background/80 transition-colors mb-2">{s.tagline}</p>
                <h3 className="font-serif text-4xl md:text-5xl">{s.name}</h3>
                <p className="mt-4 text-[11px] uppercase tracking-luxe opacity-0 group-hover:opacity-100 transition-opacity duration-500">View collection →</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="hairline" />
      </section>

      {/* SERVICE GRID with vertical dividers */}
      <section className="py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-3">02 — what we offer</p>
              <h2 className="font-serif text-5xl md:text-6xl">A house of <span className="font-script text-6xl md:text-7xl">services</span></h2>
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
              </Link>
            ))}
          </div>
          <div className="hairline" />
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <img src={g3} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/30" />
        <div className="relative z-10 mx-auto max-w-[1100px] px-6 lg:px-12 text-background">
          <p className="font-script text-3xl mb-8 text-background/80">— a kind word</p>
          <blockquote className="font-serif italic text-3xl md:text-5xl leading-tight max-w-3xl">
            "They didn't just photograph our wedding. They made us a film of the most important day of our lives — every frame breathes."
          </blockquote>
          <p className="mt-10 text-right text-[11px] uppercase tracking-luxe text-background/80">— Alex &amp; Théo, 2024</p>
        </div>
      </section>

      {/* FEATURED CINEMATIC */}
      <section className="py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="col-span-12 md:col-span-7 aspect-[4/5] overflow-hidden">
              <img src={h1} alt="" loading="lazy" className="w-full h-full object-cover" />
            </motion.div>
            <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
              <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-6">03 — recently</p>
              <h2 className="font-serif text-5xl md:text-6xl leading-tight">A summer in <span className="font-script text-6xl md:text-7xl">Provence</span></h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">Lavender fields, a stone chapel, a long table under olive trees. Léa & Marin gathered the people they love and made a memory we were lucky to keep.</p>
              <Link to="/services/$slug" params={{ slug: "weddings" }} className="mt-8 self-start text-[11px] uppercase tracking-luxe border-b border-foreground pb-1">See the story →</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
