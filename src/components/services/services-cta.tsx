"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import { Button } from "@/components/ui/button";

export function ServicesCta() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        <div className="section-cta-panel mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Need Help Choosing?
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-white sm:text-4xl">
            Tell us what kind of trip you need
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Tour package, vehicle rental, airport pick-up, or a full travel plan
            — we&apos;ll point you to the right service from our Siliguri office.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="accent" size="lg">
              <Link href="/inquiry">
                Submit Travel Inquiry
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
