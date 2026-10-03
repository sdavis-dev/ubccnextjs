import Link from "next/link";

const experiences = [
    {
        title: "Speaking Engagements",
        description:
            "Bring an encouraging and inspiring message of hope, leadership, purpose, and personal growth to your next event.",
        link: "/booking",
        linkText: "BOOK KIMBERLY →"
    },
    {
        title: "Spiritual Renewal Retreats",
        description:
            "Take time to step away, reflect, reconnect, and experience spiritual renewal through meaningful fellowship and enrichment.",
        link: "/events",
        linkText: "VIEW EVENTS →"
    },
    {
        title: "Upcoming Events",
        description:
            "Stay connected with upcoming opportunities for growth, learning, encouragement, and community.",
        link: "/events",
        linkText: "VIEW EVENTS →"
    }
];

export default function Experiences() {
    return (
        <section className="experiences">
            <div className="experiences-content">

                <div className="experiences-header">
                    <p className="experiences-eyebrow">
                        EXPERIENCES & EVENTS
                    </p>

                    <h2>
                        There&apos;s Always an Opportunity to Grow.
                    </h2>

                    <p>
                        From speaking engagements and retreats to
                        enrichment opportunities and community events,
                        Upward Bound creates spaces where people can
                        connect, learn, and move forward.
                    </p>
                </div>

                <div className="experiences-grid">
                    {experiences.map((experience) => (
                        <article
                            className="experience-card"
                            key={experience.title}
                        >
                            <h3>{experience.title}</h3>

                            <p>{experience.description}</p>

                            <Link href={experience.link}>
                                {experience.linkText}
                            </Link>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}