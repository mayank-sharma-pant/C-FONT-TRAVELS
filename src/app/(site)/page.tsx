import { HeroSection } from "@/components/home/hero-section";
import { FeaturedServices } from "@/components/home/featured-services";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { ContactCta } from "@/components/home/contact-cta";
import { FeaturedDestinations } from "@/components/home/featured-destinations";
import { PopularPackages } from "@/components/home/popular-packages";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { BlogPreview } from "@/components/home/blog-preview";
import {
  getFeaturedDestinations,
  getStoredBlogPosts,
  getStoredGalleryImages,
  getStoredPackages,
} from "@/lib/store/content";

export default async function HomePage() {
  const [packages, destinations, blogs, gallery] = await Promise.all([
    getStoredPackages(),
    getFeaturedDestinations(),
    getStoredBlogPosts(),
    getStoredGalleryImages(),
  ]);

  return (
    <>
      <HeroSection />
      <FeaturedDestinations destinations={destinations} />
      <FeaturedServices />
      <PopularPackages packages={packages} />
      <WhyChooseUs />
      <GalleryPreview images={gallery} />
      <TestimonialsSection />
      <BlogPreview posts={blogs} />
      <ContactCta />
    </>
  );
}
