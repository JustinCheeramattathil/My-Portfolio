import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        primary:
          "text-primary-foreground bg-[linear-gradient(110deg,var(--primary-deep),var(--primary)_45%,var(--accent))] shadow-[0_8px_30px_-8px_rgba(99,102,241,0.6)] hover:shadow-[0_12px_44px_-8px_rgba(99,102,241,0.85)] hover:-translate-y-0.5",
        secondary:
          "glass text-foreground hover:border-border-strong hover:bg-white/5",
        ghost: "text-muted hover:text-foreground hover:bg-white/5",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-13 px-7 text-[0.95rem]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type StyleProps = VariantProps<typeof buttonVariants>;

type ButtonAsButton = StyleProps &
  Omit<ComponentProps<"button">, "className"> & {
    className?: string;
    children: ReactNode;
    href?: undefined;
  };

type ButtonAsLink = StyleProps &
  Omit<ComponentProps<"a">, "href" | "className"> & {
    className?: string;
    children: ReactNode;
    href: string;
    external?: boolean;
  };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  if ("href" in props && props.href !== undefined) {
    const { variant, size, className, children, href, external, ...rest } = props;
    const classes = cn(buttonVariants({ variant, size }), className);
    const isExternal = external ?? /^https?:\/\//.test(href);
    const isDownload = rest.download !== undefined && rest.download !== false;

    // Downloads (and external links) must be plain anchors — Next's <Link>
    // intercepts clicks for client routing, which blocks the file download.
    if (isExternal || isDownload) {
      return (
        <a
          href={href}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={classes}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant, size, className, children, ...rest } = props;
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...rest}>
      {children}
    </button>
  );
}

export { buttonVariants };
