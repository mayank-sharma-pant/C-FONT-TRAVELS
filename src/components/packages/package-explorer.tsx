"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpDown, Search, X } from "lucide-react";
import {
  tourPackages,
  packageCategories,
  sortOptions,
  type PackageCategory,
  type PackageSortOption,
} from "@/lib/data/packages";
import { SectionHeader } from "@/components/shared/section-header";
import { PackageCard } from "@/components/packages/package-card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function PackageExplorer() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<
    PackageCategory | "all"
  >("all");
  const [sortBy, setSortBy] = useState<PackageSortOption>("popular");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    let results = tourPackages.filter((pkg) => {
      const matchesCategory =
        activeCategory === "all" || pkg.category === activeCategory;

      const matchesSearch =
        !query ||
        pkg.name.toLowerCase().includes(query) ||
        pkg.location.toLowerCase().includes(query) ||
        pkg.description.toLowerCase().includes(query) ||
        pkg.highlights.some((h) => h.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });

    switch (sortBy) {
      case "price-asc":
        results = [...results].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        results = [...results].sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        results = [...results].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "popular":
      default:
        results = [...results].sort(
          (a, b) => Number(b.featured) - Number(a.featured)
        );
        break;
    }

    return results;
  }, [search, activeCategory, sortBy]);

  return (
    <section id="all-packages" className="section-padding bg-sand/40 scroll-mt-24">
      <div className="container-wide">
        <SectionHeader
          eyebrow="All Packages"
          title="Browse Our Complete Collection"
          description="Filter by travel style, search by destination, and sort by price to find your ideal journey."
        />

        <div className="mb-10 rounded-2xl border border-border/50 bg-white p-4 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search packages, destinations, highlights..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-10"
                aria-label="Search tour packages"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-navy"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="relative min-w-[200px]">
              <ArrowUpDown className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as PackageSortOption)
                }
                className="h-11 w-full appearance-none rounded-xl border border-input bg-white/80 pl-10 pr-8 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Sort packages"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {packageCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-cream text-muted-foreground hover:bg-sand hover:text-navy"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Showing {filtered.length} package{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>

        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              key={`${activeCategory}-${search}-${sortBy}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((pkg, i) => (
                <PackageCard key={pkg.slug} pkg={pkg} index={i} variant="grid" />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-dashed border-border bg-white py-16 text-center"
            >
              <p className="font-display text-xl text-navy">No packages found</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try a different search term or category filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("all");
                  setSortBy("popular");
                }}
                className="mt-4 text-sm font-medium text-primary hover:underline"
              >
                Reset filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
