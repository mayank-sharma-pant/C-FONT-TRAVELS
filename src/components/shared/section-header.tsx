"use client";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  variant?: "default" | "editorial" | "split";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  variant = "default",
  className,
}: SectionHeaderProps) {
  const resolvedAlign =
    variant === "editorial" || variant === "split" ? "left" : align;

  if (variant === "split") {
    return (
      <div
        className={cn(
          "mb-12 grid animate-fade-up gap-6 lg:mb-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12",
          className
        )}
      >
        <div>
          {eyebrow && (
            <span
              className={cn(
                "mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em]",
                light ? "text-gold" : "text-teal"
              )}
            >
              {eyebrow}
            </span>
          )}
          <h2
            className={cn(
              "text-3xl font-medium tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight",
              light ? "text-white" : "text-navy"
            )}
          >
            {title}
          </h2>
        </div>
        {description && (
          <p
            className={cn(
              "max-w-xl text-base leading-relaxed sm:text-lg",
              light ? "text-white/70" : "text-muted-foreground"
            )}
          >
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "mb-12 max-w-3xl animate-fade-up lg:mb-14",
        resolvedAlign === "center" && "mx-auto text-center",
        variant === "editorial" && "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em]",
            light ? "text-gold" : "text-teal"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl font-medium tracking-tight sm:text-4xl",
          variant === "editorial" && "lg:text-[2.75rem] lg:leading-tight",
          variant === "default" && "lg:text-5xl",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            variant === "editorial" && "mt-3 max-w-xl",
            light ? "text-white/70" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
