"use client";

import { featuredDestinations } from "@/lib/data/destinations";
import { SectionHeader } from "@/components/shared/section-header";
import { DestinationCard } from "@/components/destinations/destination-card";

export function PopularDestinations() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Popular"
          title="Most Loved Destinations"
          description="Traveler favorites that consistently deliver unforgettable experiences — curated by our expert team."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {featuredDestinations.map((destination) => (
            <DestinationCard
              key={destination.slug}
              destination={destination}
              variant="featured"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
