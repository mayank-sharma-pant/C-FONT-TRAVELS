"use client";

import type { Destination } from "@/lib/data/destinations";
import { SectionHeader } from "@/components/shared/section-header";
import { DestinationCard } from "@/components/destinations/destination-card";

interface PopularDestinationsProps {
  destinations: Destination[];
}

export function PopularDestinations({ destinations }: PopularDestinationsProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Popular"
          title="Most Loved Destinations"
          description="Traveler favorites that consistently deliver unforgettable experiences — curated by our expert team."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {destinations.map((destination) => (
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
