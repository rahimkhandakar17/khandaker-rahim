import { CalendarDays, GraduationCap } from "lucide-react";
import { portfolio } from "@/config/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Education"
          title="Education"
          description="Academic details and learning milestones can be added here as they are confirmed."
        />

        <div className="relative space-y-6 before:absolute before:left-[18px] before:top-0 before:h-full before:w-px before:bg-[linear-gradient(to_bottom,rgba(76,226,255,0.5),rgba(76,226,255,0.08))]">
          {portfolio.education.map((item, index) => (
            <article
              key={`${item.institution}-${index}`}
              className="relative pl-14"
            >
              <div className="absolute left-0 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--aqua-glow)] bg-[color:var(--surface)] shadow-[0_0_24px_rgba(113,233,255,0.3)]">
                <GraduationCap size={16} className="text-[var(--aqua-strong)]" />
              </div>

              <div className="rounded-[1.75rem] border border-[color:var(--border-soft)] bg-[color:var(--card)]/80 p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-[var(--aqua-strong)]">
                      {item.current ? "Current" : "Study"}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">{item.institution}</h3>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface)] px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                    <CalendarDays size={13} />
                    {item.startDate} {item.endDate ? `– ${item.endDate}` : ""}
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-lg font-medium text-[var(--foreground)]">{item.degree}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.field}</p>
                </div>

                {item.description ? (
                  <p className="mt-5 text-base leading-7 text-[var(--muted)]">{item.description}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
