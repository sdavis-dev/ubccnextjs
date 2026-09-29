"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteEvent } from "@/lib/events";

type DeleteEventButtonProps = {
    eventId: string;
};

export default function DeleteEventButton({
    eventId,
}: DeleteEventButtonProps) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [error, setError] = useState("");

    const router = useRouter();

    async function handleDelete() {
        setError("");

        try {
            await deleteEvent(eventId);

            setIsDialogOpen(false);
            router.refresh();
        } catch (error) {
            console.error(error);
            setError("Failed to delete event.");
        }
    }

    return (
        <div>
            <button onClick={() => setIsDialogOpen(true)}>
                Delete
            </button>

            {isDialogOpen && (
                <div>
                    <p>
                        Are you sure you want to delete this event?
                    </p>

                    {error && <p>{error}</p>}

                    <button
                        onClick={() => setIsDialogOpen(false)}
                    >
                        Cancel
                    </button>

                    <button onClick={handleDelete}>
                        Confirm Delete
                    </button>
                </div>
            )}
        </div>
    );
}