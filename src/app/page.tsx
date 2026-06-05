import dynamic from "next/dynamic";
import { HeroSection } from "@/components/home/hero-section";

const FeaturedServices = dynamic(
  () =>
    import("@/components/home/featured-services").then((m) => ({
      default: m.FeaturedServices,
    })),
  { loading: () => <SectionPlaceholder /> }
);

const FeaturedDestinations = dynamic(
  () =>
    import("@/components/home/featured-destinations").then((m) => ({
      default: m.FeaturedDestinations,
    })),
  { loading: () => <SectionPlaceholder /> }
);

const WhyChooseUs = dynamic(
  () =>
    import("@/components/home/why-choose-us").then((m) => ({
      default: m.WhyChooseUs,
    })),
  { loading: () => <SectionPlaceholder dark /> }
);

const PopularPackages = dynamic(
  () =>
    import("@/components/home/popular-packages").then((m) => ({
      default: m.PopularPackages,
    })),
  { loading: () => <SectionPlaceholder /> }
);

const TestimonialsSection = dynamic(
  () =>
    import("@/components/home/testimonials-section").then((m) => ({
      default: m.TestimonialsSection,
    })),
  { loading: () => <SectionPlaceholder /> }
);

const TravelStats = dynamic(
  () =>
    import("@/components/home/travel-stats").then((m) => ({
      default: m.TravelStats,
    })),
  { loading: () => <SectionPlaceholder compact /> }
);

const GalleryPreview = dynamic(
  () =>
    import("@/components/home/gallery-preview").then((m) => ({
      default: m.GalleryPreview,
    })),
  { loading: () => <SectionPlaceholder dark /> }
);

const BlogPreview = dynamic(
  () =>
    import("@/components/home/blog-preview").then((m) => ({
      default: m.BlogPreview,
    })),
  { loading: () => <SectionPlaceholder /> }
);

const ContactCta = dynamic(
  () =>
    import("@/components/home/contact-cta").then((m) => ({
      default: m.ContactCta,
    })),
  { loading: () => <SectionPlaceholder compact /> }
);

function SectionPlaceholder({
  dark = false,
  compact = false,
}: {
  dark?: boolean;
  compact?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={`${compact ? "py-20" : "section-padding"} ${
        dark ? "bg-navy" : "bg-cream"
      }`}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedServices />
      <FeaturedDestinations />
      <WhyChooseUs />
      <PopularPackages />
      <TestimonialsSection />
      <TravelStats />
      <GalleryPreview />
      <BlogPreview />
      <ContactCta />
    </>
  );
}
