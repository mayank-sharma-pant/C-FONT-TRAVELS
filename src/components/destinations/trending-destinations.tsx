"use client";

import { TrendingUp } from "lucide-react";
import { trendingDestinations } from "@/lib/data/destinations";
import { SectionHeader } from "@/components/shared/section-header";
import { DestinationCard } from "@/components/destinations/destination-card";
import { Badge } from "@/components/ui/badge";

export function TrendingDestinations() {
  return (
    <section className="section-padding bg-cream overflow-hidden">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Trending Now"
          title="Hot Destinations This Season"
          description="The places everyone's talking about — book early for the best availability and exclusive rates."
        />

        <div className="relative">
          <div className="mb-6 flex items-center gap-2">
            <Badge variant="accent" className="gap-1">
              <TrendingUp className="h-3 w-3" />
              Rising in popularity
            </Badge>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {trendingDestinations.map((destination, i) => (
              <div key={destination.slug} className="snap-start">
                <DestinationCard
                  destination={destination}
                  variant="compact"
                  index={i}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
