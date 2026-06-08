import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/data/blog";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface BlogPreviewProps {
  posts: BlogPost[];
}

export function BlogPreview({ posts }: BlogPreviewProps) {
  const featured = posts.find((p) => p.featured)!;
  const recent = posts.filter((p) => !p.featured).slice(0, 2);

  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Travel Blog"
          title="Insights & Inspiration"
          description="Travel tips, destination guides, and useful information for planning trips from Siliguri and North Bengal."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <article className="group relative overflow-hidden rounded-3xl">
            <Link href={`/blog/${featured.slug}`} className="block">
              <div className="relative aspect-[16/10]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <Badge variant="accent" className="mb-3 w-fit">
                  Featured
                </Badge>
                <h3 className="font-display text-2xl font-medium text-white sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-white/70">
                  {featured.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-white/50">
                  <span>{featured.author}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {featured.readTime}
                  </span>
                </div>
              </div>
            </Link>
          </article>

          <div className="flex flex-col gap-6">
            {recent.map((post) => (
              <article key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex gap-4 rounded-2xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:gap-6 sm:p-5"
                >
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-32">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      loading="lazy"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="128px"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <Badge variant="outline" className="mb-2 w-fit text-[10px]">
                      {post.category}
                    </Badge>
                    <h3 className="font-display text-lg font-medium text-navy line-clamp-2 transition-colors group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {post.date} · {post.readTime}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">
              Read All Articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
