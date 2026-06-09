import Link from "next/link";
import { siteConfig } from "@/lib/data/site";
import {
  availableServices,
  bookingProcess,
  pickupLocations,
  serviceAreas,
  vehicleNote,
} from "@/lib/data/operations";
import { SectionHeader } from "@/components/shared/section-header";

interface OperationalDetailsProps {
  compact?: boolean;
}

export function OperationalDetails({ compact = false }: OperationalDetailsProps) {
  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        <SectionHeader
          variant="editorial"
          eyebrow="How we work"
          title="Inquiry, service area, and contact"
          description="This website is for inquiries only — call, WhatsApp, or visit our Siliguri office to plan a trip."
          className={compact ? "mb-8" : undefined}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-white p-6">
            <h3 className="font-display text-lg font-medium text-navy">
              Service areas
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {serviceAreas.map((area) => (
                <li key={area} className="flex gap-2">
                  <span className="text-teal">·</span>
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border/60 bg-white p-6">
            <h3 className="font-display text-lg font-medium text-navy">
              Pick-up locations
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {pickupLocations.map((location) => (
                <li key={location} className="flex gap-2">
                  <span className="text-teal">·</span>
                  {location}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border/60 bg-white p-6 lg:col-span-2">
            <h3 className="font-display text-lg font-medium text-navy">
              Booking process
            </h3>
            <ol className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {bookingProcess.map((step) => (
                <li key={step.step} className="border-t border-border/60 pt-4">
                  <span className="font-display text-lg text-gold">{step.step}</span>
                  <p className="mt-1 font-medium text-navy">{step.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border border-border/60 bg-white p-6">
            <h3 className="font-display text-lg font-medium text-navy">
              Services we arrange
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {availableServices.map((service) => (
                <li key={service} className="flex gap-2">
                  <span className="text-teal">·</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border/60 bg-white p-6 lg:col-span-2">
            <h3 className="font-display text-lg font-medium text-navy">
              Transport & vehicles
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">{vehicleNote}</p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-white p-6">
            <h3 className="font-display text-lg font-medium text-navy">
              Registration
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Registered under {siteConfig.certificateAuthority}.
            </p>
            {siteConfig.gst !== "To Be Updated" && (
              <p className="mt-2 text-sm text-muted-foreground">
                GST: {siteConfig.gst}
              </p>
            )}
          </div>
        </div>

        {!compact && (
          <p className="mt-8 text-sm text-muted-foreground">
            Questions before booking?{" "}
            <Link href="/contact" className="font-medium text-primary hover:underline">
              Contact our office
            </Link>{" "}
            or call / WhatsApp{" "}
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="font-medium text-primary hover:underline"
            >
              {siteConfig.phone}
            </a>{" "}
            ({siteConfig.hours}).
          </p>
        )}
      </div>
    </section>
  );
}
