"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-border/50 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container-wide flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-xl font-display text-lg font-bold transition-colors",
                isScrolled
                  ? "bg-primary text-white"
                  : "bg-white/15 text-white backdrop-blur-sm border border-white/20"
              )}
            >
              CF
            </div>
            <div className="hidden sm:block">
              <span
                className={cn(
                  "block font-display text-lg font-semibold leading-tight transition-colors",
                  isScrolled ? "text-navy" : "text-white"
                )}
              >
                C Font Travels
              </span>
              <span
                className={cn(
                  "block text-[10px] uppercase tracking-[0.15em] transition-colors",
                  isScrolled ? "text-muted-foreground" : "text-white/70"
                )}
              >
                Tour & Travel · Siliguri
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5",
                  isScrolled
                    ? "text-muted-foreground hover:bg-muted hover:text-navy"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            {siteConfig.phone === "To Be Updated" ? (
              <span
                className={cn(
                  "flex items-center gap-2 text-sm font-medium",
                  isScrolled ? "text-muted-foreground" : "text-white/80"
                )}
              >
                <Phone className="h-4 w-4" />
                <span className="hidden xl:inline">{siteConfig.phone}</span>
              </span>
            ) : (
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors",
                  isScrolled ? "text-muted-foreground" : "text-white/80"
                )}
              >
                <Phone className="h-4 w-4" />
                <span className="hidden xl:inline">{siteConfig.phone}</span>
              </a>
            )}
            <Button
              asChild
              variant={isScrolled ? "default" : "glass"}
              size="sm"
            >
              <Link href="/inquiry">Plan Your Trip</Link>
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-xl lg:hidden transition-colors",
              isScrolled
                ? "bg-muted text-navy"
                : "bg-white/15 text-white backdrop-blur-sm"
            )}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-navy/95 backdrop-blur-xl lg:hidden"
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="flex h-full flex-col justify-center px-8 pt-20"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block border-b border-white/10 py-4 font-display text-2xl text-white transition-colors hover:text-gold"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex flex-col gap-3"
              >
                <Button asChild variant="accent" size="lg">
                  <Link href="/inquiry" onClick={() => setIsMobileOpen(false)}>
                    Plan Your Trip
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <Link href="/contact" onClick={() => setIsMobileOpen(false)}>
                    Contact Us
                  </Link>
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
