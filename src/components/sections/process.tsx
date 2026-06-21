"use client";

import { motion } from "framer-motion";
import {
  Search,
  Boxes,
  Code2,
  FlaskConical,
  Rocket,
  Activity,
  type LucideIcon,
} from "lucide-react";
import { processSteps } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

const stepIcons: LucideIcon[] = [Search, Boxes, Code2, FlaskConical, Rocket, Activity];

export function Process() {
  return (
    <section id="process" className="section-pad relative">
      <div className="mx-auto w-full max-w-6xl container-px">
        <SectionHeading
          eyebrow="How I Work"
          title="A disciplined delivery pipeline"
          description="Every build moves through the same six stages — so quality is a process, not an accident."
        />

        {/* Desktop: horizontal pipeline */}
        <div className="relative mt-16 hidden lg:block">
          {/* track */}
          <div className="absolute left-0 right-0 top-7 h-px bg-border" />
          <motion.div
            className="absolute left-0 top-7 h-px bg-gradient-to-r from-primary via-accent to-accent-2"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
          {/* traveling pulse */}
          <motion.span
            className="absolute top-[22px] h-3 w-3 rounded-full bg-accent shadow-[0_0_18px_4px_rgba(6,182,212,0.7)]"
            initial={{ left: "0%" }}
            whileInView={{ left: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />

          <div className="relative grid grid-cols-6 gap-3">
            {processSteps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.18, duration: 0.5 }}
                  className="flex flex-col items-center text-center"
                >
                  <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl border border-border-strong bg-background-elevated text-accent shadow-[0_8px_24px_-10px_rgba(2,6,23,0.9)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="mt-4 font-mono text-[10px] tracking-widest text-faint">
                    0{i + 1}
                  </span>
                  <h3 className="mt-1 font-display text-sm font-semibold">{step.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile/tablet: vertical pipeline */}
        <div className="relative mt-12 pl-12 lg:hidden">
          <div className="absolute left-[19px] top-3 bottom-3 w-px bg-border" />
          <motion.div
            className="absolute left-[19px] top-3 w-px bg-gradient-to-b from-primary via-accent to-accent-2"
            initial={{ height: "0%" }}
            whileInView={{ height: "calc(100% - 1.5rem)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />
          <div className="space-y-7">
            {processSteps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="relative"
                >
                  <span className="absolute -left-[38px] grid h-10 w-10 place-items-center rounded-xl border border-border-strong bg-background-elevated text-accent">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-mono text-[10px] tracking-widest text-faint">0{i + 1}</span>
                  <h3 className="font-display text-base font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
