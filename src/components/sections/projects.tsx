"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Lock } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { GooglePlayIcon } from "@/components/icons";
import { PhoneMock } from "@/components/phone-mock";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="mx-auto w-full max-w-6xl container-px">
        <SectionHeading
          eyebrow="Selected Work"
          title="Products shipped to production"
          description="Four flagship builds across tolling, fintech, sales, and healthcare — each balancing secure payments with a fast, considered mobile experience."
        />

        <div className="mt-14 space-y-6">
          {projects.map((project, i) => {
            const flip = i % 2 === 1;
            const glowStyle: React.CSSProperties = {
              background: `radial-gradient(circle, ${project.mock.primary}, transparent 70%)`,
              top: "-4rem",
              ...(flip ? { left: "-4rem" } : { right: "-4rem" }),
            };
            return (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="ring-glow glass group relative overflow-hidden rounded-3xl p-7 sm:p-10"
              >
                {/* accent glow */}
                <div
                  className="pointer-events-none absolute -z-10 h-72 w-72 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
                  style={glowStyle}
                />

                <div
                  className={cn(
                    "grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]",
                    flip && "lg:[&>*:first-child]:order-2"
                  )}
                >
                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ background: project.mock.primary }}
                      />
                      <span className="font-mono text-xs uppercase tracking-widest text-muted">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                      {project.name}
                    </h3>
                    <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted">
                      {project.blurb}
                    </p>

                    {/* Features */}
                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {project.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-muted">
                          <span
                            className="grid h-4 w-4 shrink-0 place-items-center rounded-full"
                            style={{ background: `${project.mock.primary}22` }}
                          >
                            <Check className="h-2.5 w-2.5" style={{ color: project.mock.primary }} />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* Metrics */}
                    <div className="mt-7 flex gap-8">
                      {project.metrics.map((m) => (
                        <div key={m.label}>
                          <div
                            className="font-display text-xl font-semibold"
                            style={{ color: project.mock.primary }}
                          >
                            {m.value}
                          </div>
                          <div className="text-xs text-muted">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Stack */}
                    <div className="mt-7 flex flex-wrap items-center gap-2">
                      {project.stack.map((s) => (
                        <Badge key={s}>{s}</Badge>
                      ))}
                    </div>

                    {/* Live links */}
                    <div className="mt-5 flex flex-wrap items-center gap-2.5">
                      {project.links.length > 0 ? (
                        project.links.map((l) => (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-white/[0.06]"
                            style={{ borderColor: `${project.mock.primary}55` }}
                          >
                            <GooglePlayIcon className="h-4 w-4" />
                            {l.label}
                            <ArrowUpRight className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                          </a>
                        ))
                      ) : (
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-faint">
                          <Lock className="h-3 w-3" /> Private enterprise deployment (US)
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Mockup */}
                  <div className="flex justify-center lg:justify-end">
                    <motion.div
                      whileHover={{ y: -10, rotate: flip ? -2 : 2 }}
                      transition={{ type: "spring", stiffness: 200, damping: 18 }}
                      className="animate-float"
                    >
                      <PhoneMock mock={project.mock} />
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
