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
            .select(
                "id, title, description, start_at, end_at, location, status"
            )
            .gte("start_at", now)
            .neq("status", "CANCELLED")
            .order("start_at", { ascending: true })
            .limit(5),
    ]);

    if (eventsError) {
        console.error(
            "Error loading dashboard events:",
            eventsError
        );
    }

    return (
        <>
            <AdminNavbar />

            <main className="admin-dashboard">

                <section className="admin-dashboard-hero">
                    <div>
                        <p className="admin-eyebrow">
                            ADMIN PORTAL
                        </p>

                        <h1>Admin Dashboard</h1>

                        <p className="admin-dashboard-welcome">
                            Welcome, {profile.full_name}
                        </p>

                        <p className="admin-dashboard-description">
                            Manage upcoming events and public event
                            information from here.
                        </p>
                    </div>
                </section>

                <section className="admin-dashboard-section">
                    <div className="admin-dashboard-section-header">
                        <div>
                            <p className="admin-eyebrow">
                                OVERVIEW
                            </p>

                            <h2>Event Activity</h2>
                        </div>
                    </div>

                    <div className="admin-stat-grid">

                        <article className="admin-stat-card">
                            <p>Upcoming Events</p>
                            <h3>
                                {upcomingEventsCount ?? 0}
                            </h3>
                        </article>

                        <article className="admin-stat-card">
                            <p>Published Events</p>
                            <h3>
                                {publishedEventsCount ?? 0}
                            </h3>
                        </article>

                        <article className="admin-stat-card">
                            <p>Draft Events</p>
                            <h3>
                                {draftEventsCount ?? 0}
                            </h3>
                        </article>

                    </div>
                </section>

                <section className="admin-dashboard-section">

                    <div className="admin-dashboard-section-header">
                        <div>
                            <p className="admin-eyebrow">
                                SCHEDULE
                            </p>

                            <h2>Upcoming Events</h2>
                        </div>

                        <div className="admin-dashboard-actions">
                            <Link
                                href="/admin/events"
                                className="admin-secondary-button"
                            >
                                View All Events
                            </Link>

                            <Link
                                href="/admin/events/new"
                                className="admin-primary-button"
                            >
                                Create Event
                            </Link>
                        </div>
                    </div>

                    {upcomingEvents &&
                    upcomingEvents.length > 0 ? (
                        <div className="admin-dashboard-events">

                            {upcomingEvents.map((event) => (
                                <article
                                    className="admin-dashboard-event-card"
                                    key={event.id}
                                >
                                    <div>
                                        <p className="admin-event-status">
                                            {event.status}
                                        </p>

                                        <h3>
                                            {event.title}
                                        </h3>
                                    </div>

                                    <div className="admin-dashboard-event-details">

                                        <div>
                                            <span>
                                                Date
                                            </span>

                                            <p>
                                                {new Date(
                                                    event.start_at
                                                ).toLocaleDateString(
                                                    "en-US",
                                                    {
                                                        month: "long",
                                                        day: "numeric",
                                                        year: "numeric",
                                                    }
                                                )}
                                            </p>
                                        </div>

                                        <div>
                                            <span>
                                                Time
                                            </span>

                                            <p>
                                                {new Date(
                                                    event.start_at
                                                ).toLocaleTimeString(
                                                    "en-US",
                                                    {
                                                        hour: "numeric",
                                                        minute: "2-digit",
                                                    }
                                                )}
                                            </p>
                                        </div>

                                        {event.location && (
                                            <div>
                                                <span>
                                                    Location
                                                </span>

                                                <p>
                                                    {event.location}
                                                </p>
                                            </div>
                                        )}

                                    </div>
                                </article>
                            ))}

                        </div>
                    ) : (
                        <div className="admin-dashboard-empty">
                            <p className="admin-eyebrow">
                                NO UPCOMING EVENTS
                            </p>

                            <h3>
                                Nothing Scheduled Yet.
                            </h3>

                            <p>
                                Create an event to get started.
                            </p>

                            <Link
                                href="/admin/events/new"
                                className="admin-primary-button"
                            >
                                Create Event
                            </Link>
                        </div>
                    )}

                </section>

            </main>
        </>
    );
}