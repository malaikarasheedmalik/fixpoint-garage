import data from "@/data/fixpoint-data.json";
import AnimatedSection from "@/components/AnimatedSection";
import GoogleMap from "@/components/GoogleMap";
import ContactForm from "@/components/ContactForm";
import { fadeUp, slideFromRight } from "@/lib/motion";

export const metadata = { title: "Contact — FixPoint Garage" };

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <AnimatedSection variants={fadeUp} className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="font-serif text-4xl font-bold text-burgundy">Get in Touch</h1>
        <p className="text-warmgray mt-3 text-sm">
          Questions, quotes, or feedback — we&apos;d love to hear from you.
        </p>
      </AnimatedSection>

      <div className="grid lg:grid-cols-2 gap-10 mb-16">
        <AnimatedSection variants={fadeUp} className="space-y-5">
          <div className="bg-offwhite border border-beige rounded-2xl p-6 space-y-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-warmgray">Phone</p>
              <p className="text-burgundy font-semibold">{data.business.phone}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-warmgray">Email</p>
              <p className="text-burgundy font-semibold">{data.business.email}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-warmgray">Address</p>
              <p className="text-burgundy font-semibold">{data.business.address}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-warmgray">Hours</p>
              {data.business.hours.map((h) => (
                <p key={h.day} className="text-burgundy text-sm">
                  {h.day}: {h.time}
                </p>
              ))}
            </div>
            <div className="flex gap-4 pt-2">
              <a
                href={data.business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-terracotta font-medium"
              >
                Facebook
              </a>
              <a
                href={data.business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-terracotta font-medium"
              >
                Instagram
              </a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection variants={slideFromRight} className="bg-offwhite border border-beige rounded-2xl p-6">
          <h2 className="font-serif text-xl font-bold text-burgundy mb-4">Send a Quick Message</h2>
          <ContactForm />
        </AnimatedSection>
      </div>

      <AnimatedSection variants={fadeUp}>
        <GoogleMap variant="full" />
      </AnimatedSection>
    </div>
  );
}
