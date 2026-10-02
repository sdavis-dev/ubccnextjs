"use client"

import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    async function handleLogout() {
        setIsLoading(true);
        const { error } = await supabase.auth.signOut();
        setIsLoading(false);

        if (error) {
            console.error(error);
            return;
        }

        router.push("/admin");
    }

    return (
        <div>
            <button onClick={() => setIsDialogOpen(true)}>
                Logout
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
                    onClick={() => setIsDialogOpen(false)} // close on backdrop click
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
                        onClick={(e) => e.stopPropagation()} // prevent backdrop close when clicking inside
                    >
                        <p style={{ marginBottom: 16 }}>
                            Are you sure you want to logout?
                        </p>

                        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
                            <button onClick={handleLogout} disabled={isLoading}>
                                {isLoading ? "Logging out..." : "Confirm"}
                            </button>
                            <button onClick={() => setIsDialogOpen(false)} disabled={isLoading}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}