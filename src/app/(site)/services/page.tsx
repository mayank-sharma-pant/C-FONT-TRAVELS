import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ServicesNav } from "@/components/services/services-nav";
import { ServiceShowcase } from "@/components/services/service-showcase";
import { ServicesProcess } from "@/components/services/services-process";
import { ServicesCta } from "@/components/services/services-cta";
import { servicesHero, servicesIntro } from "@/lib/data/services";
import { SectionHeader } from "@/components/shared/section-header";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore C Font Travels services — tour packages, transport services, vehicle rentals, airport transfers, railway transfers, corporate travel, and customized travel planning in Siliguri.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title={servicesHero.title}
        description={servicesHero.description}
        image={servicesHero.image}
        imageAlt="Airplane wing above clouds"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <ServicesNav />
      <section className="section-padding bg-white !pb-8 !pt-4">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Full-Service Travel"
            title={servicesIntro.title}
            description={servicesIntro.description}
            className="mb-0"
          />
        </div>
      </section>
      <ServiceShowcase />
      <ServicesProcess />
      <ServicesCta />
    </>
  );
}
