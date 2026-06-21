"use client";

import { Boxes, CreditCard, Smartphone, Timer } from "lucide-react";
import { achievements } from "@/lib/data";
import { AnimatedCounter } from "@/components/effects/animated-counter";
import { RevealGroup, RevealItem } from "@/components/effects/reveal";

const icons = [Boxes, CreditCard, Smartphone, Timer];

export function Achievements() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl container-px">
        <div className="ring-glow glass relative overflow-hidden rounded-3xl px-6 py-10 sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          <div className="pointer-events-none absolute -left-20 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.18),transparent_70%)] blur-2xl" />

          <RevealGroup className="grid grid-cols-2 gap-8 sm:gap-6 lg:grid-cols-4">
            {achievements.map((stat, i) => {
              const Icon = icons[i];
              return (
                <RevealItem key={stat.label} className="text-center sm:text-left">
                  <Icon className="mx-auto mb-4 h-5 w-5 text-accent sm:mx-0" />
                  <div className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-2 text-sm leading-snug text-muted">{stat.label}</div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
