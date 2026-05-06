import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Lightbox } from "@/components/Lightbox";
import { services } from "@/lib/portfolio-data";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const s = services[params.slug as keyof typeof services];
    if (!s) return {};
    return {
      meta: [
        { title: `${s.name} — Maison Lumière` },
        { name: "description", content: s.description },
        { property: "og:title", content: `${s.name} — Maison Lumière` },
        { property: "og:description", content: s.description },
        { property: "og:image", content: s.hero },
      ],
    };
  },
  loader: ({ params }) => {
    const s = services[params.slug as keyof typeof services];
    if (!s) throw notFound();
    return { service: s };
  },
  component: ServicePage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center"><Link to="/">← Back home</Link></div>
  ),
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const lbImages = service.gallery.map((src, i) => ({ src, alt: `${service.name} ${i + 1}` }));

  // editorial layout positions
  const layout: { src: string; col: string; aspect: string }[] = [
    { src: service.gallery[0], col: "md:col-span-8", aspect: "aspect-[4/3]" },
    { src: service.gallery[1], col: "md:col-span-4", aspect: "aspect-[3/4]" },
    { src: service.gallery[2], col: "md:col-span-4", aspect: "aspect-[3/4]" },
    { src: service.gallery[3], col: "md:col-span-4", aspect: "aspect-[1/1]" },
    { src: service.gallery[4], col: "md:col-span-4", aspect: "aspect-[3/4]" },
    { src: service.gallery[5], col: "md:col-span-12", aspect: "aspect-[21/9]" },
  ];

  return (
    <div className="bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        <motion.img
          initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 2.4, ease: "easeOut" }}
          src={service.hero} alt={service.name} className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="absolute inset-0 flex items-end pb-24">
          <div className="mx-auto max-w-[1400px] w-full px-6 lg:px-12 text-background">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }} className="font-script text-3xl mb-4">{service.tagline}</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }} className="font-serif text-7xl md:text-9xl">{service.name}</motion.h1>
          </div>
        </div>
      </section>

      {/* Editorial Grid */}
      <section className="py-24" id="gallery">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-5 md:gap-7">
            {layout.map((item, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.9, delay: (i % 3) * 0.1 }}
                onClick={() => setLightbox(i)}
                className={`group relative col-span-12 ${item.col} ${item.aspect} overflow-hidden bg-muted`}
              >
                <img src={item.src} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
                <span className="absolute bottom-4 right-5 text-background opacity-0 group-hover:opacity-100 transition-opacity text-[10px] uppercase tracking-luxe">view</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-32">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-6">— the story</p>
          <p className="font-serif text-3xl md:text-4xl leading-snug italic">{service.story}</p>
          <Link to="/portfolio" className="inline-block mt-12 text-[11px] uppercase tracking-luxe border-b border-foreground pb-1">
            View more from this collection →
          </Link>
        </div>
      </section>

      <Lightbox images={lbImages} index={lightbox}
        onClose={() => setLightbox(null)}
        onPrev={() => setLightbox((i) => (i === null ? null : (i - 1 + lbImages.length) % lbImages.length))}
        onNext={() => setLightbox((i) => (i === null ? null : (i + 1) % lbImages.length))}
      />
      <Footer />
    </div>
  );
}
