import {
  Headphones,
  ShieldCheck,
  Sparkles,
  Tag,
  Users,
} from "lucide-react";
import { whyChooseUs } from "@/lib/data/home";
import { SectionHeader } from "@/components/shared/section-header";

const icons = [Users, Tag, Sparkles, Headphones, ShieldCheck];

export function WhyChooseUs() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(201,169,98,0.12)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(26,122,140,0.15)_0%,_transparent_50%)]" />

      <div className="container-wide relative">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Why Travelers Choose C Font Travels"
          description="Local knowledge, reliable transport, comfortable journeys, and customer-first service across North Bengal and nearby destinations."
          light
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:border-gold/30 hover:bg-white/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 transition-colors group-hover:bg-gold/25">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-display text-lg font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
