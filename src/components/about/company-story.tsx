"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { companyStory } from "@/lib/data/about";
import { SectionHeader } from "@/components/shared/section-header";

export function CompanyStory() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Who We Are"
          title={companyStory.title}
          align="left"
          className="max-w-2xl"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {companyStory.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                {paragraph}
              </p>
            ))}

            <div className="grid grid-cols-3 gap-4 pt-4">
              {companyStory.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border/60 bg-white p-4 text-center shadow-sm"
                >
                  <p className="font-display text-2xl font-semibold text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={companyStory.image}
                alt="Travelers exploring a scenic destination"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl glass p-5 sm:block">
              <p className="font-display text-3xl font-semibold text-navy">12+</p>
              <p className="text-sm text-muted-foreground">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
