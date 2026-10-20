"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const dark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border-soft)] bg-[color:var(--card)] text-[var(--foreground)] shadow-[var(--shadow-soft)] transition hover:border-[color:var(--aqua-glow)] hover:text-[var(--aqua-strong)]"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
