import {
  BriefcaseBusiness,
  Camera,
  Code2,
  Globe,
  MessageCircle,
  Play,
} from "lucide-react";
import type { SocialLinkMap } from "@/types/portfolio";

const socialMap = {
  facebook: { label: "Facebook", icon: Globe },
  instagram: { label: "Instagram", icon: Camera },
  linkedin: { label: "LinkedIn", icon: BriefcaseBusiness },
  github: { label: "GitHub", icon: Code2 },
  youtube: { label: "YouTube", icon: Play },
  whatsapp: { label: "WhatsApp", icon: MessageCircle },
};

export function SocialLinks({
  links,
  className = "",
}: {
  links: SocialLinkMap;
  className?: string;
}) {
  const entries = Object.entries(socialMap).filter(
    ([key]) => Boolean(links[key as keyof SocialLinkMap]),
  );

  if (!entries.length) return null;

  return (
    <div className={className}>
      <ul className="flex flex-wrap items-center gap-3">
        {entries.map(([key, meta]) => {
          const Icon = meta.icon;
          const href = links[key as keyof SocialLinkMap];
          if (!href) return null;

          return (
            <li key={key}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Visit ${meta.label}`}
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border-soft)] bg-[color:var(--card)] text-[var(--muted)] shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:border-[color:var(--aqua-glow)] hover:text-[var(--aqua-strong)]"
              >
                <Icon size={18} className="transition-transform group-hover:scale-110" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
