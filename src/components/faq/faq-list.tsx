"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  faqCategories,
  faqItems,
  type FaqCategory,
} from "@/lib/data/faq";
import { SectionHeader } from "@/components/shared/section-header";
import { cn } from "@/lib/utils";

export function FaqList() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filtered = useMemo(() => {
    if (activeCategory === "all") return faqItems;
    return faqItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Help Center"
          title="Answers to Common Questions"
          description="Browse questions about our services, bookings, transport arrangements, and travel planning support."
          className="mb-10"
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => {
                setActiveCategory(category.id);
                setOpenIndex(0);
              }}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-medium transition-colors",
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-cream text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {filtered.map((faq, i) => (
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
      </div>
    </section>
  );
}
