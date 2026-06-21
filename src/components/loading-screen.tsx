"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/** Brief branded boot sequence shown on first paint, then fades away. */
export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setDone(true), reduced ? 200 : 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-[#050816]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative grid h-16 w-16 place-items-center rounded-2xl bg-[linear-gradient(135deg,var(--primary-deep),var(--accent))] font-display text-xl font-bold text-white shadow-[0_10px_40px_-8px_rgba(99,102,241,0.7)]"
            >
              JT
              <motion.span
                className="absolute -inset-3 rounded-3xl border border-primary/30"
                animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            <div className="h-[3px] w-44 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-accent-2"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-mono text-xs tracking-widest text-faint"
            >
              COMPILING EXPERIENCE…
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
