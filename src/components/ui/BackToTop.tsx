"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--aqua-glow)]/70 bg-[color:var(--aqua-soft)] text-[var(--aqua-strong)] shadow-[0_0_30px_rgba(65,214,255,0.35)] transition hover:-translate-y-1 hover:shadow-[0_0_32px_rgba(65,214,255,0.48)] md:bottom-8 md:right-8"
    >
      <ArrowUp size={18} />
    </button>
  );
}
