import Link from "next/link";
import data from "@/data/fixpoint-data.json";
import AnimatedSection from "@/components/AnimatedSection";
import { fadeUp, staggerContainer } from "@/lib/motion";

export const metadata = { title: "Pricing — FixPoint Garage" };

export default function PricingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <AnimatedSection variants={fadeUp} className="text-center mb-12">
        <h1 className="font-serif text-4xl font-bold text-burgundy">Transparent Pricing</h1>
        <p className="text-warmgray mt-3 text-sm">
          No hidden fees. Final cost may vary slightly depending on vehicle model.
        </p>
      </AnimatedSection>

      <AnimatedSection
        variants={staggerContainer(0.06)}
        className="bg-offwhite border border-beige rounded-2xl divide-y divide-beige overflow-hidden"
      >
        {data.pricing.map((p) => (
          <AnimatedSection
            key={p.service}
            variants={fadeUp}
            className="flex items-center justify-between px-6 py-4"
          >
            <span className="text-sm font-medium text-burgundy">{p.service}</span>
            <span className="text-sm font-semibold text-terracotta">{p.price}</span>
          </AnimatedSection>
        ))}
      </AnimatedSection>

      <AnimatedSection variants={fadeUp} className="text-center mt-10">
        <Link
          href="/booking"
          className="inline-block px-8 py-3 rounded-full bg-terracotta text-white font-semibold text-sm shadow-soft hover:bg-burgundy transition-colors"
        >
          Book a Service
        </Link>
      </AnimatedSection>
    </div>
  );
}
