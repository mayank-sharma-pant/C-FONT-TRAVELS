"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GalleryCta() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        <div className="section-cta-panel mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-medium text-white sm:text-4xl">
            Ready to plan your own journey?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Tell us about your Darjeeling tour, Sikkim route, transfer, or custom
            North Bengal itinerary — we&apos;ll take it from Siliguri.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="accent" size="lg">
              <Link href="/inquiry">
                Start Travel Inquiry
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
