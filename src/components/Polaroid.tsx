import { motion } from "framer-motion";
import type { CSSProperties } from "react";

interface Props {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  rotate?: number;
  style?: CSSProperties;
  className?: string;
  delay?: number;
  imageHeight?: number;
}

export function Polaroid({
  src, alt, caption, width = 220, rotate = 0, style, className = "", delay = 0, imageHeight,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: rotate * 1.4 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.2, 0.8, 0.2, 1] }}
      className={`polaroid ${className}`}
      style={{ width, transform: `rotate(${rotate}deg)`, ["--rot" as never]: `${rotate}deg`, ...style }}
    >
      <div style={{ width: "100%", height: imageHeight ?? width * 1.15, overflow: "hidden" }}>
        <img src={src} alt={alt} loading="lazy" />
      </div>
      {caption && (
        <div className="font-script text-center text-base mt-3 text-foreground/80">{caption}</div>
      )}
    </motion.div>
  );
}
