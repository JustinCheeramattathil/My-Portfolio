"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { aboutParagraphs, experiences, passions } from "@/lib/data";
import { Reveal } from "@/components/effects/reveal";

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto w-full max-w-6xl container-px">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Narrative */}
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-accent to-transparent" />
                <span className="eyebrow">About Me</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl md:text-[2.75rem]">
                Engineering mobile apps
                <br />
                people actually rely on.
              </h2>
            </Reveal>

            <div className="mt-7 space-y-5">
              {aboutParagraphs.map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.05}>
                  <p className="text-pretty text-base leading-relaxed text-muted md:text-lg">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-9">
                <p className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-faint">
                  <Sparkles className="h-3.5 w-3.5 text-accent" /> Passionate about
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {passions.map((passion, i) => (
                    <motion.span
                      key={passion}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06, duration: 0.4 }}
                      className="rounded-full border border-border bg-white/[0.03] px-4 py-2 text-sm text-muted transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      {passion}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Animated career timeline visualization */}
          <Reveal delay={0.15}>
            <div className="glass relative rounded-3xl p-7 sm:p-9">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.35),transparent_70%)] blur-2xl" />
              <p className="font-mono text-xs uppercase tracking-widest text-faint">
                The journey so far
              </p>

              <div className="relative mt-8 pl-8">
                {/* animated gradient spine */}
                <motion.span
                  className="absolute left-[7px] top-1 w-px bg-gradient-to-b from-primary via-accent to-accent-2"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                  style={{ originY: 0, bottom: "1rem" }}
                />

                <div className="space-y-8">
                  {experiences.map((exp, i) => (
                    <motion.div
                      key={exp.company}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.18, duration: 0.5 }}
                      className="relative"
                    >
                      <span className="absolute -left-[29px] top-1 grid h-4 w-4 place-items-center rounded-full border border-primary/50 bg-background">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      </span>
                      <p className="font-mono text-xs text-accent">{exp.period}</p>
                      <p className="mt-1 font-display text-base font-semibold">{exp.role}</p>
                      <p className="text-sm text-muted">{exp.company}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
