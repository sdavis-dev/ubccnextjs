import { createSupabaseServerClient } from "./supabase-server";

export async function getAllEventsForAdmin() {
    const supabaseServer = await createSupabaseServerClient();

    const { data, error } = await supabaseServer
        .from("events")
        .select("*")
        .order("start_at", { ascending: true });

    if (error) {
        throw new Error(
            `Failed to fetch admin events: ${error.message}`
        );
    }

    return data;
}