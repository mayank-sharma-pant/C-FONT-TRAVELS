"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Search, Users } from "lucide-react";
import { heroStats } from "@/lib/data/home";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/shared/animated-counter";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=85"
          alt="Scenic travel destination with mountains and adventure"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,169,98,0.15)_0%,_transparent_50%)]" />
      </div>

      <div className="relative flex min-h-[100svh] flex-col justify-center pt-24 pb-16">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge variant="glass" className="mb-6">
                ✦ Premium Travel Experiences Since 2014
              </Badge>
              <h1 className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Discover the World with{" "}
                <span className="text-gradient-gold">C Font Travels</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                From bespoke luxury escapes to adventure-filled group tours — we
                craft extraordinary journeys tailored to your dreams, with
                seamless planning and world-class service.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild variant="accent" size="lg">
                  <Link href="/packages">
                    Explore Packages
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="glass" size="lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {heroStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                    className="text-center sm:text-left"
                  >
                    <div className="font-display text-2xl font-semibold text-white sm:text-3xl">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                      />
                    </div>
                    <div className="mt-1 text-xs text-white/60 sm:text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-3xl p-6 sm:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Search className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-medium text-navy">
                    Plan Your Journey
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Tell us where you want to go
                  </p>
                </div>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="destination" className="text-xs font-medium text-muted-foreground">
                      Destination
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="destination"
                        placeholder="Where to?"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="travel-date" className="text-xs font-medium text-muted-foreground">
                      Travel Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="travel-date"
                        type="date"
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="travelers" className="text-xs font-medium text-muted-foreground">
                    Number of Travelers
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="travelers"
                      type="number"
                      placeholder="2"
                      min={1}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Search Packages
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Or{" "}
                <Link href="/inquiry" className="font-medium text-primary hover:underline">
                  submit a custom inquiry
                </Link>{" "}
                for personalized planning
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-white/50">
            Scroll
          </span>
          <div className="h-10 w-6 rounded-full border-2 border-white/30 p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="mx-auto h-2 w-1 rounded-full bg-white/60"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
