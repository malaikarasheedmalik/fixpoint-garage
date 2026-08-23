import data from "@/data/fixpoint-data.json";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import { fadeUp, staggerContainer } from "@/lib/motion";

export const metadata = { title: "Services — FixPoint Garage" };

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <AnimatedSection variants={fadeUp} className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="font-serif text-4xl font-bold text-burgundy">Our Services</h1>
        <p className="text-warmgray mt-3 text-sm">
          From routine maintenance to major repairs, our certified technicians handle
          it all with precision and honesty.
        </p>
      </AnimatedSection>
      <AnimatedSection
        variants={staggerContainer(0.08)}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {data.services.map((s) => (
          <ServiceCard key={s.slug} {...s} />
        ))}
      </AnimatedSection>
    </div>
  );
}
