import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
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
                                Have a question, want to work together,
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

                          <form className="contact-form">

                              <div className="contact-form-group">
                                  <label htmlFor="name">Name</label>
                                  <input
                                      type="text"
                                      id="name"
                                      name="name"
                                      placeholder="Your name"
                                  />
                              </div>

                              <div className="contact-form-group">
                                  <label htmlFor="email">Email</label>
                                  <input
                                      type="email"
                                      id="email"
                                      name="email"
                                      placeholder="Your email"
                                  />
                              </div>

                              <div className="contact-form-group">
                                  <label htmlFor="phone">Phone</label>
                                  <input
                                      type="tel"
                                      id="phone"
                                      name="phone"
                                      placeholder="Your phone number"
                                  />
                              </div>

                              <div className="contact-form-group">
                                  <label htmlFor="message">Message</label>
                                  <textarea
                                      id="message"
                                      name="message"
                                      rows={6}
                                      placeholder="How can I help?"
                                  />
                              </div>

                              <button type="submit" className="contact-form-button">
                                  SEND MESSAGE
                                  <span>→</span>
                              </button>

                          </form>
                      </div>

                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}