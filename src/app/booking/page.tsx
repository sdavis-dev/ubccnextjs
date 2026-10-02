// app/contact/page.tsx  (no "use client" here)
import type { Metadata } from "next";
import BookingClient from "./BookingClient";

export const metadata: Metadata = {
  title: "Booking",
  description:
    "Book a consultation with Upward Bound.",
};

export default function BookingPage() {
  return <BookingClient />;
}