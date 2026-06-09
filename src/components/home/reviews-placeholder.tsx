import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { reviewsPlaceholder } from "@/lib/data/testimonials";
import { Button } from "@/components/ui/button";

export function ReviewsPlaceholder() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border/60 bg-cream/40 p-8 text-center sm:p-10">
          <MessageSquare className="mx-auto h-9 w-9 text-teal" />
          <h2 className="mt-4 font-display text-2xl font-medium text-navy sm:text-3xl">
            {reviewsPlaceholder.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {reviewsPlaceholder.message}
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            We do not display made-up reviews or stock customer photos. After
            your trip, you are welcome to share feedback directly with our office.
          </p>
          <Button asChild variant="outline" size="lg" className="mt-8">
            <Link href="/inquiry">
              Plan a trip with us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
