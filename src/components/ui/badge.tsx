import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Badge({
  children,
  className,
  variant = "default",
}: {
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "accent";
}) {
  const styles = {
    default:
      "bg-white/[0.04] text-muted border-border hover:border-border-strong hover:text-foreground",
    outline: "bg-transparent text-muted border-border-strong",
    accent: "bg-primary/10 text-primary-foreground border-primary/30",
  }[variant];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs tracking-tight transition-colors duration-300",
        styles,
        className
      )}
    >
      {children}
    </span>
  );
}
