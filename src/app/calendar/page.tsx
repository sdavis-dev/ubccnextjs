"use client"
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import CalCalendar from "../components/calendar/CalCalendar";
import CalCalendar1Hr from "../components/calendar/CalCalendar1Hr";
import Footer from "../components/Footer";

export default function Calendar() {
  return (
    <>
      <Navbar />
      <CalCalendar />
      <CalCalendar1Hr />
      <Footer />
    </>
  );
}