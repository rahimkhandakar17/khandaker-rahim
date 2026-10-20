"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { portfolio } from "@/config/portfolio";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = portfolio.navItems
      .map((item) => item.href.replace("#", ""))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: [0.3, 0.6, 0.8] },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--surface-overlay)]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[color:var(--surface-overlay)]/70">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="#home" className="flex items-center gap-3 text-[var(--foreground)]">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--aqua-glow)]/60 bg-[radial-gradient(circle_at_top,_rgba(71,207,255,0.25),_transparent_70%)] text-sm font-bold text-[var(--aqua-strong)] shadow-[0_0_20px_rgba(64,214,255,0.32)]">
            {portfolio.monogram}
          </div>
          <span className="text-lg font-semibold tracking-tight">{portfolio.name}</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {portfolio.navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={[
                  "text-sm font-medium transition-colors",
                  isActive ? "text-[var(--aqua-strong)]" : "text-[var(--muted)] hover:text-[var(--foreground)]",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border-soft)] bg-[color:var(--card)] text-[var(--foreground)] shadow-[var(--shadow-soft)] transition hover:border-[color:var(--aqua-glow)] md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[color:var(--border-soft)] bg-[color:var(--surface-overlay)]/95 p-4 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {portfolio.navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={[
                    "rounded-2xl px-3 py-2 text-sm font-medium transition",
                    isActive
                      ? "bg-[color:var(--aqua-soft)] text-[var(--aqua-strong)]"
                      : "text-[var(--foreground)] hover:bg-[color:var(--card-hover)]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
