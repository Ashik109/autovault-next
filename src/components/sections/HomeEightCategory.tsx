export default function HomeEightCategory() {
  return (
    <section className="rts-category-area rts-section-gap">
      <div className="container">
        <div className="section-title-area">
          <p
            className="sub-title wow fadeInUp"
            data-wow-delay=".1s"
            data-wow-duration=".8s"
          >
            {"Car Category"}
          </p>

          <h2 className="section-title wow move-right">
            {"Browse By "}
            <span>{"Car"}</span>
            {" Type"}
          </h2>
        </div>

        <div
          className="section-inner wow fadeInUp"
          data-wow-delay=".3s"
          data-wow-duration="1s"
        >
          <div className="swiper category-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="category-wrapper">
                  <div className="icon">
                    <img src="/assets/images/category/01.svg" alt="" />
                  </div>

                  <h6 className="title">
                    <a href="#">{"Hatchback"}</a>
                  </h6>

                  <p className="desc">{"30+ Car"}</p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="category-wrapper">
                  <div className="icon">
                    <img src="/assets/images/category/02.svg" alt="" />
                  </div>

                  <h6 className="title">
                    <a href="#">{"Minivans"}</a>
                  </h6>

                  <p className="desc">{"20+ Car"}</p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="category-wrapper">
                  <div className="icon">
                    <img src="/assets/images/category/03.svg" alt="" />
                  </div>

                  <h6 className="title">
                    <a href="#">{"Luxury Cars"}</a>
                  </h6>

                  <p className="desc">{"15+ Car"}</p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="category-wrapper">
                  <div className="icon">
                    <img src="/assets/images/category/04.svg" alt="" />
                  </div>

                  <h6 className="title">
                    <a href="#">{"Sedans"}</a>
                  </h6>

                  <p className="desc">{"25+ Car"}</p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="category-wrapper">
                  <div className="icon">
                    <img src="/assets/images/category/05.svg" alt="" />
                  </div>

                  <h6 className="title">
                    <a href="#">{"Convertible"}</a>
                  </h6>

                  <p className="desc">{"55+ Car"}</p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="category-wrapper">
                  <div className="icon">
                    <img src="/assets/images/category/06.svg" alt="" />
                  </div>

                  <h6 className="title">
                    <a href="#">{"Sports Car"}</a>
                  </h6>

                  <p className="desc">{"35+ Car"}</p>
                </div>
              </div>
            </div>

            <div className="swiper-pagination"></div>
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
