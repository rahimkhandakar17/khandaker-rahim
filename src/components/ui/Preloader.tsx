"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { portfolio } from "@/config/portfolio";

export function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShow(false), 950);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--background)]"
        >
          <div className="flex flex-col items-center gap-5">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[color:var(--aqua-glow)]/50 bg-[radial-gradient(circle,_rgba(67,201,255,0.18),_transparent_55%)] shadow-[0_0_35px_rgba(40,192,255,0.35)]">
              <div className="absolute inset-2 rounded-full border border-[color:var(--aqua-glow)]/70 border-t-[color:var(--aqua-strong)]" />
              <div className="absolute inset-0 animate-[spin_1.3s_linear_infinite] rounded-full border-2 border-transparent border-t-[color:var(--aqua-strong)] border-r-[color:var(--aqua-soft)]" />
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--surface)] text-lg font-black tracking-[0.2em] text-[var(--aqua-strong)] shadow-[inset_0_0_18px_rgba(81,217,255,0.18)]">
                {portfolio.monogram}
              </div>
            </div>
            <div className="h-1.5 w-28 overflow-hidden rounded-full bg-[color:var(--surface)] ring-1 ring-[color:var(--border-soft)]">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="h-full w-1/2 rounded-full bg-[linear-gradient(90deg,var(--aqua-soft),var(--aqua-strong),var(--cyan-strong))]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
