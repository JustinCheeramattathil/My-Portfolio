"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Check, Building2 } from "lucide-react";
import { experiences } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 55%"],
  });
  const fill = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 80,
    damping: 24,
  });

  return (
    <section id="experience" className="section-pad relative">
      <div className="mx-auto w-full max-w-6xl container-px">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've shipped"
          description="From junior Flutter work to enterprise tolling systems — a track record of building, scaling, and shipping production mobile software."
        />

        <div ref={ref} className="relative mt-14 pl-10 sm:pl-16">
          {/* spine */}
          <div className="absolute left-[14px] top-2 bottom-2 w-px bg-border sm:left-[22px]" />
          <motion.div
            style={{ height: fill }}
            className="absolute left-[14px] top-2 w-px bg-gradient-to-b from-primary via-accent to-accent-2 sm:left-[22px]"
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group relative"
              >
                {/* node */}
                <span className="absolute -left-[34px] top-6 grid h-7 w-7 place-items-center rounded-full border border-border-strong bg-background-elevated sm:-left-[42px]">
                  <Building2 className="h-3.5 w-3.5 text-accent" />
                </span>

                <div className="ring-glow glass rounded-2xl p-6 transition-transform duration-500 group-hover:-translate-y-1 sm:p-8">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-display text-xl font-semibold tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-accent">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {exp.period}
                    </Badge>
                  </div>

                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-muted">
                        <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-accent/15">
                          <Check className="h-2.5 w-2.5 text-accent-2" />
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.stack.map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
