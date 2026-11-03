export default function HomeTwoAppDownload() {
  return (
    <section className="rts-app-download-area rts-section-gap">
      <div className="container">
        <div className="section-inner">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="left-side-content">
                <div className="section-title-area">
                  <p
                    className="sub-title"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="800"
                  >
                    {"App Download"}
                  </p>

                  <h2
                    className="section-title cw move-right"
                    data-aos="move-right"
                  >
                    {"Download Our App Today For "}
                    <span>{"IOS"}</span>
                    {" and "}
                    <span>{"Android"}</span>
                  </h2>
                </div>

                <p
                  className="desc cg"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="800"
                >
                  {
                    "Welcome to Autovault where innovation drives every journey. Discover a range of designed to elevate your driving experience."
                  }
                </p>

                <div className="button-area">
                  <a href="#">
                    <img src="/assets/images/about/app-store.svg" alt="" />
                  </a>

                  <a href="#">
                    <img src="/assets/images/about/play-store.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 order-change">
              <div
                className="right-side-image"
                data-aos="zoom-out"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                <img
                  src="/assets/images/about/app_img.webp"
                  width="542"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
