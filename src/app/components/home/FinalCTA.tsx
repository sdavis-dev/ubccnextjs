import Link from "next/link";

export default function FinalCTA() {
    return (
        <section className="final-cta">
            <div className="final-cta-content">
                <p className="final-cta-eyebrow">YOUR NEXT LEVEL STARTS HERE</p>

                <h2>
                    Ready to Rise to Your Next Level?
                </h2>

                <p>
                    Whether you need a speaker, coach, consultant, or simply
                    a space to grow, let&apos;s connect and explore what&apos;s
                    possible.
                </p>

                <Link href="/booking" className="final-cta-button">
                    WORK WITH ME <span>→</span>
                </Link>
            </div>
        </section>
    );
}