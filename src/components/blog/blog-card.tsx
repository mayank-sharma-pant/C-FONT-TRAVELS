"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/data/blog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  variant?: "grid" | "horizontal";
  className?: string;
}

export function BlogCard({ post, variant = "grid", className }: BlogCardProps) {
  if (variant === "horizontal") {
    return (
      <article className={className}>
        <Link
          href={`/blog/${post.slug}`}
          className="group flex gap-4 rounded-2xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:gap-6 sm:p-5"
        >
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-32">
            <Image
              src={post.image}
              alt={post.title}
              fill
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
    );
  }

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl",
        className
      )}
    >
      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
          <Badge variant="accent" className="absolute left-4 top-4">
            {post.category}
          </Badge>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>{post.date}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>
          <h3 className="mt-2 font-display text-xl font-medium text-navy transition-colors group-hover:text-primary">
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
          <div className="mt-5 flex items-center gap-2 text-sm font-medium text-primary">
            Read Article
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </article>
  );
}
