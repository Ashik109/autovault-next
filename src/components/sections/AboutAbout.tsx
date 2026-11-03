export default function AboutAbout() {
  return (
    <section className="rts-about-area inner two rts-section-gapTop">
      <div className="container">
        <div className="section-inner">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image-area-two">
                <div
                  className="left wow scaleIn"
                  data-wow-delay=".5s"
                  data-wow-duration="1s"
                >
                  <img src="/assets/images/about/12.webp" width="339" alt="" />
                </div>

                <div
                  className="right wow scaleIn"
                  data-wow-delay=".5s"
                  data-wow-duration="1s"
                >
                  <img src="/assets/images/about/13.webp" width="280" alt="" />

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
                    className="sub-title wow fadeInUp"
                    data-wow-delay=".1s"
                    data-wow-duration="1s"
                  >
                    {"About Us"}
                  </p>

                  <h2 className="section-title wow move-right">
                    {"Driven by Excellence: Your Trusted Partner for Premium "}
                    <span>{"Vehicles"}</span>
                  </h2>
                </div>

                <p
                  className="desc wow fadeInUp"
                  data-wow-delay=".4s"
                  data-wow-duration="1s"
                >
                  {
                    "Welcome to Autovault where innovation drives every journey. Discover a range of designed to elevate your driving experience."
                  }
                </p>

                <a
                  href="tel:+12505550199"
                  className="rts-btn call-btn wow fadeInUp"
                  data-wow-delay=".6s"
                  data-wow-duration="1s"
                >
                  <span>
                    <i className="fa-regular fa-phone"></i>
                  </span>

                  <div className="content">
                    <h6>{"Call Us Now"}</h6>

                    <p>{"+12505550199"}</p>
                  </div>
                </a>
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
