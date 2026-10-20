import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, PhoneCall, Sparkles } from "lucide-react";
import { portfolio } from "@/config/portfolio";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Hero() {
  const primaryHref = portfolio.navItems.find((item) => item.label === "Gallery")?.href ?? "#gallery";
  const contactHref = portfolio.contact.phone ? `tel:${portfolio.contact.phone}` : "#contact";

  return (
    <section id="home" className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface)]/80 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[var(--aqua-strong)] shadow-[var(--shadow-soft)] backdrop-blur-xl">
              <Sparkles size={14} />
              {portfolio.heroBadge}
            </div>

            <h1 className="max-w-2xl text-4xl font-semibold tracking-[-0.06em] text-[var(--foreground)] sm:text-5xl lg:text-7xl">
              {portfolio.heroHeadline.split(" ").map((word, index) => {
                const isGradientWord = word === "Digital" || word === "Experiences.";
                return (
                  <span
                    key={`${word}-${index}`}
                    className={isGradientWord ? "gradient-text block" : "block"}
                  >
                    {word}
                  </span>
                );
              })}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              {portfolio.heroIntro}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href={primaryHref}
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--aqua-soft)_0%,var(--aqua-strong)_30%,var(--cyan-strong)_100%)] px-5 py-3 text-sm font-semibold text-[var(--dark-strong)] shadow-[0_18px_40px_rgba(72,205,255,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(72,205,255,0.4)]"
              >
                Explore My Work
                <ArrowRight size={16} />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-soft)] bg-[color:var(--card)]/80 px-5 py-3 text-sm font-semibold text-[var(--foreground)] shadow-[var(--shadow-soft)] transition hover:border-[color:var(--aqua-glow)] hover:text-[var(--aqua-strong)]"
              >
                Let&apos;s Connect
              </Link>

              <a
                href={contactHref}
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-soft)] bg-[color:var(--card)]/80 px-5 py-3 text-sm font-semibold text-[var(--foreground)] shadow-[var(--shadow-soft)] transition hover:border-[color:var(--aqua-glow)] hover:text-[var(--aqua-strong)]"
              >
                <PhoneCall size={16} />
                Call Me
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
                <Mail size={16} className="text-[var(--aqua-strong)]" />
                {portfolio.contact.email || "Add your email"}
              </div>
              <SocialLinks links={portfolio.socialLinks} className="mt-1" />
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -left-8 top-8 h-28 w-28 rounded-full bg-[color:var(--aqua-soft)] blur-3xl opacity-70" />
              <div className="absolute -right-4 bottom-8 h-28 w-28 rounded-full bg-[color:var(--cyan-soft)] blur-3xl opacity-60" />

              <div className="relative rounded-[2rem] border border-[color:var(--border-soft)] bg-[color:var(--surface)]/70 p-3 shadow-[0_32px_90px_rgba(6,15,28,0.18)] backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-[1.7rem] border border-[color:var(--border-soft)] bg-[linear-gradient(135deg,rgba(110,228,255,0.18),rgba(134,158,255,0.08),rgba(16,58,85,0.12))] p-3">
                  <div className="aspect-[4/5] overflow-hidden rounded-[1.4rem] bg-[radial-gradient(circle_at_top,_rgba(96,230,255,0.33),_rgba(15,29,46,0.92)_52%,_rgba(2,10,18,0.98)_100%)]">
                    <Image
                      src={portfolio.profileImage}
                      alt={`${portfolio.name} portrait placeholder`}
                      width={520}
                      height={640}
                      priority
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-2 left-4 rounded-[1.25rem] border border-[color:var(--border-soft)] bg-[color:var(--card)]/85 p-4 shadow-[var(--shadow-soft)] backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Focus</p>
                <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">Creative + Business Growth</p>
              </div>

              <div className="absolute -right-6 top-10 rounded-[1.25rem] border border-[color:var(--border-soft)] bg-[color:var(--card)]/85 p-4 shadow-[var(--shadow-soft)] backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Interests</p>
                <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">Digital Skills • Creative Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
