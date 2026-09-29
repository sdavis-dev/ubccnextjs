import { notFound, redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import AdminNavbar from "../../../components/AdminNavbar";
import EditEventForm from "../../../components/EditEventForm";
import { getAllEvents } from "@/lib/events";

type EditEventPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function EditEventPage({
    params,
}: EditEventPageProps) {
    const { id } = await params;

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

    const events = await getAllEvents();

    const event = events.find(
        (currentEvent) => currentEvent.id === id
    );

    if (!event) {
        notFound();
    }

    return (
        <>
            <AdminNavbar />

            <main>
                <h1>Edit Event</h1>

                <EditEventForm event={event} />
            </main>
        </>
    );
}