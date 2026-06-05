"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Testimonials"
          title="Stories from Our Happy Travelers"
          description="Real experiences from real people who trusted us to make their travel dreams come true."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="h-full border-border/50 bg-cream/50 transition-all duration-500 hover:shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <Quote className="h-8 w-8 text-gold/40" />
                  <div className="mt-4 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="h-4 w-4 fill-gold text-gold"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-4 border-t border-border/50 pt-6">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-gold/20">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-navy">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.location} · {testimonial.trip}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button asChild variant="outline" size="lg">
            <Link href="/testimonials">
              Read More Reviews
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
