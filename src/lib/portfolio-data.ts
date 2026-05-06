import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const heroImages = [hero1, hero2, hero3];
export const allImages = [hero1, hero2, hero3, g1, g2, g3, g4, g5, g6];

export type Service = {
  slug: "engagements" | "weddings" | "elopements";
  name: string;
  tagline: string;
  description: string;
  story: string;
  hero: string;
  gallery: string[];
};

export const services: Record<Service["slug"], Service> = {
  engagements: {
    slug: "engagements",
    name: "Engagements",
    tagline: "the beginning",
    description: "Quiet light, hands held, the first chapter.",
    hero: hero3,
    gallery: [hero3, g4, g2, g1, g6, g5],
    story:
      "An engagement session is the prologue. We wander, we slow down, we let the camera meet you in the middle of a real moment. No stiff poses — just the way you look at each other when you forget the world is watching.",
  },
  weddings: {
    slug: "weddings",
    name: "Weddings",
    tagline: "the cinematic day",
    description: "An editorial film of vows, light, and small, sacred details.",
    hero: hero1,
    gallery: [hero1, g2, g1, g5, g3, g4],
    story:
      "Your wedding deserves to be remembered the way it felt — golden, breathless, alive. We document with the eye of a film director and the heart of a guest. Every frame, an heirloom.",
  },
  elopements: {
    slug: "elopements",
    name: "Elopements",
    tagline: "just the two of you",
    description: "Cliffsides, chapels, mountains — vows whispered into the wind.",
    hero: hero2,
    gallery: [hero2, g6, g5, g3, g1, g4],
    story:
      "Eloping is not smaller — it is more. More intimacy, more presence, more landscape. We travel anywhere love takes us and return with images that feel like a private film only the two of you starred in.",
  },
};
