'use client'

import Navbar from "../components/Navbar";
import { EmblaCarousel } from "../components/ministries/emblacarousel";
import Link from "next/link";

export default function Ministries() {
    return (
        <>
            <Navbar />

            <main className="ministries-page">

                {/* Hero */}
                <section className="ministries-hero">
                    <div className="ministries-hero-content">
                        <p className="ministries-eyebrow">
                            UPWARD BOUND MINISTRIES
                        </p>

                        <h1>
                            Faith, Growth, and Spiritual Enrichment.
                        </h1>

                        <p>
                            A place for encouragement, spiritual growth,
                            connection, and experiences that help you move
                            forward in faith and purpose.
                        </p>
                    </div>
                </section>

                {/* Ministry Experiences */}
                <section className="ministries-gallery">
                    <div className="ministries-gallery-content">

                        <div className="ministries-gallery-header">
                            <p className="ministries-eyebrow">
                                MINISTRY EXPERIENCES
                            </p>

                            <h2>
                                Moments That Inspire and Connect.
                            </h2>

                            <p>
                                Explore moments from Upward Bound Ministries
                                and the experiences shared throughout the
                                ministry.
                            </p>
                        </div>

                        <EmblaCarousel />

                    </div>
                </section>

                {/* Bible Study */}
                <section className="ministry-events">
                    <div className="ministry-events-content">

                        <div className="ministry-event-card">
                            <span className="ministry-event-icon">📖</span>

                            <p className="ministries-eyebrow">
                                WEDNESDAY NIGHTS
                            </p>

                            <h2>Wednesday Night Bible Study</h2>

                            <p>
                                Join us every Wednesday at <strong>8:00 PM</strong>
                                {" "}for Bible Study, hosted by our ministries
                                and streamed live on <strong>Facebook Live</strong>.
                                We’d love for you to join us!
                            </p>

                            <a
                                href="https://facebook.com/iamupwardbound"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ministry-button"
                            >
                                JOIN US ON FACEBOOK →
                            </a>
                        </div>

                        <div className="ministry-event-card">
                            <span className="ministry-event-icon">☀️</span>

                            <p className="ministries-eyebrow">
                                SUNDAY MORNINGS
                            </p>

                            <h2>Sunday Morning Inspiration</h2>

                            <p>
                                Start your Sunday with a message of hope,
                                faith, and encouragement at <strong>7:00 AM</strong>
                                {" "}on <strong>95.1 FM</strong>.
                            </p>

                            <a
                                href="https://www.thebeat951.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ministry-button"
                            >
                                LISTEN HERE →
                            </a>
                        </div>

                    </div>
                </section>

                {/* Spiritual Renewal 
                <section className="ministry-retreat">
                    <div className="ministry-retreat-content">

                        <p className="ministries-eyebrow">
                            SPIRITUAL RENEWAL
                        </p>

                        <h2>
                            Make Space to Renew, Reflect, and Grow.
                        </h2>

                        <p>
                            You can also make plans to travel with Kimberly
                            to Gatlinburg, TN for her annual Spiritual Renewal
                            retreat.
                        </p>

                        <Link
                            href="/events"
                            className="ministry-button"
                        >
                            EXPLORE EVENTS →
                        </Link>

                    </div>
                </section> */}

                {/* Stay Connected */}
                <section className="ministry-contact">
                    <div className="ministry-contact-content">

                        <p className="ministries-eyebrow">
                            STAY CONNECTED
                        </p>

                        <h2>
                            Upward Bound Consulting & Coaching
                        </h2>

                        <div className="ministry-contact-details">
                            <p>P.O. Box 4793</p>
                            <p>Meridian, MS 39304</p>
                            <p>📞 662-989-1662</p>
                            <p>📧 iamupwardbound@yahoo.com</p>
                        </div>

                    </div>
                </section>

            </main>

            <footer className="site-footer">
                <div className="site-footer-content">

                    <div className="site-footer-brand">
                        <h2>Upward Bound</h2>
                        <p>Consulting &amp; Coaching</p>
                    </div>

                    <div className="site-footer-links">
                        <Link href="/bio">Bio</Link>
                        <Link href="/calendar">Calendar</Link>
                        <Link href="/events">Events</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/booking">Book a Consultation</Link>
                    </div>

                    <div className="site-footer-social">
                        <a
                            href="https://www.facebook.com/iAmUpwardBound/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook"></i>
                        </a>
                    </div>

                </div>

                <div className="site-footer-bottom">
                    <p>
                        &copy; 2026 Upward Bound Consulting &amp; Coaching
                    </p>
                </div>
            </footer>
        </>
    );
}