"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  const toggle = () => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={toggle}
      className="relative grid h-10 w-10 place-items-center rounded-full border border-border bg-white/[0.03] text-muted transition-colors hover:border-border-strong hover:text-foreground"
    >
      {/* Icons swap via the `dark` class on <html> — no JS state, no hydration flash */}
      <Sun className="h-[18px] w-[18px] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[18px] w-[18px] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
    </button>
  );
}
