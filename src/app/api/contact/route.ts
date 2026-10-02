import { Resend } from "resend";

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { name, email, phone, message } = body;

        if (
            typeof name !== "string" ||
            typeof email !== "string" ||
            typeof message !== "string"
        ) {
            return Response.json(
                { error: "Invalid form submission." },
                { status: 400 }
            );
        }

        if (!name.trim() || !email.trim() || !message.trim()) {
            return Response.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return Response.json(
                { error: "Please enter a valid email address." },
                { status: 400 }
            );
        }

        const cleanName = name
            .replace(/[\r\n]/g, " ")
            .trim();
        const safeName = escapeHtml(cleanName);
        const safeEmail = escapeHtml(email);
        const safePhone = escapeHtml(phone || "Not provided");
        const safeMessage = escapeHtml(message);

        const { data, error } = await resend.emails.send({
            from: "Upward Bound <contact@upwardboundconsulting.net>",
            to: "iamupwardbound@yahoo.com",
            subject: `New Contact Form Message from ${safeName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">

                    <div style="background: #047a7e; padding: 25px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0;">
                            Upward Bound
                        </h1>
                        <p style="color: #f0e4ce; margin: 5px 0 0;">
                            Consulting &amp; Coaching
                        </p>
                    </div>

                    <div style="padding: 30px 25px;">

                        <h2 style="color: #047a7e; margin-top: 0;">
                            New Contact Form Message
                        </h2>

                        <div style="margin-bottom: 20px;">
                            <p><strong>Name:</strong> ${safeName}</p>
                            <p><strong>Email:</strong> ${safeEmail}</p>
                            <p><strong>Phone:</strong> ${safePhone || "Not provided"}</p>
                        </div>

                        <div style="background: #f0e4ce; padding: 20px; border-radius: 8px;">
                            <p style="color: #047a7e; font-weight: bold; margin-top: 0;">
                                Message
                            </p>

                            <p style="line-height: 1.6; margin-bottom: 0;">
                                ${safeMessage}
                            </p>
                        </div>

                    </div>

                    <div style="background: #063f42; padding: 15px; text-align: center;">
                        <p style="color: #ffffff; font-size: 12px; margin: 0;">
                            Sent from the Upward Bound Consulting &amp; Coaching website
                        </p>
                    </div>

                </div>
            `,
        });

        if (error) {
            return Response.json(
                { error: error.message },
                { status: 500 }
            );
        }

        return Response.json({ success: true, data });
    } catch (error) {
        console.error("Contact form error:", error);
        
        return Response.json(
            { error: "Something went wrong." },
            { status: 500 }
        );
    }
}