import Link from "next/link";
export default function HomeThreeBlog() {
  return (
    <section className="rts-blog-area rts-section-gapTop">
      <div className="section-title-area2">
        <p
          className="sub-title wow fadeInUp"
          data-wow-delay=".1s"
          data-wow-duration="1s"
        >
          {"Latest Blog"}
        </p>

        <h2 className="section-title wow move-right">
          {"Our Latest "}
          <span>{"Blog"}</span>
        </h2>
      </div>

      <div className="container">
        <div className="section-inner mt--80 mb--80">
          <div className="swiper blogSlider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="blog-wrapper">
                  <div className="image-area">
                    <Link prefetch={false} href="/blog-details">
                      <img src="/assets/images/blog/01.webp" alt="" />
                    </Link>
                  </div>

                  <div className="content">
                    <p className="blog-meta">{"March 26, 2024"}</p>

                    <h6>
                      <Link prefetch={false} href="/blog-details">
                        {
                          "Review the Latest Car Models And Compare Them With Similar Car Vehicles"
                        }
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="blog-wrapper">
                  <div className="image-area">
                    <Link prefetch={false} href="/blog-details">
                      <img src="/assets/images/blog/02.webp" alt="" />
                    </Link>
                  </div>

                  <div className="content">
                    <p className="blog-meta">{"March 26, 2024"}</p>

                    <h6>
                      <Link prefetch={false} href="/blog-details">
                        {
                          "Focus on the rapidly growing market for electric vehicles and green cars."
                        }
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="blog-wrapper">
                  <div className="image-area">
                    <Link prefetch={false} href="/blog-details">
                      <img src="/assets/images/blog/02.webp" alt="" />
                    </Link>
                  </div>

                  <div className="content">
                    <p className="blog-meta">{"March 26, 2024"}</p>

                    <h6>
                      <Link prefetch={false} href="/blog-details">
                        {
                          "Focus on the rapidly growing market for electric vehicles and green cars."
                        }
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="blog-wrapper">
                  <div className="image-area">
                    <Link prefetch={false} href="/blog-details">
                      <img src="/assets/images/blog/01.webp" alt="" />
                    </Link>
                  </div>

                  <div className="content">
                    <p className="blog-meta">{"March 26, 2024"}</p>

                    <h6>
                      <Link prefetch={false} href="/blog-details">
                        {
                          "Review the Latest Car Models And Compare Them With Similar Car Vehicles"
                        }
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="blog-wrapper">
                  <div className="image-area">
                    <Link prefetch={false} href="/blog-details">
                      <img src="/assets/images/blog/02.webp" alt="" />
                    </Link>
                  </div>

                  <div className="content">
                    <p className="blog-meta">{"March 26, 2024"}</p>

                    <h6>
                      <Link prefetch={false} href="/blog-details">
                        {
                          "Focus on the rapidly growing market for electric vehicles and green cars."
                        }
                      </Link>
                    </h6>
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
