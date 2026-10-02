import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import AdminNavbar from "../components/AdminNavbar";
import { getAllEventsForAdmin } from "@/lib/events-admin";
import EventFilters from "../components/EventFilters";

export default async function AdminEventsPage() {
    const supabase = await createSupabaseServerClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        redirect("/admin/login");
    }

    const { data: profile, error } = await supabase
        .from("profiles")
        .select("id, full_name, role")
        .eq("id", user.id)
        .single();

    if (error || profile?.role !== "ADMIN") {
        redirect("/admin/login");
    }

    const allEvents = await getAllEventsForAdmin();

    return (
        <>
            <AdminNavbar />

            <main className="admin-events-page">

                <section className="admin-events-header">
                    <div>
                        <p className="admin-eyebrow">
                            EVENT MANAGEMENT
                        </p>

                        <h1>Events</h1>

                        <p>
                            Manage Kim's upcoming events,
                            published events, and drafts.
                        </p>
                    </div>

                    <Link
                        href="/admin/events/new"
                        className="admin-primary-button"
                    >
                        Create Event
                    </Link>
                </section>

                <EventFilters events={allEvents} />

            </main>
        </>
    );
}