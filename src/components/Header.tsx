import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/memories", label: "Memories" },
  { to: "/inquire", label: "Inquire" },
] as const;

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-8 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl tracking-wide">
          Maison<span className="font-script text-3xl ml-1 align-baseline">Lumière</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-luxe">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-foreground after:scale-x-100" }}
              inactiveProps={{ className: "text-foreground/70 hover:text-foreground" }}
              className="relative transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-foreground after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
