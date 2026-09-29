import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getPublishedEvents } from "@/lib/events";

function formatEventDate(startAt: string, endAt: string) {
    const startDate = new Date(startAt);
    const endDate = new Date(endAt);

    const sameDay =
        startDate.toDateString() === endDate.toDateString();

    if (sameDay) {
        return startDate.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    }

    const start = startDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
    });

    const end = endDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return `${start}–${end}`;
}

export default async function Events() {
    const events = await getPublishedEvents();

    return (
        <>
            <Navbar />

            <main className="events-page">

                <section className="events-hero">
                    <div className="events-hero-content">
                        <p className="events-eyebrow">
                            UPCOMING EVENTS
                        </p>

                        <h1>
                            Connect. Grow. Be Inspired.
                        </h1>

                        <p>
                            Stay connected with upcoming opportunities
                            to learn, grow, connect, and experience
                            something meaningful.
                        </p>
                    </div>
                </section>

                <section className="events-main">
                    <div className="events-main-content">

                        {events.length === 0 ? (
                            <div className="events-empty">
                                <p className="events-eyebrow">
                                    CHECK BACK SOON
                                </p>

                                <h2>
                                    Nothing Scheduled Just Yet.
                                </h2>

                                <p>
                                    There are no upcoming events at this time.
                                    Check back soon for new opportunities
                                    to connect, grow, and be inspired.
                                </p>
                            </div>
                        ) : (
                            <div className="events-grid">
                                {events.map((event) => (
                                    <article
                                        className="event-card"
                                        key={event.id}
                                    >

                                        <div className="event-card-date">
                                            {formatEventDate(
                                                event.start_at,
                                                event.end_at
                                            )}
                                        </div>

                                        <div className="event-card-content">

                                            {event.location && (
                                                <p className="event-location">
                                                    {event.location}
                                                </p>
                                            )}

                                            <h2>
                                                {event.title}
                                            </h2>

                                            {event.description && (
                                                <p>
                                                    {event.description}
                                                </p>
                                            )}

                                            <Link
                                                href="/contact"
                                                className="event-card-button"
                                            >
                                                LEARN MORE <span>→</span>
                                            </Link>

                                        </div>

                                    </article>
                                ))}
                            </div>
                        )}

                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}