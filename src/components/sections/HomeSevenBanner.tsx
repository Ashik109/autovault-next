import Link from "next/link";
export default function HomeSevenBanner() {
  return (
    <section className="rts-banner-area banner-slider-area4">
      <div className="swiper bannerSlider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="rts-banner-wrapper bg bg_image_three">
              <div className="container">
                <div className="banner-area-one bg_image">
                  <div className="banner-content-area">
                    <div className="pre-title">
                      <span>{"$500.00"}</span>
                    </div>

                    <h1 className="title">{"Mazda MX-5 Miata"}</h1>

                    <ul className="feature-area">
                      <li>
                        <img
                          src="/assets/images/portfolio/feature-icon/05.svg"
                          width="56"
                          alt=""
                        />
                        {" 100 Miles "}
                      </li>

                      <li>
                        <img
                          src="/assets/images/portfolio/feature-icon/06.svg"
                          width="39"
                          alt=""
                        />
                        {" Petrol "}
                      </li>

                      <li>
                        <img
                          src="/assets/images/portfolio/feature-icon/07.svg"
                          width="36"
                          alt=""
                        />
                        {" Autometic "}
                      </li>
                    </ul>

                    <div className="button-area">
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
          </div>

          <div className="swiper-slide">
            <div className="rts-banner-wrapper bg bg_image_four">
              <div className="container">
                <div className="banner-area-one bg_image">
                  <div className="banner-content-area">
                    <div className="pre-title">
                      <span>{"$500.00"}</span>
                    </div>

                    <h1 className="title">{"Honda Civic Hatchback"}</h1>

                    <ul className="feature-area">
                      <li>
                        <img
                          src="/assets/images/portfolio/feature-icon/05.svg"
                          width="56"
                          alt=""
                        />
                        {" 100 Miles "}
                      </li>

                      <li>
                        <img
                          src="/assets/images/portfolio/feature-icon/06.svg"
                          width="39"
                          alt=""
                        />
                        {" Petrol "}
                      </li>

                      <li>
                        <img
                          src="/assets/images/portfolio/feature-icon/07.svg"
                          width="36"
                          alt=""
                        />
                        {" Autometic "}
                      </li>
                    </ul>

                    <div className="button-area">
                      <Link
                        prefetch={false}
                        href="/about"
                        className="rts-btn btn-primary radius-small"
                      >
                        {"Learn More"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="rts-banner-wrapper bg bg_image_five">
              <div className="container">
                <div className="banner-area-one bg_image">
                  <div className="banner-content-area">
                    <div className="pre-title">
                      <span>{"$500.00"}</span>
                    </div>

                    <h1 className="title">{"Volkswagen. 1938"}</h1>

                    <ul className="feature-area">
                      <li>
                        <img
                          src="/assets/images/portfolio/feature-icon/05.svg"
                          width="56"
                          alt=""
                        />
                        {" 100 Miles "}
                      </li>

                      <li>
                        <img
                          src="/assets/images/portfolio/feature-icon/06.svg"
                          width="39"
                          alt=""
                        />
                        {" Petrol "}
                      </li>

                      <li>
                        <img
                          src="/assets/images/portfolio/feature-icon/07.svg"
                          width="36"
                          alt=""
                        />
                        {" Autometic "}
                      </li>
                    </ul>

                    <div className="button-area">
                      <Link
                        prefetch={false}
                        href="/about"
                        className="rts-btn btn-primary radius-small"
                      >
                        {"Learn More"}
                      </Link>
                    </div>
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
