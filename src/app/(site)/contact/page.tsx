import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactFaq } from "@/components/contact/contact-faq";
import { contactHero } from "@/lib/data/contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact C Font Travels in Siliguri for tour packages, transport services, vehicle rentals, airport transfers, and customized travel planning across North Bengal.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={contactHero.title}
        description={contactHero.description}
        image={contactHero.image}
        imageAlt="Road travel through scenic North Bengal landscape"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />
      <ContactInfo />
      <ContactForm />
      <ContactFaq />
    </>
  );
}
