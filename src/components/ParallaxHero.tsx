import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

interface Props {
  images: string[];
  intervalMs?: number;
}

export function ParallaxHero({ images, intervalMs = 4500 }: Props) {
  const [idx, setIdx] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const scaleScroll = useTransform(scrollY, [0, 800], [1, 1.15]);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), intervalMs);
    return () => clearInterval(t);
  }, [images.length, intervalMs]);

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden bg-foreground">
      {/* Layer 1 — parallax image */}
      <motion.div style={{ y, scale: scaleScroll }} className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={idx}
            src={images[idx]}
            alt=""
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.6 }, scale: { duration: intervalMs / 1000 + 1, ease: "linear" } }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </motion.div>

      {/* Layer 2 — dark overlay (outside the motion div so it doesn't move) */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.30), rgba(0,0,0,0.52))",
        }}
      />

      {/* Layer 3 — content slot (unused in current usage but kept for extensibility) */}
    </div>
  );
}
