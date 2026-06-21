import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { navLinks, profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const socials = [
  { label: "GitHub", href: profile.socials.github, icon: GithubIcon },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: LinkedinIcon },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border print:hidden">
      <div className="mx-auto w-full max-w-6xl container-px py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-[linear-gradient(135deg,var(--primary-deep),var(--accent))] font-display text-sm font-bold text-white">
                JT
              </span>
              <span className="font-display text-base font-semibold">{profile.name}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {profile.role} crafting fast, reliable cross-platform apps. Open to
              consulting and full-time roles.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="eyebrow">Navigate</span>
            <nav className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <span className="eyebrow">Connect</span>
            <div className="flex flex-col gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <s.icon className="h-4 w-4" />
                  {s.label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="font-mono text-xs text-faint">
            Designed &amp; Developed by {profile.name}
          </p>
          <p className="font-mono text-xs text-faint">
            © {new Date().getFullYear()} · Built with Next.js &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
