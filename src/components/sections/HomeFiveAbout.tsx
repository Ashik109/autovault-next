import Link from "next/link";
export default function HomeFiveAbout() {
  return (
    <section id="about" className="rts-about-area three rts-section-gapTop">
      <div className="container">
        <div className="section-title-area">
          <p
            className="sub-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            {"About Us"}
          </p>

          <h2 className="section-title cw move-right" data-aos="move-right">
            {"Get Your Shine On Visit Our "}
            <span>{"Car"}</span>
            {" Wash Today "}
          </h2>
        </div>

        <div className="section-inner d-flex align-items-start mt--80">
          <div
            className="about-image-area"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <img src="/assets/images/about/08.webp" width="704" alt="" />

            <Link
              prefetch={false}
              href="/about"
              className="rts-btn btn-primary"
            >
              {"Get Started Now"}
            </Link>
          </div>

          <div className="about-content-area">
            <p className="desc">
              {
                " Welcome to Autovault where your car’s shine is our passion! of it At we believe that a clean car is more than just a shiny exteriorit’s a reflection of pride, care, and attention to detail. Established in 1999, our mission has always been simple to provide the best car wash experience with exceptional service, cutting-edge for it of technology, and eco-friendly practices. "
              }
            </p>

            <div className="call-area">
              <h5 className="cw">{"Call for book"}</h5>

              <a href="tel:+12505550199">{"+12505550199"}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
