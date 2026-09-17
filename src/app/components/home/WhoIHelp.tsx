const audiences = [
    {
        title: "Individuals",
        description:
            "People seeking personal growth, clarity, confidence, and meaningful progress in their lives."
    },
    {
        title: "Leaders",
        description:
            "Current and aspiring leaders who want to strengthen their influence, skills, and impact."
    },
    {
        title: "Organizations",
        description:
            "Organizations looking to develop their people, improve leadership, and create positive change."
    },
    {
        title: "Groups & Communities",
        description:
            "Groups seeking encouragement, enrichment, connection, and experiences that inspire growth."
    }
];

export default function WhoIHelp() {
    return (
        <section className="who-i-help">
            <div className="who-i-help-content">

                <div className="who-i-help-header">
                    <p className="who-i-help-eyebrow">
                        WHO I HELP
                    </p>

                    <h2>
                        Growth Begins With the Right Support.
                    </h2>

                    <p>
                        Whether you're growing as an individual, leading
                        others, or building a stronger organization, Upward
                        Bound offers support designed to meet you where you are.
                    </p>
                </div>

                <div className="audience-grid">
                    {audiences.map((audience) => (
                        <article
                            className="audience-card"
                            key={audience.title}
                        >
                            <h3>{audience.title}</h3>
                            <p>{audience.description}</p>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}