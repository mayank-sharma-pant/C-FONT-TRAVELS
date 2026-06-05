"use client";

import { tourPackages } from "@/lib/data/packages";
import { SectionHeader } from "@/components/shared/section-header";
import { PackageCard } from "@/components/packages/package-card";

export function FeaturedPackages() {
  const featured = tourPackages.filter((pkg) => pkg.featured);

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Featured"
          title="Traveler Favorites"
          description="Our most booked packages — tried, tested, and loved by thousands of happy travelers."
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
