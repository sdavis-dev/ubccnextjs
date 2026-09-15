import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">

                <div className="hero-text">
                    <p className="hero-eyebrow">
                        I'M THE
                    </p>

                    <h1>
                        "Hope Dealer."
                    </h1>

                    <p className="hero-description">
                        I help individuals and organizations rise to the
                        NEXT LEVEL in their personal and professional growth.
                    </p>

                    <div className="hero-values">
                        <span>IMPACT</span>
                        <span>•</span>
                        <span>INSPIRE</span>
                        <span>•</span>
                        <span>TRANSFORM</span>
                    </div>

                    <div className="hero-buttons">
                        <Link
                            href="/booking"
                            className="hero-button primary"
                        >
                            WORK WITH ME
                            <span>→</span>
                        </Link>

                        <a
                            href="#services"
                            className="hero-button secondary"
                        >
                            EXPLORE SERVICES
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}