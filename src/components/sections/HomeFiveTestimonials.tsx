export default function HomeFiveTestimonials() {
  return (
    <section className="rts-testimonials-area area-4 bg-primary">
      <div className="container">
        <div className="slider-inner">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="left-side-content">
                <div className="section-title-area">
                  <p
                    className="sub-title cw"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="800"
                  >
                    {"Testimonial"}
                  </p>

                  <h2
                    className="section-title cw move-right"
                    data-aos="move-right"
                  >
                    {"Trusted From Over "}
                    <span className="cd">{"2500+"}</span>
                    {" Customer "}
                  </h2>
                </div>

                <div className="swiper rts-imageSlider mt--50">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-image-area4">
                        <img
                          src="/assets/images/testimonials/06.webp"
                          width="214"
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="testimonial-image-area4">
                        <img
                          src="/assets/images/testimonials/06.webp"
                          width="214"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="slider-btn-area">
                  <div className="swiper-btn swiper-button-prev">
                    <i className="fa-regular fa-arrow-left"></i>
                  </div>

                  <div className="swiper-btn swiper-button-next">
                    <i className="fa-regular fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="swiper rts-testimonialSlider3">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="review-wrapper3">
                      <div className="inner">
                        <div className="quote mb--20 text-end">
                          <img
                            src="/assets/images/testimonials/quote-02.svg"
                            alt=""
                          />
                        </div>

                        <div className="content">
                          <h5 className="cw">
                            {
                              " Welcome to Autovault where innovation drives every journey. Discover a range of designed to elevate your driving experience. "
                            }
                          </h5>

                          <div className="author-area">
                            <h6 className="cw">{"Jonathon Doe"}</h6>

                            <p>{"CEO At Mazda"}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="review-wrapper3">
                      <div className="inner">
                        <div className="quote mb--20 text-end">
                          <img
                            src="/assets/images/testimonials/quote-02.svg"
                            alt=""
                          />
                        </div>

                        <div className="content">
                          <h5 className="cw">
                            {
                              " Welcome to Autovault where innovation drives every journey. Discover a range of designed to elevate your driving experience. "
                            }
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-side-image">
        <img src="/assets/images/portfolio/20.webp" width="1097" alt="" />
      </div>
    </section>
  );
}
