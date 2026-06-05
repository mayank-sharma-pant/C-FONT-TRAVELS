"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { contactFaqs } from "@/lib/data/contact";
import { SectionHeader } from "@/components/shared/section-header";
import { cn } from "@/lib/utils";

export function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Quick Help"
          title="Before You Contact Us"
          description="Common questions about reaching C Font Travels and how we handle inquiries."
          className="mb-8"
        />

        <div className="mx-auto max-w-3xl space-y-3">
          {contactFaqs.map((faq, i) => (
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
