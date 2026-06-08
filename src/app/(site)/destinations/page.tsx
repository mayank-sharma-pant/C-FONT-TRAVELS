import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { PopularDestinations } from "@/components/destinations/popular-destinations";
import { TrendingDestinations } from "@/components/destinations/trending-destinations";
import { DestinationExplorer } from "@/components/destinations/destination-explorer";
import { DestinationsCta } from "@/components/destinations/destinations-cta";
import { destinationsHero } from "@/lib/data/destinations";
import {
  getFeaturedDestinations,
  getStoredDestinations,
  getTrendingDestinations,
} from "@/lib/store/content";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore travel destinations with C Font Travels — Darjeeling, Gangtok, Sikkim, Bhutan, Dooars, Kalimpong, Mirik, North Bengal, and more.",
};

export default async function DestinationsPage() {
  const [popular, trending, all] = await Promise.all([
    getFeaturedDestinations(),
    getTrendingDestinations(),
    getStoredDestinations(),
  ]);

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
      <PopularDestinations destinations={popular} />
      <TrendingDestinations destinations={trending} />
      <DestinationExplorer destinations={all} />
      <DestinationsCta />
    </>
  );
}
