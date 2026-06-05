"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import { Button } from "@/components/ui/button";

export function ServicesCta() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-teal to-teal-light p-8 sm:p-12 lg:p-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Not Sure Where to Start?
            </span>
            <h2 className="mt-4 font-display text-3xl font-medium text-white sm:text-4xl">
              Let Our Experts Guide You
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              Tell us about your travel plans and we&apos;ll recommend the perfect
              combination of services — no obligation, no pressure.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild variant="accent" size="lg">
                <Link href="/inquiry">
                  Submit Travel Inquiry
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
        </motion.div>
      </div>
    </section>
  );
}
