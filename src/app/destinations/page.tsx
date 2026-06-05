import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { PopularDestinations } from "@/components/destinations/popular-destinations";
import { TrendingDestinations } from "@/components/destinations/trending-destinations";
import { DestinationExplorer } from "@/components/destinations/destination-explorer";
import { DestinationsCta } from "@/components/destinations/destinations-cta";
import { destinationsHero } from "@/lib/data/destinations";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore curated travel destinations with C Font Travels — Dubai, Bali, Thailand, Singapore, Maldives, Kashmir, Goa, Europe and more.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        title={destinationsHero.title}
        description={destinationsHero.description}
        image={destinationsHero.image}
        imageAlt="Scenic road through mountains"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Destinations" },
        ]}
      />
      <PopularDestinations />
      <TrendingDestinations />
      <DestinationExplorer />
      <DestinationsCta />
    </>
  );
}
