"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

/**
 * Interactive 3D showcase panel.
 * Drop a real video file at /public/videos/workshop-tour.mp4 and this
 * component will play it inside a mouse-reactive 3D tilt frame.
 * Until then it gracefully falls back to the poster image.
 */
export default function Showcase3D({
  videoSrc = "/videos/workshop-tour.mp4",
  posterSrc,
  title = "Step Inside Our Workshop",
}: {
  videoSrc?: string;
  posterSrc: string;
  title?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mvY, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(mvX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 15,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mvX.set((e.clientX - rect.left) / rect.width - 0.5);
    mvY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mvX.set(0);
    mvY.set(0);
  }

  return (
    <div style={{ perspective: 1200 }} className="w-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full aspect-video rounded-3xl overflow-hidden border border-beige shadow-soft bg-burgundy"
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoSrc}
          poster={posterSrc}
          autoPlay
          muted
          loop
          playsInline
          onError={(e) => {
            (e.currentTarget as HTMLVideoElement).style.display = "none";
          }}
        />
        <Image
          src={posterSrc}
          alt={title}
          fill
          className="absolute inset-0 object-cover -z-[1]"
        />
        <div
          style={{ transform: "translateZ(40px)" }}
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-burgundy/80 to-transparent px-6 py-5"
        >
          <p className="text-cream font-serif text-lg font-semibold">{title}</p>
        </div>
      </motion.div>
    </div>
  );
}
