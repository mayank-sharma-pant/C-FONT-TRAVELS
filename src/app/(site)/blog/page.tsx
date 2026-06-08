import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { FeaturedBlog } from "@/components/blog/featured-blog";
import { BlogExplorer } from "@/components/blog/blog-explorer";
import { blogHero } from "@/lib/data/blog";
import { getStoredBlogPosts } from "@/lib/store/content";

export const metadata: Metadata = {
  title: "Travel Blog",
  description:
    "Read travel guides, destination tips, and transport advice from C Font Travels — covering Darjeeling, Sikkim, Bhutan, Dooars, and North Bengal from Siliguri.",
};

export default async function BlogPage() {
  const posts = await getStoredBlogPosts();

  return (
    <>
      <PageHero
        title={blogHero.title}
        description={blogHero.description}
        image={blogHero.image}
        imageAlt="Scenic mountain landscape in North Bengal"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <FeaturedBlog posts={posts} />
      <BlogExplorer posts={posts} />
    </>
  );
}
