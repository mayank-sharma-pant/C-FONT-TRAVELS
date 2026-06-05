"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Mail } from "lucide-react";
import { teamMembers } from "@/lib/data/about";
import { SectionHeader } from "@/components/shared/section-header";

export function TeamSection() {
  return (
    <section id="team" className="section-padding bg-white scroll-mt-24">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Our Team"
          title="Meet the Team Behind Your Journey"
          description="Dedicated professionals supporting tour planning, transport coordination, and customer service from our Siliguri office."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-xl font-medium text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gold">{member.role}</p>
                </div>

                <div className="absolute inset-0 flex items-end justify-center bg-navy/60 p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="mb-16 text-center text-sm leading-relaxed text-white/90">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <button
                  type="button"
                  aria-label={`Email ${member.name}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-cream text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label={`View ${member.name}'s profile`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-cream text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
