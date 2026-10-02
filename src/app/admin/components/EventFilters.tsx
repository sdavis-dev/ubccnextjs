"use client";

import Link from "next/link";
import { useState } from "react";
import DeleteEventButton from "./DeleteEventButton";

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

    const upcomingEvents = events.filter(
        (event) =>
            new Date(event.start_at) > now &&
            event.status !== "CANCELLED"
    );

    const publishedEvents = events.filter(
        (event) => event.status === "PUBLISHED"
    );

    const draftEvents = events.filter(
        (event) => event.status === "DRAFT"
    );

    const filteredEvents =
        activeFilter === "ALL"
            ? events
            : activeFilter === "UPCOMING"
            ? upcomingEvents
            : activeFilter === "PUBLISHED"
            ? publishedEvents
            : draftEvents;

    function formatEventDate(date: string) {
        return new Date(date).toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
        });
    }

    function renderEvent(event: Event) {
        return (
            <article
                key={event.id}
                className="admin-event-card"
            >
                <div className="admin-event-card-content">

                    <div className="admin-event-card-header">
                        <div>
                            <p className="admin-event-status">
                                {event.status}
                            </p>

                            <h2>{event.title}</h2>
                        </div>
                    </div>

                    {event.description && (
                        <p className="admin-event-description">
                            {event.description}
                        </p>
                    )}

                    <div className="admin-event-details">

                        {event.location && (
                            <div>
                                <span>Location</span>
                                <p>{event.location}</p>
                            </div>
                        )}

                        <div>
                            <span>Starts</span>
                            <p>
                                {formatEventDate(
                                    event.start_at
                                )}
                            </p>
                        </div>

                        <div>
                            <span>Ends</span>
                            <p>
                                {formatEventDate(
                                    event.end_at
                                )}
                            </p>
                        </div>

                    </div>

                    <div className="admin-event-actions">
                        <Link
                            href={`/admin/events/${event.id}/edit`}
                            className="admin-edit-button"
                        >
                            Edit
                        </Link>

                        <DeleteEventButton
                            eventId={event.id}
                        />
                    </div>

                </div>
            </article>
        );
    }

    return (
        <section className="admin-events-management">

            <div className="admin-event-filters">

                <button
                    type="button"
                    className={
                        activeFilter === "ALL"
                            ? "active"
                            : ""
                    }
                    onClick={() =>
                        setActiveFilter("ALL")
                    }
                >
                    All ({events.length})
                </button>

                <button
                    type="button"
                    className={
                        activeFilter === "UPCOMING"
                            ? "active"
                            : ""
                    }
                    onClick={() =>
                        setActiveFilter("UPCOMING")
                    }
                >
                    Upcoming ({upcomingEvents.length})
                </button>

                <button
                    type="button"
                    className={
                        activeFilter === "PUBLISHED"
                            ? "active"
                            : ""
                    }
                    onClick={() =>
                        setActiveFilter("PUBLISHED")
                    }
                >
                    Published ({publishedEvents.length})
                </button>

                <button
                    type="button"
                    className={
                        activeFilter === "DRAFTS"
                            ? "active"
                            : ""
                    }
                    onClick={() =>
                        setActiveFilter("DRAFTS")
                    }
                >
                    Drafts ({draftEvents.length})
                </button>

            </div>

            <div className="admin-events-list">

                {filteredEvents.length === 0 ? (
                    <div className="admin-events-empty">
                        <p className="admin-eyebrow">
                            NO EVENTS
                        </p>

                        <h2>
                            Nothing Here Yet.
                        </h2>

                        <p>
                            There are no events in this category.
                        </p>
                    </div>
                ) : (
                    filteredEvents.map(renderEvent)
                )}

            </div>

        </section>
    );
}