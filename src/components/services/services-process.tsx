"use client";

import { motion } from "framer-motion";
import { servicesProcess } from "@/lib/data/services";
import { SectionHeader } from "@/components/shared/section-header";

export function ServicesProcess() {
  return (
    <section className="relative overflow-hidden section-padding">
      <div className="absolute inset-0 bg-navy" />

      <div className="container-wide relative">
        <SectionHeader
          eyebrow="How It Works"
          title="From Inquiry to Adventure"
          description="A simple, transparent process designed to give you confidence at every step."
          light
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicesProcess.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <span className="font-display text-4xl font-semibold text-gold/30">
                {step.step}
              </span>
              <h3 className="mt-3 font-display text-lg font-medium text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
