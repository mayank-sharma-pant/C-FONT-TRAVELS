import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { FeaturedPackages } from "@/components/packages/featured-packages";
import { PackageExplorer } from "@/components/packages/package-explorer";
import { PackagesCta } from "@/components/packages/packages-cta";
import { packagesHero } from "@/lib/data/packages";

export const metadata: Metadata = {
  title: "Tour Packages",
  description:
    "Browse C Font Travels tour packages — adventure, family, luxury, honeymoon, and group tours with transparent pricing and curated itineraries.",
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        title={packagesHero.title}
        description={packagesHero.description}
        image={packagesHero.image}
        imageAlt="Scenic lake and mountain landscape"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Tour Packages" },
        ]}
      />
      <FeaturedPackages />
      <PackageExplorer />
      <PackagesCta />
    </>
  );
}
