"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { whyWeStarted } from "@/lib/data/about";
import { SectionHeader } from "@/components/shared/section-header";

export function WhyWeStarted() {
  return (
    <section className="section-padding bg-sand/50">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Our Purpose"
          title={whyWeStarted.title}
          align="left"
          className="max-w-2xl"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[16/11] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={whyWeStarted.image}
                alt="Scenic lake surrounded by mountains"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="relative rounded-2xl border border-gold/20 bg-white p-6 shadow-sm sm:p-8">
              <Quote className="h-10 w-10 text-gold/40" />
              <blockquote className="mt-4 font-display text-xl font-medium leading-relaxed text-navy sm:text-2xl">
                &ldquo;{whyWeStarted.quote}&rdquo;
              </blockquote>
              <p className="mt-4 text-sm font-medium text-teal">
                — {whyWeStarted.author}
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {whyWeStarted.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-base leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
