"use client";

import { useState } from "react";
import { supabase } from "../../../../lib/supabase";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Login() {
    const router = useRouter();
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

        const { data: profile, error: profileError } = await supabase
            .from("profiles")
            .select("id, full_name, role")
            .eq("id", data.user.id)
            .single();

        if (profileError) {
            console.error("Failed to fetch profile:", profileError.message);
            return;
        }

        if (profile.role !== "ADMIN") {
            console.error("User is not an admin");
            return;
        }

        console.log("Admin profile:", profile);

        router.push("/admin");
        
    }

    return (
        <>  <Navbar />
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
            <Footer />
        </>
        
    );
}