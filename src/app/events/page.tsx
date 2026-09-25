import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { getPublishedEvents } from "@/lib/events";

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
                  <article className="event-card" key={event.id}>

                    <div className="event-card-date">
                      {event.date}
                    </div>

                    <div className="event-card-content">
                      <p className="event-location">
                        {event.location}
                      </p>

                      <h2>
                        {event.title}
                      </h2>

                      <p>
                        {event.description}
                      </p>

                      <Link href="/contact" className="event-card-button">
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