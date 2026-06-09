import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function getInitials(name: string) {
  return name
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeader
          variant="editorial"
          eyebrow="Customer Feedback"
          title="What travelers tell us after their trips"
          description="Notes from families, groups, and travelers who booked tours, transfers, and rentals with our Siliguri team."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="h-full border-border/50 bg-cream/40"
            >
              <CardContent className="p-6 sm:p-8">
                <p className="text-xs font-medium uppercase tracking-wide text-teal">
                  {testimonial.trip}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-4 border-t border-border/50 pt-6">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal/10 font-display text-sm font-semibold text-teal"
                    aria-hidden="true"
                  >
                    {getInitials(testimonial.name)}
                  </div>
                  <div>
                    <p className="font-medium text-navy">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="max-w-lg text-sm text-muted-foreground">
            Planning a similar trip? Tell us your route, dates, and group size —
            we&apos;ll suggest packages or transport options from Siliguri.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link href="/inquiry">
              Plan Your Trip
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
