"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bed,
  Check,
  ChevronDown,
  Clock,
  MapPin,
  Minus,
  Send,
} from "lucide-react";
import type { TourPackage } from "@/lib/data/packages";
import type { PackageDetail } from "@/lib/data/package-details";
import { categoryLabels, getRelatedPackages } from "@/lib/data/packages";
import { SectionHeader } from "@/components/shared/section-header";
import { PackageCard } from "@/components/packages/package-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface PackageDetailViewProps {
  pkg: TourPackage;
  detail: PackageDetail;
}

export function PackageDetailView({ pkg, detail }: PackageDetailViewProps) {
  const related = getRelatedPackages(pkg.slug, pkg.category);

  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden pt-24 lg:min-h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src={pkg.image}
            alt={pkg.name}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/30" />
        </div>

        <div className="container-wide relative flex min-h-[50vh] flex-col justify-end px-4 pb-12 sm:px-6 lg:min-h-[60vh] lg:px-8 lg:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav
              aria-label="Breadcrumb"
              className="mb-4 flex flex-wrap items-center gap-1 text-sm text-white/60"
            >
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <Link href="/packages" className="hover:text-white">
                Packages
              </Link>
              <span>/</span>
              <span className="text-white/90">{pkg.name}</span>
            </nav>

            <Badge variant="accent" className="mb-4">
              {categoryLabels[pkg.category]}
            </Badge>
            <h1 className="font-display text-3xl font-medium text-white sm:text-4xl lg:text-5xl">
              {pkg.name}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/70">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {pkg.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {pkg.duration}
              </span>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div>
                <span className="text-xs text-white/60">Starting from</span>
                <p className="font-display text-3xl font-semibold text-gold">
                  {pkg.priceDisplay}
                </p>
              </div>
              <Button asChild variant="accent" size="lg" className="mt-2">
                <a href="#inquiry">
                  Book This Package
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Overview"
            title="About This Journey"
            align="left"
            className="max-w-2xl mb-8"
          />
          <div className="max-w-3xl space-y-4">
            {detail.overview.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {pkg.highlights.map((highlight) => (
              <Badge key={highlight} variant="outline" className="px-3 py-1.5">
                <Check className="mr-1.5 h-3 w-3 text-teal" />
                {highlight}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Itinerary"
            title="Day-by-Day Plan"
            description="A thoughtfully paced journey with the perfect balance of exploration and relaxation."
          />

          <div className="mx-auto max-w-3xl space-y-4">
            {detail.itinerary.map((day, i) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="flex gap-4 rounded-2xl border border-border/50 bg-white p-5 shadow-sm sm:gap-6 sm:p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-display text-lg font-semibold text-primary">
                  {day.day}
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium text-navy">
                    Day {day.day}: {day.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {day.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border/50 bg-cream/50 p-6 sm:p-8">
              <h2 className="flex items-center gap-2 font-display text-2xl font-medium text-navy">
                <Check className="h-6 w-6 text-teal" />
                Included
              </h2>
              <ul className="mt-6 space-y-3">
                {detail.included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border/50 bg-white p-6 sm:p-8">
              <h2 className="flex items-center gap-2 font-display text-2xl font-medium text-navy">
                <Minus className="h-6 w-6 text-muted-foreground" />
                Not Included
              </h2>
              <ul className="mt-6 space-y-3">
                {detail.excluded.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <Minus className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand/40">
        <div className="container-wide">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeader
                eyebrow="Accommodation"
                title={detail.accommodation.title}
                description={detail.accommodation.description}
                align="left"
                className="mb-6"
              />
              <ul className="space-y-3">
                {detail.accommodation.hotels.map((hotel) => (
                  <li
                    key={hotel}
                    className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm"
                  >
                    <Bed className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-navy">{hotel}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {detail.gallery.map((src, i) => (
                <div
                  key={src}
                  className={cn(
                    "relative overflow-hidden rounded-2xl",
                    i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"
                  )}
                >
                  <Image
                    src={src}
                    alt={`${pkg.name} gallery ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="FAQ"
            title="Common Questions"
            className="mb-8"
          />
          <PackageFaqs faqs={detail.faqs} />
        </div>
      </section>

      <section id="inquiry" className="section-padding bg-cream scroll-mt-24">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <SectionHeader
              eyebrow="Book Now"
              title="Inquire About This Package"
              description="Fill in your details and our travel expert will respond within 24 hours with availability and a personalized quote."
              align="left"
              className="mb-0"
            />

            <form
              className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm sm:p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2 sm:col-span-2">
                  <label htmlFor="pkg-name" className="text-xs font-medium text-muted-foreground">
                    Full Name
                  </label>
                  <Input id="pkg-name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="pkg-email" className="text-xs font-medium text-muted-foreground">
                    Email
                  </label>
                  <Input id="pkg-email" type="email" placeholder="you@email.com" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="pkg-phone" className="text-xs font-medium text-muted-foreground">
                    Phone
                  </label>
                  <Input id="pkg-phone" type="tel" placeholder="+91 98765 43210" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label htmlFor="pkg-package" className="text-xs font-medium text-muted-foreground">
                    Package
                  </label>
                  <Input id="pkg-package" defaultValue={pkg.name} readOnly className="bg-cream" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label htmlFor="pkg-message" className="text-xs font-medium text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="pkg-message"
                    rows={4}
                    placeholder="Travel dates, number of travelers, special requests..."
                    className="flex w-full rounded-xl border border-input bg-white/80 px-4 py-3 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
              </div>
              <Button type="submit" size="lg" className="mt-6 w-full">
                Submit Inquiry
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-wide">
            <SectionHeader
              eyebrow="Related"
              title="Similar Packages You May Like"
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedPkg, i) => (
                <PackageCard
                  key={relatedPkg.slug}
                  pkg={relatedPkg}
                  index={i}
                  variant="grid"
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function PackageFaqs({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={faq.question}
          className="overflow-hidden rounded-2xl border border-border/50 bg-cream/30"
        >
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            aria-expanded={openIndex === i}
          >
            <span className="font-medium text-navy">{faq.question}</span>
            <ChevronDown
              className={cn(
                "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
                openIndex === i && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "grid transition-all duration-300",
              openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            )}
          >
            <div className="overflow-hidden">
              <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
