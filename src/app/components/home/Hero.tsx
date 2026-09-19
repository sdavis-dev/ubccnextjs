import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">

                <div className="hero-text">
                    <p className="hero-eyebrow">I&apos;M A</p>

                    <h1>&quot;Hope Dealer.&quot;</h1>

                    <p className="hero-description">
                        I help individuals and organizations rise to the
                        Next Level in their personal and professional growth.
                    </p>

                    <div className="hero-values">
                        <span>IMPACT</span>
                        <span>•</span>
                        <span>INSPIRE</span>
                        <span>•</span>
                        <span>TRANSFORM</span>
                    </div>

                    <div className="hero-buttons">
                        <Link href="/booking" className="hero-button primary">
                            WORK WITH ME
                            <span>→</span>
                        </Link>

                        <a href="#services" className="hero-button secondary">
                            EXPLORE SERVICES
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <Image
                        src="/images/IMG_3914.jpeg"
                        alt="Kimberly speaking on stage"
                        fill
                        priority
                        sizes="(max-width: 900px) 100vw, 50vw"
                    />
                </div>

            </div>
        </section>
    );
}