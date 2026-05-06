import type { CSSProperties, ReactNode } from "react";

interface Props {
  image: string;
  height?: string;
  children?: ReactNode;
  overlay?: "none" | "soft" | "dark";
  className?: string;
  style?: CSSProperties;
}

/**
 * Fixed background-attachment parallax.
 * Image stays fixed in viewport while content scrolls past.
 */
export function FixedParallax({
  image,
  height = "100vh",
  children,
  overlay = "soft",
  className = "",
  style,
}: Props) {
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
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "parallaxZoom 14s ease-in-out infinite alternate",
          willChange: "transform",
        }}
      />
      {overlay !== "none" && <div className={`absolute inset-0 ${overlayClass}`} />}
      <div className="relative z-10 h-full w-full">{children}</div>
    </section>
  );
}
