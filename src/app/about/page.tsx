import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { CompanyStory } from "@/components/about/company-story";
import { MissionVision } from "@/components/about/mission-vision";
import { CoreValues } from "@/components/about/core-values";
import { WhyWeStarted } from "@/components/about/why-we-started";
import { Achievements } from "@/components/about/achievements";
import { Timeline } from "@/components/about/timeline";
import { TeamSection } from "@/components/about/team-section";
import { AboutCta } from "@/components/about/about-cta";
import { aboutHero } from "@/lib/data/about";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about C Font Travels — a trusted tour and travel company in Siliguri offering transport services, tour packages, and travel planning across North Bengal, Sikkim, Darjeeling, and Bhutan.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={aboutHero.title}
        description={aboutHero.description}
        image={aboutHero.image}
        imageAlt="C Font Travels team collaborating"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />
      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <WhyWeStarted />
      <Achievements />
      <Timeline />
      <TeamSection />
      <AboutCta />
    </>
  );
}
