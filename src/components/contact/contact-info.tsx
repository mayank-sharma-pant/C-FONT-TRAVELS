"use client";

import Link from "next/link";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import { contactReasons } from "@/lib/data/contact";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ContactInfo() {
  const mapsQuery = encodeURIComponent(
    "Salugara Bazar, Near Dolha Hotel, Siliguri, West Bengal 734008"
  );

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Get in Touch"
              title="Contact our Siliguri office"
              description="Call, WhatsApp, email, or visit us. This site is for travel inquiries — we reply during office hours."
              align="left"
              className="mb-8"
            />

            <div className="space-y-4">
              <Card className="border-border/50 shadow-sm">
                <CardContent className="flex gap-4 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy">Office Address</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {siteConfig.address}
                    </p>
                    <Button asChild variant="link" className="mt-2 h-auto p-0 text-primary">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View on Google Maps
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm">
                <CardContent className="flex gap-4 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy">Phone</h3>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                      className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm">
                <CardContent className="flex gap-4 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy">Email</h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm">
                <CardContent className="flex gap-4 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy">Office Hours</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {siteConfig.hours}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm">
                <CardContent className="flex gap-4 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy">Registered Under</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {siteConfig.certificateAuthority}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {siteConfig.gst !== "To Be Updated" && (
                        <>GST: {siteConfig.gst}</>
                      )}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="default" size="lg">
                <Link href="/inquiry">
                  <MessageCircle className="h-4 w-4" />
                  Submit Travel Inquiry
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp {siteConfig.whatsapp}
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-2xl border border-border/50 shadow-sm">
              <iframe
                title="C Font Travels office location on Google Maps"
                src={`https://maps.google.com/maps?q=${mapsQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                className="h-72 w-full border-0 sm:h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactReasons.map((reason) => (
                <div
                  key={reason.title}
                  className="rounded-2xl border border-border/50 bg-cream/40 p-5"
                >
                  <h3 className="font-display text-lg font-medium text-navy">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
