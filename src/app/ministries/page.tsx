import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

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
              <Link href="/upcoming-events" className="nav-link">Upcoming Events</Link>
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
          <div className="section-content">
            <div className="hero-details">
              <h2 className="title"></h2>
              <p className="description"></p>
              <div className="buttons"></div>
            </div>
            <div className="hero-image-wrapper">
              <img src="null" alt="" className="hero-image"/>
            </div>
          </div>
        </section>
      </main>
      </>
  );
}