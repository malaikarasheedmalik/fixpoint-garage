"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useFormStatus } from "react-dom";
import { submitReservation, type SubmitState } from "@/actions/submit";

const inputClass =
  "mt-1 w-full rounded-lg border border-beige bg-offwhite px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta/50";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type="submit"
      disabled={pending}
      className="w-full sm:w-auto px-8 py-3 rounded-full bg-terracotta text-white font-semibold text-sm shadow-soft disabled:opacity-60"
    >
      {pending ? "Booking..." : "Confirm Booking"}
    </motion.button>
  );
}

export default function BookingForm() {
  const [state, setState] = useState<SubmitState | null>(null);

  function action(formData: FormData) {
    setState(null);
    submitReservation(null, formData).then(setState);
  }

  if (state?.ok) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-beige/40 border border-beige p-8 text-center"
      >
        <h3 className="font-serif text-xl text-burgundy font-semibold mb-2">
          Booking Request Received
        </h3>
        <p className="text-warmgray text-sm">
          Thanks! We&apos;ll contact you shortly to confirm your appointment.
          For a faster response, message us on WhatsApp.
        </p>
      </motion.div>
    );
  }

  return (
    <form action={action} className="grid sm:grid-cols-2 gap-4">
      <div className="sm:col-span-1">
        <label className="text-sm font-medium text-burgundy">Full Name</label>
        <input required name="name" className={inputClass} />
      </div>
      <div className="sm:col-span-1">
        <label className="text-sm font-medium text-burgundy">Email</label>
        <input required type="email" name="email" className={inputClass} />
      </div>
      <div className="sm:col-span-1">
        <label className="text-sm font-medium text-burgundy">Phone Number</label>
        <input name="phone" className={inputClass} />
      </div>
      <div className="sm:col-span-1">
        <label className="text-sm font-medium text-burgundy">Guests</label>
        <input
          required
          type="number"
          min={1}
          max={20}
          defaultValue={1}
          name="guests"
          className={inputClass}
        />
      </div>
      <div className="sm:col-span-1">
        <label className="text-sm font-medium text-burgundy">Preferred Date</label>
        <input required type="date" name="date" className={inputClass} />
      </div>
      <div className="sm:col-span-1">
        <label className="text-sm font-medium text-burgundy">Preferred Time</label>
        <input required type="time" name="time" className={inputClass} />
      </div>
      <div className="sm:col-span-2">
        <label className="text-sm font-medium text-burgundy">Additional Notes</label>
        <textarea name="request" rows={4} className={inputClass} />
      </div>
      {!state?.ok && state?.error && (
        <p className="sm:col-span-2 text-sm text-red-600">{state.error}</p>
      )}
      <div className="sm:col-span-2">
        <SubmitButton />
      </div>
    </form>
  );
}
