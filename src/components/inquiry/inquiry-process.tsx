import { inquiryProcess } from "@/lib/data/inquiry";
import { SectionHeader } from "@/components/shared/section-header";

export function InquiryProcess() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeader
          eyebrow="How It Works"
          title="Simple Inquiry Process"
          description="From your first message to confirmed travel plans, we keep the process clear and customer-friendly."
          className="mb-10"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {inquiryProcess.map((step) => (
            <div
              key={step.step}
              className="rounded-2xl border border-border/50 bg-cream/40 p-6"
            >
              <span className="font-display text-4xl font-semibold text-gold/40">
                {step.step}
              </span>
              <h3 className="mt-3 font-display text-lg font-medium text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
