import Link from "next/link";
export default function HomeFiveBannerSliderArea2() {
  return (
    <section id="home" className="rts-banner-slider-area2">
      <div className="swiper bannerSlider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="rts-banner-wrapper bg bg-two">
              <div className="container">
                <div className="banner-inner">
                  <h1 className="section-title cw">
                    {"Clean with Our Exclusive "}
                    <span>{"Car"}</span>
                    {" Wash"}
                  </h1>

                  <p className="desc">
                    {
                      "Welcome to Autovault where innovation drives every journey. Discover a range of designed to elevate your driving experience."
                    }
                  </p>

                  <div className="button-area">
                    <Link
                      prefetch={false}
                      href="/contact"
                      className="rts-btn btn-primary"
                    >
                      {"Get Started Now"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="rts-banner-wrapper bg bg-five">
              <div className="container">
                <div className="banner-inner">
                  <h1 className="section-title cw">
                    {"Clean with Our Exclusive "}
                    <span>{"Car"}</span>
                    {" Wash"}
                  </h1>

                  <p className="desc">
                    {
                      "Welcome to Autovault where innovation drives every journey. Discover a range of designed to elevate your driving experience."
                    }
                  </p>

                  <div className="button-area">
                    <Link
                      prefetch={false}
                      href="/contact"
                      className="rts-btn btn-primary"
                    >
                      {"Get Started Now"}
                    </Link>
                  </div>
                </div>
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
    </section>
  );
}
