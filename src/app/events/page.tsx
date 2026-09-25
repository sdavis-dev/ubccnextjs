import Image from "next/image";
import Link from "next/link";
import Script from 'next/script';
import Navbar from "../components/Navbar";
import { getPublishedEvents } from "@/lib/events";

export default async function Events() {
  const events = await getPublishedEvents();
  console.log(events);
  return (
    <>
      <Navbar />
      <ul>
        {events.map((event) => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul>
    </>
    
  );
}