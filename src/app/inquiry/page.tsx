import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/shared/page-hero";
import { InquiryForm } from "@/components/inquiry/inquiry-form";
import { InquiryProcess } from "@/components/inquiry/inquiry-process";
import { inquiryHero } from "@/lib/data/inquiry";

export const metadata: Metadata = {
  title: "Travel Inquiry",
  description:
    "Submit a travel inquiry to C Font Travels for tour packages, transport services, vehicle rentals, airport transfers, and customized travel planning from Siliguri.",
};

export default function InquiryPage() {
  return (
    <>
      <PageHero
        title={inquiryHero.title}
        description={inquiryHero.description}
        image={inquiryHero.image}
        imageAlt="Travel planning and tour packages from Siliguri"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Travel Inquiry" },
        ]}
      />
      <Suspense fallback={null}>
        <InquiryForm />
      </Suspense>
      <InquiryProcess />
    </>
  );
}
