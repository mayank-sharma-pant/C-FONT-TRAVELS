"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/data/services";
import { SectionHeader } from "@/components/shared/section-header";

export function ServicesNav() {
  return (
    <section className="section-padding bg-cream !py-12">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Quick Navigation"
          title="Find the Service You Need"
          description="Jump directly to any service below — each one is built to scale as your travel business grows."
          className="mb-8"
        />

        <div className="flex flex-wrap justify-center gap-3">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
            >
              <Link
                href={`#${service.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
              >
                <service.icon className="h-4 w-4 text-primary" />
                {service.title}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
