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
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const router = useRouter();

    async function handleDelete() {
        setError("");
        setIsLoading(true);

        try {
            await deleteEvent(eventId);

            setIsDialogOpen(false);
            router.refresh();
        } catch (error) {
            console.error(error);
            setError("Failed to delete event.");
        } finally {
            setIsLoading(false);
        }
    }

    function handleCloseDialog() {
        if (!isLoading) {
            setIsDialogOpen(false);
            setError("");
        }
    }

    return (
        <div>
            <button
                type="button"
                className="logout-button"
                onClick={() => setIsDialogOpen(true)}
            >
                Delete
            </button>

            {isDialogOpen && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 50,
                    }}
                    onClick={handleCloseDialog}
                >
                    <div
                        style={{
                            backgroundColor: "white",
                            borderRadius: 8,
                            padding: 24,
                            width: "90%",
                            maxWidth: 360,
                            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                        }}
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >
                        <p style={{ marginBottom: 16 }}>
                            Are you sure you want to delete this event?
                        </p>

                        {error && (
                            <p style={{ marginBottom: 16 }}>
                                {error}
                            </p>
                        )}

                        <div
                            style={{
                                display: "flex",
                                gap: 8,
                                justifyContent: "flex-end",
                            }}
                        >
                            <button
                                type="button"
                                className="admin-secondary-button"
                                onClick={handleCloseDialog}
                                disabled={isLoading}
                            >
                                Cancel
                            </button>

                            <button
                                type="button"
                                className="logout-button"
                                onClick={handleDelete}
                                disabled={isLoading}
                            >
                                {isLoading
                                    ? "Deleting..."
                                    : "Confirm"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
