import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FixedParallax } from "@/components/FixedParallax";
import { Polaroid } from "@/components/Polaroid";
import portrait from "@/assets/about-portrait.jpg";
import h2 from "@/assets/hero-2.jpg";
import h3 from "@/assets/hero-3.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Maison Lumière" },
      { name: "description", content: "A photographer telling stories with light, grain, and quiet attention." },
      { property: "og:title", content: "About — Maison Lumière" },
      { property: "og:description", content: "A photographer telling stories with light, grain, and quiet attention." },
      { property: "og:image", content: portrait },
    ],
  }),
  component: About,
});

const timeline = [
  { y: "2014", t: "First camera, first wedding in a Provençal courtyard." },
  { y: "2017", t: "Moved to Paris, opened the studio under the eaves." },
  { y: "2020", t: "Featured in Vogue Brides and Magnolia Rouge." },
  { y: "2023", t: "Over 200 weddings, 14 countries, one philosophy." },
  { y: "2026", t: "Now booking destinations through 2027." },
];

function About() {
  return (
    <div className="bg-background text-foreground">
      <Header />

      {/* 1 · Parallax Hero */}
      <FixedParallax image={h3} height="90vh" overlay="soft">
        <div className="mx-auto max-w-[1400px] w-full h-full px-6 lg:px-12 flex items-end pb-24">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }} className="max-w-2xl"
          >
            <p className="text-background/80 text-[11px] uppercase tracking-luxe mb-6">— behind the lens</p>
            <h1 className="font-serif text-background text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
              I tell <span className="font-script text-6xl md:text-9xl">stories</span><br/>with light.
            </h1>
          </motion.div>
        </div>
      </FixedParallax>

      {/* 2 · Beige content */}
      <section className="bg-background py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-6">— hello</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]">
              I'm <span className="font-script text-5xl md:text-7xl">Camille</span> — photographer, wanderer, quiet observer.
            </h2>
            <p className="mt-10 max-w-lg text-muted-foreground leading-relaxed">
              For over a decade I've followed couples through chapels and cliffsides, mountains and ballrooms, with film cameras and a soft kind of patience.
            </p>
          </div>

          <div className="lg:col-span-5 relative h-[560px]">
            <Polaroid src={portrait} alt="Camille" caption="hello, i'm camille" width={280} rotate={-5}
              style={{ position: "absolute", top: 20, left: 20, zIndex: 2 }} imageHeight={350} />
            <Polaroid src={g6} alt="" width={200} rotate={6}
              style={{ position: "absolute", bottom: 60, right: 0, zIndex: 1 }} imageHeight={250} delay={0.2} />
            <Polaroid src={g4} alt="" width={170} rotate={-3}
              style={{ position: "absolute", bottom: 0, left: 80, zIndex: 3 }} imageHeight={170} delay={0.35} />
          </div>
        </div>
      </section>

      {/* 3 · Parallax break */}
      <FixedParallax image={h2} height="70vh" overlay="dark">
        <div className="h-full flex items-center justify-center text-center px-6">
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="font-serif italic text-background text-2xl md:text-4xl max-w-3xl leading-snug"
          >
            "I believe in golden hours, in long pauses, in the dignity of quiet moments."
          </motion.p>
        </div>
      </FixedParallax>

      {/* 4 · Beige timeline */}
      <section className="bg-background py-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-6">— a small timeline</p>
          <h2 className="font-serif text-5xl mb-16">Experience</h2>
          <div className="space-y-2">
            {timeline.map((t, i) => (
              <motion.div key={t.y}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="grid grid-cols-12 gap-6 py-6 border-b border-border items-baseline">
                <span className="col-span-3 md:col-span-2 font-serif text-3xl">{t.y}</span>
                <span className="col-span-9 md:col-span-10 text-base md:text-lg text-muted-foreground">{t.t}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · Parallax */}
      <FixedParallax image={h3} height="60vh" overlay="soft" />

      {/* 6 · Beige polaroid section */}
      <section className="bg-background py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-10">— behind the scenes</p>
          <div className="relative h-[460px]">
            <Polaroid src={g1} alt="" width={220} rotate={-7} style={{ position: "absolute", top: 0, left: "5%" }} imageHeight={280}/>
            <Polaroid src={g2} alt="" width={250} rotate={4} style={{ position: "absolute", top: 40, left: "30%" }} imageHeight={320} delay={0.1}/>
            <Polaroid src={g4} alt="" width={200} rotate={-3} style={{ position: "absolute", top: 20, left: "55%" }} imageHeight={200} delay={0.2}/>
            <Polaroid src={g6} alt="" width={220} rotate={6} style={{ position: "absolute", top: 60, left: "75%" }} imageHeight={280} delay={0.3}/>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
