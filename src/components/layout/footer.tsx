import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerLinks, siteConfig } from "@/lib/data/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { socialLinks, SocialLink } from "@/components/shared/social-icons";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="border-b border-white/10">
        <div className="container-wide section-padding !py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="font-display text-3xl font-medium sm:text-4xl">
                Start Your Journey Today
              </h3>
              <p className="mt-3 max-w-md text-white/60">
                Get updates on tour packages, travel offers, and destination tips
                from C Font Travels, Siliguri.
              </p>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 flex-1 border-white/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:ring-gold"
                aria-label="Email for newsletter"
              />
              <Button type="submit" variant="accent" size="lg" className="shrink-0">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="container-wide section-padding !py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal font-display text-lg font-bold">
                CF
              </div>
              <div>
                <span className="block font-display text-lg font-semibold">
                  C Font Travels
                </span>
                <span className="block text-[10px] uppercase tracking-[0.15em] text-white/50">
                  Tour & Travel · Siliguri
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <SocialLink
                  key={social.label}
                  href={siteConfig.social[social.hrefKey]}
                  label={social.label}
                  icon={social.icon}
                />
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{siteConfig.address}</span>
              </li>
              <li>
                {siteConfig.phone === "To Be Updated" ? (
                  <span className="flex items-center gap-3 text-sm text-white/60">
                    <Phone className="h-4 w-4 shrink-0 text-gold" />
                    {siteConfig.phone}
                  </span>
                ) : (
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-gold" />
                    {siteConfig.phone}
                  </a>
                )}
              </li>
              <li>
                {siteConfig.email === "To Be Updated" ? (
                  <span className="flex items-center gap-3 text-sm text-white/60">
                    <Mail className="h-4 w-4 shrink-0 text-gold" />
                    {siteConfig.email}
                  </span>
                ) : (
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-gold" />
                    {siteConfig.email}
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} C Font Travels. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <Link href="/privacy" className="hover:text-white/70">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/70">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
