const services = [
    {
        title: "Keynote Speaker",
        description:
            "Engaging and inspirational speaking designed to encourage growth, purpose, leadership, and positive change."
    },
    {
        title: "Leadership Consultant",
        description:
            "Helping individuals and organizations strengthen leadership, develop people, and create meaningful results."
    },
    {
        title: "Personal Life Coach",
        description:
            "Providing guidance and encouragement to help you gain clarity, overcome obstacles, and move toward your goals."
    },
    {
        title: "Small Group Mastermind Classes",
        description:
            "Interactive group experiences designed to encourage learning, accountability, collaboration, and personal growth."
    },
    {
        title: "Spiritual & Enrichment Classes",
        description:
            "Opportunities for spiritual development, personal enrichment, and deeper growth through learning and connection."
    },
    {
        title: "Retreats",
        description:
            "Purposeful experiences that provide space for reflection, renewal, connection, and personal transformation."
    }
];

export default function Services() {
    return (
        <section className="services" id="services">
            <div className="services-content">

                <div className="services-header">
                    <p className="services-eyebrow">
                        HOW I CAN HELP
                    </p>

                    <h2>
                        Services Designed to Help You Rise.
                    </h2>

                    <p>
                        Whether you're looking to grow personally,
                        strengthen your leadership, or develop your
                        organization, Upward Bound provides guidance
                        and experiences designed to help you move forward.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <article
                            className="service-card"
                            key={service.title}
                        >
                            <div className="service-icon">
                                ✦
                            </div>

                            <h3>{service.title}</h3>

                            <p>{service.description}</p>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}