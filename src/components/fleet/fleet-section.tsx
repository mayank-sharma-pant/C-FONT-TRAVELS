import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Car } from "lucide-react";
import { fleetIntro, fleetVehicles } from "@/lib/data/fleet";
import { vehicleNote } from "@/lib/data/operations";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";

interface FleetSectionProps {
  compact?: boolean;
}

export function FleetSection({ compact = false }: FleetSectionProps) {
  const hasVehicles = fleetVehicles.length > 0;

  return (
    <section id="fleet" className="section-padding scroll-mt-24 bg-white">
      <div className="container-wide">
        <SectionHeader
          variant={compact ? "editorial" : "split"}
          eyebrow="Transport"
          title={fleetIntro.title}
          description={fleetIntro.description}
          align={compact ? "left" : undefined}
        />

        {!hasVehicles ? (
          <div className="mt-8 max-w-2xl rounded-2xl border border-dashed border-border bg-cream/40 p-8">
            <Car className="h-8 w-8 text-muted-foreground/60" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {vehicleNote}
            </p>
            <Button asChild variant="default" size="lg" className="mt-6">
              <Link href="/inquiry">
                Ask about transport
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fleetVehicles.map((vehicle) => (
              <article
                key={vehicle.id}
                className="overflow-hidden rounded-2xl border border-border/60 bg-cream/30"
              >
                {vehicle.image ? (
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.type}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[16/10] flex-col items-center justify-center border-b border-dashed border-border bg-muted/30 px-4 text-center">
                    <Car className="h-8 w-8 text-muted-foreground/50" />
                    <p className="mt-2 text-xs text-muted-foreground">
                      Vehicle photo not uploaded
                    </p>
                  </div>
                )}

                <div className="space-y-3 p-5 text-sm">
                  <h3 className="font-display text-lg font-medium text-navy">
                    {vehicle.type}
                  </h3>
                  <dl className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between gap-4">
                      <dt>Seating</dt>
                      <dd className="text-right text-navy">{vehicle.seating}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt>Luggage</dt>
                      <dd className="text-right text-navy">{vehicle.luggage}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt>AC</dt>
                      <dd className="text-right text-navy">{vehicle.ac}</dd>
                    </div>
                  </dl>
                  <p>
                    <span className="font-medium text-navy">Suitable for: </span>
                    {vehicle.suitableFor}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}

        {hasVehicles && !compact && (
          <div className="mt-10">
            <Button asChild variant="default" size="lg">
              <Link href="/inquiry">
                Ask about vehicle availability
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
