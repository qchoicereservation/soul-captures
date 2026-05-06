import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-background mt-16">
      <div className="w-full" style={{ height: 1, background: "#d8d3cc" }} />
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12" style={{ paddingTop: 80, paddingBottom: 40 }}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-10 md:gap-0 items-start">
          {/* LEFT — Brand */}
          <div className="md:pr-12">
            <div className="font-serif text-3xl leading-none">
              Maison<span className="font-script text-4xl ml-1">Lumière</span>
            </div>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Editorial wedding & portrait photography. Capturing love as it is — quiet, golden, fleeting.
            </p>
          </div>

          {/* divider */}
          <div className="hidden md:block self-center" style={{ height: 60, width: 1, background: "#d8d3cc" }} />

          {/* CENTER — Navigation */}
          <div className="md:px-12 text-center">
            <h4 className="text-[11px] uppercase tracking-luxe mb-5">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/portfolio" className="hover:underline">Portfolio</Link></li>
              <li><Link to="/experience" className="hover:underline">Experience</Link></li>
              <li><Link to="/inquire" className="hover:underline">Inquire</Link></li>
            </ul>
          </div>

          {/* divider */}
          <div className="hidden md:block self-center" style={{ height: 60, width: 1, background: "#d8d3cc" }} />

          {/* RIGHT — Contact */}
          <div className="md:pl-12 md:text-right">
            <h4 className="text-[11px] uppercase tracking-luxe mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>hello@maisonlumiere.co</li>
              <li>+33 1 84 88 12 04</li>
              <li>Paris · Worldwide</li>
              <li className="font-script text-lg text-foreground/80 mt-3">@maisonlumiere</li>
            </ul>
          </div>
        </div>

        <div className="mt-16" style={{ height: 1, background: "#d8d3cc" }} />
        <div className="mt-6 flex flex-col md:flex-row justify-between text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Maison Lumière. All rights reserved.</span>
          <span className="font-script text-base">crafted with intention</span>
        </div>
      </div>
    </footer>
  );
}
