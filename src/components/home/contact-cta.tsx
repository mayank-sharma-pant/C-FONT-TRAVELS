import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import { Button } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-primary to-teal-light p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,169,98,0.2)_0%,_transparent_50%)]" />
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Ready to Explore?
              </span>
              <h2 className="mt-4 font-display text-3xl font-medium text-white sm:text-4xl lg:text-5xl">
                Plan Your Next Trip with C Font Travels
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">
                Need a Darjeeling tour, Sikkim package, airport transfer, or rental vehicle?
                Our team is ready to help you travel comfortably and confidently.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
              <Button asChild variant="accent" size="lg" className="flex-1">
                <Link href="/inquiry">
                  Start Your Inquiry
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="glass" size="lg" className="flex-1">
                <Link href="/contact">
                  <MessageCircle className="h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
              {siteConfig.whatsapp === "To Be Updated" ? (
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 border-white/30 text-white hover:bg-white/10"
                  disabled
                >
                  <Phone className="h-4 w-4" />
                  WhatsApp: To Be Updated
                </Button>
              ) : (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="flex-1 border-white/30 text-white hover:bg-white/10"
                >
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
