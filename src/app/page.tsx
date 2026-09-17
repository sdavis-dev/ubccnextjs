import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import Navbar from "./components/Navbar";
import Hero from "./components/home/Hero";
import Mission from "./components/home/Mission";
import Services from "./components/home/Services";
import WhoIHelp from "./components/home/WhoIHelp";
import MeetKimberly from "./components/home/MeetKimberly";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Mission />
      <Services />
      <WhoIHelp />
      <MeetKimberly />
    </>
  );
}
