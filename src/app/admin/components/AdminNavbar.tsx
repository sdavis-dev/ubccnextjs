"use client";

import Link from "next/link";
import { useState} from "react";
import LogoutButton from "./LogoutButton";

export default function AdminNavbar() {
    const [isAdminNavOpen, setIsAdminNavOpen] = useState(false);

    return (
        <header>
            <nav className="admin-navbar section-content">

                <ul className={`nav-menu ${isAdminNavOpen ? "show" : ""}`}>

                    <button
                        id="menu-close-button"
                        className="fas fa-times"
                        onClick={() => setIsAdminNavOpen(false)}
                        aria-label="Close menu"
                    />

                    <li className="admin-nav-item">
                        <Link
                            href="/admin/events"
                            className="nav-link"
                            onClick={() => setIsAdminNavOpen(false)}
                        >
                            Events
                        </Link>
                    </li>

                    <li className="admin-nav-item">
                        <LogoutButton />
                    </li>

                </ul>

                <button
                    id="menu-open-button"
                    className="fas fa-bars"
                    onClick={() => setIsAdminNavOpen(true)}
                    aria-label="Open menu"
                />

            </nav>
        </header>
    );

}