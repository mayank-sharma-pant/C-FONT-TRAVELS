"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { services } from "@/lib/data/services";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ServiceShowcase() {
  return (
    <div>
      {services.map((service, index) => {
        const isReversed = index % 2 === 1;
        const bgClass = index % 2 === 0 ? "bg-white" : "bg-sand/40";

        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`section-padding scroll-mt-24 ${bgClass}`}
          >
            <div className="container-wide">
              <div
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                  isReversed ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div
                  className={`relative ${isReversed ? "lg:[direction:ltr]" : ""}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      loading={index < 2 ? "eager" : "lazy"}
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary shadow-lg sm:-bottom-6 sm:-right-6 sm:h-20 sm:w-20">
                    <service.icon className="h-8 w-8 text-white sm:h-9 sm:w-9" />
                  </div>
                </div>

                <div className={isReversed ? "lg:[direction:ltr]" : ""}>
                  <Badge variant="accent" className="mb-4">
                    {service.tagline}
                  </Badge>
                  <h2 className="font-display text-3xl font-medium text-navy sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {service.description}
                  </p>

                  <div className="mt-8 grid gap-8 sm:grid-cols-2">
                    <div>
                      <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-navy">
                        <Sparkles className="h-4 w-4 text-gold" />
                        Features
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2.5 text-sm text-muted-foreground"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-navy">
                        <Sparkles className="h-4 w-4 text-gold" />
                        Benefits
                      </h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-start gap-2.5 text-sm text-muted-foreground"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button asChild variant="default" size="lg" className="mt-8">
                    <Link href={service.cta.href}>
                      {service.cta.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
