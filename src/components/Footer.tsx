import Link from "next/link";
import data from "@/data/fixpoint-data.json";

export default function Footer() {
  return (
    <footer className="bg-burgundy text-cream mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <p className="font-serif text-lg font-bold">
            FixPoint <span className="text-terracotta">Garage</span>
          </p>
          <p className="text-sm text-cream/70 mt-2">{data.business.tagline}</p>
        </div>
        <div>
          <p className="font-semibold text-sm mb-3">Quick Links</p>
          <ul className="space-y-2 text-sm text-cream/70">
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/team">Team</Link></li>
            <li><Link href="/booking">Book a Service</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-sm mb-3">Contact</p>
          <ul className="space-y-2 text-sm text-cream/70">
            <li>{data.business.phone}</li>
            <li>{data.business.email}</li>
            <li>{data.business.address}</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-sm mb-3">Hours</p>
          <ul className="space-y-2 text-sm text-cream/70">
            {data.business.hours.map((h) => (
              <li key={h.day}>
                {h.day}: {h.time}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-4 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} FixPoint Garage. All rights reserved.
      </div>
    </footer>
  );
}
