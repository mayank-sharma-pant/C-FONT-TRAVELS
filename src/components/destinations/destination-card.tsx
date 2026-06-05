"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import type { Destination } from "@/lib/data/destinations";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface DestinationCardProps {
  destination: Destination;
  variant?: "grid" | "featured" | "compact";
  index?: number;
  className?: string;
}

export function DestinationCard({
  destination,
  variant = "grid",
  index = 0,
  className,
}: DestinationCardProps) {
  if (variant === "featured") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.08, duration: 0.5 }}
        className={cn(
          "group relative overflow-hidden rounded-3xl",
          className
        )}
      >
        <div className="relative aspect-[16/10] sm:aspect-[16/9]">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
          <Badge variant="glass" className="mb-3 w-fit">
            From {destination.price}
          </Badge>
          <h3 className="font-display text-2xl font-medium text-white sm:text-3xl">
            {destination.name}
          </h3>
          <p className="mt-2 max-w-md text-sm text-white/75">
            {destination.description}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-white/60">
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {destination.region}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {destination.duration}
            </span>
          </div>
          <div className="mt-5 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <Button asChild variant="accent" size="sm">
              <Link href={`/inquiry?destination=${destination.slug}`}>
                Explore
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.article>
    );
  }

  if (variant === "compact") {
    return (
      <Link
        href={`/inquiry?destination=${destination.slug}`}
        className={cn(
          "group flex shrink-0 gap-4 rounded-2xl border border-border/50 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md w-[280px] sm:w-[320px]",
          className
        )}
      >
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="96px"
          />
        </div>
        <div className="flex flex-col justify-center py-1">
          <h3 className="font-display text-lg font-medium text-navy group-hover:text-primary transition-colors">
            {destination.name}
          </h3>
          <p className="text-xs text-muted-foreground">{destination.region}</p>
          <p className="mt-1 text-sm font-semibold text-primary">
            From {destination.price}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: (index % 6) * 0.05, duration: 0.45 }}
      className={cn(
        "group overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
        <Badge variant="glass" className="absolute left-4 top-4">
          From {destination.price}
        </Badge>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-display text-xl font-medium text-navy">
              {destination.name}
            </h3>
            <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              {destination.region}
            </p>
          </div>
        </div>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {destination.description}
        </p>
        <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5" />
          {destination.duration}
        </div>
        <Button asChild variant="outline" size="sm" className="mt-5 w-full">
          <Link href={`/inquiry?destination=${destination.slug}`}>
            Explore
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </motion.article>
  );
}
