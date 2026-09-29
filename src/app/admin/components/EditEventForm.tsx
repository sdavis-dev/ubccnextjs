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
    const [startAt, setStartAt] = useState(
        event.start_at.slice(0, 16)
    );
    const [endAt, setEndAt] = useState(
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
                startAt,
                endAt
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
        <form onSubmit={handleSubmit}>
            <div>
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

            <div>
                <label htmlFor="description">
                    Description
                </label>

                <textarea
                    id="description"
                    value={description}
                    onChange={(event) =>
                        setDescription(event.target.value)
                    }
                    required
                />
            </div>

            <div>
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

            <div>
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

            <div>
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

            {error && <p>{error}</p>}

            <button
                type="submit"
                disabled={isSubmitting}
            >
                {isSubmitting
                    ? "Saving..."
                    : "Save Changes"}
            </button>
        </form>
    );
}