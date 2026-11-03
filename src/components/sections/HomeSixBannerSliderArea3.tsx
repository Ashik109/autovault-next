import Link from "next/link";
export default function HomeSixBannerSliderArea3() {
  return (
    <section id="home" className="rts-banner-slider-area3">
      <div className="container">
        <div className="banner-left-area">
          <div className="swiper rts-imageSlider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="banner-image-area3">
                  <img
                    src="/assets/images/banner/banner-slider-bg-03.webp"
                    width="848"
                    alt=""
                  />
                </div>
              </div>

              <div className="swiper-slide">
                <div className="banner-image-area3">
                  <img
                    src="/assets/images/banner/banner-slider-bg-06.webp"
                    width="848"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-btn-area">
            <div className="swiper-btn swiper-button-prev">
              <img src="/assets/images/banner/arrow-left.svg" alt="" />
            </div>

            <div className="swiper-btn swiper-button-next">
              <img src="/assets/images/banner/arrow-right.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="row justify-content-end">
          <div className="col-lg-6">
            <div className="swiper rts-testimonialSlider3">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="section-title-area">
                    <h1
                      className="section-title move-right"
                      data-aos="move-right"
                    >
                      {"Fast, Affordable And Expert Auto "}
                      <span>{" Car"}</span>
                      {" Repair"}
                    </h1>

                    <p className="desc">
                      {
                        " Welcome to Autovault where innovation drives every journey. Discover a range of designed to elevate your driving experience. "
                      }
                    </p>

                    <Link
                      prefetch={false}
                      href="/contact"
                      className="rts-btn btn-primary radius-small"
                    >
                      {"Get Started Now"}
                    </Link>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="section-title-area">
                    <h1
                      className="section-title move-right"
                      data-aos="move-right"
                    >
                      {"Fast, Affordable And Expert Auto "}
                      <span>{" Car"}</span>
                      {" Repair"}
                    </h1>

                    <p className="desc">
                      {
                        " Welcome to Autovault where innovation drives every journey. Discover a range of designed to elevate your driving experience. "
                      }
                    </p>

                    <Link
                      prefetch={false}
                      href="/contact"
                      className="rts-btn btn-primary radius-small"
                    >
                      {"Get Started Now"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
