import { Timestamp } from "next/dist/server/lib/cache-handlers/types";
import { supabase } from "./supabase";
/*
CRUD - Read: 
getPublishedEvents() gets all published events from the supabase db and 
arragned them going down from oldest to newest published events
*/
export async function getPublishedEvents() {
    const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("status", "PUBLISHED")
        .order("start_at", {ascending: false});
    
    if (error) {
        throw new Error(`Failed to fetch published events: ${error.message}`);
    }

    return data;
}

export async function createEvent(
    title: string, 
    description: string, 
    location: string, 
    start_at: string, 
    end_at: string) {
    const { data, error } = await supabase
        .from("events")
        .insert([
            {
                title,
                description,
                location,
                start_at,
                end_at
            }
        ])
        .select()
    
    if (error) {
        throw new Error(`Failed to create event: ${error.message}`);
    }

    return data;
}
// TODO: Look at getAllEvents, updateEvent, deleteEvent to understand how they work and test them 

export async function getAllEvents() {
    const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("start_at", { ascending: true });

    if (error) {
        throw new Error(`Failed to fetch events: ${error.message}`);
    }

    return data;
}

export async function updateEvent(
    id: string,
    title: string,
    description: string,
    location: string,
    start_at: string,
    end_at: string
) {
    const { data, error } = await supabase
        .from("events")
        .update({
            title,
            description,
            location,
            start_at,
            end_at,
        })
        .eq("id", id)
        .select()
        .single();

    if (error) {
        throw new Error(`Failed to update event: ${error.message}`);
    }

    return data;
}

export async function deleteEvent(id: string) {
    const { data, error } = await supabase
        .from("events")
        .delete()
        .eq("id", id)
        .select()
        .single();

    if (error) {
        throw new Error(`Failed to delete event: ${error.message}`);
    }

    return data;
}