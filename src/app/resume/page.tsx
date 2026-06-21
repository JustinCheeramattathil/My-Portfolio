import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Globe, Mail, MapPin, Phone } from "lucide-react";
import {
  experiences,
  profile,
  projects,
  skillCategories,
} from "@/lib/data";
import { GithubIcon, GooglePlayIcon, LinkedinIcon } from "@/components/icons";
import { PrintButton } from "./print-button";

export const metadata: Metadata = {
  title: "Résumé",
  description: `${profile.name} — ${profile.role}. Résumé and experience.`,
};

export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-3xl container-px py-28 print:py-0">
      {/* Toolbar (screen only) */}
      <div className="mb-6 flex items-center justify-between print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>
        <PrintButton />
      </div>

      {/* Résumé sheet */}
      <article className="glass overflow-hidden rounded-2xl p-8 print:rounded-none print:border-none print:bg-white print:p-0 print:text-black sm:p-12">
        {/* Header */}
        <header className="border-b border-border pb-6 print:border-black/20">
          <h1 className="font-display text-3xl font-bold tracking-tight print:text-black">
            {profile.name}
          </h1>
          <p className="mt-1 text-lg text-accent print:text-indigo-700">{profile.role}</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-xs text-muted print:text-black/70">
            <span className="inline-flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" />{profile.email}</span>
            <span className="inline-flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" />{profile.phone}</span>
            <span className="inline-flex items-center gap-1.5"><GithubIcon className="h-3.5 w-3.5" />github.com/{profile.socials.githubHandle}</span>
            <span className="inline-flex items-center gap-1.5"><LinkedinIcon className="h-3.5 w-3.5" />linkedin.com/in/{profile.socials.linkedinHandle}</span>
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />Kannur, Kerala</span>
          </div>
        </header>

        {/* Summary */}
        <Section title="Summary">
          <p className="text-sm leading-relaxed text-muted print:text-black/80">{profile.tagline}</p>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          <div className="space-y-5">
            {experiences.map((exp) => (
              <div key={exp.company}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-base font-semibold print:text-black">
                    {exp.role} · <span className="text-accent print:text-indigo-700">{exp.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-faint print:text-black/60">{exp.period}</span>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted marker:text-accent print:text-black/80">
                  {exp.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section title="Selected Projects">
          <div className="grid gap-3 sm:grid-cols-2">
            {projects.map((p) => (
              <div key={p.name}>
                <h3 className="font-display text-sm font-semibold print:text-black">{p.name}</h3>
                <p className="font-mono text-[11px] uppercase tracking-wide text-faint print:text-black/60">
                  {p.category}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted print:text-black/80">
                  {p.features.join(" · ")}
                </p>
                {p.links.length > 0 && (
                  <p className="mt-1 flex flex-wrap gap-x-3 text-[11px]">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-accent hover:underline print:text-indigo-700"
                      >
                        <GooglePlayIcon className="h-3 w-3" />
                        {l.label}
                      </a>
                    ))}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section title="Technical Skills">
          <div className="space-y-2">
            {skillCategories.map((cat) => (
              <p key={cat.title} className="text-sm">
                <span className="font-semibold print:text-black">{cat.title}: </span>
                <span className="text-muted print:text-black/80">{cat.skills.join(", ")}</span>
              </p>
            ))}
          </div>
        </Section>

        <footer className="mt-8 flex items-center gap-1.5 border-t border-border pt-4 font-mono text-xs text-faint print:border-black/20 print:text-black/60">
          <Globe className="h-3.5 w-3.5" /> justinthomas.dev — generated from the live portfolio
        </footer>
      </article>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-7">
      <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent print:text-indigo-700">
        {title}
      </h2>
      {children}
    </section>
  );
}
