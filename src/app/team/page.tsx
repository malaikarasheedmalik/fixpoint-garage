import Image from "next/image";
import data from "@/data/fixpoint-data.json";
import AnimatedSection from "@/components/AnimatedSection";
import { fadeUp, staggerContainer } from "@/lib/motion";

export const metadata = { title: "Our Team — FixPoint Garage" };

export default function TeamPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <AnimatedSection variants={fadeUp} className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="font-serif text-4xl font-bold text-burgundy">Meet Our Team</h1>
        <p className="text-warmgray mt-3 text-sm">
          Certified, experienced, and passionate about getting your car back on the road.
        </p>
      </AnimatedSection>
      <AnimatedSection
        variants={staggerContainer(0.1)}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {data.team.map((m) => (
          <AnimatedSection key={m.name} variants={fadeUp} className="tilt-card">
            <div className="tilt-card-inner bg-offwhite rounded-2xl overflow-hidden border border-beige text-center pb-5">
              <div className="relative w-full h-56">
                <Image src={m.image} alt={m.name} fill sizes="25vw" className="object-cover" />
              </div>
              <p className="font-semibold text-burgundy mt-4">{m.name}</p>
              <p className="text-xs text-warmgray">{m.role}</p>
            </div>
          </AnimatedSection>
        ))}
      </AnimatedSection>
    </div>
  );
}
