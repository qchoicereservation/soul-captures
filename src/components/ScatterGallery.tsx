import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbox } from "@/components/Lightbox";
import { useIsMobile } from "@/hooks/use-mobile";

interface Props {
  images: string[];
}

const ROTATIONS = [-6, 4, -3, 5, -2, 3, -5, 4, -6, 3, -3, 5, -2];
const SIZES = [220, 260, 160, 220, 160, 220, 260, 160, 220, 220, 160, 220, 160];
const ZS = [1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1];

function rowConfig(count: number) {
  const slots = [];
  const margin = 6;
  const usable = 100 - margin * 2;
  for (let i = 0; i < count; i++) slots.push(margin + (usable / (count - 1)) * i);
  return slots;
}

export function ScatterGallery({ images }: Props) {
  const [lb, setLb] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const lbImgs = images.map((src, i) => ({ src, alt: `Memory ${i + 1}` }));

  if (isMobile) {
    return (
      <>
        <div className="mx-auto px-5 mt-12" style={{ maxWidth: 520 }}>
          <div className="grid grid-cols-2 gap-4">
            {images.map((src, k) => {
              const isRight = k % 2 === 1;
              const stagger = isRight ? 20 : 0;
              const rot = isRight ? 2 : -2;
              const dark = k % 5 === 2; // subtle: every 5th around index 2 dark
              return (
                <motion.button
                  key={k}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  onClick={() => setLb(k)}
                  className="block w-full"
                  style={{ marginTop: stagger, transform: `rotate(${rot}deg)` }}
                >
                  <div
                    className="polaroid"
                    style={{
                      padding: 8,
                      background: dark ? "#111" : "#fff",
                      ["--rot" as never]: `${rot}deg`,
                    }}
                  >
                    <div style={{ width: "100%", aspectRatio: "1 / 1.15", overflow: "hidden" }}>
                      <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
        <Lightbox
          images={lbImgs}
          index={lb}
          onClose={() => setLb(null)}
          onPrev={() => setLb((i) => (i === null ? null : (i - 1 + lbImgs.length) % lbImgs.length))}
          onNext={() => setLb((i) => (i === null ? null : (i + 1) % lbImgs.length))}
        />
      </>
    );
  }

  const top = rowConfig(4);
  const mid = rowConfig(5);
  const bot = rowConfig(4);
  const items = [
    ...top.map((left, idx) => ({ left, top: 4, i: idx })),
    ...mid.map((left, idx) => ({ left, top: 38, i: idx + 4 })),
    ...bot.map((left, idx) => ({ left, top: 72, i: idx + 9 })),
  ];

  return (
    <>
      <div className="relative mx-auto max-w-[1200px] mt-16" style={{ height: 1100 }}>
        {items.map((it, k) => {
          const w = SIZES[k % SIZES.length];
          const rot = ROTATIONS[k % ROTATIONS.length];
          const z = ZS[k % ZS.length];
          const verticalJitter = ((k * 17) % 20) - 10;
          const src = images[k % images.length];
          return (
            <motion.button
              key={k}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, rotate: rot }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={() => setLb(k)}
              className="polaroid absolute"
              style={{
                left: `calc(${it.left}% - ${w / 2}px)`,
                top: `calc(${it.top}% + ${verticalJitter}px)`,
                width: w,
                zIndex: z,
                ["--rot" as never]: `${rot}deg`,
                animation: "floatSoft 5s ease-in-out infinite",
                animationDelay: `${(k % 5) * 0.4}s`,
              }}
            >
              <div style={{ width: "100%", height: w * 1.15, overflow: "hidden" }}>
                <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="font-script text-center text-sm mt-2 text-foreground/70">
                no. {String(k + 1).padStart(2, "0")}
              </div>
            </motion.button>
          );
        })}
      </div>
      <Lightbox
        images={lbImgs}
        index={lb}
        onClose={() => setLb(null)}
        onPrev={() => setLb((i) => (i === null ? null : (i - 1 + lbImgs.length) % lbImgs.length))}
        onNext={() => setLb((i) => (i === null ? null : (i + 1) % lbImgs.length))}
      />
    </>
  );
}
