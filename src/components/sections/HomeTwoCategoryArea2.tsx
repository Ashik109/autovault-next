export default function HomeTwoCategoryArea2() {
  return (
    <section className="rts-category-area2">
      <div className="container">
        <div className="section-title-area2">
          <p
            className="sub-title wow fadeInUp"
            data-wow-delay=".1s"
            data-wow-duration=".8s"
          >
            {"Car Category"}
          </p>

          <h2 className="section-title wow move-right cw">
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
          <div className="float-right">
            <div className="swiper category-slider2">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="category-wrapper2">
                    <div className="icon">
                      <img src="/assets/images/category/07.svg" alt="" />
                    </div>

                    <div className="text">
                      <h6 className="title cw">
                        <a href="#">{"Hatchback"}</a>
                      </h6>

                      <p className="desc">{"30+ Car"}</p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="category-wrapper2">
                    <div className="icon">
                      <img src="/assets/images/category/08.svg" alt="" />
                    </div>

                    <div className="text">
                      <h6 className="title cw">
                        <a href="#">{"Minivans"}</a>
                      </h6>

                      <p className="desc">{"20+ Car"}</p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="category-wrapper2">
                    <div className="icon">
                      <img src="/assets/images/category/09.svg" alt="" />
                    </div>

                    <div className="text">
                      <h6 className="title cw">
                        <a href="#">{"Luxury Cars"}</a>
                      </h6>

                      <p className="desc">{"15+ Car"}</p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="category-wrapper2">
                    <div className="icon">
                      <img src="/assets/images/category/10.svg" alt="" />
                    </div>

                    <div className="text">
                      <h6 className="title cw">
                        <a href="#">{"Sadans"}</a>
                      </h6>

                      <p className="desc">{"25+ Car"}</p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="category-wrapper2">
                    <div className="icon">
                      <img src="/assets/images/category/11.svg" alt="" />
                    </div>

                    <div className="text">
                      <h6 className="title cw">
                        <a href="#">{"Convertible"}</a>
                      </h6>

                      <p className="desc">{"55+ Car"}</p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="category-wrapper2">
                    <div className="icon">
                      <img src="/assets/images/category/12.svg" alt="" />
                    </div>

                    <div className="text">
                      <h6 className="title cw">
                        <a href="#">{"Sports Car"}</a>
                      </h6>

                      <p className="desc">{"35+ Car"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-pagination-5"></div>
        </div>
      </div>
    </section>
  );
}
