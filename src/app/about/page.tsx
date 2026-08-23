import Image from "next/image";
import Link from "next/link";
import data from "@/data/fixpoint-data.json";
import AnimatedSection from "@/components/AnimatedSection";
import { fadeUp, slideFromRight, scaleReveal, staggerContainer } from "@/lib/motion";

export const metadata = { title: "About Us — FixPoint Garage" };

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <AnimatedSection variants={staggerContainer()} className="space-y-5">
          <AnimatedSection variants={fadeUp}>
            <h1 className="font-serif text-4xl font-bold text-burgundy">{data.about.heading}</h1>
          </AnimatedSection>
          <AnimatedSection variants={fadeUp}>
            <p className="text-warmgray text-base leading-relaxed">{data.about.story}</p>
          </AnimatedSection>
          <AnimatedSection variants={fadeUp}>
            <Link
              href="/booking"
              className="inline-block px-7 py-3 rounded-full bg-terracotta text-white font-semibold text-sm shadow-soft hover:bg-burgundy transition-colors"
            >
              Book a Service
            </Link>
          </AnimatedSection>
        </AnimatedSection>

        {/* Fixed: real workshop photograph, no broken image */}
        <AnimatedSection
          variants={slideFromRight}
          className="relative h-72 sm:h-96 rounded-3xl overflow-hidden shadow-soft"
        >
          <Image
            src={data.about.heroImage}
            alt="Inside the FixPoint workshop — mechanic working on a vehicle"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </AnimatedSection>
      </section>

      {/* Story section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <AnimatedSection variants={scaleReveal} className="relative h-72 sm:h-96 rounded-3xl overflow-hidden order-2 lg:order-1">
          <Image
            src={data.about.storyImage}
            alt="FixPoint Garage mechanic inspecting a vehicle engine"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </AnimatedSection>
        <AnimatedSection variants={fadeUp} className="order-1 lg:order-2 space-y-4">
          <h2 className="font-serif text-2xl font-bold text-burgundy">Our Story</h2>
          <p className="text-warmgray text-sm leading-relaxed">
            What started as a small two-bay garage has grown into a full-service
            automotive workshop trusted by thousands of drivers. We built our
            reputation one honest repair at a time — no upselling, no guesswork,
            just skilled hands and the right diagnosis.
          </p>
          <p className="text-warmgray text-sm leading-relaxed">
            Every technician on our team is certified and continually trained on
            the latest vehicle systems, so whether you drive a decade-old sedan or
            a brand-new SUV, your car is in capable hands.
          </p>
        </AnimatedSection>
      </section>

      {/* Stats */}
      <section className="bg-beige/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection
            variants={staggerContainer(0.1)}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center"
          >
            {data.about.stats.map((s) => (
              <AnimatedSection
                key={s.label}
                variants={fadeUp}
                className="bg-offwhite rounded-2xl py-8 px-4 border border-beige"
              >
                <p className="font-serif text-3xl font-bold text-terracotta">{s.value}</p>
                <p className="text-sm text-warmgray mt-1">{s.label}</p>
              </AnimatedSection>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Workshop image with hover zoom */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection variants={fadeUp} className="text-center mb-8">
          <h2 className="font-serif text-2xl font-bold text-burgundy">Our Workshop</h2>
        </AnimatedSection>
        <AnimatedSection
          variants={scaleReveal}
          className="relative h-72 sm:h-[28rem] rounded-3xl overflow-hidden group shadow-soft"
        >
          <Image
            src={data.about.workshopImage}
            alt="FixPoint Garage clean modern workshop interior"
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </AnimatedSection>
      </section>

      {/* Team preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection variants={fadeUp} className="text-center mb-10">
          <h2 className="font-serif text-2xl font-bold text-burgundy">Meet the Team</h2>
        </AnimatedSection>
        <AnimatedSection
          variants={staggerContainer(0.12)}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {data.team.map((m) => (
            <AnimatedSection key={m.name} variants={fadeUp} className="tilt-card">
              <div className="tilt-card-inner bg-offwhite rounded-2xl overflow-hidden border border-beige text-center pb-5">
                <div className="relative w-full h-48">
                  <Image src={m.image} alt={m.name} fill sizes="25vw" className="object-cover" />
                </div>
                <p className="font-semibold text-burgundy mt-4">{m.name}</p>
                <p className="text-xs text-warmgray">{m.role}</p>
              </div>
            </AnimatedSection>
          ))}
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <AnimatedSection
          variants={fadeUp}
          className="rounded-3xl bg-burgundy text-cream text-center py-14 px-6"
        >
          <h2 className="font-serif text-3xl font-bold mb-3">Experience the FixPoint Difference</h2>
          <Link
            href="/booking"
            className="inline-block mt-4 px-8 py-3 rounded-full bg-terracotta text-white font-semibold text-sm hover:bg-cream hover:text-burgundy transition-colors"
          >
            Book a Service
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
