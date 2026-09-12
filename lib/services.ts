import { supabase } from "./supabase";

export async function getServices() {
    const { data, error } = await supabase
        .from("services")
        .select("*")
        .eq("is_active", true);
    
    if (error) {
        throw new Error(`Failed to fetch services: ${error.message}`);
    }

    return data;
}