import Link from "next/link";
export default function HomeTwoAbout() {
  return (
    <section className="rts-about-area two rts-section-gap">
      <div className="container">
        <div className="section-inner">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image-area-two">
                <div
                  className="left"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                >
                  <img src="/assets/images/about/04.webp" width="339" alt="" />
                </div>

                <div
                  className="right"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                >
                  <img src="/assets/images/about/05.webp" width="280" alt="" />

                  <div className="counter-area">
                    <h2 className="title">
                      <span className="counter">{"1000"}</span>
                      <span>{"+"}</span>
                    </h2>

                    <p className="desc">{"Car Sold Already"}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content-area">
                <div className="section-title-area">
                  <p
                    className="sub-title"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    {"About Us"}
                  </p>

                  <h2
                    className="section-title cw move-right"
                    data-aos="move-right"
                  >
                    {"Driven by Excellence: Your Trusted Partner for Premium "}
                    <span>{"Vehicles"}</span>
                  </h2>
                </div>

                <p
                  className="desc dbc"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="1000"
                >
                  {
                    "Welcome to Autovault where innovation drives every journey. Discover a range of designed to elevate your driving experience."
                  }
                </p>

                <Link
                  prefetch={false}
                  href="/about"
                  className="rts-btn btn-primary radius-small"
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-duration="1000"
                >
                  {"Learn More"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-shape-area">
        <img src="/assets/images/category/shape/shape-01.svg" alt="" />

        <img src="/assets/images/category/shape/shape-02.svg" alt="" />
      </div>
    </section>
  );
}
