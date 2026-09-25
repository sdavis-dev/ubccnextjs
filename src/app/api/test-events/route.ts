import { createEvent, getPublishedEvents } from "@/lib/events";

export async function GET() {
    const events = await getPublishedEvents();

    return Response.json(events);
}

export async function POST(request: Request) {
    const body = await request.json();

    const event = await createEvent(
        body.title,
        body.description,
        body.location,
        body.start_at,
        body.end_at
    );

    return Response.json(event);
}