"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type SubmitState } from "@/actions/submit";

const inputClass =
  "mt-1 w-full rounded-lg border border-beige bg-offwhite px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta/50";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full sm:w-auto px-8 py-3 rounded-full bg-terracotta text-white font-semibold text-sm shadow-soft disabled:opacity-60"
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
}

export default function ContactForm() {
  const [state, setState] = useState<SubmitState | null>(null);

  function action(formData: FormData) {
    setState(null);
    submitContact(null, formData).then(setState);
  }

  if (state?.ok) {
    return (
      <div className="rounded-2xl bg-beige/40 border border-beige p-8 text-center h-full flex flex-col items-center justify-center">
        <h3 className="font-serif text-xl text-burgundy font-semibold mb-2">
          Message Sent
        </h3>
        <p className="text-warmgray text-sm">
          Thanks for reaching out! We&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="grid gap-4">
      <div>
        <label className="text-sm font-medium text-burgundy">Full Name</label>
        <input required name="name" className={inputClass} />
      </div>
      <div>
        <label className="text-sm font-medium text-burgundy">Email</label>
        <input required type="email" name="email" className={inputClass} />
      </div>
      <div>
        <label className="text-sm font-medium text-burgundy">Subject</label>
        <input name="subject" className={inputClass} />
      </div>
      <div>
        <label className="text-sm font-medium text-burgundy">Message</label>
        <textarea required name="message" rows={4} className={inputClass} />
      </div>
      {!state?.ok && state?.error && (
        <p className="text-sm text-red-600">{state.error}</p>
      )}
      <SubmitButton />
    </form>
  );
}
