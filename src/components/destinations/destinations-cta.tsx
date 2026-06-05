"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DestinationsCta() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-navy p-8 sm:p-12 lg:p-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,169,98,0.15)_0%,_transparent_55%)]" />

          <div className="relative mx-auto max-w-2xl text-center">
            <Compass className="mx-auto h-10 w-10 text-gold" />
            <h2 className="mt-4 font-display text-3xl font-medium text-white sm:text-4xl">
              Can&apos;t Decide? We&apos;ll Help You Choose
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Share your travel preferences and our experts will recommend the
              perfect destination — tailored to your budget, dates, and dreams.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
        </motion.div>
      </div>
    </section>
  );
}
