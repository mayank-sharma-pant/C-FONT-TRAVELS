"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import { Button } from "@/components/ui/button";

export function FaqCta() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        <div className="section-cta-panel mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-medium text-white sm:text-4xl">
            Still have a question?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Call or message our Siliguri office for help with packages,
            transport bookings, rentals, and travel planning.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="accent" size="lg">
              <Link href="/contact">
                <MessageCircle className="h-4 w-4" />
                Contact Us
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
