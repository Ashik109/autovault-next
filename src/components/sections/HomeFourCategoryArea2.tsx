import Link from "next/link";
export default function HomeFourCategoryArea2() {
  return (
    <section className="rts-category-area2 rts-section-gapTop">
      <div className="container">
        <div className="section-title-area2">
          <p
            className="sub-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            {"Parts Category"}
          </p>

          <h2 className="section-title move-right" data-aos="move-right">
            {"Shop By "}
            <span>{"Categories"}</span>
          </h2>
        </div>

        <div
          className="section-inner"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <div className="swiper categorySlider2">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="category-wrapper">
                  <div className="icon">
                    <img src="/assets/images/category/13.svg" alt="" />
                  </div>

                  <h6 className="title">
                    <a href="#">{"Engine Oils"}</a>
                  </h6>

                  <p className="desc">
                    <Link prefetch={false} href="/shop">
                      {"Shop Now"}
                    </Link>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="category-wrapper">
                  <div className="icon">
                    <img src="/assets/images/category/14.svg" alt="" />
                  </div>

                  <h6 className="title">
                    <a href="#">{"Electrical Parts"}</a>
                  </h6>

                  <p className="desc">
                    <Link prefetch={false} href="/shop">
                      {"Shop Now"}
                    </Link>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="category-wrapper">
                  <div className="icon">
                    <img src="/assets/images/category/15.svg" alt="" />
                  </div>

                  <h6 className="title">
                    <a href="#">{"Car Tyre"}</a>
                  </h6>

                  <p className="desc">
                    <Link prefetch={false} href="/shop">
                      {"Shop Now"}
                    </Link>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="category-wrapper">
                  <div className="icon">
                    <img src="/assets/images/category/16.svg" alt="" />
                  </div>

                  <h6 className="title">
                    <a href="#">{"Body Parts"}</a>
                  </h6>

                  <p className="desc">
                    <Link prefetch={false} href="/shop">
                      {"Shop Now"}
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
