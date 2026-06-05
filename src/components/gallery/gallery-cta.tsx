"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GalleryCta() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-teal to-teal-light p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.12)_0%,_transparent_50%)]" />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-medium text-white sm:text-4xl">
              Ready to Create Your Own Travel Story?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              Let C Font Travels plan your next Darjeeling tour, Sikkim package,
              transport booking, or customized North Bengal itinerary.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
      </div>
    </section>
  );
}
