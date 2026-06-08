import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { FeaturedPackages } from "@/components/packages/featured-packages";
import { PackageExplorer } from "@/components/packages/package-explorer";
import { PackagesCta } from "@/components/packages/packages-cta";
import { packagesHero } from "@/lib/data/packages";
import { getStoredPackages } from "@/lib/store/content";

export const metadata: Metadata = {
  title: "Tour Packages",
  description:
    "Browse C Font Travels tour packages for Darjeeling, Sikkim, Gangtok, Bhutan, Dooars, and more — with reliable transport and local travel expertise from Siliguri.",
};

export default async function PackagesPage() {
  const packages = await getStoredPackages();

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
      <FeaturedPackages packages={packages} />
      <PackageExplorer packages={packages} />
      <PackagesCta />
    </>
  );
}
