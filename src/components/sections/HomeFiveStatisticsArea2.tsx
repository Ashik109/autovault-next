export default function HomeFiveStatisticsArea2() {
  return (
    <section className="rts-statistics-area2 rts-section-gapTop">
      <div className="container">
        <div className="section-title-area">
          <p
            className="sub-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            {"Our Statistics"}
          </p>

          <h2 className="section-title cw move-right" data-aos="move-right">
            {" Countdown to Savings: Don’t Miss Out on Exclusive "}
            <span>{"Car"}</span>
            {" Deals "}
          </h2>
        </div>

        <div className="section-inner mt--60">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-image">
                <img src="/assets/images/about/09.webp" alt="" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="right-content">
                <p className="desc cw">
                  {
                    "Our team of dedicated professionals understands that every vehicle is unique, and we treat each car with the same level of care as if it were our own."
                  }
                </p>

                <div className="counter-inner">
                  <div
                    className="inner"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                  >
                    <div className="text">
                      <h3 className="title">
                        <span className="counter">{"320"}</span>
                        <span>{"M"}</span>
                      </h3>

                      <p className="desc">{"Cars For Sale"}</p>
                    </div>
                  </div>

                  <div
                    className="inner"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                  >
                    <div className="text">
                      <h3 className="title">
                        <span className="counter">{"5500"}</span>
                        <span>{"+"}</span>
                      </h3>

                      <p className="desc">{"Dealer Review"}</p>
                    </div>
                  </div>

                  <div
                    className="inner"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                  >
                    <div className="text">
                      <h3 className="title">
                        <span className="counter">{"300"}</span>
                        <span>{"M"}</span>
                      </h3>

                      <p className="desc">{"Verified User"}</p>
                    </div>
                  </div>

                  <div
                    className="inner"
                    data-aos="zoom-in"
                    data-aos-delay="800"
                    data-aos-duration="1000"
                  >
                    <div className="text">
                      <h3 className="title">
                        <span className="counter">{"10"}</span>
                        <span>{"M"}</span>
                      </h3>

                      <p className="desc">{"Visitor Per Day"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="shape"
        data-aos="slide-left"
        data-aos-delay="700"
        data-aos-duration="800"
      >
        <img src="/assets/images/about/shape-01.svg" alt="" />
      </div>
    </section>
  );
}
