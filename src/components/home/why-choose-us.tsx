import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { whyChooseUs } from "@/lib/data/home";
import { images } from "@/lib/images";
import { Button } from "@/components/ui/button";

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-navy">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src={images.hero.scenic}
                alt="Hill landscape in North Bengal"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Based in Siliguri
              </p>
              <p className="mt-2 max-w-sm font-display text-2xl font-medium leading-snug text-white">
                Travel planning from the gateway to the hills
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Why C Font Travels
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
              How we work with travelers
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">
              We are not a faceless booking platform. Trips are arranged by a
              local team that knows the routes, vehicles, and destinations
              around Siliguri.
            </p>

            <ol className="mt-8 space-y-6">
              {whyChooseUs.map((item, index) => (
                <li
                  key={item.title}
                  className="flex gap-4 border-t border-white/10 pt-6 first:border-t-0 first:pt-0"
                >
                  <span className="font-display text-2xl font-medium leading-none text-gold/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <Button asChild variant="accent" size="lg" className="mt-10">
              <Link href="/about">
                About Our Company
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
