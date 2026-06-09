"use client";

import Link from "next/link";
import { ArrowRight, Briefcase, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutCta() {
  return (
    <section className="section-padding bg-sand/50">
      <div className="container-wide">
        <div className="section-cta-panel">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Work With Us
              </span>
              <h2 className="mt-3 font-display text-3xl font-medium text-white sm:text-4xl">
                Plan a trip with our Siliguri team
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">
                Family tours, group travel, airport transfers, or a customized
                Sikkim and Darjeeling itinerary — speak with us directly.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button asChild variant="accent" size="lg" className="flex-1">
                <Link href="/inquiry">
                  <Plane className="h-4 w-4" />
                  Plan Your Trip
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="flex-1 border-white/30 text-white hover:bg-white/10"
              >
                <Link href="/services">
                  <Briefcase className="h-4 w-4" />
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
