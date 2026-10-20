"use client";

import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { type FormEvent, useState } from "react";
import { portfolio } from "@/config/portfolio";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { SectionHeading } from "@/components/ui/SectionHeading";

type FormState = "idle" | "loading" | "success" | "error";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<FormState>("idle");
  const [error, setError] = useState("");

  const handleChange = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setStatus("error");
      setError("Please fill in all fields before sending your message.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      setStatus("error");
      setError("Please provide a valid email address.");
      return;
    }

    const apiEndpoint = process.env.NEXT_PUBLIC_CONTACT_API;
    if (!apiEndpoint) {
      setStatus("error");
      setError("No email backend is configured yet. Add a server-side email API route or contact endpoint in the environment and connect it to this form.");
      return;
    }

    try {
      setStatus("loading");
      setError("");
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Unable to send the message.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (submitError) {
      setStatus("error");
      setError(submitError instanceof Error ? submitError.message : "Something went wrong while sending the message.");
    }
  };

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s Connect"
          description="Reach out for collaboration, freelance opportunities, or creative projects. The form is production-ready to connect to your preferred email service."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <div className="rounded-[1.75rem] border border-[color:var(--border-soft)] bg-[color:var(--card)]/80 p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-[var(--foreground)]">Contact details</h3>
              <ul className="mt-5 space-y-4 text-[var(--muted)]">
                {portfolio.contact.email ? (
                  <li className="flex items-center gap-3">
                    <Mail size={18} className="text-[var(--aqua-strong)]" />
                    <a href={`mailto:${portfolio.contact.email}`} className="hover:text-[var(--foreground)]">{portfolio.contact.email}</a>
                  </li>
                ) : null}
                {portfolio.contact.phone ? (
                  <li className="flex items-center gap-3">
                    <Phone size={18} className="text-[var(--aqua-strong)]" />
                    <a href={`tel:${portfolio.contact.phone}`} className="hover:text-[var(--foreground)]">{portfolio.contact.phone}</a>
                  </li>
                ) : null}
                {portfolio.contact.whatsapp ? (
                  <li className="flex items-center gap-3">
                    <MessageCircle size={18} className="text-[var(--aqua-strong)]" />
                    <a href={`https://wa.me/${portfolio.contact.whatsapp}`} target="_blank" rel="noreferrer noopener" className="hover:text-[var(--foreground)]">
                      WhatsApp: {portfolio.contact.whatsapp}
                    </a>
                  </li>
                ) : null}
                {portfolio.contact.location ? (
                  <li className="flex items-center gap-3">
                    <MapPin size={18} className="text-[var(--aqua-strong)]" />
                    <span>{portfolio.contact.location}</span>
                  </li>
                ) : null}
              </ul>
            </div>

            <div className="rounded-[1.75rem] border border-[color:var(--border-soft)] bg-[color:var(--card)]/80 p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-[var(--foreground)]">Follow</h3>
              <SocialLinks links={portfolio.socialLinks} className="mt-5" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-[color:var(--border-soft)] bg-[color:var(--card)]/80 p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-[var(--foreground)]">
                Name
                <input
                  type="text"
                  value={form.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--surface)] px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[color:var(--aqua-glow)]"
                  placeholder="Your name"
                />
              </label>

              <label className="block text-sm font-medium text-[var(--foreground)]">
                Email
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => handleChange("email", event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--surface)] px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[color:var(--aqua-glow)]"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="mt-5 block text-sm font-medium text-[var(--foreground)]">
              Subject
              <input
                type="text"
                value={form.subject}
                onChange={(event) => handleChange("subject", event.target.value)}
                className="mt-2 w-full rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--surface)] px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[color:var(--aqua-glow)]"
                placeholder="Project inquiry"
              />
            </label>

            <label className="mt-5 block text-sm font-medium text-[var(--foreground)]">
              Message
              <textarea
                value={form.message}
                onChange={(event) => handleChange("message", event.target.value)}
                rows={6}
                className="mt-2 w-full rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--surface)] px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[color:var(--aqua-glow)]"
                placeholder="Tell me about the project or idea you have in mind..."
              />
            </label>

            {error ? (
              <p className="mt-4 rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">{error}</p>
            ) : null}

            {status === "success" ? (
              <p className="mt-4 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                Your message is ready to send through your configured email service.
              </p>
            ) : null}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--aqua-soft)_0%,var(--aqua-strong)_30%,var(--cyan-strong)_100%)] px-5 py-3.5 text-sm font-semibold text-[var(--dark-strong)] shadow-[0_18px_40px_rgba(72,205,255,0.32)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
