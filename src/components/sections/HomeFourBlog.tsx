import { detailPath } from "@/lib/detail-paths";
import Link from "next/link";
export default function HomeFourBlog() {
  return (
    <section className="rts-blog-area rts-section-gap">
      <div className="container">
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

        <div className="section-inner mt--80">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="blog-wrapper">
                <div className="image-area">
                  <Link
                    prefetch={false}
                    href={detailPath(
                      "blog",
                      "braking-it-down-understanding-the-key-parts-of-your-car-s-brake-parts-system",
                    )}
                  >
                    <img src="/assets/images/blog/05.webp" alt="" />
                  </Link>
                </div>

                <div className="content">
                  <p className="blog-meta">{"March 26, 2024"}</p>

                  <h5>
                    <Link
                      prefetch={false}
                      href={detailPath(
                        "blog",
                        "braking-it-down-understanding-the-key-parts-of-your-car-s-brake-parts-system",
                      )}
                    >
                      {
                        "Braking It Down Understanding the Key Parts of Your Car's Brake Parts System "
                      }
                    </Link>
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="blog-list-style mb--30">
                <div className="blog-wrapper d-flex align-items-center">
                  <div className="image-area">
                    <Link
                      prefetch={false}
                      href={detailPath(
                        "blog",
                        "a-beginner-s-guide-to-understanding-your-car-s-engine-components",
                      )}
                    >
                      <img
                        src="/assets/images/blog/03.webp"
                        width="263"
                        alt=""
                      />
                    </Link>
                  </div>

                  <div className="content mt-0">
                    <p className="blog-meta">{"March 26, 2024"}</p>

                    <h6>
                      <Link
                        prefetch={false}
                        href={detailPath(
                          "blog",
                          "a-beginner-s-guide-to-understanding-your-car-s-engine-components",
                        )}
                      >
                        {
                          "A Beginner's Guide to Understanding Your Car's Engine Components"
                        }
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="blog-list-style">
                <div className="blog-wrapper d-flex align-items-center">
                  <div className="image-area">
                    <Link
                      prefetch={false}
                      href={detailPath(
                        "blog",
                        "the-ultimate-guide-to-car-suspension-what-you-need-to-know",
                      )}
                    >
                      <img
                        src="/assets/images/blog/04.webp"
                        width="263"
                        alt=""
                      />
                    </Link>
                  </div>

                  <div className="content mt-0">
                    <p className="blog-meta">{"March 26, 2024"}</p>

                    <h6>
                      <Link
                        prefetch={false}
                        href={detailPath(
                          "blog",
                          "the-ultimate-guide-to-car-suspension-what-you-need-to-know",
                        )}
                      >
                        {
                          "The Ultimate Guide to Car Suspension: What You Need to Know"
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
    </section>
  );
}
