import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-muted/40 mt-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <div className="font-serif text-2xl">Maison<span className="font-script text-3xl ml-1">Lumière</span></div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Editorial wedding & portrait photography. Capturing love as it is — quiet, golden, fleeting.
            </p>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-luxe mb-5">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/portfolio" className="hover:underline">Portfolio</Link></li>
              <li><Link to="/memories" className="hover:underline">Memories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-luxe mb-5">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services/$slug" params={{ slug: "engagements" }} className="hover:underline">Engagements</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "weddings" }} className="hover:underline">Weddings</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "elopements" }} className="hover:underline">Elopements</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-luxe mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>hello@maisonlumiere.co</li>
              <li>+33 1 84 88 12 04</li>
              <li>Paris · Worldwide</li>
            </ul>
          </div>
        </div>
        <div className="hairline mt-16" />
        <div className="mt-6 flex flex-col md:flex-row justify-between text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Maison Lumière. All rights reserved.</span>
          <span className="font-script text-base">crafted with intention</span>
        </div>
      </div>
    </footer>
  );
}
