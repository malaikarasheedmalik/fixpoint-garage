import data from "@/data/fixpoint-data.json";
import AnimatedSection from "@/components/AnimatedSection";
import FaqAccordion from "@/components/FaqAccordion";
import { fadeUp, staggerContainer } from "@/lib/motion";

export const metadata = { title: "Testimonials — FixPoint Garage" };

export default function TestimonialsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <AnimatedSection variants={fadeUp} className="text-center mb-12">
        <h1 className="font-serif text-4xl font-bold text-burgundy">Customer Testimonials</h1>
        <p className="text-warmgray mt-3 text-sm">Real feedback from real customers.</p>
      </AnimatedSection>

      <AnimatedSection
        variants={staggerContainer(0.1)}
        className="grid sm:grid-cols-2 gap-6 mb-20"
      >
        {data.testimonials.map((t) => (
          <AnimatedSection
            key={t.name}
            variants={fadeUp}
            className="bg-offwhite rounded-2xl p-6 border border-beige"
          >
            <p className="text-terracotta text-sm mb-2">{"★".repeat(t.rating)}</p>
            <p className="text-sm text-warmgray italic mb-4">&ldquo;{t.text}&rdquo;</p>
            <p className="text-sm font-semibold text-burgundy">{t.name}</p>
          </AnimatedSection>
        ))}
      </AnimatedSection>

      <AnimatedSection variants={fadeUp} className="max-w-2xl mx-auto">
        <h2 className="font-serif text-2xl font-bold text-burgundy text-center mb-8">
          Frequently Asked Questions
        </h2>
        <FaqAccordion items={data.faq} />
      </AnimatedSection>
    </div>
  );
}
