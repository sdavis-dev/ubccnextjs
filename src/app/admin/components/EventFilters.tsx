"use client";

import { useState } from "react";

type Event = {
    id: string;
    title: string;
    description: string | null;
    location: string | null;
    start_at: string;
    end_at: string;
    status: string;
};

type EventFiltersProps = {
    events: Event[];
};

type Filter = "ALL" | "UPCOMING" | "PUBLISHED" | "DRAFTS";

export default function EventFilters({
    events,
}: EventFiltersProps) {
    const [activeFilter, setActiveFilter] =
        useState<Filter>("ALL");

    const now = new Date();

    const filteredEvents = events.filter((event) => {
        if (activeFilter === "ALL") {
            return true;
        }

        if (activeFilter === "UPCOMING") {
            return (
                new Date(event.start_at) > now &&
                event.status !== "CANCELLED"
            );
        }

        if (activeFilter === "PUBLISHED") {
            return event.status === "PUBLISHED";
        }

        if (activeFilter === "DRAFTS") {
            return event.status === "DRAFT";
        }

        return true;
    });

    return (
        <section>
            <div>
                <button
                    type="button"
                    onClick={() => setActiveFilter("ALL")}
                >
                    All ({events.length})
                </button>

                <button
                    type="button"
                    onClick={() => setActiveFilter("UPCOMING")}
                >
                    Upcoming (
                        {
                            events.filter(
                                (event) =>
                                    new Date(event.start_at) > now &&
                                    event.status !== "CANCELLED"
                            ).length
                        }
                    )
                </button>

                <button
                    type="button"
                    onClick={() => setActiveFilter("PUBLISHED")}
                >
                    Published (
                        {
                            events.filter(
                                (event) =>
                                    event.status === "PUBLISHED"
                            ).length
                        }
                    )
                </button>

                <button
                    type="button"
                    onClick={() => setActiveFilter("DRAFTS")}
                >
                    Drafts (
                        {
                            events.filter(
                                (event) =>
                                    event.status === "DRAFT"
                            ).length
                        }
                    )
                </button>
            </div>

            <div>
                {filteredEvents.length === 0 ? (
                    <p>No events in this category.</p>
                ) : (
                    filteredEvents.map((event) => (
                        <article key={event.id}>
                            <div>
                                <h2>{event.title}</h2>

                                {event.description && (
                                    <p>{event.description}</p>
                                )}

                                {event.location && (
                                    <p>{event.location}</p>
                                )}

                                <p>
                                    Start:{" "}
                                    {new Date(
                                        event.start_at
                                    ).toLocaleString()}
                                </p>

                                <p>
                                    End:{" "}
                                    {new Date(
                                        event.end_at
                                    ).toLocaleString()}
                                </p>

                                <p>
                                    Status: {event.status}
                                </p>
                            </div>
                        </article>
                    ))
                )}
            </div>
        </section>
    );
}