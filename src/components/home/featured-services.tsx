import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { featuredServices } from "@/lib/data/home";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";

const primaryServices = featuredServices.slice(0, 3);
const moreServices = featuredServices.slice(3);

export function FeaturedServices() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        <SectionHeader
          variant="split"
          eyebrow="Our Services"
          title="Tours, transfers, and rentals from one Siliguri team"
          description="Whether you need a Darjeeling package, a Bagdogra pick-up, or a vehicle for the week — we handle the planning and the road."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {primaryServices.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-white"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal/10">
                      <service.icon className="h-5 w-5 text-teal" />
                    </div>
                    <h3 className="font-display text-lg font-medium text-navy">
                      {service.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal" />
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border/60 bg-white">
          <div className="border-b border-border/60 px-5 py-4 sm:px-6">
            <p className="text-sm font-medium text-navy">Also available</p>
          </div>
          <ul className="divide-y divide-border/60">
            {moreServices.map((service) => (
              <li key={service.title}>
                <Link
                  href={service.href}
                  className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-cream/60 sm:px-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sand">
                      <service.icon className="h-4 w-4 text-teal" />
                    </div>
                    <div>
                      <p className="font-medium text-navy">{service.title}</p>
                      <p className="mt-0.5 line-clamp-1 text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-teal" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <Button asChild variant="outline" size="lg">
            <Link href="/services">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
