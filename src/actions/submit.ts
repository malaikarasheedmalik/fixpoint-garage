"use server";

import { z } from "zod";
import { getPrisma } from "@/lib/prisma";

export type SubmitState = { ok: boolean; error?: string };

const reservationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  guests: z.coerce.number().int().min(1).max(20),
  request: z.string().optional(),
});

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().optional(),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export async function submitReservation(
  _prev: SubmitState | null,
  formData: FormData
): Promise<SubmitState> {
  const parsed = reservationSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }
  try {
    await getPrisma().reservation.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone || null,
        date: new Date(parsed.data.date),
        time: parsed.data.time,
        guests: parsed.data.guests,
        request: parsed.data.request || null,
      },
    });
    return { ok: true };
  } catch (e) {
    console.error("Reservation failed:", e);
    return { ok: false, error: "Something went wrong. Please try again." };
  }
}

export async function submitContact(
  _prev: SubmitState | null,
  formData: FormData
): Promise<SubmitState> {
  const parsed = contactSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }
  try {
    await getPrisma().contactMessage.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        subject: parsed.data.subject || null,
        message: parsed.data.message,
      },
    });
    return { ok: true };
  } catch (e) {
    console.error("Contact message failed:", e);
    return { ok: false, error: "Something went wrong. Please try again." };
  }
}
