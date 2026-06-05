import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import { blogPosts } from "@/lib/data/blog";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";

export function FeaturedBlog() {
  const featured = blogPosts.find((post) => post.featured);

  if (!featured) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Featured Article"
          title="Latest Travel Insights"
          description="Expert guides and practical tips for planning trips from Siliguri across North Bengal, Sikkim, Darjeeling, and nearby destinations."
        />

        <article className="group relative overflow-hidden rounded-3xl">
          <Link href={`/blog/${featured.slug}`} className="block">
            <div className="relative aspect-[16/9] lg:aspect-[21/9]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10">
              <Badge variant="accent" className="mb-3 w-fit">
                {featured.category}
              </Badge>
              <h3 className="max-w-3xl font-display text-2xl font-medium text-white sm:text-4xl">
                {featured.title}
              </h3>
              <p className="mt-3 max-w-2xl line-clamp-2 text-sm text-white/75 sm:text-base">
                {featured.excerpt}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-white/60">
                <span>{featured.author}</span>
                <span>·</span>
                <span>{featured.date}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {featured.readTime}
                </span>
              </div>
            </div>
          </Link>
        </article>
      </div>
    </section>
  );
}
