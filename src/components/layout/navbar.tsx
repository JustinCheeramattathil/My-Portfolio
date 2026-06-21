"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Command, Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openPalette = () =>
    window.dispatchEvent(new CustomEvent("open-command-palette"));

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 print:hidden">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5",
          scrolled
            ? "glass-strong shadow-[0_10px_40px_-15px_rgba(2,6,23,0.7)]"
            : "border border-transparent"
        )}
      >
        {/* Brand */}
        <Link href="#top" className="group flex items-center gap-2.5" aria-label="Home">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[linear-gradient(135deg,var(--primary-deep),var(--accent))] font-display text-sm font-bold text-white shadow-[0_4px_16px_-4px_rgba(99,102,241,0.7)]">
            JT
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight sm:block">
            {profile.name}
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openPalette}
            aria-label="Open command palette"
            className="hidden items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-2 font-mono text-xs text-muted transition-colors hover:border-border-strong hover:text-foreground sm:flex"
          >
            <Command className="h-3.5 w-3.5" />
            <span>K</span>
          </button>
          <ThemeToggle />
          <Button href="#contact" size="sm" className="hidden lg:inline-flex">
            Let&apos;s talk
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white/[0.03] text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute left-4 right-4 top-[4.75rem] z-50 md:hidden"
          >
            <div className="glass-strong flex flex-col gap-1 rounded-2xl p-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-muted transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <Button href="#contact" className="mt-1 w-full" onClick={() => setOpen(false)}>
                Let&apos;s talk
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
