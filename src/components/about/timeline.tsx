"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data/about";
import { SectionHeader } from "@/components/shared/section-header";

export function Timeline() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Our Journey"
          title="A Decade of Growth & Discovery"
          description="From a single office in Delhi to a nationwide travel brand — here's how we've evolved."
        />

        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-teal via-gold/50 to-teal sm:left-1/2 sm:block sm:-translate-x-px"
            aria-hidden="true"
          />

          <div className="space-y-8 sm:space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`relative flex flex-col sm:flex-row ${
                  i % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden sm:block sm:w-1/2" />

                <div
                  className="absolute left-4 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-gold bg-white shadow-md sm:left-1/2 sm:block"
                  aria-hidden="true"
                />

                <div
                  className={`sm:w-1/2 ${
                    i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                  } pl-10 sm:pl-0`}
                >
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {item.year}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-medium text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
