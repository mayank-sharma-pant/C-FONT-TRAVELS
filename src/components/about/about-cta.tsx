"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutCta() {
  return (
    <section className="section-padding bg-sand/50">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-navy p-8 sm:p-12 lg:p-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(201,169,98,0.15)_0%,_transparent_55%)]" />
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-teal/20 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Work With Us
              </span>
              <h2 className="mt-4 font-display text-3xl font-medium text-white sm:text-4xl">
                Ready to Experience the C Font Difference?
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">
                Whether you&apos;re planning your first international trip or your
                fiftieth — our team is here to make it seamless, personal, and
                unforgettable.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
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
        </motion.div>
      </div>
    </section>
  );
}
