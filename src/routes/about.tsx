import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Polaroid } from "@/components/Polaroid";
import portrait from "@/assets/about-portrait.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g4 from "@/assets/gallery-4.jpg";

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

      <section className="pt-40 pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-6">— behind the lens</p>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
              I don't just take<br/>photos, I tell<br/><span className="font-script text-7xl md:text-9xl">stories.</span>
            </h1>
            <p className="mt-10 max-w-lg text-muted-foreground leading-relaxed">
              I'm Camille — photographer, wanderer, quiet observer. For over a decade I've followed couples through chapels and cliffsides, mountains and ballrooms, with film cameras and a soft kind of patience.
            </p>
          </div>

          <div className="lg:col-span-5 relative h-[640px]">
            <Polaroid src={portrait} alt="Camille" caption="hello, i'm camille" width={300} rotate={-5}
              style={{ position: "absolute", top: 20, left: 20, zIndex: 2 }} imageHeight={380} />
            <Polaroid src={g6} alt="" width={210} rotate={6}
              style={{ position: "absolute", bottom: 80, right: 0, zIndex: 1 }} imageHeight={260} delay={0.2} />
            <Polaroid src={g4} alt="" width={170} rotate={-3}
              style={{ position: "absolute", bottom: 0, left: 80, zIndex: 3 }} imageHeight={170} delay={0.35} />
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/40">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-serif text-3xl md:text-4xl italic leading-snug">
            "I believe in golden hours, in long pauses, in the dignity of quiet moments. I believe a wedding photograph should feel less like a document and more like a memory you can hold."
          </p>
          <p className="mt-8 font-script text-2xl">— Camille</p>
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-6">— a small timeline</p>
          <h2 className="font-serif text-5xl mb-16">Experience</h2>
          <div className="space-y-2">
            {timeline.map((t, i) => (
              <motion.div key={t.y}
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="grid grid-cols-12 gap-6 py-6 border-b border-border items-baseline">
                <span className="col-span-3 md:col-span-2 font-serif text-3xl">{t.y}</span>
                <span className="col-span-9 md:col-span-10 text-base md:text-lg text-muted-foreground">{t.t}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-6">— behind the scenes</p>
          <div className="relative h-[420px]">
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
