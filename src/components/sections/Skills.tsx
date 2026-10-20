import { BriefcaseBusiness, Code2, PenTool, Search, Sparkles, TrendingUp } from "lucide-react";
import { portfolio } from "@/config/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap = {
  Search,
  BriefcaseBusiness,
  TrendingUp,
  Code2,
  Sparkles,
  PenTool,
};

export function Skills() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Expertise"
          title="Skills & Expertise"
          description="Editable focus areas spanning digital marketing, freelancing, creative work, and business-minded execution."
          align="center"
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {portfolio.skills.map((skill) => {
            const Icon = iconMap[skill.icon as keyof typeof iconMap] ?? Sparkles;
            return (
              <article
                key={skill.name}
                className="group rounded-[1.75rem] border border-[color:var(--border-soft)] bg-[color:var(--card)]/80 p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-[color:var(--aqua-glow)] hover:bg-[color:var(--card-hover)]"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--aqua-soft)] text-[var(--aqua-strong)]">
                  <Icon size={20} />
                </div>

                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-[var(--foreground)]">{skill.name}</h3>
                  {skill.category ? (
                    <span className="rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
                      {skill.category}
                    </span>
                  ) : null}
                </div>

                <p className="text-sm leading-7 text-[var(--muted)]">{skill.description}</p>

                {skill.proficiency ? (
                  <div className="mt-6">
                    <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                      <span>Proficiency</span>
                      <span>{skill.proficiency}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[color:var(--surface)]">
                      <div className="h-full rounded-full bg-[linear-gradient(90deg,var(--aqua-soft),var(--aqua-strong),var(--cyan-strong))]" style={{ width: skill.proficiency }} />
                    </div>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
