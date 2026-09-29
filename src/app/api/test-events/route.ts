import { createEvent, getAllEvents, updateEvent, deleteEvent } from "@/lib/events";

export async function GET() {
    console.log("GET /api/test-events was called");

    const events = await getAllEvents();

    console.log("Events returned:", events);

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

export async function UPDATE(request: Request) {
    const body = await request.json();
    
    const events = await updateEvent(
        body.id,
        body.title,
        body.description,
        body.location,
        body.start_at,
        body.end_at
    );

    return Response.json(events);
}

export async function DELETE(request: Request) {
    const body = await request.json();

    const event = await deleteEvent(
        body.id
    );

    return Response.json(event);
}