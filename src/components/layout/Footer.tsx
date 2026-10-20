"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { portfolio } from "@/config/portfolio";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-[color:var(--border-soft)] bg-[color:var(--surface)]/80 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1.3fr_0.8fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--aqua-glow)]/60 bg-[radial-gradient(circle_at_top,_rgba(71,207,255,0.2),_transparent_70%)] text-sm font-bold text-[var(--aqua-strong)] shadow-[0_0_20px_rgba(64,214,255,0.28)]">
                {portfolio.monogram}
              </div>
              <div>
                <p className="text-lg font-semibold text-[var(--foreground)]">{portfolio.name}</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-[var(--muted)]">{portfolio.brandDescription}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Quick links</h3>
            <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              {portfolio.navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition hover:text-[var(--foreground)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Connect</h3>
            <div className="mt-4 space-y-4">
              <SocialLinks links={portfolio.socialLinks} />
              <a href="#home" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--aqua-strong)] transition hover:text-[var(--foreground)]">
                <ArrowUp size={16} /> Back to top
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[color:var(--border-soft)] pt-6 text-center text-sm text-[var(--muted)]">
          © {year ?? 2025} {portfolio.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
