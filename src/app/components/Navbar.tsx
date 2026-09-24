"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <nav className="navbar section-content">

                <Link
                    href="/"
                    className="nav-logo"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <Image
                        src="/images/ublogo nobg.png"
                        alt="Upward Bound Consulting & Coaching"
                        width={75}
                        height={75}
                    />
                </Link>

                <ul className={`nav-menu ${isMenuOpen ? "show" : ""}`}>

                    <button
                        id="menu-close-button"
                        className="fas fa-times"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close menu"
                    />

                    <li className="nav-item">
                        <Link
                            href="/bio"
                            className="nav-link"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Bio
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            href="/event"
                            className="nav-link"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Events
                        </Link>
                    </li>

                    {/* <li className="nav-item">
                        <Link
                            href="/payment"
                            className="nav-link"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Payment
                        </Link>
                    </li> */}

                    <li className="nav-item">
                        <Link
                            href="/contact"
                            className="nav-link"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            href="/ministries"
                            className="nav-link"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Ministries
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            href="/booking"
                            className="booking-button"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Book a Consultation
                        </Link>
                    </li>

                </ul>

                <button
                    id="menu-open-button"
                    className="fas fa-bars"
                    onClick={() => setIsMenuOpen(true)}
                    aria-label="Open menu"
                />

            </nav>
        </header>
    );
}