import Link from "next/link";
export default function HomeThreeStatistics() {
  return (
    <section className="rts-statistics-area rts-section-gapTop">
      <div className="container">
        <div className="section-title-area">
          <p
            className="sub-title wow fadeInUp"
            data-wow-delay=".1s"
            data-wow-duration=".8s"
          >
            {"Our Statistics"}
          </p>

          <h2 className="section-title wow move-right">
            {" Countdown to Savings: Don’t Miss Out on Exclusive "}
            <span>{"Car"}</span>
            {" Deals "}
          </h2>
        </div>

        <div className="section-inner mt--60">
          <div className="row">
            <div className="col-lg-4">
              <div className="left-text">
                <p className="desc">
                  {
                    "Welcome to Autovault where innovation drives every journey. Discover a range of designed to elevate your driving experience. "
                  }
                </p>

                <Link
                  prefetch={false}
                  href="/about"
                  className="rts-btn btn-primary radius-small"
                >
                  {"Learn More"}
                </Link>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="right-content">
                <div className="counter-inner">
                  <div
                    className="inner wow zoomIn"
                    data-wow-delay=".2s"
                    data-wow-duration="1s"
                  >
                    <div className="icon">
                      <img
                        src="/assets/images/counter/icon-01.svg"
                        width="74"
                        alt=""
                      />
                    </div>

                    <div className="text">
                      <h3 className="title">
                        <span className="counter">{"320"}</span>
                        <span>{"M"}</span>
                      </h3>

                      <p className="desc">{"Cars For Sale"}</p>
                    </div>
                  </div>

                  <div
                    className="inner wow zoomIn"
                    data-wow-delay=".4s"
                    data-wow-duration="1s"
                  >
                    <div className="icon">
                      <img src="/assets/images/counter/icon-02.svg" alt="" />
                    </div>

                    <div className="text">
                      <h3 className="title">
                        <span className="counter">{"5500"}</span>
                        <span>{"+"}</span>
                      </h3>

                      <p className="desc">{"Dealer Review"}</p>
                    </div>
                  </div>

                  <div
                    className="inner wow zoomIn"
                    data-wow-delay=".6s"
                    data-wow-duration="1s"
                  >
                    <div className="icon">
                      <img src="/assets/images/counter/icon-03.svg" alt="" />
                    </div>

                    <div className="text">
                      <h3 className="title">
                        <span className="counter">{"300"}</span>
                        <span>{"M"}</span>
                      </h3>

                      <p className="desc">{"Verified User"}</p>
                    </div>
                  </div>

                  <div
                    className="inner wow zoomIn"
                    data-wow-delay=".8s"
                    data-wow-duration="1s"
                  >
                    <div className="icon">
                      <img src="/assets/images/counter/icon-04.svg" alt="" />
                    </div>

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

      <div className="shape">
        <img src="/assets/images/about/line.svg" alt="" />
      </div>
    </section>
  );
}
