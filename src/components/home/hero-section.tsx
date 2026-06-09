import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { heroTrustSignals } from "@/lib/data/home";
import { siteConfig } from "@/lib/data/site";
import { images } from "@/lib/images";
import { Button } from "@/components/ui/button";

const trustIcons = [MapPin, ShieldCheck, MapPin, MapPin];

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={images.hero.road}
          alt="Road through the hills of North Bengal"
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/75 via-navy/55 to-navy/90" />
      </div>

      <div className="relative flex min-h-[100svh] flex-col justify-center pt-24 pb-16">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="animate-fade-up">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Tour & Travel · Siliguri
              </p>
              <h1 className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
                Tours, Transport & Travel Planning from{" "}
                <span className="text-gold">Siliguri</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                C Font Travels arranges Darjeeling and Sikkim tours, Bagdogra
                airport transfers, vehicle rentals, and outstation trips across
                North Bengal — from a local office you can visit or call directly.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild variant="accent" size="lg">
                  <Link href="/inquiry">
                    Plan Your Trip
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="glass" size="lg">
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                    <Phone className="h-4 w-4" />
                    {siteConfig.phone}
                  </a>
                </Button>
              </div>

              <dl className="mt-10 grid gap-4 border-t border-white/15 pt-8 sm:grid-cols-2">
                {heroTrustSignals.map((signal, index) => {
                  const Icon = trustIcons[index] ?? MapPin;
                  return (
                    <div key={signal.label} className="flex gap-3">
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <div>
                        <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">
                          {signal.label}
                        </dt>
                        <dd className="mt-0.5 text-sm leading-snug text-white/90">
                          {signal.value}
                        </dd>
                      </div>
                    </div>
                  );
                })}
              </dl>
            </div>

            <div className="animate-fade-up rounded-2xl border border-white/15 bg-white/95 p-6 shadow-xl [animation-delay:150ms] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                Visit or Call Us
              </p>
              <h2 className="mt-3 font-display text-2xl font-medium text-navy">
                C Font Travels Office
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {siteConfig.addressLines.join(", ")}
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3 rounded-xl bg-cream/80 p-4">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Phone
                    </p>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                      className="mt-1 block text-base font-medium text-navy hover:text-primary"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-cream/80 p-4">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Office Hours
                    </p>
                    <p className="mt-1 text-sm text-navy">{siteConfig.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-cream/80 p-4">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Registration
                    </p>
                    <p className="mt-1 text-sm text-navy">
                      {siteConfig.certificateAuthority}
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild className="mt-6 w-full" size="lg">
                <Link href="/inquiry">
                  Submit Travel Inquiry
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Prefer email?{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-primary hover:underline"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
