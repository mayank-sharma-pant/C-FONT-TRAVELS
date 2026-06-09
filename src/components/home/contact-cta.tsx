import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import { Button } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section className="section-padding border-t border-border/60 bg-cream">
      <div className="container-wide">
        <div className="grid gap-8 rounded-2xl border border-border/60 bg-white p-8 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-12 lg:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
              Get in Touch
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-navy sm:text-4xl">
              Talk to our Siliguri office about your trip
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Share your destination, dates, and group size — we&apos;ll suggest
              a package, vehicle, or transfer option. You can also call or visit
              us directly during office hours.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="font-medium text-navy hover:text-primary"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-primary"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                <span>{siteConfig.addressLines.join(", ")}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                <span>{siteConfig.hours}</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <Button asChild variant="default" size="lg" className="w-full">
              <Link href="/inquiry">
                Submit Travel Inquiry
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full">
              <Link href="/contact">Contact Page</Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="w-full">
              <Link href="/packages">Browse Packages</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
