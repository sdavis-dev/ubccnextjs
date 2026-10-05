import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bio",
};

export default function Bio() {
  return (
    <>
      <Navbar />

            <main className="bio-page">

                <section className="bio-intro">
                    <div className="bio-intro-content">

                        <div className="bio-intro-image">
                            <Image
                                src="/images/IMG_7726.jpeg"
                                alt="Kimberly A. Houston"
                                fill
                                sizes="(max-width: 900px) 100vw, 50vw"
                            />
                        </div>

                        <div className="bio-intro-text">
                            <p className="bio-eyebrow">
                                ABOUT KIMBERLY
                            </p>

                            <h1>
                                Kimberly A. Houston
                            </h1>

                            <p>
                                Kimberly A. Houston is the proud mother of two young adults.
                                She is an Evangelist, Motivational Speaker, Life Coach
                                and Entrepreneur. She also served 8 years on the
                                Meridian City Council and continues to serve in leadership roles on various boards and organizations
                            </p>
                        </div>

                    </div>
                </section>
                <section className="bio-hope-dealer">
                    <div className="bio-hope-dealer-content">

                      <p className="bio-eyebrow">
                          THE HOPE DEALER
                      </p>

                      <h2>
                          Kimberly has gained the title of <i>“The Hope Dealer”</i>
                      </h2>

                      <p>
                          because she is committed to helping people rise to the next level in
                          every area of their lives.
                      </p>

                      <p className="bio-mission">
                          Her mission in three words: Impact - Inspire - Transform.
                      </p>

                    </div>
                </section>

                <section className="bio-education">
                  <div className="bio-education-content">

                    <div className="bio-education-heading">
                      <p className="bio-eyebrow">
                        EDUCATION & ENTREPRENEURSHIP
                      </p>

                      <h2>
                        A Foundation for Leadership.
                      </h2>
                    </div>

                    <div className="bio-education-text">
                      <p>
                        She is a graduate of The University of West
                        Alabama and has owned and operated Houston Insurance
                        Agency, LLC since December 1998. As a leader among her peers,
                        Kimberly has been named Who's Who among Executives and Professionals.
                      </p>
                    </div>

                  </div>
                </section>
                <section className="bio-leadership">
                  <div className="bio-leadership-content">

                    <div className="bio-leadership-heading">
                      <p className="bio-eyebrow">
                        LEADERSHIP & COMMUNITY
                      </p>

                      <h2>
                        Serving Others. Building Community.
                      </h2>
                    </div>

                    <div className="bio-leadership-text">
                      <p>
                        Kim continues to take an active interest in the welfare of youth by serving on the
                        Meridian Public School District Board of Trustees, the Meridian Lauderdale
                        County Public Library Board and she is the founder of (SDLA) Sarah’s Daughters
                        Leadership Academy. She also supports individuals with disabilities through her
                        involvement with the Meridian First Ladies Civitan Club.
                      </p>
                    </div>

                  </div>
                </section>
                <section className="bio-ministry">
                  <div className="bio-ministry-content">

                    <div className="bio-ministry-heading">
                      <p className="bio-eyebrow">
                        MINISTRY & SPIRITUAL ENRICHMENT
                      </p>

                      <h2>
                        Faith. Service. Spiritual Growth.
                      </h2>
                    </div>

                    <div className="bio-ministry-text">
                      <p>
                        Evangelist Houston is the daughter of Pastor James &amp; Rebecca Barney, and
                        founder of Upward Bound Ministries. You can listen to her every Sunday morning
                        at 7:00CST on 95.1FM The Beat <a href="https://www.thebeat951.com">here</a>.
                        If Spiritual Enrichment is what you need, join her via Facebook Live 8:00 CST
                        Wednesday nights for virtual Bible Study <a href="https://facebook.com/iamupwardbound">here</a>.
                        You can also make plans to travel with her to Gatlinburg, TN for her annual
                        Spiritual Renewal retreat.
                      </p>
                    </div>

                  </div>
                </section>
                <section className="bio-faith">
                  <div className="bio-faith-content">

                    <p className="bio-eyebrow">
                      FAITH & SERVICE
                    </p>

                    <h2>
                      Faith That Shapes Her Service.
                    </h2>

                    <p>
                      She is a proud member of the Agape Storehouse Apostolic Church under the
                      dynamic leadership and covering of Apostle John &amp; Linda Willis. There
                      she serves as the Single’s Ministry Director.
                    </p>

                  </div>
                </section>
                <section className="bio-motto">
                  <div className="bio-motto-content">

                    <p className="bio-eyebrow">
                      HER MOTTO
                    </p>

                    <p className="bio-motto-intro">
                      In closing, Kimberly's motto is:
                    </p>

                    <blockquote>
                      "I'm just an ordinary woman, doing extraordinary things for the Glory of God and betterment of community!"
                    </blockquote>

                  </div>
                </section>
            </main>
            <Footer />
    </>
  );
}