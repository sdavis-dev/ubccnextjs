import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import AdminNavbar from "../../components/AdminNavbar";
import EventForm from "../../components/EventForm";

export default async function NewEventPage() {
    const supabase = await createSupabaseServerClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        redirect("/admin/login");
    }

    const { data: profile, error } = await supabase
        .from("profiles")
        .select("id, role")
        .eq("id", user.id)
        .single();

    if (error || profile?.role !== "ADMIN") {
        redirect("/admin/login");
    }

    return (
        <>
            <AdminNavbar />

            <main>
                <h1>Create Event</h1>

                <EventForm />
            </main>
        </>
    );
}