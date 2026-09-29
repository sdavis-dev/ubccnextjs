import { redirect } from "next/navigation";
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

    const { data: profile, error } = await supabase
        .from("profiles")
        .select("id, full_name, role")
        .eq("id", user.id)
        .single();

    if (error || profile?.role !== "ADMIN") {
        redirect("/admin/login");
    }

    return (
        <>
            <AdminNavbar />
                <main>
                    <h1>Admin Dashboard</h1>
                    <p>Welcome, {profile.full_name}</p>
                </main>
        </>
    );
}