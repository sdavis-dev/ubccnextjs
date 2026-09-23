"use client"
import Image from "next/image";
import Link from "next/link";
import Script from 'next/script';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CalCalendar from "../components/calendar/CalCalendar";
import CalCalendar1Hr from "../components/calendar/CalCalendar1Hr";

export default function Booking() {
  return (
    <>
      <Navbar />
      <section className="calendar-booking">
          <div className="calendar-booking-content">

              <div className="calendar-booking-header">
                  <p className="calendar-eyebrow">
                      FREE CONSULTATION
                  </p>

                  <h2>
                      Let&apos;s Start With a Conversation.
                  </h2>

                  <p>
                      Choose a time for a free consultation to discuss
                      your needs and how Upward Bound can help.
                  </p>
              </div>

              <div className="calendar-embed">
                  <CalCalendar />
              </div>

              <div className="calendar-booking-header paid-consultation-header">
                  <p className="calendar-eyebrow">
                      PAID CONSULTATION
                  </p>

                  <h2>
                      Let&apos;s Go Deeper.
                  </h2>

                  <p>
                      Schedule a dedicated consultation for more focused
                      guidance, support, and coaching.
                  </p>
              </div>

              <div className="calendar-embed">
                  <CalCalendar1Hr />
              </div>

          </div>
      </section>
      <Footer />
      </>
  );
}