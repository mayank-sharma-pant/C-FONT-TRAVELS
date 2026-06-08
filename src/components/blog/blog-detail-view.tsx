"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/data/blog";
import type { BlogDetail } from "@/lib/data/blog-details";
import { SectionHeader } from "@/components/shared/section-header";
import { BlogCard } from "@/components/blog/blog-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface BlogDetailViewProps {
  post: BlogPost;
  detail: BlogDetail;
  relatedPosts: BlogPost[];
}

export function BlogDetailView({ post, detail, relatedPosts }: BlogDetailViewProps) {
  const related = relatedPosts;

  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden pt-24 lg:min-h-[55vh]">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/30" />
        </div>

        <div className="container-wide relative flex min-h-[50vh] flex-col justify-end px-4 pb-12 sm:px-6 lg:min-h-[55vh] lg:px-8 lg:pb-16">
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex flex-wrap items-center gap-1 text-sm text-white/60"
          >
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
            <span>/</span>
            <span className="text-white/90">{post.title}</span>
          </nav>

          <Badge variant="accent" className="mb-4 w-fit">
            {post.category}
          </Badge>
          <h1 className="max-w-4xl font-display text-3xl font-medium text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/70">
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {detail.introduction}
            </p>

            <div className="mt-10 space-y-10">
              {detail.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="font-display text-2xl font-medium text-navy sm:text-3xl">
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 40)}
                        className="text-base leading-relaxed text-muted-foreground sm:text-lg"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-border/50 bg-cream/40 p-6 sm:p-8">
              <h3 className="font-display text-xl font-medium text-navy">
                Quick Travel Tips
              </h3>
              <ul className="mt-4 space-y-3">
                {detail.tips.map((tip) => (
                  <li
                    key={tip}
                    className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild variant="default" size="lg">
                <Link href="/packages">
                  View Tour Packages
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding bg-cream">
          <div className="container-wide">
            <SectionHeader
              eyebrow="Related"
              title="More Articles You May Like"
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
