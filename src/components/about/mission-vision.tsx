"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import { mission, vision } from "@/lib/data/about";

const cards = [
  { ...mission, icon: Target },
  { ...vision, icon: Eye },
];

export function MissionVision() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid gap-8 md:grid-cols-2">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-cream to-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-10"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <card.icon className="h-7 w-7 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-medium text-navy sm:text-3xl">
                  {card.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
