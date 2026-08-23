import AnimatedSection from "@/components/AnimatedSection";
import BookingForm from "@/components/BookingForm";
import { fadeUp } from "@/lib/motion";

export const metadata = { title: "Book a Service — FixPoint Garage" };

export default function BookingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <AnimatedSection variants={fadeUp} className="text-center mb-10">
        <h1 className="font-serif text-4xl font-bold text-burgundy">Book a Service</h1>
        <p className="text-warmgray mt-3 text-sm">
          Fill out the form below and we&apos;ll confirm your appointment shortly.
        </p>
      </AnimatedSection>
      <AnimatedSection variants={fadeUp} className="bg-offwhite border border-beige rounded-2xl p-6 sm:p-8">
        <BookingForm />
      </AnimatedSection>
    </div>
  );
}
