"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { heroPills, heroStats, profile } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { TechMarquee } from "@/components/ui/tech-marquee";
import { AnimatedCounter } from "@/components/effects/animated-counter";
import { Particles } from "@/components/effects/particles";

const ease: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-28 pb-16"
    >
      <Particles className="absolute inset-0 -z-10" />

      {/* floating decorative glass chips */}
      <motion.div
        aria-hidden
        className="absolute left-[8%] top-[28%] hidden animate-float lg:block"
        style={{ animationDelay: "-2s" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="glass rounded-2xl px-4 py-3 font-mono text-xs text-muted shadow-xl">
          <span className="text-accent">4</span> apps live on Google Play
        </div>
      </motion.div>
      <motion.div
        aria-hidden
        className="absolute right-[9%] top-[32%] hidden animate-float xl:block"
        style={{ animationDelay: "-5s" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="glass rounded-2xl px-4 py-3 font-mono text-xs text-muted shadow-xl">
          <span className="text-accent-2">99.9%</span> crash-free sessions
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-4 py-1.5 font-mono text-xs text-muted backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
            </span>
            Available for new projects
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-6 font-display text-balance text-4xl font-semibold leading-[1.04] tracking-tight sm:text-6xl md:text-7xl"
        >
          {profile.headline[0]}{" "}
          <span className="text-gradient">{profile.headline[1]}</span>{" "}
          {profile.headline[2]}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted md:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Magnetic strength={0.4}>
            <Button href="#projects" size="lg" className="group">
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Magnetic>
          <Magnetic strength={0.3}>
            <Button
              href={profile.resumeUrl}
              variant="secondary"
              size="lg"
              download="Justin_Thomas_Resume_2026.pdf"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </Magnetic>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={item}
          className="mt-14 grid w-full max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border md:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="bg-white/[0.02] px-4 py-5 text-center backdrop-blur-sm">
              <div className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-xs text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Tech marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="mt-16 flex w-full max-w-5xl flex-col gap-3"
      >
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          <span className="eyebrow">Core Toolkit</span>
        </div>
        <TechMarquee items={heroPills} />
      </motion.div>

      {/* scroll cue */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="mt-12 flex flex-col items-center gap-2 text-faint"
      >
        <span className="font-mono text-[10px] tracking-widest">SCROLL</span>
        <div className="flex h-9 w-5 justify-center rounded-full border border-border pt-1.5">
          <motion.span
            className="h-1.5 w-1 rounded-full bg-accent"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
