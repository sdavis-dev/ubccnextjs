import Image from "next/image";
import Link from "next/link";

export default function MeetKimberly() {
    return (
        <section className="meet-kimberly">
            <div className="meet-kimberly-content">

                <div className="meet-kimberly-image">
                    <Image
                        src="/images/IMG_2486.jpeg"
                        alt="Kimberly speaking on stage"
                        fill
                        sizes="(max-width: 900px) 100vw, 50vw"
                    />
                </div>

                <div className="meet-kimberly-text">

                    <p className="meet-kimberly-eyebrow">
                        MEET KIMBERLY
                    </p>

                    <h2>
                        Leadership With Purpose. Growth With Intention.
                    </h2>

                    <p>
                        Kimberly is a speaker, coach, consultant, and
                        advocate for personal and professional growth.
                        Through her work, she encourages individuals
                        and organizations to recognize their potential,
                        embrace their purpose, and move forward with
                        confidence.
                    </p>

                    <Link
                        href="/bio"
                        className="meet-kimberly-button"
                    >
                        READ MY BIO
                        <span>→</span>
                    </Link>

                </div>

            </div>
        </section>
    );
}