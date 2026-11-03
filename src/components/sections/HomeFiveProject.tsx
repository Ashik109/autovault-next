export default function HomeFiveProject() {
  return (
    <section className="rts-project-area rts-section-gap">
      <div className="container">
        <div className="section-title-area2">
          <p
            className="sub-title wow fadeInUp"
            data-wow-delay=".1s"
            data-wow-duration="1s"
          >
            {"Our Project"}
          </p>

          <h2 className="section-title wow move-right">
            {"Car Washing "}
            <span>{"Project"}</span>
          </h2>
        </div>
      </div>

      <div className="slider-inner ">
        <div className="swiper projectSlider3">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="image-area">
                <img src="/assets/images/portfolio/17.webp" alt="" />
              </div>
            </div>

            <div className="swiper-slide">
              <div className="image-area">
                <img src="/assets/images/portfolio/18.webp" alt="" />
              </div>
            </div>

            <div className="swiper-slide">
              <div className="image-area">
                <img src="/assets/images/portfolio/19.webp" alt="" />
              </div>
            </div>

            <div className="swiper-slide">
              <div className="image-area">
                <img src="/assets/images/portfolio/17.webp" alt="" />
              </div>
            </div>

            <div className="swiper-slide">
              <div className="image-area">
                <img src="/assets/images/portfolio/18.webp" alt="" />
              </div>
            </div>

            <div className="swiper-slide">
              <div className="image-area">
                <img src="/assets/images/portfolio/19.webp" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="swiper-pagination-5"></div>
      </div>
    </section>
  );
}
