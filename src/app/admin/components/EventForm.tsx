"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createEvent } from "@/lib/events";

export default function EventForm() {
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [startAt, setStartAt] = useState("");
    const [endAt, setEndAt] = useState("");

    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        setError("");
        setIsSubmitting(true);

        try {
            await createEvent(
                title,
                description,
                location,
                startAt,
                endAt
            );

            router.push("/admin/events");
            router.refresh();
        } catch (error) {
            console.error(error);
            setError("Failed to create event.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form
            className="admin-event-form"
            onSubmit={handleSubmit}
        >
            <div className="admin-event-form-field">
                <label htmlFor="title">
                    Title
                </label>

                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(event) =>
                        setTitle(event.target.value)
                    }
                    required
                />
            </div>

            <div className="admin-event-form-field">
                <label htmlFor="description">
                    Description
                </label>

                <textarea
                    id="description"
                    value={description}
                    onChange={(event) =>
                        setDescription(event.target.value)
                    }
                    rows={5}
                    required
                />
            </div>

            <div className="admin-event-form-field">
                <label htmlFor="location">
                    Location
                </label>

                <input
                    id="location"
                    type="text"
                    value={location}
                    onChange={(event) =>
                        setLocation(event.target.value)
                    }
                    required
                />
            </div>

            <div className="admin-event-form-row">
                <div className="admin-event-form-field">
                    <label htmlFor="startAt">
                        Start Date and Time
                    </label>

                    <input
                        id="startAt"
                        type="datetime-local"
                        value={startAt}
                        onChange={(event) =>
                            setStartAt(event.target.value)
                        }
                        required
                    />
                </div>

                <div className="admin-event-form-field">
                    <label htmlFor="endAt">
                        End Date and Time
                    </label>

                    <input
                        id="endAt"
                        type="datetime-local"
                        value={endAt}
                        onChange={(event) =>
                            setEndAt(event.target.value)
                        }
                        required
                    />
                </div>
            </div>

            {error && (
                <p className="admin-event-form-error">
                    {error}
                </p>
            )}

            <div className="admin-event-form-actions">
                <button
                    type="button"
                    className="admin-secondary-button"
                    onClick={() =>
                        router.push("/admin/events")
                    }
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    className="admin-primary-button"
                    disabled={isSubmitting}
                >
                    {isSubmitting
                        ? "Creating..."
                        : "Create Event"}
                </button>
            </div>
        </form>
    );
}