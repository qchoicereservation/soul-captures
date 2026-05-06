import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-background mt-0">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="hairline" />
        <div className="grid grid-cols-1 md:grid-cols-3 relative" style={{ padding: "80px 0" }}>
          {/* Vertical dividers */}
          <div className="hidden md:block vrule absolute left-1/3 top-12 bottom-12" />
          <div className="hidden md:block vrule absolute left-2/3 top-12 bottom-12" />

          <div className="md:pr-12">
            <div className="font-serif text-2xl">
              Maison<span className="font-script text-3xl ml-1">Lumière</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-[1.8] max-w-xs">
              Editorial wedding & portrait photography. Capturing love as it is — quiet, golden, fleeting.
            </p>
          </div>

          <div className="md:px-12 mt-10 md:mt-0">
            <h4 className="text-[11px] uppercase tracking-luxe mb-6">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/portfolio" className="hover:underline">Portfolio</Link></li>
              <li><Link to="/inquire" className="hover:underline">Inquire</Link></li>
            </ul>
          </div>

          <div className="md:pl-12 mt-10 md:mt-0">
            <h4 className="text-[11px] uppercase tracking-luxe mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>hello@maisonlumiere.co</li>
              <li>+33 1 84 88 12 04</li>
              <li>Paris · Worldwide</li>
            </ul>
          </div>
        </div>
        <div className="hairline" />
        <div className="py-6 flex flex-col md:flex-row justify-between text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Maison Lumière. All rights reserved.</span>
          <span className="font-script text-base">crafted with intention</span>
        </div>
      </div>
    </footer>
  );
}
