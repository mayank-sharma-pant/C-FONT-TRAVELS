import { HeroSection } from "@/components/home/hero-section";
import { FeaturedServices } from "@/components/home/featured-services";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { ReviewsPlaceholder } from "@/components/home/reviews-placeholder";
import { ContactCta } from "@/components/home/contact-cta";
import { FeaturedDestinations } from "@/components/home/featured-destinations";
import { PopularPackages } from "@/components/home/popular-packages";
import { BlogPreview } from "@/components/home/blog-preview";
import {
  getFeaturedDestinations,
  getStoredBlogPosts,
  getStoredPackages,
} from "@/lib/store/content";

export default async function HomePage() {
  const [packages, destinations, blogs] = await Promise.all([
    getStoredPackages(),
    getFeaturedDestinations(),
    getStoredBlogPosts(),
  ]);

  return (
    <>
      <HeroSection />
      <FeaturedDestinations destinations={destinations} />
      <FeaturedServices />
      <PopularPackages packages={packages} />
      <WhyChooseUs />
      <ReviewsPlaceholder />
      <BlogPreview posts={blogs} />
      <ContactCta />
    </>
  );
}
