import Link from "next/link";
export default function HomeEightAbout() {
  return (
    <section className="rts-about-area rts-section-gapBottom">
      <div className="container">
        <div className="section-inner">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="about-image-area">
                <div className="image-main">
                  <img
                    className="wow scaleIn"
                    data-wow-delay=".5s"
                    data-wow-duration="1.5s"
                    src="/assets/images/about/03.webp"
                    width="371"
                    alt=""
                  />

                  <div className="counter-area">
                    <div
                      className="inner wow zoomIn"
                      data-wow-delay=".9s"
                      data-wow-duration="1s"
                    >
                      <h2 className="title">
                        <span className="counter">{"1000"}</span>
                        <span>{"+"}</span>
                      </h2>

                      <p className="desc">{"Car Sold Already"}</p>
                    </div>
                  </div>
                </div>

                <img
                  src="/assets/images/about/01.webp"
                  alt=""
                  width="223"
                  className="floating-img-01 wow scaleIn"
                  data-wow-delay=".5s"
                  data-wow-duration="1.5s"
                />

                <img
                  src="/assets/images/about/02.webp"
                  alt=""
                  width="266"
                  className="floating-img-02 wow scaleIn"
                  data-wow-delay=".5s"
                  data-wow-duration="1.5s"
                />
              </div>
            </div>

            <div className="col-lg-7">
              <div className="about-content-area">
                <div className="section-title-area">
                  <p
                    className="sub-title wow fadeInUp"
                    data-wow-delay=".1s"
                    data-wow-duration=".8s"
                  >
                    {"About Us"}
                  </p>

                  <h2 className="section-title wow move-right">
                    {"Driven by Excellence: Your Trusted Partner for Premium "}
                    <span>{"Vehicles"}</span>
                  </h2>
                </div>

                <p className="desc">
                  {
                    "Welcome to Autovault where innovation drives every journey. Discover a range of designed to elevate your driving experience."
                  }
                </p>

                <Link
                  prefetch={false}
                  href="/about"
                  className="rts-btn btn-primary radius-big"
                >
                  {"Learn More"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
