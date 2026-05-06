import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/experience", label: "Experience" },
  { to: "/inquire", label: "Inquire" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-[0_1px_0_var(--color-border)]" : "bg-transparent"
      }`}
      style={{ height: 80 }}
    >
      <div className="mx-auto max-w-[1500px] h-full flex items-center justify-between" style={{ padding: "0 60px" }}>
        <Link to="/" className="font-serif text-[26px] tracking-wide leading-none text-foreground">
          Maison<span className="font-script text-[34px] ml-1 align-baseline">Lumière</span>
        </Link>
        <nav className="hidden md:flex items-center" style={{ gap: 48 }}>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "after:scale-x-100" }}
              className="relative font-sans font-normal text-[13px] uppercase text-[#2b2b2b] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-[#2b2b2b] after:scale-x-0 after:origin-left after:transition-transform after:duration-300"
              style={{ letterSpacing: "2px" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
