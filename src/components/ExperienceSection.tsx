import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Polaroid } from "./Polaroid";

interface Props {
  bigImages: string[];
  smallImage: string;
  intervalMs?: number;
}

export function ExperienceSection({ bigImages, smallImage, intervalMs = 3500 }: Props) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % bigImages.length), intervalMs);
    return () => clearInterval(t);
  }, [bigImages.length, intervalMs]);

  return (
    <section className="bg-background py-32 lg:py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Centered stacked image block */}
        <div className="lg:col-span-7 relative flex justify-center">
          <div className="relative" style={{ width: 420, height: 520 }}>
            <div className="absolute inset-0 overflow-hidden bg-muted">
              <AnimatePresence mode="sync">
                <motion.img
                  key={i}
                  src={bigImages[i]}
                  alt=""
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
            <div
              className="absolute -top-10 -right-16 z-10 hidden md:block"
              style={{ transform: "rotate(6deg)" }}
            >
              <Polaroid src={smallImage} alt="" width={220} rotate={6} imageHeight={260} caption="our favorite light" />
            </div>
          </div>
        </div>

        {/* Vertical divider */}
        <div className="hidden lg:flex lg:col-span-1 justify-center">
          <div className="w-px h-[420px] bg-border" />
        </div>

        {/* Text */}
        <div className="lg:col-span-4">
          <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-6">— the experience</p>
          <span className="divider-sm mb-8" />
          <h2 className="font-serif text-5xl leading-[1.05]">
            A slow, <span className="font-script text-6xl">honest</span> kind of luxury.
          </h2>
          <p className="mt-8 text-base leading-[1.8] text-muted-foreground" style={{ maxWidth: 380 }}>
            From first inquiry to final album, every detail is held with intention — long pre-wedding
            conversations, quiet on-the-day presence, and heirloom prints that arrive in linen boxes,
            ready to outlive us all.
          </p>
        </div>
      </div>
    </section>
  );
}
