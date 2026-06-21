"use client";

import { useCallback, useEffect, useState } from "react";
import { Command } from "cmdk";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Briefcase,
  Code2,
  Command as CommandIcon,
  FileText,
  Home,
  Layers,
  Mail,
  Moon,
  Sparkles,
  Sun,
  User,
  Workflow,
} from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

type Action = {
  id: string;
  label: string;
  icon: React.ElementType;
  group: string;
  keywords?: string;
  perform: () => void;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const close = useCallback(() => setOpen(false), []);
  const go = useCallback((hash: string) => {
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Global hotkey + external open event
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-palette", onOpen);
    };
  }, []);

  // Lock scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const run = (fn: () => void) => () => {
    fn();
    close();
  };

  const actions: Action[] = [
    { id: "top", label: "Go to Home", icon: Home, group: "Navigate", perform: run(() => go("#top")) },
    { id: "about", label: "About", icon: User, group: "Navigate", perform: run(() => go("#about")) },
    { id: "experience", label: "Experience", icon: Briefcase, group: "Navigate", perform: run(() => go("#experience")) },
    { id: "stack", label: "Tech Stack", icon: Layers, group: "Navigate", perform: run(() => go("#stack")) },
    { id: "projects", label: "Projects", icon: Code2, group: "Navigate", perform: run(() => go("#projects")) },
    { id: "process", label: "Process", icon: Workflow, group: "Navigate", perform: run(() => go("#process")) },
    { id: "contact", label: "Contact", icon: Mail, group: "Navigate", perform: run(() => go("#contact")) },
    {
      id: "theme",
      label: resolvedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme",
      icon: resolvedTheme === "dark" ? Sun : Moon,
      group: "Actions",
      keywords: "theme dark light mode",
      perform: run(() => setTheme(resolvedTheme === "dark" ? "light" : "dark")),
    },
    { id: "resume", label: "View Résumé", icon: FileText, group: "Actions", perform: run(() => window.open(profile.resumeUrl, "_blank")) },
    {
      id: "egg",
      label: "Run the secret command",
      icon: Sparkles,
      group: "Actions",
      keywords: "easter egg konami secret",
      perform: run(() => window.dispatchEvent(new CustomEvent("run-easter-egg"))),
    },
    { id: "github", label: "GitHub", icon: GithubIcon, group: "Connect", perform: run(() => window.open(profile.socials.github, "_blank")) },
    { id: "linkedin", label: "LinkedIn", icon: LinkedinIcon, group: "Connect", perform: run(() => window.open(profile.socials.linkedin, "_blank")) },
    { id: "email", label: "Email me", icon: Mail, group: "Connect", perform: run(() => window.open(`mailto:${profile.email}`)) },
  ];

  const groups = ["Navigate", "Actions", "Connect"];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center px-4 pt-[14vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <div
            className="absolute inset-0 bg-[#020308]/70 backdrop-blur-sm"
            onClick={close}
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative w-full max-w-xl"
          >
            <Command
              label="Command palette"
              className="glass-strong overflow-hidden rounded-2xl shadow-[0_30px_80px_-20px_rgba(2,6,23,0.9)]"
            >
              <div className="flex items-center gap-3 border-b border-border px-4">
                <CommandIcon className="h-4 w-4 text-muted" />
                <Command.Input
                  autoFocus
                  placeholder="Type a command or search…"
                  className="h-14 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-faint"
                />
                <kbd className="hidden rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-faint sm:block">
                  ESC
                </kbd>
              </div>
              <Command.List className="max-h-[50vh] overflow-y-auto p-2">
                <Command.Empty className="px-3 py-8 text-center text-sm text-faint">
                  No results found.
                </Command.Empty>
                {groups.map((group) => (
                  <Command.Group
                    key={group}
                    heading={group}
                    className="px-2 pb-2 pt-2 font-mono text-[10px] uppercase tracking-wider text-faint [&_[cmdk-group-heading]]:px-1 [&_[cmdk-group-heading]]:pb-1"
                  >
                    {actions
                      .filter((a) => a.group === group)
                      .map((a) => (
                        <Command.Item
                          key={a.id}
                          value={`${a.label} ${a.keywords ?? ""}`}
                          onSelect={a.perform}
                          className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted transition-colors data-[selected=true]:bg-white/[0.06] data-[selected=true]:text-foreground"
                        >
                          <a.icon className="h-4 w-4" />
                          {a.label}
                        </Command.Item>
                      ))}
                  </Command.Group>
                ))}
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
