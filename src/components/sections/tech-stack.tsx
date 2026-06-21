"use client";

import {
  Smartphone,
  Boxes,
  GitBranch,
  Server,
  CreditCard,
  Wrench,
  Cloud,
  type LucideIcon,
} from "lucide-react";
import { skillCategories } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard } from "@/components/ui/tilt-card";
import { RevealGroup, RevealItem } from "@/components/effects/reveal";

const icons: Record<string, LucideIcon> = {
  Frontend: Smartphone,
  Architecture: Boxes,
  "State Management": GitBranch,
  Backend: Server,
  Payments: CreditCard,
  Tools: Wrench,
  Cloud: Cloud,
};

export function TechStack() {
  return (
    <section id="stack" className="section-pad relative">
      <div className="mx-auto w-full max-w-6xl container-px">
        <SectionHeading
          eyebrow="Tech Stack"
          title="A toolkit tuned for scale"
          description="The frameworks, patterns, and platforms I reach for to ship reliable cross-platform products."
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => {
            const Icon = icons[cat.title] ?? Boxes;
            return (
              <RevealItem key={cat.title}>
                <TiltCard className="h-full">
                  <div className="ring-glow glass relative flex h-full flex-col rounded-2xl p-6">
                    <div className="flex items-center gap-3" style={{ transform: "translateZ(40px)" }}>
                      <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-[linear-gradient(135deg,rgba(99,102,241,0.18),rgba(6,182,212,0.12))] text-primary-foreground">
                        <Icon className="h-5 w-5 text-accent" />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold tracking-tight">
                          {cat.title}
                        </h3>
                        <p className="text-xs text-muted">{cat.caption}</p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2" style={{ transform: "translateZ(25px)" }}>
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-border bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:border-accent/40 hover:text-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
