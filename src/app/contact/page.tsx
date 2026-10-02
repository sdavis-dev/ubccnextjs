// app/contact/page.tsx  (no "use client" here)
import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about keynote speaking, coaching, consulting, or Small Group Mastermind Classes with Upward Bound.",
};

export default function ContactPage() {
  return <ContactClient />;
}