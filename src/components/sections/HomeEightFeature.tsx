import Link from "next/link";
export default function HomeEightFeature() {
  return (
    <section className="rts-feature-area rts-section-gap">
      <div className="container">
        <div className="section-title-area2">
          <p
            className="sub-title wow fadeInUp"
            data-wow-delay=".1s"
            data-wow-duration=".8s"
          >
            {"Featured Car"}
          </p>

          <h2 className="section-title wow move-right">
            {"Our Featured "}
            <span>{"Car"}</span>
          </h2>
        </div>

        <div
          className="slider-area mt--80 wow fadeInUp"
          data-wow-delay=".3s"
          data-wow-duration="1s"
        >
          <div className="swiper featureSlider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="feature-wrapper">
                  <div className="image-area">
                    <img
                      src="/assets/images/feature/slider-01.webp"
                      width="961"
                      alt=""
                    />
                  </div>

                  <div className="content-area">
                    <span className="dot"></span>

                    <h6 className="title">
                      <Link
                        prefetch={false}
                        href="/portfolio-details/thunderbolt-car"
                      >
                        {"Thunderbolt Car"}
                      </Link>
                    </h6>

                    <ul className="feature-area">
                      <li>
                        <img
                          src="/assets/images/portfolio/feature-icon/01.svg"
                          alt=""
                        />
                        {" 100 Miles "}
                      </li>

                      <li>
                        <img
                          src="/assets/images/portfolio/feature-icon/03.svg"
                          alt=""
                        />
                        {" Autometic "}
                      </li>

                      <li>
                        <img
                          src="/assets/images/portfolio/feature-icon/04.svg"
                          alt=""
                        />
                        {" 5 Person "}
                      </li>
                    </ul>

                    <Link
                      prefetch={false}
                      href="/portfolio-details/thunderbolt-car"
                      className="rts-btn radius-big"
                    >
                      {"View Details"}
                    </Link>
                  </div>

                  <img
                    src="/assets/images/feature/round-shape.svg"
                    alt=""
                    className="shape"
                  />
                </div>
              </div>

              <div className="swiper-slide">
                <div className="feature-wrapper">
                  <div className="image-area">
                    <img
                      src="/assets/images/feature/slider-02.webp"
                      width="961"
                      alt=""
                    />
                  </div>

                  <div className="content-area">
                    <span className="dot"></span>

                    <h6 className="title">
                      <Link
                        prefetch={false}
                        href="/portfolio-details/mazda-mx-5-miata"
                      >
                        {"Mazda MX-5 Miata"}
                      </Link>
                    </h6>

                    <ul className="feature-area">
                      <li>
                        <img
                          src="/assets/images/portfolio/feature-icon/01.svg"
                          alt=""
                        />
                        {" 100 Miles "}
                      </li>

                      <li>
                        <img
                          src="/assets/images/portfolio/feature-icon/03.svg"
                          alt=""
                        />
                        {" Autometic "}
                      </li>

                      <li>
                        <img
                          src="/assets/images/portfolio/feature-icon/04.svg"
                          alt=""
                        />
                        {" 5 Person "}
                      </li>
                    </ul>

                    <Link
                      prefetch={false}
                      href="/portfolio-details/mazda-mx-5-miata"
                      className="rts-btn radius-big"
                    >
                      {"View Details"}
                    </Link>
                  </div>

                  <img
                    src="/assets/images/feature/round-shape.svg"
                    alt=""
                    className="shape"
                  />
                </div>
              </div>

              <div className="swiper-slide">
                <div className="feature-wrapper">
                  <div className="image-area">
                    <img
                      src="/assets/images/feature/slider-03.webp"
                      width="961"
                      alt=""
                    />
                  </div>

                  <div className="content-area">
                    <span className="dot"></span>

                    <h6 className="title">
                      <Link
                        prefetch={false}
                        href="/portfolio-details/mercedes-benz-e-class"
                      >
                        {"Mercedes-Benz E-Class"}
                      </Link>
                    </h6>

                    <ul className="feature-area">
                      <li>
                        <img
                          src="/assets/images/portfolio/feature-icon/01.svg"
                          alt=""
                        />
                        {" 100 Miles "}
                      </li>

                      <li>
                        <img
                          src="/assets/images/portfolio/feature-icon/03.svg"
                          alt=""
                        />
                        {" Autometic "}
                      </li>

                      <li>
                        <img
                          src="/assets/images/portfolio/feature-icon/04.svg"
                          alt=""
                        />
                        {" 5 Person "}
                      </li>
                    </ul>

                    <Link
                      prefetch={false}
                      href="/portfolio-details/mercedes-benz-e-class"
                      className="rts-btn radius-big"
                    >
                      {"View Details"}
                    </Link>
                  </div>

                  <img
                    src="/assets/images/feature/round-shape.svg"
                    alt=""
                    className="shape"
                  />
                </div>
              </div>

              <div className="swiper-slide">
                <div className="feature-wrapper">
                  <div className="image-area">
                    <img
                      src="/assets/images/feature/slider-04.webp"
                      width="961"
                      alt=""
                    />
                  </div>

                  <div className="content-area">
                    <span className="dot"></span>

                    <h6 className="title">
                      <Link
                        prefetch={false}
                        href="/portfolio-details/honda-civic-hatchback"
                      >
                        {"Honda Civic Hatchback"}
                      </Link>
                    </h6>

                    <ul className="feature-area">
                      <li>
                        <img
                          src="/assets/images/portfolio/feature-icon/01.svg"
                          alt=""
                        />
                        {" 100 Miles "}
                      </li>

                      <li>
                        <img
                          src="/assets/images/portfolio/feature-icon/03.svg"
                          alt=""
                        />
                        {" Autometic "}
                      </li>

                      <li>
                        <img
                          src="/assets/images/portfolio/feature-icon/04.svg"
                          alt=""
                        />
                        {" 5 Person "}
                      </li>
                    </ul>

                    <Link
                      prefetch={false}
                      href="/portfolio-details/honda-civic-hatchback"
                      className="rts-btn radius-big"
                    >
                      {"View Details"}
                    </Link>
                  </div>

                  <img
                    src="/assets/images/feature/round-shape.svg"
                    alt=""
                    className="shape"
                  />
                </div>
              </div>

              <div className="swiper-slide">
                <div className="feature-wrapper">
                  <div className="image-area">
                    <img
                      src="/assets/images/feature/slider-05.webp"
                      width="961"
                      alt=""
                    />
                  </div>

                  <div className="content-area">
                    <span className="dot"></span>

                    <h6 className="title">
                      <Link
                        prefetch={false}
                        href="/portfolio-details/hyundai-veloster"
                      >
                        {"Hyundai Veloster"}
                      </Link>
                    </h6>

                    <ul className="feature-area">
                      <li>
                        <img
                          src="/assets/images/portfolio/feature-icon/01.svg"
                          alt=""
                        />
                        {" 100 Miles "}
                      </li>

                      <li>
                        <img
                          src="/assets/images/portfolio/feature-icon/03.svg"
                          alt=""
                        />
                        {" Autometic "}
                      </li>

                      <li>
                        <img
                          src="/assets/images/portfolio/feature-icon/04.svg"
                          alt=""
                        />
                        {" 5 Person "}
                      </li>
                    </ul>

                    <Link
                      prefetch={false}
                      href="/portfolio-details/hyundai-veloster"
                      className="rts-btn radius-big"
                    >
                      {"View Details"}
                    </Link>
                  </div>

                  <img
                    src="/assets/images/feature/round-shape.svg"
                    alt=""
                    className="shape"
                  />
                </div>
              </div>
            </div>

            <div className="swiper-pagination-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
