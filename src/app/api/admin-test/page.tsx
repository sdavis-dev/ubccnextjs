"use client";

import { useState } from "react";
import { supabase } from "../../../../lib/supabase";
import { createEvent } from "@/lib/events";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        console.log("handleLogin fired");

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            console.error("Login failed:", error.message);
            return;
        }

        console.log("Logged in successfully:", data.user);
        console.log("Session:", data.session);

        const createdTestEvent = await createEvent(
            "Test Admin Event",
            "Testing event creation",
            "Test Location",
            new Date().toISOString(),
            new Date(Date.now() + 60 * 60 * 1000).toISOString()
        );

        console.log("Created event:", createdTestEvent);

        const { data: profile, error: profileError } = await supabase
            .from("profiles")
            .select("id, full_name, role")
            .eq("id", data.user.id)
            .single();

        if (profileError) {
            console.error("Failed to fetch profile:", profileError.message);
            return;
        }

        console.log("Admin profile:", profile);

        const { data: createdEvent, error: eventError } = await supabase
            .from("events")
            .insert({
                title: "Admin Authentication Test",
                description: "Temporary test event",
                location: "Test Location",
                start_at: new Date().toISOString(),
                end_at: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
            })
            .select()
            .single();

        if (eventError) {
            console.error("Failed to create event:", eventError.message);
            return;
        }

        console.log("Event created:", createdEvent);
    }

    return (
        <form onSubmit={handleLogin}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
            />

            <button type="submit">
                Login
            </button>
        </form>
    );
}