"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { featuredDestinations } from "@/lib/data/destinations";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function FeaturedDestinations() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Destinations"
          title="Explore Extraordinary Places"
          description="Handpicked destinations that promise unforgettable experiences — from tropical paradises to cultural capitals."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {featuredDestinations.map((destination, i) => (
            <motion.article
              key={destination.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-[16/10] sm:aspect-[16/9]">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <Badge variant="glass" className="mb-3 w-fit">
                  From {destination.price}
                </Badge>
                <h3 className="font-display text-2xl font-medium text-white sm:text-3xl">
                  {destination.name}
                </h3>
                <p className="mt-2 max-w-md text-sm text-white/75">
                  {destination.description}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-white/60">
                  <Clock className="h-3.5 w-3.5" />
                  {destination.duration}
                </div>
                <div className="mt-5 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <Button asChild variant="accent" size="sm">
                    <Link href={`/destinations/${destination.slug}`}>
                      Explore
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button asChild variant="outline" size="lg">
            <Link href="/destinations">
              View All Destinations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
