import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "@/components/Header";
import h1 from "@/assets/hero-1.jpg";
import h2 from "@/assets/hero-2.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g5 from "@/assets/gallery-5.jpg";

export const Route = createFileRoute("/inquire")({
  head: () => ({
    meta: [
      { title: "Say Hello — Maison Lumière" },
      { name: "description", content: "Ready to plan your big day? Send us a note — we reply within 48 hours." },
      { property: "og:title", content: "Say Hello — Maison Lumière" },
      { property: "og:description", content: "Ready to plan your big day? Send us a note — we reply within 48 hours." },
      { property: "og:image", content: h1 },
    ],
  }),
  component: Inquire,
});

const fields = [
  { k: "name", label: "YOUR NAME", type: "text" },
  { k: "email", label: "EMAIL ADDRESS", type: "email" },
  { k: "service", label: "TYPE OF SERVICE", type: "text" },
  { k: "source", label: "HOW'D YOU FIND ME?", type: "text" },
];

const switchImages = [g2, g5, g1];

function Inquire() {
  const [sent, setSent] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setImgIdx((i) => (i + 1) % switchImages.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="relative min-h-screen text-white"
      style={{
        backgroundImage: `url(${h2})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />

      <div className="relative z-10">
        <Header />
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="min-h-screen flex items-center"
          style={{ paddingTop: 120, paddingBottom: 80 }}
        >
          <div className="mx-auto w-full grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-20 items-center px-6 lg:px-12" style={{ maxWidth: 1200 }}>
            {/* LEFT */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.95, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="font-script text-white"
                style={{ fontSize: 64, lineHeight: 1 }}
              >
                Say Hello
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="font-sans text-white"
                style={{ fontSize: 12, letterSpacing: "3px", marginTop: 10 }}
              >
                READY TO PLAN YOUR BIG DAY!
              </motion.p>

              {/* Polaroid stack */}
              <div className="relative mt-12 md:mt-16 mx-auto md:mx-0" style={{ width: 360, maxWidth: "100%", height: 380 }}>
                {/* BACK switching */}
                <div
                  className="polaroid absolute animate-float grain-overlay"
                  style={{
                    width: 240,
                    padding: "10px",
                    left: 0,
                    top: 0,
                    transform: "rotate(-2deg)",
                    ["--rot" as never]: "-2deg",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                    zIndex: 1,
                    overflow: "hidden",
                  }}
                >
                  <div style={{ width: "100%", height: 320, overflow: "hidden", position: "relative" }}>
                    <AnimatePresence>
                      <motion.img
                        key={imgIdx}
                        src={switchImages[imgIdx]}
                        alt=""
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </AnimatePresence>
                  </div>
                </div>
                {/* FRONT static — black frame */}
                <div
                  className="polaroid absolute animate-float"
                  style={{
                    width: 220,
                    padding: "10px",
                    right: -40,
                    bottom: -30,
                    transform: "rotate(3deg)",
                    ["--rot" as never]: "3deg",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
                    zIndex: 2,
                    animationDelay: "1.2s",
                    background: "#111",
                  }}
                >
                  <div style={{ width: "100%", height: 300, overflow: "hidden" }}>
                    <img src={g3} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — FORM */}
            <div>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-white/40 p-12 text-center"
                >
                  <p className="font-script text-4xl mb-4">merci.</p>
                  <p className="text-white/80 text-sm" style={{ letterSpacing: "1.5px" }}>
                    Your note is on its way. Camille will reply within 48 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-[22px]">
                  {fields.map((f, idx) => (
                    <motion.div
                      key={f.k}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + idx * 0.08 }}
                    >
                      <label
                        className="block font-sans uppercase"
                        style={{
                          fontSize: 11,
                          letterSpacing: "2px",
                          color: "rgba(255,255,255,0.7)",
                          marginBottom: 6,
                        }}
                      >
                        {f.label}
                      </label>
                      <input
                        required
                        type={f.type}
                        name={f.k}
                        className="w-full bg-transparent text-white outline-none transition-colors focus:border-white"
                        style={{
                          height: 48,
                          border: "1px solid rgba(255,255,255,0.5)",
                          padding: "12px",
                          fontSize: 14,
                        }}
                      />
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <label
                      className="block font-sans uppercase"
                      style={{ fontSize: 11, letterSpacing: "2px", color: "rgba(255,255,255,0.7)", marginBottom: 6 }}
                    >
                      TELL ME ALL THE THINGS...
                    </label>
                    <textarea
                      required
                      name="message"
                      className="w-full bg-transparent text-white outline-none focus:border-white resize-none"
                      style={{
                        height: 140,
                        border: "1px solid rgba(255,255,255,0.5)",
                        padding: "12px",
                        fontSize: 14,
                      }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="pt-4"
                  >
                    <button
                      type="submit"
                      className="group inline-flex items-center font-sans uppercase text-white"
                      style={{
                        fontSize: 13,
                        letterSpacing: "2px",
                        paddingBottom: 4,
                        borderBottom: "1px solid rgba(255,255,255,1)",
                      }}
                    >
                      SEND IT
                      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
                    </button>
                  </motion.div>
                </form>
              )}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
