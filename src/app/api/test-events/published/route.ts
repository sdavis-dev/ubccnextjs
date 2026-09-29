import { getPublishedEvents } from "@/lib/events";

export async function GET() {
    const events = await getPublishedEvents();

    return Response.json(events);
}