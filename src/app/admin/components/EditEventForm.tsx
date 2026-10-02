"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateEvent } from "@/lib/events";

type EditEventFormProps = {
    event: {
        id: string;
        title: string;
        description: string | null;
        location: string | null;
        start_at: string;
        end_at: string;
    };
};

export default function EditEventForm({
    event,
}: EditEventFormProps) {
    const router = useRouter();

    const [title, setTitle] = useState(event.title);
    const [description, setDescription] = useState(
        event.description ?? ""
    );
    const [location, setLocation] = useState(
        event.location ?? ""
    );
    const [start_at, setStartAt] = useState(
        event.start_at.slice(0, 16)
    );
    const [end_at, setEndAt] = useState(
        event.end_at.slice(0, 16)
    );
    const [status, setStatus] = useState(
        event.end_at.slice(0, 16)
    );

    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(
        formEvent: React.FormEvent<HTMLFormElement>
    ) {
        formEvent.preventDefault();

        setError("");
        setIsSubmitting(true);

        try {
            await updateEvent(
                event.id,
                title,
                description,
                location,
                start_at,
                end_at,
                status
                
            );

            router.push("/admin/events");
            router.refresh();
        } catch (error) {
            console.error(error);
            setError("Failed to update event.");
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
                    <label htmlFor="start_at">
                        Start Date and Time
                    </label>

                    <input
                        id="start_at"
                        type="datetime-local"
                        value={start_at}
                        onChange={(event) =>
                            setStartAt(event.target.value)
                        }
                        required
                    />
                </div>

                <div className="admin-event-form-field">
                    <label htmlFor="end_at">
                        End Date and Time
                    </label>

                    <input
                        id="end_at"
                        type="datetime-local"
                        value={end_at}
                        onChange={(event) =>
                            setEndAt(event.target.value)
                        }
                        required
                    />
                </div>
            </div>


            <div className="admin-event-form-field">
                <label htmlFor="status">
                    Status
                </label>

                <select
                    id="status"
                    value={status}
                    onChange={(event) =>
                        setStatus(event.target.value)
                    }
                >
                    <option value="DRAFT">Draft</option>
                    <option value="PUBLISHED">Published</option>
                    <option value="CANCELLED">Cancelled</option>
                    <option value="COMPLETED">Completed</option>
                </select>
            </div>

            {error && (
                <p className="admin-event-form-error">
                    {error}
                </p>
            )}

            <button
                    type="submit"
                    className="admin-primary-button"
                    disabled={isSubmitting}
                >
                    {isSubmitting
                        ? "Saving..."
                        : "Save Changes"}
                </button>

            <div className="admin-event-form-actions">
                <button
                    type="button"
                    className="admin-primary-button"
                    onClick={() =>
                        router.push("/admin/events")
                    }
                >
                    Cancel
                </button>

                
            </div>
        </form>
    );
}