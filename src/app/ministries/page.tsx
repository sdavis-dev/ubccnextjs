'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import { EmblaCarousel } from "../components/emblacarousel";
import Script from "next/script";

export default function UBMinistries() {
  return (
    <>
    <header>
        {/* Note: changed 'class' to 'className' for React */}
        <nav className="navbar section-content">
          <Link href="/" className="nav-logo">
            <Image
              src="/images/ublogo nobg.png"
              alt="Upward Bound Consulting & Coaching"
              width = {75}
              height = {75}
            />
          </Link>
          <ul className="nav-menu">
            <button id="menu-close-button" className="fas fa-times"></button>

            <li className="nav-item">
              <Link href="/bio" className="nav-link">Bio</Link>
            </li>
            <li className="nav-item">
              <Link href="/calendar" className="nav-link">Calendar</Link>
            </li>
            <li className="nav-item">
              <Link href="/payment" className="nav-link">Payment</Link>
            </li>
            <li className="nav-item">
              <Link href="/events" className="nav-link">Upcoming Events</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <Link href="/booking" className="nav-link">Booking</Link>
            </li>
            <li className="nav-item">
              <Link href="/ministries" className="nav-link">Ministries (non-profit)</Link>
            </li>
          </ul>

          <button id="menu-open-button" className="fas fa-bars"></button>
        </nav>
      </header>
      <main>
        <section className="hero-section">
          <div className="info">
            <h2 className="title">Information about Upward Bound Ministries!</h2>
          </div>
          <div className="section-content">
            <div className="hero-details hero-logo-box">
              {/*<Image
                src="/images/ubministries.png"
                alt="Upward Bounds Ministries"
                fill
                sizes="(max-width: 500px) 100vw, 500px"
                style={{ objectFit: "cover" }}
              /> */}
              <p className="description"></p>
              <div className="buttons"></div>
            </div>
            <div className="carousel">
              <EmblaCarousel />
            </div>
          </div>
          <div className="ministry-info">
            <p className="info">📖 <b>Wednesday Night Bible Study</b>
            <br></br>Join us every Wednesday at <b>8:00 PM</b> for Bible Study, hosted by our ministries and streamed live on <b>Facebook Live</b>. 
            <br></br>We’d love for you to join us!
            <br></br> <br></br>☀️<b>Sunday Morning Inspiration</b>
            <br></br>Start your Sunday with a message of hope, faith, and encouragement at <b>7:00 AM on 95.1 FM</b>.
            <br></br> <br></br>📍 <b>Stay Connected</b>
            <br></br><b>Upward Bound Consulting & Coaching</b>
            <br></br>P.O. Box 4793
            <br></br>Meridian, MS 39304
            <br></br>📞 <b>662-989-1662</b>
            <br></br>📧 <b>iamupwardbound@yahoo.com</b>
            </p>
          </div>
        </section>
      </main>
      <footer className="footer-section">
        <div className="container">
          <ul className="flex-row">
            <li>
              <a href="https://www.facebook.com/iAmUpwardBound/" className="social-link"><i className="fab fa-facebook"></i></a>
            </li>
            <li>
              <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
            </li>
          </ul>
          <p>&copy; 2026 Upward Bounds Consulting & Coaching</p>
          </div>
        </footer>
      <Script
        src="/scripts/script.js"
        strategy="lazyOnload"
        />
      </>
  );
}