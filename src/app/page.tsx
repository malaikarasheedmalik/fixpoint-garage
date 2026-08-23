import Image from "next/image";
import Link from "next/link";
import data from "@/data/fixpoint-data.json";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import GoogleMap from "@/components/GoogleMap";
import Showcase3D from "@/components/Showcase3D";
import { fadeUp, fadeIn, staggerContainer } from "@/lib/motion";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <AnimatedSection variants={staggerContainer()} className="space-y-6">
            <AnimatedSection variants={fadeUp}>
              <span className="inline-block px-4 py-1 rounded-full bg-terracotta/10 text-terracotta text-xs font-semibold tracking-wide">
                Rawalpindi&apos;s Trusted Garage
              </span>
            </AnimatedSection>
            <AnimatedSection variants={fadeUp}>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-burgundy leading-tight">
                {data.hero.heading}
              </h1>
            </AnimatedSection>
            <AnimatedSection variants={fadeUp}>
              <p className="text-warmgray text-base sm:text-lg max-w-lg">
                {data.hero.subheading}
              </p>
            </AnimatedSection>
            <AnimatedSection variants={fadeUp} className="flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="px-7 py-3 rounded-full bg-terracotta text-white font-semibold text-sm shadow-soft hover:bg-burgundy transition-colors"
              >
                {data.hero.ctaText}
              </Link>
              <Link
                href="/services"
                className="px-7 py-3 rounded-full border border-burgundy text-burgundy font-semibold text-sm hover:bg-burgundy hover:text-cream transition-colors"
              >
                Our Services
              </Link>
            </AnimatedSection>
          </AnimatedSection>

          <AnimatedSection variants={fadeIn} className="relative h-72 sm:h-96 lg:h-[28rem] rounded-3xl overflow-hidden shadow-soft">
            <Image
              src={data.hero.image}
              alt="Professional mechanic working in FixPoint Garage workshop"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <AnimatedSection
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {data.homeGallery.map((src, i) => (
            <AnimatedSection key={i} variants={fadeUp} className="relative h-56 rounded-2xl overflow-hidden">
              <Image
                src={src}
                alt="FixPoint Garage automotive service"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </AnimatedSection>
          ))}
        </AnimatedSection>
      </section>

      {/* 3D workshop showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection variants={fadeUp} className="text-center mb-8 max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-burgundy">Take a Look Inside</h2>
          <p className="text-warmgray mt-2 text-sm">
            An interactive look at our workshop — move your cursor over the panel.
          </p>
        </AnimatedSection>
        <AnimatedSection variants={fadeUp}>
          <Showcase3D posterSrc={data.about.workshopImage} title="FixPoint Garage Workshop" />
        </AnimatedSection>
      </section>

      {/* Services preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection variants={fadeUp} className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-burgundy">Our Services</h2>
          <p className="text-warmgray mt-2 text-sm">
            Complete automotive care under one roof, handled by certified technicians.
          </p>
        </AnimatedSection>
        <AnimatedSection
          variants={staggerContainer(0.1)}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {data.services.slice(0, 4).map((s) => (
            <ServiceCard key={s.slug} {...s} />
          ))}
        </AnimatedSection>
        <AnimatedSection variants={fadeUp} className="text-center mt-10">
          <Link
            href="/services"
            className="text-terracotta font-semibold text-sm hover:text-burgundy transition-colors"
          >
            View All Services →
          </Link>
        </AnimatedSection>
      </section>

      {/* Testimonials preview */}
      <section className="bg-beige/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variants={fadeUp} className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-burgundy">What Our Customers Say</h2>
          </AnimatedSection>
          <AnimatedSection
            variants={staggerContainer(0.1)}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {data.testimonials.slice(0, 3).map((t) => (
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
        </div>
      </section>

      {/* Compact map + location section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection
          variants={fadeUp}
          className="grid lg:grid-cols-2 gap-8 items-stretch bg-offwhite border border-beige rounded-3xl p-6 sm:p-10"
        >
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-2xl font-bold text-burgundy mb-2">
              Visit FixPoint Garage
            </h2>
            <p className="text-warmgray text-sm mb-5">
              Drop by our workshop for a free inspection, or book ahead to save time.
            </p>
            <ul className="space-y-2 text-sm text-warmgray mb-6">
              <li><span className="font-semibold text-burgundy">Address:</span> {data.business.address}</li>
              <li>
                <span className="font-semibold text-burgundy">Hours:</span>{" "}
                {data.business.hours.map((h) => `${h.day}: ${h.time}`).join(" · ")}
              </li>
              <li><span className="font-semibold text-burgundy">Phone:</span> {data.business.phone}</li>
            </ul>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                data.business.address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-fit px-6 py-3 rounded-full bg-terracotta text-white text-sm font-semibold shadow-soft hover:bg-burgundy transition-colors"
            >
              Get Directions
            </a>
          </div>
          <GoogleMap variant="compact" />
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <AnimatedSection
          variants={fadeUp}
          className="rounded-3xl bg-burgundy text-cream text-center py-14 px-6"
        >
          <h2 className="font-serif text-3xl font-bold mb-3">Ready to Get Your Car Serviced?</h2>
          <p className="text-cream/70 mb-6 max-w-xl mx-auto text-sm">
            Book an appointment today and experience honest, professional auto care.
          </p>
          <Link
            href="/booking"
            className="inline-block px-8 py-3 rounded-full bg-terracotta text-white font-semibold text-sm hover:bg-cream hover:text-burgundy transition-colors"
          >
            Book a Service
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
