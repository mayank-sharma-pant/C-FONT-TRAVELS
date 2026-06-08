import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { FaqList } from "@/components/faq/faq-list";
import { FaqCta } from "@/components/faq/faq-cta";
import { faqHero } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Find answers to common questions about C Font Travels tour packages, transport services, vehicle rentals, bookings, and travel planning in Siliguri.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        title={faqHero.title}
        description={faqHero.description}
        image={faqHero.image}
        imageAlt="C Font Travels team ready to assist travelers"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />
      <FaqList />
      <FaqCta />
    </>
  );
}
