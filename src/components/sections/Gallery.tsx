"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { portfolio } from "@/config/portfolio";
import { GalleryLightbox } from "@/components/ui/GalleryLightbox";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categories = ["All", ...new Set(portfolio.gallery.map((item) => item.category))];

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredProjects =
    activeFilter === "All"
      ? portfolio.gallery
      : portfolio.gallery.filter((item) => item.category === activeFilter);

  const openProject = (project: (typeof portfolio.gallery)[number]) => {
    const index = portfolio.gallery.findIndex(
      (item) => item.title === project.title && item.image === project.image,
    );
    setSelectedIndex(index >= 0 ? index : 0);
  };

  useEffect(() => {
    const handleNext = (event: Event) => {
      const detail = (event as CustomEvent<number>).detail;
      setSelectedIndex((current) => {
        if (current === null) return 0;
        return detail;
      });
    };

    const handlePrev = (event: Event) => {
      const detail = (event as CustomEvent<number>).detail;
      setSelectedIndex((current) => {
        if (current === null) return 0;
        return detail;
      });
    };

    window.addEventListener("lightbox-next", handleNext);
    window.addEventListener("lightbox-prev", handlePrev);
    return () => {
      window.removeEventListener("lightbox-next", handleNext);
      window.removeEventListener("lightbox-prev", handlePrev);
    };
  }, []);

  return (
    <section id="gallery" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Work"
          title="My Gallery"
          description="A curated display of creative work, digital concepts, and project highlights that can be updated as your portfolio grows."
          align="center"
        />

        {portfolio.gallery.length ? (
          <>
            <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveFilter(category)}
                  className={[
                    "rounded-full border px-4 py-2 text-sm font-medium transition",
                    activeFilter === category
                      ? "border-[color:var(--aqua-glow)] bg-[color:var(--aqua-soft)] text-[var(--aqua-strong)]"
                      : "border-[color:var(--border-soft)] bg-[color:var(--card)] text-[var(--foreground)] hover:border-[color:var(--aqua-glow)]",
                  ].join(" ")}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <button
                  key={`${project.title}-${index}`}
                  type="button"
                  onClick={() => openProject(project)}
                  className="group relative overflow-hidden rounded-[1.8rem] border border-[color:var(--border-soft)] bg-[color:var(--card)] text-left shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-[color:var(--aqua-glow)]"
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(_to_top,rgba(2,6,13,0.8),rgba(2,6,13,0.15)_40%,transparent)]" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--aqua-soft)]">{project.category}</p>
                      <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="rounded-[2rem] border border-dashed border-[color:var(--border-soft)] bg-[color:var(--surface)]/70 p-12 text-center text-[var(--muted)]">
            No gallery items available yet. Add projects to the portfolio configuration file.
          </div>
        )}

        {selectedIndex !== null && (
          <GalleryLightbox
            items={portfolio.gallery}
            index={selectedIndex}
            onClose={() => setSelectedIndex(null)}
          />
        )}
      </div>
    </section>
  );
}
