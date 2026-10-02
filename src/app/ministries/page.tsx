// app/contact/page.tsx  (no "use client" here)
import type { Metadata } from "next";
import MinistriesClient from "./MinistriesClient";

export const metadata: Metadata = {
  title: "Ministries",
  description:
    "Explore the various ministries and experiences at Upward Bound.",
};

export default function MinistriesPage() {
  return <MinistriesClient />;
}