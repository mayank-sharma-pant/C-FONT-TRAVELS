"use client";

import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DestinationsCta() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="section-cta-panel mx-auto max-w-3xl text-center">
          <Compass className="mx-auto h-9 w-9 text-gold" />
          <h2 className="mt-4 font-display text-3xl font-medium text-white sm:text-4xl">
            Not sure which destination fits your dates?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Share your travel dates and group size — our Siliguri team will
            suggest a route, vehicle, or package that suits your plan.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="accent" size="lg">
              <Link href="/inquiry">
                Get a Recommendation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <Link href="/packages">View Tour Packages</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
