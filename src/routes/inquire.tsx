import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/inquire")({
  head: () => ({
    meta: [
      { title: "Inquire — Maison Lumière" },
      { name: "description", content: "Tell us about your day. We'd love to hear from you." },
      { property: "og:title", content: "Inquire — Maison Lumière" },
      { property: "og:description", content: "Tell us about your day. We'd love to hear from you." },
    ],
  }),
  component: Inquire,
});

function Inquire() {
  const [sent, setSent] = useState(false);
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <section className="pt-40 pb-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12 grid md:grid-cols-2 gap-20">
          <div>
            <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-6">— let's talk</p>
            <h1 className="font-serif text-6xl md:text-7xl leading-[1.05]">Tell us about<br/>your <span className="font-script text-7xl md:text-8xl">day.</span></h1>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-md">
              We respond to every inquiry personally within 48 hours. Share a few details and we'll send our full collection guide.
            </p>
            <div className="mt-12 space-y-3 text-sm">
              <p className="font-script text-2xl">hello@maisonlumiere.co</p>
              <p className="text-muted-foreground">Paris · available worldwide</p>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="space-y-8"
          >
            {sent ? (
              <div className="border border-border p-12 text-center">
                <p className="font-script text-3xl mb-3">merci.</p>
                <p className="text-muted-foreground text-sm">Your note is on its way. Camille will reply soon.</p>
              </div>
            ) : (
              <>
                {[
                  { k: "name", label: "Your name" },
                  { k: "email", label: "Email", type: "email" },
                  { k: "date", label: "Wedding date (approx.)" },
                  { k: "location", label: "Location" },
                ].map((f) => (
                  <div key={f.k}>
                    <label className="text-[10px] uppercase tracking-luxe text-muted-foreground">{f.label}</label>
                    <input required type={f.type ?? "text"} name={f.k}
                      className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 font-serif text-lg transition-colors" />
                  </div>
                ))}
                <div>
                  <label className="text-[10px] uppercase tracking-luxe text-muted-foreground">Tell us your story</label>
                  <textarea required rows={4} className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 font-serif text-lg resize-none transition-colors"/>
                </div>
                <button type="submit" className="mt-4 inline-block text-[11px] uppercase tracking-luxe border-b border-foreground pb-1 hover:text-muted-foreground transition-colors">
                  Send inquiry →
                </button>
              </>
            )}
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
