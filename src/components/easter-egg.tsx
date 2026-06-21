"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Terminal, X } from "lucide-react";
import { profile } from "@/lib/data";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

const CONFETTI = ["#6366f1", "#06b6d4", "#14b8a6", "#8b5cf6", "#f8fafc"];

export function EasterEgg() {
  const [active, setActive] = useState(false);

  // Styled console greeting for the curious
  useEffect(() => {
    const style = "color:#6366f1;font-size:13px;font-weight:bold";
    const dim = "color:#94a3b8;font-size:12px";

    console.log("%c👋 Hey, fellow developer!", style);

    console.log(
      `%cYou found the console. Try the Konami code (↑↑↓↓←→←→ B A) or hit %c⌘K%c.\nBuilt with Next.js, TypeScript, Tailwind & Framer Motion. — ${profile.name}`,
      dim,
      "color:#06b6d4;font-weight:bold",
      dim
    );
  }, []);

  // Konami sequence + manual trigger from the command palette
  useEffect(() => {
    let idx = 0;
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === KONAMI[idx]) {
        idx += 1;
        if (idx === KONAMI.length) {
          setActive(true);
          idx = 0;
        }
      } else {
        idx = key === KONAMI[0] ? 1 : 0;
      }
    };
    const onTrigger = () => setActive(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("run-easter-egg", onTrigger);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("run-easter-egg", onTrigger);
    };
  }, []);

  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setActive(false), 6000);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[90] grid place-items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* confetti */}
          {Array.from({ length: 60 }).map((_, i) => {
            const left = (i * 37) % 100;
            const delay = (i % 10) * 0.05;
            const color = CONFETTI[i % CONFETTI.length];
            return (
              <motion.span
                key={i}
                className="absolute top-0 h-2 w-2 rounded-sm"
                style={{ left: `${left}%`, background: color }}
                initial={{ y: -20, opacity: 1, rotate: 0 }}
                animate={{ y: "100vh", opacity: [1, 1, 0], rotate: 360 }}
                transition={{ duration: 2.6 + (i % 5) * 0.3, delay, ease: "easeIn" }}
              />
            );
          })}

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="glass-strong pointer-events-auto relative w-[min(92vw,440px)] overflow-hidden rounded-2xl"
          >
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
              <span className="ml-2 flex items-center gap-1.5 font-mono text-xs text-faint">
                <Terminal className="h-3.5 w-3.5" /> justin@portfolio
              </span>
              <button
                onClick={() => setActive(false)}
                className="ml-auto text-faint transition-colors hover:text-foreground"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-1.5 p-5 font-mono text-sm">
              <p className="text-accent-2">$ whoami</p>
              <p className="text-foreground">{profile.name} — {profile.role}</p>
              <p className="text-accent-2">$ cat secret.txt</p>
              <p className="text-muted">
                🎉 You unlocked the Konami code. Engineers who read the source get
                the job. Let&apos;s build something great together.
              </p>
              <p className="text-primary">
                <span className="text-accent-2">$</span> <span className="animate-pulse">▍</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
