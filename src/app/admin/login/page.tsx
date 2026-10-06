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
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function handleLogin(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        console.log("handleLogin fired");

        setError("")
        setIsLoading(true);

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });


        if (error) {
            console.error("Login failed:", error.message);
            setError("Invalid email or password.");
            setIsLoading(false);
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
        <>
            <Navbar />

            <main className="admin-login-page">
                <section className="admin-login-container">

                    <div className="admin-login-header">
                        <p className="admin-login-eyebrow">
                            ADMIN PORTAL
                        </p>

                        <h1>Login to Your Account</h1>

                        <p>
                            Sign in to manage.
                        </p>
                    </div>

                    <form
                        className="admin-login-form"
                        onSubmit={handleLogin}
                    >
                        <div className="admin-login-field">
                            <label htmlFor="email">
                                Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                                required
                            />
                        </div>

                        <div className="admin-login-field">
                            <label htmlFor="password">
                                Password
                            </label>

                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                                required
                            />
                        </div>

                        {error && (
                            <p className="admin-login-error">
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="admin-login-button"
                        >
                            Login
                        </button>
                    </form>

                </section>
            </main>

            <Footer />
        </>
    );
}