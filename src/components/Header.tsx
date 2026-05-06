import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/experience", label: "Experience" },
  { to: "/inquire", label: "Inquire" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled || open
            ? "bg-background/95 backdrop-blur-sm shadow-[0_1px_0_var(--color-border)]"
            : "bg-transparent"
        }`}
        style={{ height: "var(--nav-h, 80px)" }}
      >
        <div className="mx-auto max-w-[1500px] h-full flex items-center justify-between px-5 md:px-[60px]">
          <Link to="/" onClick={() => setOpen(false)} className="font-serif text-[22px] md:text-[26px] tracking-wide leading-none text-foreground">
            Maison<span className="font-script text-[28px] md:text-[34px] ml-1 align-baseline">Lumière</span>
          </Link>

          {/* desktop nav */}
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

          {/* hamburger */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-end gap-[6px] z-50"
          >
            <span className={`block h-px bg-foreground transition-all duration-300 ${open ? "w-6 translate-y-[3px] rotate-45" : "w-6"}`} />
            <span className={`block h-px bg-foreground transition-all duration-300 ${open ? "w-6 -translate-y-[4px] -rotate-45" : "w-4"}`} />
          </button>
        </div>
      </header>

      {/* mobile fullscreen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden fixed inset-0 z-30 bg-background flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-6">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="font-sans uppercase text-foreground"
                  style={{ fontSize: 18, letterSpacing: "2px" }}
                  activeProps={{ className: "font-script text-3xl normal-case tracking-normal" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <p className="font-script text-2xl mt-12 text-muted-foreground">Maison Lumière</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
