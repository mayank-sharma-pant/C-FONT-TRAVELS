"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  breadcrumb?: { label: string; href?: string }[];
  className?: string;
}

export function PageHero({
  title,
  description,
  image,
  imageAlt = "",
  breadcrumb = [{ label: "Home", href: "/" }, { label: title }],
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[50vh] items-end overflow-hidden pt-24 lg:min-h-[55vh]",
        className
      )}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,169,98,0.12)_0%,_transparent_55%)]" />
      </div>

      <div className="container-wide relative w-full px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        {breadcrumb && breadcrumb.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-1 text-sm text-white/60"
          >
            {breadcrumb.map((item, i) => (
              <span key={item.label} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white/90">{item.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
