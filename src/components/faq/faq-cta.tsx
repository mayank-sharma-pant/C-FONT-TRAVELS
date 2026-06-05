"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import { Button } from "@/components/ui/button";

export function FaqCta() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-primary to-teal-light p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,169,98,0.2)_0%,_transparent_50%)]" />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-medium text-white sm:text-4xl">
              Still Have Questions?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              Our team in Siliguri is ready to help with tour packages, transport
              bookings, vehicle rentals, and customized travel planning.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild variant="accent" size="lg">
                <Link href="/contact">
                  <MessageCircle className="h-4 w-4" />
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="glass" size="lg">
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                  <Phone className="h-4 w-4" />
                  {siteConfig.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
