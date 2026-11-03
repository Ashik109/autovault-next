import { detailPath } from "@/lib/detail-paths";
import Link from "next/link";
export default function HomeEightBlog() {
  return (
    <section className="rts-blog-area rts-section-gapTop">
      <div className="container">
        <div className="section-inner">
          <div className="row align-items-center">
            <div className="col-xl-4">
              <div className="left-side-content">
                <div className="section-title-area">
                  <p
                    className="sub-title"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="800"
                  >
                    {" Latest Blog"}
                  </p>

                  <h2
                    className="section-title move-right"
                    data-aos="move-right"
                  >
                    {"Our Latest "}
                    <span>{"Blog"}</span>
                  </h2>
                </div>

                <p
                  className="desc"
                  data-aos="fade"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  {
                    "Welcome to Autovault where innovation drives every journey. Discover a range of designed to elevate your driving experience."
                  }
                </p>

                <Link
                  prefetch={false}
                  href="/blog"
                  className="text-btn"
                  data-aos="fade"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                >
                  {"Read All Blog"}
                </Link>
              </div>
            </div>

            <div className="col-xl-8">
              <div
                className="right-side-blog"
                data-aos="fade-left"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                <div className="row g-5">
                  <div className="col-lg-6">
                    <div className="blog-wrapper">
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href={detailPath(
                            "blog",
                            "review-the-latest-car-models-and-compare-them-with-similar-car-vehicles",
                          )}
                        >
                          <img src="/assets/images/blog/01.webp" alt="" />
                        </Link>
                      </div>

                      <div className="content">
                        <p className="blog-meta">{"March 26, 2024"}</p>

                        <h6>
                          <Link
                            prefetch={false}
                            href={detailPath(
                              "blog",
                              "review-the-latest-car-models-and-compare-them-with-similar-car-vehicles",
                            )}
                          >
                            {
                              "Review the Latest Car Models And Compare Them With Similar Car Vehicles"
                            }
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="blog-wrapper">
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href={detailPath(
                            "blog",
                            "focus-on-the-rapidly-growing-market-for-electric-vehicles-and-green-cars",
                          )}
                        >
                          <img src="/assets/images/blog/02.webp" alt="" />
                        </Link>
                      </div>

                      <div className="content">
                        <p className="blog-meta">{"March 26, 2024"}</p>

                        <h6>
                          <Link
                            prefetch={false}
                            href={detailPath(
                              "blog",
                              "focus-on-the-rapidly-growing-market-for-electric-vehicles-and-green-cars",
                            )}
                          >
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
