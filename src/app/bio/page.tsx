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
                <b>K</b>imberly A. Houston is the mother of one college
                graduate and one college sophomore student. She
                is an Evangelist, Motivational Speaker, Life Coach
                and Entrepreneur. She also served 8 years on the
                Meridian City Council. She is currently seeking the
                office of Lauderdale County Circuit Clerk.

                <br />
                <br />

                Kimberly has gained the title of <i>“The Great
                Motivator”</i> because her ultimate goal is to impact,
                inspire, and transform lives for the betterment of
                our entire community and the glory of God.

                <br />
                <br />

                She is a graduate of The University of West
                Alabama and has owned and operated Houston Insurance
                Agency, LLC since December 1998. Kimberly has been
                named Who’s Who among Executives and Professionals.

                <br />
                <br />

                Kim continues to take an active interest in the welfare
                of youth by serving as President of the Meridian Public
                School District Board of Trustees, the President of the
                Meridian Lauderdale County Public Library Board and she
                is the founder of (SDLA) Sarah’s Daughters Leadership
                Academy.

                <br />
                <br />

                As you can see, she loves to serve and as President of
                the Meridian First Ladies Civitan Club she is committed
                to helping individuals with disabilities.

                <br />
                <br />

                Evangelist Houston is the daughter of Pastor James &
                Rebecca Barney, and founder of Upward Bound Ministries.
                You can listen to her every Sunday at 7AM on 95.1FM.
                If you have Facebook, you can join her 8pm Wednesday
                night virtual Bible Study. And when you need spiritual
                enrichment or mentorship join her on one of her annual
                retreats to Gatlinburg, TN.

                <br />
                <br />

                She is a proud member of the Agape Storehouse Apostolic
                Church under the dynamic leadership of Apostle John &
                Linda Willis. There she serves as the Single’s Ministry
                Director.

                <br />
                <br />

                In closing, Kimberly's motto is: <br />
                <i>"I'm just an ordinary woman, doing extraordinary things for God!"</i>
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