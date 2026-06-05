import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Clock, MapPin } from "lucide-react";
import { tourPackages, categoryLabels } from "@/lib/data/packages";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const featuredPackages = tourPackages.slice(0, 4);

export function PopularPackages() {
  return (
    <section className="section-padding bg-sand/50">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Tour Packages"
          title="Popular Tour Packages"
          description="Handpicked packages for Darjeeling, Sikkim, Bhutan, Dooars, and more — with transparent pricing and reliable travel support."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {featuredPackages.map((pkg) => (
            <Card
              key={pkg.slug}
              className="group overflow-hidden border-0 bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="grid sm:grid-cols-5">
                <div className="relative aspect-[4/3] sm:col-span-2 sm:aspect-auto sm:min-h-[240px]">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 240px"
                  />
                  <Badge variant="accent" className="absolute left-4 top-4 backdrop-blur-sm">
                    {categoryLabels[pkg.category]}
                  </Badge>
                </div>
                <CardContent className="flex flex-col justify-center p-6 sm:col-span-3">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {pkg.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {pkg.duration}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-medium text-navy">
                    {pkg.name}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {pkg.highlights.slice(0, 3).map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-1 text-xs text-muted-foreground"
                      >
                        <Check className="h-3 w-3 text-teal" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-muted-foreground">Starting from</span>
                      <p className="font-display text-2xl font-semibold text-primary">
                        {pkg.priceDisplay}
                      </p>
                    </div>
                    <Button asChild variant="default" size="sm">
                      <Link href={`/packages/${pkg.slug}`}>
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="default" size="lg">
            <Link href="/packages">
              Browse All Packages
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
