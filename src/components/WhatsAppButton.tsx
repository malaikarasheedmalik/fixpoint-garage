"use client";

import { motion } from "framer-motion";
import data from "@/data/fixpoint-data.json";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi FixPoint Garage, I'd like to know more about your services."
  );
  const link = `https://wa.me/${data.business.whatsapp}?text=${message}`;

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] text-white pl-3 pr-4 py-3 shadow-lg shadow-[#25D366]/30"
    >
      <svg viewBox="0 0 32 32" width="24" height="24" fill="currentColor" aria-hidden="true">
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.386.7 4.61 1.91 6.487L4 29l7.703-2.02A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.94-1.35l-.354-.21-4.573 1.2 1.222-4.457-.23-.365A9.71 9.71 0 1 1 25.71 15a9.72 9.72 0 0 1-9.706 9.75Zm5.318-7.28c-.29-.145-1.717-.848-1.983-.945-.266-.097-.46-.145-.653.146-.194.29-.75.945-.92 1.14-.17.194-.34.218-.63.073-.29-.146-1.224-.451-2.332-1.44-.862-.769-1.444-1.719-1.613-2.01-.169-.29-.018-.447.127-.592.13-.13.29-.34.435-.51.145-.17.194-.29.29-.484.097-.194.049-.363-.024-.508-.073-.146-.653-1.575-.896-2.156-.236-.567-.476-.49-.653-.5-.169-.008-.363-.01-.556-.01-.194 0-.508.073-.774.363-.266.29-1.016.993-1.016 2.422 0 1.43 1.04 2.81 1.185 3.005.145.194 2.048 3.128 4.964 4.387.694.3 1.235.48 1.657.614.696.221 1.33.19 1.831.115.559-.083 1.717-.702 1.96-1.38.242-.677.242-1.257.169-1.38-.073-.121-.266-.194-.556-.34Z" />
      </svg>
      <span className="hidden sm:inline text-sm font-semibold">Chat on WhatsApp</span>
    </motion.a>
  );
}
