"use client";

import { Send } from "lucide-react";
import { contactFormSubjects } from "@/lib/data/contact";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContactForm() {
  return (
    <section id="contact-form" className="section-padding bg-cream scroll-mt-24">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeader
            eyebrow="Send a Message"
            title="Contact Form"
            description="Share your travel requirements and our team will get back to you within 24 hours on working days."
            align="left"
            className="mb-0"
          />

          <form
            className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm sm:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2 sm:col-span-2">
                <label htmlFor="contact-name" className="text-xs font-medium text-muted-foreground">
                  Full Name
                </label>
                <Input id="contact-name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-xs font-medium text-muted-foreground">
                  Email
                </label>
                <Input id="contact-email" type="email" placeholder="you@email.com" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-phone" className="text-xs font-medium text-muted-foreground">
                  Phone
                </label>
                <Input id="contact-phone" type="tel" placeholder="+91 97757 19041" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label htmlFor="contact-subject" className="text-xs font-medium text-muted-foreground">
                  Subject
                </label>
                <select
                  id="contact-subject"
                  defaultValue={contactFormSubjects[0]}
                  className="flex h-11 w-full rounded-xl border border-input bg-white/80 px-4 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {contactFormSubjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label htmlFor="contact-message" className="text-xs font-medium text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell us about your travel plans, dates, destinations, or transport requirements..."
                  className="flex w-full rounded-xl border border-input bg-white/80 px-4 py-3 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  required
                />
              </div>
            </div>
            <Button type="submit" size="lg" className="mt-6 w-full">
              Send Message
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
