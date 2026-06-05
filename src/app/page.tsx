import { HeroSection } from "@/components/home/hero-section";
import { FeaturedServices } from "@/components/home/featured-services";
import { FeaturedDestinations } from "@/components/home/featured-destinations";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { PopularPackages } from "@/components/home/popular-packages";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { TravelStats } from "@/components/home/travel-stats";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { BlogPreview } from "@/components/home/blog-preview";
import { ContactCta } from "@/components/home/contact-cta";

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
