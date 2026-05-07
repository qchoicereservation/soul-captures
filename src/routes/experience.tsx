import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FixedParallax } from "@/components/FixedParallax";
import { StackedPolaroids } from "@/components/StackedPolaroids";
import h1 from "@/assets/hero-1.jpg";
import h2 from "@/assets/hero-2.jpg";
import h3 from "@/assets/hero-3.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/experience")({
  component: Experience,
});

function Experience() {
  return (
    <div className="bg-background text-foreground">
      <Header />

      {/* HERO PARALLAX */}
      <FixedParallax image={h2} height="100vh" overlay="dark">
        <div className="h-full w-full flex items-center justify-center text-center px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4 }}>
            <p className="text-background/80 text-[11px] uppercase tracking-luxe mb-6">— the experience</p>
            <h1 className="font-serif text-background text-6xl md:text-8xl leading-[1]">
              An editorial<br />
              <span className="font-script text-7xl md:text-9xl">journey</span>
            </h1>
          </motion.div>
        </div>
      </FixedParallax>

      {/* BLOCK 1 — left images, right text */}
      <section className="bg-background" style={{ paddingTop: 120, paddingBottom: 120 }}>
        <div className="mx-auto max-w-[1300px] px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="flex justify-center order-2 lg:order-1">
            <StackedPolaroids
              backImages={[g2, g6]}
              frontImage={g1}
              backSize={{ w: 300, h: 400 }}
              frontSize={{ w: 200, h: 260 }}
              backRotate={0}
              frontRotate={-5}
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-6">01 — the beginning</p>
            <h2 className="font-serif leading-[1.05]" style={{ fontSize: 52 }}>
              Crafting stories
              <br />
              <span className="font-script block mt-2" style={{ fontSize: 28, color: "#6f6a64" }}>
                that feel timeless
              </span>
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-md" style={{ fontSize: 14, letterSpacing: "1px" }}>
              We begin with a slow conversation — coffee, location ideas, a walk-through of your day. From there
              we build a quiet plan that lets the real moments breathe. No checklists, no rush.
            </p>
          </div>
        </div>
      </section>

      {/* PARALLAX BREAK */}
      <FixedParallax image={h3} height="70vh" overlay="soft">
        <div className="h-full w-full flex items-center justify-center text-center">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="font-script text-background text-5xl md:text-7xl">
            slow, considered, present
          </motion.p>
        </div>
      </FixedParallax>

      {/* BLOCK 2 — right images, left text */}
      <section className="bg-background" style={{ paddingTop: 120, paddingBottom: 120 }}>
        <div className="mx-auto max-w-[1300px] px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-6">02 — the day</p>
            <h2 className="font-serif leading-[1.05]" style={{ fontSize: 52 }}>
              Quiet light,
              <br />
              <span className="font-script block mt-2" style={{ fontSize: 28, color: "#6f6a64" }}>
                a soft witness
              </span>
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-md" style={{ fontSize: 14, letterSpacing: "1px" }}>
              On the day we arrive early, dressed simply, and disappear into the rhythm. Two photographers,
              one filmmaker, no flash unless the night demands it. Documentary in heart, editorial in eye.
            </p>
          </div>
          <div className="flex justify-center">
            <StackedPolaroids
              backImages={[g3, g5, h1]}
              frontImage={g6}
              backSize={{ w: 300, h: 400 }}
              frontSize={{ w: 200, h: 260 }}
              backRotate={0}
              frontRotate={-5}
            />
          </div>
        </div>
      </section>

      {/* PARALLAX BREAK */}
      <FixedParallax image={h1} height="70vh" overlay="dark">
        <div className="h-full w-full flex items-center justify-center text-center">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="font-script text-background text-5xl md:text-7xl">
            an heirloom, delivered
          </motion.p>
        </div>
      </FixedParallax>

      {/* BLOCK 3 — final */}
      <section className="bg-background" style={{ paddingTop: 120, paddingBottom: 140 }}>
        <div className="mx-auto max-w-[1300px] px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="flex justify-center order-2 lg:order-1">
            <StackedPolaroids
              backImages={[h2, g2]}
              frontImage={g5}
              backSize={{ w: 300, h: 400 }}
              frontSize={{ w: 200, h: 260 }}
              backRotate={0}
              frontRotate={-5}
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-6">03 — the gallery</p>
            <h2 className="font-serif leading-[1.05]" style={{ fontSize: 52 }}>
              Hand-finished,
              <br />
              <span className="font-script block mt-2" style={{ fontSize: 28, color: "#6f6a64" }}>
                kept forever
              </span>
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-md" style={{ fontSize: 14, letterSpacing: "1px" }}>
              Eight weeks later you receive a private film, an edited gallery, and an heirloom linen album.
              All printed slowly, by hand, on archival paper. Yours for a lifetime.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
