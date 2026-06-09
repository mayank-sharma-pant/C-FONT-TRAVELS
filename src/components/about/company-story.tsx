import Image from "next/image";
import { companyStory } from "@/lib/data/about";
import { STOCK_IMAGE_NOTE } from "@/lib/data/constants";
import { SectionHeader } from "@/components/shared/section-header";

export function CompanyStory() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Who We Are"
          title={companyStory.title}
          align="left"
          className="max-w-2xl"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5">
            {companyStory.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                {paragraph}
              </p>
            ))}

            <div className="grid grid-cols-3 gap-4 pt-4">
              {companyStory.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border/60 bg-white p-4 text-center shadow-sm"
                >
                  <p className="font-display text-xl font-semibold text-primary sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/60">
              <Image
                src={companyStory.image}
                alt="Scenic road in North Bengal — stock placeholder"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">{STOCK_IMAGE_NOTE}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
