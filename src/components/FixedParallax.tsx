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
  switchInterval = 6000,
}: Props) {
  const images = Array.isArray(image) ? image : [image];
  const [i, setI] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => setI((x) => (x + 1) % images.length), switchInterval);
    return () => clearInterval(t);
  }, [images.length, switchInterval]);

  const overlayClass =
    overlay === "dark"
      ? "bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70"
      : overlay === "soft"
      ? "bg-gradient-to-b from-foreground/20 via-foreground/5 to-foreground/30"
      : "";

  return (
    <section
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height, ...style }}
    >
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
      {overlay !== "none" && <div className={`absolute inset-0 ${overlayClass}`} />}
      <div className="relative z-10 h-full w-full">{children}</div>
    </section>
  );
}
