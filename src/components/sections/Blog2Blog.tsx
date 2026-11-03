import Link from "next/link";
import TemplateForm from "@/components/TemplateForm";
export default function Blog2Blog() {
  return (
    <div className="rts-blog-area inner blog-2 rts-section-gapTop">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-8">
            <div className="left">
              <div className="row g-5">
                <div className="col-lg-12">
                  <div className="blog-wrapper">
                    <div className="image-area">
                      <Link
                        prefetch={false}
                        href="/blog-details/seasonal-car-care-tips-to-keep-your-vehicle-running-smoothly"
                      >
                        <img src="/assets/images/blog/01.webp" alt="" />
                      </Link>
                    </div>

                    <div className="content">
                      <p className="blog-meta">{"Dealership events"}</p>

                      <h5>
                        <Link
                          prefetch={false}
                          href="/blog-details/seasonal-car-care-tips-to-keep-your-vehicle-running-smoothly"
                        >
                          {
                            "Seasonal Car Care Tips to Keep Your Vehicle Running Smoothly"
                          }
                        </Link>
                      </h5>

                      <div className="author-date">
                        <div className="person">
                          <img src="/assets/images/blog/author-01.svg" alt="" />
                          {" Jack Alexander "}
                        </div>

                        <div className="date">{"March 26, 2024"}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="blog-wrapper">
                    <div className="image-area">
                      <Link
                        prefetch={false}
                        href="/blog-details/how-regular-maintenance-can-save-you-thousands-in-repairs"
                      >
                        <img src="/assets/images/blog/02.webp" alt="" />
                      </Link>
                    </div>

                    <div className="content">
                      <p className="blog-meta">{"March 26, 2024"}</p>

                      <h5>
                        <Link
                          prefetch={false}
                          href="/blog-details/how-regular-maintenance-can-save-you-thousands-in-repairs"
                        >
                          {
                            "How Regular Maintenance Can Save You Thousands in Repairs"
                          }
                        </Link>
                      </h5>

                      <div className="author-date">
                        <div className="person">
                          <img src="/assets/images/blog/author-02.svg" alt="" />
                          {" Jack Alexander "}
                        </div>

                        <div className="date">{"March 26, 2024"}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="blog-wrapper">
                    <div className="image-area">
                      <Link
                        prefetch={false}
                        href="/blog-details/top-5-reasons-to-buy-a-certified-pre-owned-vehicle"
                      >
                        <img src="/assets/images/blog/02.webp" alt="" />
                      </Link>
                    </div>

                    <div className="content">
                      <p className="blog-meta">{"Car detailing tips"}</p>

                      <h5>
                        <Link
                          prefetch={false}
                          href="/blog-details/top-5-reasons-to-buy-a-certified-pre-owned-vehicle"
                        >
                          {"Top 5 Reasons to Buy a Certified Pre-Owned Vehicle"}
                        </Link>
                      </h5>

                      <div className="author-date">
                        <div className="person">
                          <img src="/assets/images/blog/author-02.svg" alt="" />
                          {" Jack Alexander "}
                        </div>

                        <div className="date">{"March 26, 2024"}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="blog-wrapper">
                    <div className="image-area">
                      <Link
                        prefetch={false}
                        href="/blog-details/what-to-expect-during-your-next-test-drive"
                      >
                        <img src="/assets/images/blog/06.webp" alt="" />
                      </Link>
                    </div>

                    <div className="content">
                      <p className="blog-meta">{"Upcoming releases"}</p>

                      <h5>
                        <Link
                          prefetch={false}
                          href="/blog-details/what-to-expect-during-your-next-test-drive"
                        >
                          {"What to Expect During Your Next Test Drive"}
                        </Link>
                      </h5>

                      <div className="author-date">
                        <div className="person">
                          <img src="/assets/images/blog/author-02.svg" alt="" />
                          {" Jack Alexander "}
                        </div>

                        <div className="date">{"March 26, 2024"}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="#" className="rts-btn load-more-btn btn-border">
              {"Load More"}
            </a>
          </div>

          <div className="col-lg-4">
            <div className="sticky-top">
              <div className="right-side-bar">
                <div className="search-area side-box">
                  <h2>{"Cars Search"}</h2>

                  <TemplateForm context="/blog-2">
                    <div className="input-wrapper">
                      <input
                        type="text"
                        placeholder="Search Vehicles"
                        required={true}
                        aria-label="Search Vehicles"
                      />

                      <button type="submit" aria-label="Open control">
                        <i className="fa-regular fa-magnifying-glass"></i>
                      </button>
                    </div>
                  </TemplateForm>
                </div>

                <div className="car-make side-box">
                  <h2>{"Car Categories"}</h2>

                  <ul className="checkbox-list">
                    <li className="checkbox-item">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          defaultChecked={true}
                          aria-label="Enter a value"
                        />

                        <span>{"Mercedes-Benz"}</span>
                      </label>

                      <span>{"(130)"}</span>
                    </li>

                    <li className="checkbox-item">
                      <label className="checkbox-label">
                        <input type="checkbox" aria-label="Enter a value" />

                        <span>{"Volkswagen"}</span>
                      </label>

                      <span>{"(80)"}</span>
                    </li>

                    <li className="checkbox-item">
                      <label className="checkbox-label">
                        <input type="checkbox" aria-label="Enter a value" />

                        <span>{"Mitsubishi"}</span>
                      </label>

                      <span>{"(199)"}</span>
                    </li>

                    <li className="checkbox-item">
                      <label className="checkbox-label">
                        <input type="checkbox" aria-label="Enter a value" />

                        <span>{"Honda"}</span>
                      </label>

                      <span>{"(70)"}</span>
                    </li>

                    <li className="checkbox-item">
                      <label className="checkbox-label">
                        <input type="checkbox" aria-label="Enter a value" />

                        <span>{"Lamborghini"}</span>
                      </label>

                      <span>{"(160)"}</span>
                    </li>
                  </ul>
                </div>

                <div className="recent-post side-box">
                  <h2>{"Recent Post"}</h2>

                  <ul className="blog-list">
                    <li>
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href="/blog-details/10-tips-for-first-time-car-what-you-need-to-know"
                        >
                          <img
                            src="/assets/images/blog/sm-01.webp"
                            width="100"
                            alt=""
                          />
                        </Link>
                      </div>

                      <div className="content">
                        <h6>
                          <Link
                            prefetch={false}
                            href="/blog-details/10-tips-for-first-time-car-what-you-need-to-know"
                          >
                            {"10 Tips for First-Time Car What You Need to Know"}
                          </Link>
                        </h6>

                        <p className="blog-meta">{"May 26, 2024"}</p>
                      </div>
                    </li>

                    <li>
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href="/blog-details/top-5-reasons-to-buy-a-for-pre-owned-vehicle"
                        >
                          <img
                            src="/assets/images/blog/sm-02.webp"
                            width="100"
                            alt=""
                          />
                        </Link>
                      </div>

                      <div className="content">
                        <h6>
                          <Link
                            prefetch={false}
                            href="/blog-details/top-5-reasons-to-buy-a-for-pre-owned-vehicle"
                          >
                            {"Top 5 Reasons to Buy a for Pre-Owned Vehicle"}
                          </Link>
                        </h6>

                        <p className="blog-meta">{"May 26, 2024"}</p>
                      </div>
                    </li>

                    <li>
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href="/blog-details/how-to-choose-the-perfect-car-for-your-lifestyle"
                        >
                          <img
                            src="/assets/images/blog/sm-03.webp"
                            width="100"
                            alt=""
                          />
                        </Link>
                      </div>

                      <div className="content">
                        <h6>
                          <Link
                            prefetch={false}
                            href="/blog-details/how-to-choose-the-perfect-car-for-your-lifestyle"
                          >
                            {"How to Choose the Perfect Car for Your Lifestyle"}
                          </Link>
                        </h6>

                        <p className="blog-meta">{"May 26, 2024"}</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="tag-area side-box">
                  <h2>{"Fuel"}</h2>

                  <ul>
                    <li>{"Gasoline"}</li>

                    <li>{"Diesel"}</li>

                    <li>{"Plug-in Hybrid"}</li>

                    <li>{"Hybrid"}</li>

                    <li>{"Electric"}</li>
                  </ul>
                </div>

                <div className="ad-area">
                  <img src="/assets/images/blog/ad.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
