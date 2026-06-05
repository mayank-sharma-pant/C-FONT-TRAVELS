"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/data/about";
import { SectionHeader } from "@/components/shared/section-header";

export function Achievements() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Achievements"
          title="Milestones We're Proud Of"
          description="Numbers that reflect our commitment — but it's the stories behind them that truly matter."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="group rounded-2xl border border-border/50 bg-cream/50 p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:bg-white hover:shadow-lg sm:p-8"
            >
              <p className="font-display text-4xl font-semibold text-primary transition-colors group-hover:text-teal-light sm:text-5xl">
                {item.value}
              </p>
              <h3 className="mt-2 font-medium text-navy">{item.label}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
