import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  backImages: string[];        // auto-switching
  frontImage: string;
  backSize?: { w: number; h: number };
  frontSize?: { w: number; h: number };
  backRotate?: number;
  frontRotate?: number;
  interval?: number;
  /** front offset relative to back's bottom-right corner */
  frontOffset?: { right: number; bottom: number };
}

export function StackedPolaroids({
  backImages,
  frontImage,
  backSize = { w: 320, h: 420 },
  frontSize = { w: 220, h: 280 },
  backRotate = 0,
  frontRotate = 6,
  interval = 4500,
  frontOffset = { right: -40, bottom: -30 },
}: Props) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (backImages.length <= 1) return;
    const id = setInterval(() => setI((x) => (x + 1) % backImages.length), interval);
    return () => clearInterval(id);
  }, [backImages.length, interval]);

  const totalW = backSize.w + Math.max(0, -frontOffset.right) + frontSize.w / 2;
  const totalH = backSize.h + Math.max(0, -frontOffset.bottom) + 20;

  return (
    <div className="relative mx-auto" style={{ width: totalW, height: totalH }}>
      {/* BACK polaroid (switching) */}
      <div
        className="polaroid absolute animate-float"
        style={{
          top: 0,
          left: 0,
          width: backSize.w,
          padding: "12px 12px 12px 12px",
          transform: `rotate(${backRotate}deg)`,
          ["--rot" as never]: `${backRotate}deg`,
          zIndex: 1,
        }}
      >
        <div style={{ width: "100%", height: backSize.h, overflow: "hidden", position: "relative" }}>
          <AnimatePresence mode="sync">
            <motion.img
              key={i}
              src={backImages[i]}
              alt=""
              loading="lazy"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>
      </div>

      {/* FRONT polaroid (static) */}
      <div
        className="polaroid absolute animate-float"
        style={{
          width: frontSize.w,
          padding: "10px 10px 10px 10px",
          right: frontOffset.right,
          bottom: frontOffset.bottom,
          transform: `rotate(${frontRotate}deg)`,
          ["--rot" as never]: `${frontRotate}deg`,
          zIndex: 2,
          animationDelay: "1.2s",
        }}
      >
        <div style={{ width: "100%", height: frontSize.h, overflow: "hidden" }}>
          <img src={frontImage} alt="" loading="lazy" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
