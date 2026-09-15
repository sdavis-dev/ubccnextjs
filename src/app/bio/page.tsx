import Image from "next/image";
import Link from "next/link";
import Script from 'next/script';

export default function Bio() {
  return (
    <>
      <header>
        <nav className="navbar section-content">
          <Link href="/" className="nav-logo">
            <Image
              src="/images/ublogo nobg.png"
              alt="Upward Bound Consulting & Coaching"
              width = {75}
              height = {75}
            />
          </Link>

          <ul className="nav-menu">
            <button
              id="menu-close-button"
              className="fas fa-times"
            ></button>

            <li className="nav-item">
              <Link href="/bio" className="nav-link">
                Bio
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/calendar" className="nav-link">
                Calendar
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/payment" className="nav-link">
                Payment
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/events" className="nav-link">
                Upcoming Events
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/booking" className="nav-link">
                Booking
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/ministries" className="nav-link">
                Ministries (non-profit)
              </Link>
            </li>
          </ul>

          <button
            id="menu-open-button"
            className="fas fa-bars"
          ></button>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="section-content">
            <div className="hero-details">
              <h2 className="title">Bio</h2>

              <div className="hero-image-wrapper">
                <Image
                  src="/images/kah.jpg"
                  alt="Kimberly A. Houston"
                  fill
                  sizes="(max-width: 500px) 100vw, 500px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <p className="description">
                <b>K</b>imberly A. Houston is the proud mother of two young adults. She
                is an Evangelist, Motivational Speaker, Life Coach
                and Entrepreneur. She also served 8 years on the
                Meridian City Council and continues to serve in leadership roles on various boards and organizations

                <br />
                <br />

                Kimberly has gained the title of <i>“The Hope
                Dealer”</i> because she is committed to helping people rise to the next level in
                every area of their lives. <br />Her mission in three words: Impact - Inspire - Transform.

                <br />
                <br />

                She is a graduate of The University of West
                Alabama and has owned and operated Houston Insurance
                Agency, LLC since December 1998. As a leader among her peers,
                Kimberly has been named Who's Who among Executives and Professionals.

                <br />
                <br />

                Kim continues to take an active interest in the welfare of youth by serving on the
                Meridian Public School District Board of Trustees, the Meridian Lauderdale
                County Public Library Board and she is the founder of (SDLA) Sarah’s Daughters
                Leadership Academy. She also supports individuals with disabilities through her
                involvement with the Meridian First Ladies Civitan Club.

                <br />
                <br />

                Evangelist Houston is the daughter of Pastor James &amp; Rebecca Barney, and
                founder of Upward Bound Ministries. You can listen to her every Sunday morning
                at 7:00CST on 95.1FM The Beat <a href="https://www.thebeat951.com">here</a>. If Spiritual Enrichment is what you
                need, join her via Facebook Live 8:00 CST Wednesday nights for virtual Bible at
                Study <a href="https://facebook.com/iamupwardbound">here</a>. You can also make plans to travel
                with her to Gatlinburg, TN for her annual Spiritual Renewal retreat.

                <br />
                <br />

                She is a proud member of the Agape Storehouse Apostolic Church under the
                dynamic leadership and covering of Apostle John &amp; Linda Willis. There she serves
                as the Single’s Ministry Director.

                <br />
                <br />

                In closing, Kimberly's motto is: <br />
                <i>"I'm just an ordinary woman, doing extraordinary things for God and community!"</i>
              </p>
            </div>
          </div>
        </section>
        
      </main>
      <footer className="footer-section">
        <div className="container">
          <ul className="flex-row">
            <li>
              <a href="https://www.facebook.com/iAmUpwardBound/" className="social-link"><i className="fab fa-facebook"></i></a>
            </li>
            <li>
              <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
            </li>
          </ul>
          <p>&copy; 2026 Upward Bounds Consulting & Coaching</p>
          </div>
        </footer>
      <Script
        src="/scripts/script.js"
        strategy="afterInteractive"
        />
    </>
  );
}