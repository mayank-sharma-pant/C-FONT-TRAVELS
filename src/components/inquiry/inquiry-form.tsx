"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Check, Mail, MapPin, Phone, Send } from "lucide-react";
import type { Destination } from "@/lib/data/destinations";
import {
  inquiryBudgetRanges,
  inquiryHighlights,
  inquiryServiceTypes,
  inquiryTravelTypes,
} from "@/lib/data/inquiry";
import { siteConfig } from "@/lib/data/site";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

interface InquiryFormProps {
  destinations: Destination[];
}

type FormStatus = "idle" | "loading" | "success" | "error";

export function InquiryForm({ destinations }: InquiryFormProps) {
  const searchParams = useSearchParams();
  const destinationParam = searchParams.get("destination");

  const destinationOptions = useMemo(
    () => [
      ...destinations.map((destination) => ({
        value: destination.slug,
        label: destination.name,
      })),
      { value: "other", label: "Other / Custom Destination" },
    ],
    [destinations]
  );

  const defaultDestination = destinationOptions.some(
    (option) => option.value === destinationParam
  )
    ? destinationParam!
    : "";

  const [destination, setDestination] = useState(defaultDestination);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          service: formData.get("service"),
          destination: formData.get("destination"),
          dates: formData.get("dates"),
          travelers: formData.get("travelers"),
          travelType: formData.get("travelType"),
          budget: formData.get("budget"),
          message: formData.get("message"),
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit inquiry");
      }

      form.reset();
      setDestination("");
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to submit inquiry"
      );
    }
  }

  useEffect(() => {
    if (
      destinationParam &&
      destinationOptions.some((option) => option.value === destinationParam)
    ) {
      setDestination(destinationParam);
    }
  }, [destinationParam, destinationOptions]);

  return (
    <section id="inquiry-form" className="section-padding bg-cream scroll-mt-24">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-2">
            <SectionHeader
              eyebrow="Tell Us About Your Trip"
              title="Submit Your Travel Inquiry"
              description="Share your travel plans and our team will respond with suitable package options, transport arrangements, or rental suggestions."
              align="left"
              className="mb-8"
            />

            <ul className="space-y-3">
              {inquiryHighlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-4">
              <Card className="border-border/50 shadow-sm">
                <CardContent className="flex gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy">Call Us</p>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                      className="mt-1 block text-sm text-muted-foreground hover:text-primary"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm">
                <CardContent className="flex gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy">Email Us</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-1 block text-sm text-muted-foreground hover:text-primary"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm">
                <CardContent className="flex gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy">Visit Office</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {siteConfig.addressLines.join(", ")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <form
            className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2 sm:col-span-2">
                <label htmlFor="inquiry-name" className="text-xs font-medium text-muted-foreground">
                  Full Name
                </label>
                <Input id="inquiry-name" name="name" placeholder="Your name" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="inquiry-email" className="text-xs font-medium text-muted-foreground">
                  Email
                </label>
                <Input id="inquiry-email" name="email" type="email" placeholder="you@email.com" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="inquiry-phone" className="text-xs font-medium text-muted-foreground">
                  Phone
                </label>
                <Input id="inquiry-phone" name="phone" type="tel" placeholder="+91 97757 19041" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="inquiry-service" className="text-xs font-medium text-muted-foreground">
                  Service Required
                </label>
                <select
                  id="inquiry-service"
                  name="service"
                  defaultValue={inquiryServiceTypes[0]}
                  className="flex h-11 w-full rounded-xl border border-input bg-white/80 px-4 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {inquiryServiceTypes.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="inquiry-destination" className="text-xs font-medium text-muted-foreground">
                  Destination
                </label>
                <select
                  id="inquiry-destination"
                  name="destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="flex h-11 w-full rounded-xl border border-input bg-white/80 px-4 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Select destination</option>
                  {destinationOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="inquiry-dates" className="text-xs font-medium text-muted-foreground">
                  Preferred Travel Dates
                </label>
                <Input id="inquiry-dates" name="dates" placeholder="e.g. 15–20 June 2026" />
              </div>

              <div className="space-y-2">
                <label htmlFor="inquiry-travelers" className="text-xs font-medium text-muted-foreground">
                  Number of Travelers
                </label>
                <Input id="inquiry-travelers" name="travelers" type="number" min={1} placeholder="2" />
              </div>

              <div className="space-y-2">
                <label htmlFor="inquiry-type" className="text-xs font-medium text-muted-foreground">
                  Travel Type
                </label>
                <select
                  id="inquiry-type"
                  name="travelType"
                  defaultValue={inquiryTravelTypes[0]}
                  className="flex h-11 w-full rounded-xl border border-input bg-white/80 px-4 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {inquiryTravelTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="inquiry-budget" className="text-xs font-medium text-muted-foreground">
                  Budget Range
                </label>
                <select
                  id="inquiry-budget"
                  name="budget"
                  defaultValue={inquiryBudgetRanges[5]}
                  className="flex h-11 w-full rounded-xl border border-input bg-white/80 px-4 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {inquiryBudgetRanges.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2 sm:col-span-2">
                <label htmlFor="inquiry-message" className="text-xs font-medium text-muted-foreground">
                  Additional Details
                </label>
                <textarea
                  id="inquiry-message"
                  name="message"
                  rows={5}
                  placeholder="Share hotel preferences, vehicle type, airport/railway pick-up details, special requests, or any other information..."
                  className="flex w-full rounded-xl border border-input bg-white/80 px-4 py-3 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
            </div>

            {status === "success" && (
              <p className="mt-4 rounded-xl bg-teal/10 px-4 py-3 text-sm text-teal">
                Thank you! Your travel inquiry has been submitted. We will contact you soon.
              </p>
            )}

            {status === "error" && (
              <p className="mt-4 rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
                {errorMessage}
              </p>
            )}

            <Button type="submit" size="lg" className="mt-6 w-full" disabled={status === "loading"}>
              {status === "loading" ? "Submitting..." : "Submit Travel Inquiry"}
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
