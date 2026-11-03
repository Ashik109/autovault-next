export default function HomeSixPortfolio() {
  return (
    <section className="rts-portfolio-area area-5">
      <div className="container">
        <div className="section-inner pb--50 position-relative z-1">
          <div className="row g-5 align-items-end">
            <div className="col-lg-5">
              <div className="image-slider-area-one">
                <div className="swiper rts-imgSliderBig">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img src="/assets/images/portfolio/21.webp" alt="" />
                    </div>

                    <div className="swiper-slide">
                      <img src="/assets/images/portfolio/21.webp" alt="" />
                    </div>

                    <div className="swiper-slide">
                      <img src="/assets/images/portfolio/22.webp" alt="" />
                    </div>

                    <div className="swiper-slide">
                      <img src="/assets/images/portfolio/23.webp" alt="" />
                    </div>

                    <div className="swiper-slide">
                      <img src="/assets/images/portfolio/21.webp" alt="" />
                    </div>

                    <div className="swiper-slide">
                      <img src="/assets/images/portfolio/22.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 order-change">
              <div className="section-title-area3 mb--60">
                <p
                  className="sub-title wow fadeInUp"
                  data-wow-delay=".1s"
                  data-wow-duration="1s"
                >
                  {"Our Project"}
                </p>

                <h2 className="section-title wow move-right">
                  {"Car Repair "}
                  <span>{"Project"}</span>
                </h2>
              </div>

              <div className="image-slider-area-two">
                <div className="swiper rts-imgSliderSmall">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img src="/assets/images/portfolio/22-sm.webp" alt="" />
                    </div>

                    <div className="swiper-slide">
                      <img src="/assets/images/portfolio/23-sm.webp" alt="" />
                    </div>

                    <div className="swiper-slide">
                      <img src="/assets/images/portfolio/21-sm.webp" alt="" />
                    </div>

                    <div className="swiper-slide">
                      <img src="/assets/images/portfolio/22-sm.webp" alt="" />
                    </div>

                    <div className="swiper-slide">
                      <img src="/assets/images/portfolio/23-sm.webp" alt="" />
                    </div>

                    <div className="swiper-slide">
                      <img src="/assets/images/portfolio/21-sm.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
