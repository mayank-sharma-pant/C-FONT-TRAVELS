"use client";

import type { TourPackage } from "@/lib/data/packages";
import { SectionHeader } from "@/components/shared/section-header";
import { PackageCard } from "@/components/packages/package-card";

interface FeaturedPackagesProps {
  packages: TourPackage[];
}

export function FeaturedPackages({ packages }: FeaturedPackagesProps) {
  const featured = packages.filter((pkg) => pkg.featured);

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Featured"
          title="Featured Tour Packages"
          description="Popular packages for Darjeeling, Sikkim, Bhutan, Dooars, and nearby destinations with reliable travel support."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {featured.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} variant="horizontal" />
          ))}
        </div>
      </div>
    </section>
  );
}
