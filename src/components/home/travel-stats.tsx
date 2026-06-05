import { travelStats } from "@/lib/data/home";
import { AnimatedCounter } from "@/components/shared/animated-counter";

export function TravelStats() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-teal via-primary to-teal-light" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="container-wide relative px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {travelStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
