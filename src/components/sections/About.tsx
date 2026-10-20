import Image from "next/image";
import { ArrowUpRight, Briefcase, Compass, Sparkles } from "lucide-react";
import { portfolio } from "@/config/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

const highlightCards = [
  {
    title: "Creative Thinking",
    text: "Approaching ideas with curiosity, originality, and practical direction.",
    icon: Sparkles,
  },
  {
    title: "Freelance Mindset",
    text: "Collaborative, flexible, and focused on helping ideas become useful results.",
    icon: Briefcase,
  },
  {
    title: "Growth Focus",
    text: "Exploring modern opportunities with a commitment to learning and movement.",
    icon: Compass,
  },
];

export function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="A Little About Me"
          description="A business-minded creative who enjoys digital expression, practical problem solving, and building meaningful opportunities through thoughtful work."
        />

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--border-soft)] bg-[color:var(--surface)]/80 p-4 shadow-[var(--shadow-soft)] backdrop-blur-xl">
            <div className="overflow-hidden rounded-[1.5rem] border border-[color:var(--border-soft)] bg-[radial-gradient(circle_at_top,_rgba(38,220,255,0.2),_rgba(14,31,46,0.94))] p-3">
              <Image
                src={portfolio.profileImage}
                alt={`${portfolio.name} profile illustration`}
                width={640}
                height={760}
                className="h-[460px] w-full rounded-[1.2rem] object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-[color:var(--border-soft)] bg-[color:var(--card)]/80 p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl">
              <p className="text-lg leading-8 text-[var(--muted)]">{portfolio.bio}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlightCards.map(({ title, text, icon: Icon }) => (
                <div
                  key={title}
                  className="rounded-[1.5rem] border border-[color:var(--border-soft)] bg-[color:var(--card)]/80 p-5 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-[color:var(--aqua-glow)]"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--aqua-soft)] text-[var(--aqua-strong)]">
                    <Icon size={18} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[var(--foreground)]">{title}</h3>
                  <p className="text-sm leading-6 text-[var(--muted)]">{text}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[1.75rem] border border-[color:var(--border-soft)] bg-[color:var(--card)]/80 p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-[var(--foreground)]">Future direction</h3>
                <ArrowUpRight className="text-[var(--aqua-strong)]" size={18} />
              </div>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                I am focused on expanding my digital capabilities, building meaningful creative work, and creating opportunities that align with both my personal growth and a strong professional vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
