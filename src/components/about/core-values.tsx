"use client";

import { motion } from "framer-motion";
import {
  Award,
  Compass,
  Heart,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import { coreValues } from "@/lib/data/about";
import { SectionHeader } from "@/components/shared/section-header";

const icons = [Shield, Award, Compass, Sparkles, Heart, Users];

export function CoreValues() {
  return (
    <section className="relative overflow-hidden section-padding">
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(201,169,98,0.1)_0%,_transparent_60%)]" />

      <div className="container-wide relative">
        <SectionHeader
          eyebrow="Core Values"
          title="What Drives Everything We Do"
          description="Our values aren't just words on a wall — they guide every recommendation, every itinerary, and every interaction with our travelers."
          light
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:border-gold/30 hover:bg-white/10"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 transition-colors group-hover:bg-gold/25">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-display text-lg font-medium text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
