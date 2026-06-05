"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PackagesCta() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-primary to-teal-light p-8 sm:p-12 lg:p-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,169,98,0.2)_0%,_transparent_50%)]" />

          <div className="relative mx-auto max-w-2xl text-center">
            <Sparkles className="mx-auto h-10 w-10 text-gold" />
            <h2 className="mt-4 font-display text-3xl font-medium text-white sm:text-4xl">
              Need a Custom Itinerary?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              Don&apos;t see the exact package you need? We can customize Darjeeling,
              Sikkim, Bhutan, Dooars, and other routes based on your preferences.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
                <Link href="/contact">Speak to an Expert</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
