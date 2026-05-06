import { useEffect, useState, useRef, type CSSProperties, type ReactNode } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

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
  switchInterval = 6500,
}: Props) {
  const images = Array.isArray(image) ? image : [image];
  const [i, setI] = useState(0);
  const isMobile = useIsMobile();
  const ref = useRef<HTMLElement>(null);

  // Transform-based parallax for mobile/tablet
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

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
      ref={ref}
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height, ...style }}
    >
      <motion.div
        className="absolute inset-[-15%]"
        style={{
          y: isMobile ? y : 0,
          willChange: "transform",
        }}
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`absolute inset-0 ${isMobile ? "" : "parallax-bg"}`}
            style={{
              backgroundImage: `url(${images[i]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>
      </motion.div>
      {overlay !== "none" && <div className={`absolute inset-0 ${overlayClass}`} />}
      <div className="relative z-10 h-full w-full">{children}</div>
    </section>
  );
}
