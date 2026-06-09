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
          eyebrow="Regional routes"
          title="Trips we commonly arrange from Siliguri"
          description="Starting prices and durations are guides — route, vehicle, and final cost are confirmed when you inquire."
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
