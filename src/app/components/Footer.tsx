import Link from "next/link";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="site-footer-content">

                <div className="site-footer-brand">
                    <h2>Upward Bound</h2>
                    <p>Consulting &amp; Coaching</p>
                </div>

                <div className="site-footer-links">
                    <Link href="/bio">Bio</Link>
                    <Link href="/events">Events</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/ministries">Ministries</Link>
                    <Link href="/booking">Book a Consultation</Link>
                    <Link href="/admin/login">Admin</Link>
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
                <p>&copy; 2026 Upward Bound Consulting &amp; Coaching</p>
            </div>
        </footer>
    );
}