"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import type { Destination, DestinationCategory } from "@/lib/data/destinations";
import { destinationCategories } from "@/lib/data/destinations";
import { SectionHeader } from "@/components/shared/section-header";
import { DestinationCard } from "@/components/destinations/destination-card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface DestinationExplorerProps {
  destinations: Destination[];
}

export function DestinationExplorer({ destinations }: DestinationExplorerProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<
    DestinationCategory | "all"
  >("all");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    return destinations.filter((destination) => {
      const matchesCategory =
        activeCategory === "all" ||
        destination.categories.includes(activeCategory);

      const matchesSearch =
        !query ||
        destination.name.toLowerCase().includes(query) ||
        destination.region.toLowerCase().includes(query) ||
        destination.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory, destinations]);

  return (
    <section id="explore" className="section-padding bg-sand/40 scroll-mt-24">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Explore All"
          title="Find Your Perfect Destination"
          description="Search and filter destinations across North Bengal, Sikkim, Darjeeling, Bhutan, and other popular travel locations."
        />

        <div className="mb-10 rounded-2xl border border-border/50 bg-white p-4 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search destinations, regions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-10"
                aria-label="Search destinations"
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

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <SlidersHorizontal className="h-4 w-4" />
              <span>{filtered.length} destination{filtered.length !== 1 ? "s" : ""}</span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {destinationCategories.map((category) => (
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
        </div>

        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((destination) => (
              <DestinationCard
                key={destination.slug}
                destination={destination}
                variant="grid"
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border bg-white py-16 text-center">
              <p className="font-display text-xl text-navy">
                No destinations found
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try adjusting your search or filter to discover more places.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("all");
                }}
                className="mt-4 text-sm font-medium text-primary hover:underline"
              >
                Clear all filters
              </button>
          </div>
        )}
      </div>
    </section>
  );
}
