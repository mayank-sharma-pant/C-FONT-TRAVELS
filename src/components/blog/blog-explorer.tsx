"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import {
  blogCategories,
  blogPosts,
  type BlogCategory,
} from "@/lib/data/blog";
import { SectionHeader } from "@/components/shared/section-header";
import { BlogCard } from "@/components/blog/blog-card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function BlogExplorer() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "all">(
    "all"
  );

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "all" || post.category === activeCategory;

      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <section id="all-articles" className="section-padding bg-sand/40 scroll-mt-24">
      <div className="container-wide">
        <SectionHeader
          eyebrow="All Articles"
          title="Browse Travel Guides & Tips"
          description="Search by topic or filter by category to find destination guides, transport tips, and travel planning advice."
        />

        <div className="mb-10 rounded-2xl border border-border/50 bg-white p-4 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles, destinations, topics..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-10"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {blogCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-medium transition-colors",
                  activeCategory === category.id
                    ? "bg-primary text-white"
                    : "bg-cream text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border bg-white p-12 text-center">
            <p className="font-display text-xl text-navy">No articles found</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a different search term or category filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
