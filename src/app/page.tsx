import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import Navbar from "./components/Navbar";
import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
