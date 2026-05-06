import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface Props {
  backImages: string[];
  frontImage: string;
  backSize?: { w: number; h: number };
  frontSize?: { w: number; h: number };
  backRotate?: number;
  frontRotate?: number;
  interval?: number;
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
  const isMobile = useIsMobile();

  useEffect(() => {
    if (backImages.length <= 1) return;
    const id = setInterval(() => setI((x) => (x + 1) % backImages.length), interval);
    return () => clearInterval(id);
  }, [backImages.length, interval]);

  // mobile: vertical stack with small overlap
  if (isMobile) {
    const bW = 240, bH = 320, fW = 160, fH = 210;
    const totalH = bH + fH - 20 + 40;
    return (
      <div className="relative mx-auto" style={{ width: bW + 24, height: totalH }}>
        <div
          className="polaroid absolute animate-float"
          style={{
            width: bW,
            padding: "10px",
            top: 0,
            left: "50%",
            marginLeft: -(bW / 2),
            transform: "rotate(0deg)",
            ["--rot" as never]: "0deg",
            zIndex: 1,
          }}
        >
          <div style={{ width: "100%", height: bH, overflow: "hidden", position: "relative" }}>
            <AnimatePresence mode="sync">
              <motion.img
                key={i}
                src={backImages[i]}
                alt=""
                loading="lazy"
                initial={{ opacity: 0, scale: 1.01 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>
        <div
          className="polaroid absolute animate-float"
          style={{
            width: fW,
            padding: "8px",
            top: bH - 20 + 20,
            left: "50%",
            marginLeft: -(fW / 2),
            transform: "rotate(3deg)",
            ["--rot" as never]: "3deg",
            zIndex: 2,
            animationDelay: "1.2s",
          }}
        >
          <div style={{ width: "100%", height: fH, overflow: "hidden" }}>
            <img src={frontImage} alt="" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    );
  }

  const totalW = backSize.w + Math.max(0, -frontOffset.right) + frontSize.w / 2;
  const totalH = backSize.h + Math.max(0, -frontOffset.bottom) + 20;

  return (
    <div className="relative mx-auto" style={{ width: totalW, height: totalH }}>
      <div
        className="polaroid absolute animate-float"
        style={{
          top: 0, left: 0,
          width: backSize.w,
          padding: "12px",
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
              initial={{ opacity: 0, scale: 1.01 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>
      </div>

      <div
        className="polaroid absolute animate-float"
        style={{
          width: frontSize.w,
          padding: "10px",
          right: frontOffset.right,
          bottom: frontOffset.bottom,
          transform: `rotate(${frontRotate}deg)`,
          ["--rot" as never]: `${frontRotate}deg`,
          zIndex: 2,
          animationDelay: "1.2s",
          background: "#111",
        }}
      >
        <div style={{ width: "100%", height: frontSize.h, overflow: "hidden" }}>
          <img src={frontImage} alt="" loading="lazy" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
