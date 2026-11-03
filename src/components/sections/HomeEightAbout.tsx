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
                    className=""

                    src="/assets/images/about/03.webp"
                    width="371"
                    alt=""
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-duration="1500"
                  />

                  <div className="counter-area">
                    <div
                      className="inner"
                      data-aos="zoom-in"
                      data-aos-delay="900"
                      data-aos-duration="1000"
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
                  className="floating-img-01"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  data-aos-duration="1500"
                />

                <img
                  src="/assets/images/about/02.webp"
                  alt=""
                  width="266"
                  className="floating-img-02"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  data-aos-duration="1500"
                />
              </div>
            </div>

            <div className="col-lg-7">
              <div className="about-content-area">
                <div className="section-title-area">
                  <p
                    className="sub-title"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="800"
                  >
                    {"About Us"}
                  </p>

                  <h2
                    className="section-title move-right"
                    data-aos="move-right"
                  >
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
