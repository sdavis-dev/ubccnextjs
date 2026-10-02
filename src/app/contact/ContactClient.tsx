"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactClient() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("");

    // Validations
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        setStatus("Please fill out your name, email, and message.");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        setStatus("Please enter a valid email address.");
        return;
    }

    setIsSubmitting(true);

    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error || "Something went wrong.");
        }

        setStatus("Message sent successfully!");

        setFormData({
            name: "",
            email: "",
            phone: "",
            message: ""
        });
    } catch (error) {
        setStatus("Something went wrong. Please try again.");
    } finally {
        setIsSubmitting(false);
    }
};
    return (
        <>
            <Navbar />

            <main className="contact-page">

                <section className="contact-hero">
                    <div className="contact-hero-content">
                        <p className="contact-eyebrow">
                            GET IN TOUCH
                        </p>

                        <h1>
                            Let&apos;s Connect.
                        </h1>

                        <p>
                            Whether you&apos;re interested in speaking,
                            coaching, consulting, or simply want to learn
                            more about Upward Bound, I&apos;d love to hear
                            from you.
                        </p>
                    </div>
                </section>

                <section className="contact-main">
                    <div className="contact-main-content">

                        <div className="contact-info">
                            <p className="contact-eyebrow">
                                CONTACT INFORMATION
                            </p>

                            <h2>
                                Let&apos;s Start a Conversation.
                            </h2>

                            <p>
                                Have a question (like Keynote Speaking or Small Group Mastermind Classes),
                                want to work together,
                                or interested in bringing Upward Bound
                                to your organization or event? Reach out
                                using the information below.
                            </p>

                            <div className="contact-details">

                                <div className="contact-detail">
                                    <span className="contact-icon">📍</span>
                                    <div>
                                        <h3>Mailing Address</h3>
                                        <p>
                                            P.O. Box 4793<br />
                                            Meridian, MS 39304
                                        </p>
                                    </div>
                                </div>

                                <div className="contact-detail">
                                    <span className="contact-icon">📞</span>
                                    <div>
                                        <h3>Phone</h3>
                                        <p>662-989-1662</p>
                                    </div>
                                </div>

                                <div className="contact-detail">
                                    <span className="contact-icon">✉️</span>
                                    <div>
                                        <h3>Email</h3>
                                        <p>iamupwardbound@yahoo.com</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="contact-form-wrapper">
                          <h2>
                              How Can I Help?
                          </h2>

                          <form className="contact-form" onSubmit={handleSubmit}>

                              <div className="contact-form-group">
                                  <label htmlFor="name">Name</label>
                                  <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                name: e.target.value
                                            })
                                        }
                                    />
                              </div>

                              <div className="contact-form-group">
                                  <label htmlFor="email">Email</label>
                                  <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Your email"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                email: e.target.value
                                            })
                                        }
                                    />
                              </div>

                              <div className="contact-form-group">
                                  <label htmlFor="phone">Phone</label>
                                  <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="Your phone number"
                                        value={formData.phone}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                phone: e.target.value
                                            })
                                        }
                                    />
                              </div>

                              <div className="contact-form-group">
                                  <label htmlFor="message">Message</label>
                                  <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        placeholder="How can I help?"
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                message: e.target.value
                                            })
                                        }
                                    />
                              </div>

                              <button
                                    type="submit"
                                    className="contact-form-button"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                                    {!isSubmitting && <span>→</span>}
                                </button>

                                        {status && (
                                            <p className="contact-form-status">
                                                {status}
                                            </p>
                                        )}

                          </form>
                      </div>

                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}