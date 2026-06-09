import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { CompanyStory } from "@/components/about/company-story";
import { MissionVision } from "@/components/about/mission-vision";
import { CoreValues } from "@/components/about/core-values";
import { OperationalDetails } from "@/components/about/operational-details";
import { AboutCta } from "@/components/about/about-cta";
import { aboutHero } from "@/lib/data/about";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "C Font Travels is a new tour and travel business in Siliguri offering transport, rentals, and trip planning across North Bengal and nearby hill routes.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={aboutHero.title}
        description={aboutHero.description}
        image={aboutHero.image}
        imageAlt="Hill landscape near Siliguri"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />
      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <OperationalDetails />
      <AboutCta />
    </>
  );
}
