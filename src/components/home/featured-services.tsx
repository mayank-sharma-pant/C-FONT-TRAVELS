import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { featuredServices } from "@/lib/data/home";
import { SectionHeader } from "@/components/shared/section-header";

export function FeaturedServices() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Our Services"
          title="Complete Travel & Transport Solutions"
          description="From Darjeeling tours and Sikkim packages to airport transfers, vehicle rentals, and corporate travel — all from one trusted Siliguri partner."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 shadow-lg backdrop-blur-sm">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-xl font-medium text-navy">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
