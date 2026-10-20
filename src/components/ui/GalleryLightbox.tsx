"use client";

import { ArrowLeft, ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import type { GalleryProject } from "@/types/portfolio";

type GalleryLightboxProps = {
  items: GalleryProject[];
  index: number;
  onClose: () => void;
};

export function GalleryLightbox({ items, index, onClose }: GalleryLightboxProps) {
  const activeItem = items[index];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") {
        const nextIndex = index === items.length - 1 ? 0 : index + 1;
        window.dispatchEvent(new CustomEvent("lightbox-next", { detail: nextIndex }));
      }
      if (event.key === "ArrowLeft") {
        const prevIndex = index === 0 ? items.length - 1 : index - 1;
        window.dispatchEvent(new CustomEvent("lightbox-prev", { detail: prevIndex }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index, items.length, onClose]);

  if (!activeItem) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#020b14]/80 p-4 backdrop-blur-sm">
      <div role="dialog" aria-modal="true" className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-[color:var(--border-soft)] bg-[color:var(--surface)] shadow-[0_35px_90px_rgba(2,8,20,0.45)]">
        <button
          type="button"
          aria-label="Close gallery"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white transition hover:bg-black/50"
        >
          <X size={18} />
        </button>

        <div className="grid overflow-hidden md:grid-cols-2">
          <div className="relative min-h-[260px] border-b border-[color:var(--border-soft)] md:min-h-[420px] md:border-b-0 md:border-r">
            <Image
              src={activeItem.image}
              alt={activeItem.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col justify-center p-6 md:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--aqua-strong)]">
              {activeItem.category}
            </p>
            <h3 className="text-2xl font-semibold text-[var(--foreground)]">{activeItem.title}</h3>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{activeItem.description}</p>

            {activeItem.link ? (
              <a
                href={activeItem.link}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--aqua-glow)]/60 bg-[color:var(--aqua-soft)] px-4 py-2 text-sm font-medium text-[var(--aqua-strong)] transition hover:opacity-90"
              >
                View Project
              </a>
            ) : null}

            <div className="mt-8 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("lightbox-prev", { detail: index === 0 ? items.length - 1 : index - 1 }))}
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-soft)] px-3 py-2 text-sm text-[var(--foreground)] transition hover:border-[color:var(--aqua-glow)]"
              >
                <ArrowLeft size={16} /> Prev
              </button>

              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("lightbox-next", { detail: index === items.length - 1 ? 0 : index + 1 }))}
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-soft)] px-3 py-2 text-sm text-[var(--foreground)] transition hover:border-[color:var(--aqua-glow)]"
              >
                Next <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
