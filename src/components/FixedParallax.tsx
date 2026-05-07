import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  image: string | string[];
  height?: string;
  children?: ReactNode;
  overlay?: "none" | "soft" | "dark";
  className?: string;
  style?: CSSProperties;
  switchInterval?: number;
}

export function FixedParallax({
  image,
  height = "100vh",
  children,
  overlay = "soft",
  className = "",
  style,
  switchInterval = 4000,
}: Props) {
  const images = Array.isArray(image) ? image : [image];
  const [i, setI] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => setI((x) => (x + 1) % images.length), switchInterval);
    return () => clearInterval(t);
  }, [images.length, switchInterval]);

  const overlayStyle: CSSProperties =
    overlay === "dark"
      ? {
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.40), rgba(0,0,0,0.62))",
        }
      : overlay === "soft"
      ? {
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.30), rgba(0,0,0,0.50))",
        }
      : {};

  return (
    <section
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height, ...style }}
    >
      {/* Layer 1 — parallax image */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 parallax-bg"
            style={{
              backgroundImage: `url(${images[i]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>
      </div>

      {/* Layer 2 — dark overlay */}
      {overlay !== "none" && (
        <div className="absolute inset-0 z-[1]" style={overlayStyle} />
      )}

      {/* Layer 3 — content */}
      <div
        className="relative z-[2] h-full w-full"
        style={{ textShadow: "0 2px 10px rgba(0,0,0,0.25)" }}
      >
        {children}
      </div>
    </section>
  );
}
