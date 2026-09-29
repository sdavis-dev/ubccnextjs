import { redirect } from "next/navigation";
import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import AdminNavbar from "./components/AdminNavbar";

export default async function AdminDashboard() {
    const supabase = await createSupabaseServerClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        redirect("/admin/login");
    }

    const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("id, full_name, role")
        .eq("id", user.id)
        .single();

    if (profileError || profile?.role !== "ADMIN") {
        redirect("/admin/login");
    }

    const now = new Date().toISOString();

    const [
        { count: upcomingEventsCount },
        { count: publishedEventsCount },
        { count: draftEventsCount },
        { data: upcomingEvents, error: eventsError },
    ] = await Promise.all([
        supabase
            .from("events")
            .select("*", { count: "exact", head: true })
            .gte("start_at", now)
            .neq("status", "CANCELLED"),

        supabase
            .from("events")
            .select("*", { count: "exact", head: true })
            .eq("status", "PUBLISHED"),

        supabase
            .from("events")
            .select("*", { count: "exact", head: true })
            .eq("status", "DRAFT"),

        supabase
            .from("events")
            .select("id, title, description, start_at, end_at, location, status")
            .gte("start_at", now)
            .neq("status", "CANCELLED")
            .order("start_at", { ascending: true })
            .limit(5),
    ]);

    if (eventsError) {
        console.error("Error loading dashboard events:", eventsError);
    }

    return (
        <>
            <AdminNavbar />

            <main>
                <section>
                    <h1>Admin Dashboard</h1>
                    <p>Welcome, {profile.full_name}</p>
                    <p>
                        Manage upcoming events and public event information
                        from here.
                    </p>
                </section>

                <section>
                    <h2>Overview</h2>

                    <div>
                        <div>
                            <h3>Upcoming Events</h3>
                            <p>{upcomingEventsCount ?? 0}</p>
                        </div>

                        <div>
                            <h3>Published Events</h3>
                            <p>{publishedEventsCount ?? 0}</p>
                        </div>

                        <div>
                            <h3>Draft Events</h3>
                            <p>{draftEventsCount ?? 0}</p>
                        </div>
                    </div>
                </section>

                <section>
                    <div>
                        <h2>Upcoming Events</h2>

                        <Link href="/admin/events">
                            View All Events
                        </Link>

                        <Link href="/admin/events/new">
                            Create Event
                        </Link>
                    </div>

                    {upcomingEvents && upcomingEvents.length > 0 ? (
                        <div>
                            {upcomingEvents.map((event) => (
                                <article key={event.id}>
                                    <h3>{event.title}</h3>

                                    <p>
                                        {new Date(event.start_at).toLocaleDateString()}
                                        {" · "}
                                        {new Date(event.start_at).toLocaleTimeString(
                                            [],
                                            {
                                                hour: "numeric",
                                                minute: "2-digit",
                                            }
                                        )}
                                    </p>

                                    {event.location && (
                                        <p>{event.location}</p>
                                    )}

                                    <p>Status: {event.status}</p>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <p>No upcoming events.</p>
                    )}
                </section>
            </main>
        </>
    );
}