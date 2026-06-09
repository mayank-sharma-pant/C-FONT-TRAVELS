"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PackagesCta() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="section-cta-panel mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-medium text-white sm:text-4xl">
            Need a route that is not listed here?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            We customize Darjeeling, Sikkim, Bhutan, Dooars, and other
            itineraries around your dates, budget, and vehicle preference.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="accent" size="lg">
              <Link href="/inquiry">
                Request Custom Package
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <Link href="/contact">Contact Office</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
