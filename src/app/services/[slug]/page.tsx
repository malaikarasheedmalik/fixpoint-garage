import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import data from "@/data/fixpoint-data.json";
import AnimatedSection from "@/components/AnimatedSection";
import { fadeUp, slideFromRight } from "@/lib/motion";

export function generateStaticParams() {
  return data.services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = data.services.find((s) => s.slug === params.slug);
  return { title: service ? `${service.title} — FixPoint Garage` : "Service — FixPoint Garage" };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = data.services.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  const otherServices = data.services.filter((s) => s.slug !== params.slug).slice(0, 3);

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <AnimatedSection variants={fadeUp} className="space-y-5">
          <span className="text-terracotta text-sm font-semibold">{service.price}</span>
          <h1 className="font-serif text-4xl font-bold text-burgundy">{service.title}</h1>
          <p className="text-warmgray text-base leading-relaxed">{service.fullDesc}</p>
          <Link
            href="/booking"
            className="inline-block px-7 py-3 rounded-full bg-terracotta text-white font-semibold text-sm shadow-soft hover:bg-burgundy transition-colors"
          >
            Book This Service
          </Link>
        </AnimatedSection>
        <AnimatedSection variants={slideFromRight} className="relative h-72 sm:h-96 rounded-3xl overflow-hidden shadow-soft">
          <Image
            src={service.image}
            alt={`${service.title} at FixPoint Garage`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </AnimatedSection>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <AnimatedSection variants={fadeUp} className="mb-8">
          <h2 className="font-serif text-2xl font-bold text-burgundy">Related Services</h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-3 gap-6">
          {otherServices.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="tilt-card">
              <div className="tilt-card-inner bg-offwhite rounded-2xl overflow-hidden border border-beige">
                <div className="relative w-full h-40">
                  <Image src={s.image} alt={s.title} fill sizes="33vw" className="object-cover" />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-burgundy text-sm">{s.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
