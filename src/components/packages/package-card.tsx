"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Clock, MapPin } from "lucide-react";
import type { TourPackage } from "@/lib/data/packages";
import { categoryLabels } from "@/lib/data/packages";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PackageCardProps {
  pkg: TourPackage;
  variant?: "grid" | "horizontal";
  className?: string;
}

export function PackageCard({
  pkg,
  variant = "grid",
  className,
}: PackageCardProps) {
  if (variant === "horizontal") {
    return (
      <div className={className}>
        <Card className="group overflow-hidden border-0 bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
          <div className="grid sm:grid-cols-5">
            <div className="relative aspect-[4/3] sm:col-span-2 sm:aspect-auto sm:min-h-[240px]">
              <Image
                src={pkg.image}
                alt={pkg.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 240px"
              />
              <Badge
                variant="accent"
                className="absolute left-4 top-4 backdrop-blur-sm"
              >
                {categoryLabels[pkg.category]}
              </Badge>
            </div>
            <CardContent className="flex flex-col justify-center p-6 sm:col-span-3">
              <PackageCardBody pkg={pkg} />
            </CardContent>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl",
        className
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
        <Badge variant="accent" className="absolute left-4 top-4">
          {categoryLabels[pkg.category]}
        </Badge>
        {pkg.featured && (
          <Badge variant="glass" className="absolute right-4 top-4">
            Popular
          </Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <PackageCardBody pkg={pkg} compact />
      </div>
    </article>
  );
}

function PackageCardBody({
  pkg,
  compact = false,
}: {
  pkg: TourPackage;
  compact?: boolean;
}) {
  return (
    <>
      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5" />
          {pkg.location}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {pkg.duration}
        </span>
      </div>

      <h3
        className={cn(
          "mt-2 font-display font-medium text-navy",
          compact ? "text-xl" : "text-xl sm:text-2xl"
        )}
      >
        {pkg.name}
      </h3>

      {!compact && (
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {pkg.description}
        </p>
      )}

      <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
        {pkg.highlights.slice(0, compact ? 3 : 4).map((highlight) => (
          <li
            key={highlight}
            className="flex items-center gap-1 text-xs text-muted-foreground"
          >
            <Check className="h-3 w-3 shrink-0 text-teal" />
            {highlight}
          </li>
        ))}
      </ul>

      <div
        className={cn(
          "mt-auto flex items-end justify-between gap-4",
          compact ? "mt-5" : "mt-6"
        )}
      >
        <div>
          <span className="text-xs text-muted-foreground">Starting from</span>
          <p className="font-display text-2xl font-semibold text-primary">
            {pkg.priceDisplay}
          </p>
        </div>
        <Button asChild variant={compact ? "outline" : "default"} size="sm">
          <Link href={`/packages/${pkg.slug}`}>
            View Details
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </>
  );
}
