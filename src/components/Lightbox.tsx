import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface Props {
  images: { src: string; alt: string }[];
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({ images, index, onClose, onPrev, onNext }: Props) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-md flex items-center justify-center p-6"
          onClick={onClose}
        >
          <button onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-6 md:left-12 text-background/80 hover:text-background text-sm uppercase tracking-luxe">
            ← Prev
          </button>
          <button onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-6 md:right-12 text-background/80 hover:text-background text-sm uppercase tracking-luxe">
            Next →
          </button>
          <button onClick={onClose} className="absolute top-6 right-6 text-background/80 text-xs uppercase tracking-luxe">Close</button>
          <motion.img
            key={index}
            initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            src={images[index].src} alt={images[index].alt}
            className="max-h-[88vh] max-w-[90vw] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
