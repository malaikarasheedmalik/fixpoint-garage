"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function ServiceCard({
  slug,
  title,
  shortDesc,
  image,
  price,
}: {
  slug: string;
  title: string;
  shortDesc: string;
  image: string;
  price?: string;
}) {
  return (
    <motion.div variants={fadeUp} className="tilt-card">
      <div className="tilt-card-inner bg-offwhite rounded-2xl overflow-hidden border border-beige">
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={`${title} service at FixPoint Garage`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="p-5">
          <h3 className="font-serif text-lg font-semibold text-burgundy">{title}</h3>
          <p className="text-sm text-warmgray mt-1">{shortDesc}</p>
          <div className="flex items-center justify-between mt-4">
            {price && <span className="text-sm font-semibold text-terracotta">{price}</span>}
            <Link
              href={`/services/${slug}`}
              className="text-sm font-medium text-burgundy hover:text-terracotta transition-colors"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
