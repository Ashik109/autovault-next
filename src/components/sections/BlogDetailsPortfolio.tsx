import type { DetailRecord } from "@/data/details";
import { detailPath } from "@/lib/detail-paths";
import Link from "next/link";
import TemplateForm from "@/components/TemplateForm";
import BlogDetailsBlog from "@/components/sections/BlogDetailsBlog";
export default function BlogDetailsPortfolio({
  record,
}: {
  record: DetailRecord;
}) {
  return (
    <div className="rts-portfolio-area inner rts-section-gapTop">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-8">
            <div className="portfolio-details-area">
              <div className="image mb--40">
                <img src={record.image} alt={record.title} />
              </div>

              <h2 className="mb--30">{"Car Description"}</h2>

              <p className="mb--30">
                {record.description +
                  " " +
                  "A car is a motorized vehicle designed primarily for the transportation of passengers, typically seating between one to eight people. It consists of a metal or composite body structure mounted on a set of wheels, usually four, and is powered by an internal combustion engine, an electric motor, or a hybrid system that combines both. The car’s it is main components include the engine, transmission, drivetrain, suspension, and braking system, all of which work together to provide motion and control."}
              </p>

              <p>
                {
                  "Cars come in a variety of body styles and sizes, such as sedans, SUVs, hatchbacks, coupes, convertibles, and for pickup trucks, each serving different needs and preferences."
                }
              </p>

              <h2 className="mb--30">{"Car Features"}</h2>

              <ul className="feature-list mb--40">
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  {" Engine Type "}
                </li>

                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  {" Horsepower "}
                </li>

                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  {" Automatic Climate Control "}
                </li>

                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  {" Touchscreen Display "}
                </li>

                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  {" Navigation System "}
                </li>

                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  {" Fog Lights "}
                </li>
              </ul>

              <h2 className="mb--30">
                {"Your Trusted Partner in Car Buying and Service"}
              </h2>

              <p className="mb--30">
                {
                  "Welcome to Career Compass, your ultimate destination for career advice, job search strategies, and big to an a professional development insights. Whether you're a recent graduate, seasoned professional, or someone considering a career change, our blog is your trusted guide to help you navigate the ever-evolving landscape of the job market."
                }
              </p>

              <div className="quote-area mb--30">
                <div className="image mb--20">
                  <img src="/assets/images/testimonials/quote-04.svg" alt="" />
                </div>
                {
                  " Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia "
                }
                <img src="/assets/images/testimonials/quote-04.svg" alt="" />
              </div>

              <p className="mb--40">
                {
                  "At Career Compass, we understand that finding the right career path can be daunting. That's why we offer a wealth of resources to empower you on your journey. From resume writing tips and interview techniques to networking advice and skill-building strategies, our expert contributors share their knowledge and expertise to equip you with the tools you need to succeed."
                }
              </p>

              <h2 className="mb--30">{"Tags"}</h2>

              <ul className="tag-area mb--30">
                <li>{"New Cars"}</li>

                <li>{"Used Cars"}</li>

                <li>{"Test Drives"}</li>

                <li>{"Car Deals"}</li>

                <li>{"Luxury Cars"}</li>
              </ul>

              <div className="share-link mb--40">
                <h2>{"Share"}</h2>

                <ul>
                  <li>
                    <a href="#">
                      <img src="/assets/images/icon/f-3.svg" alt="" />
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <img src="/assets/images/icon/x-3.svg" alt="" />
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <img src="/assets/images/icon/Insta-3.svg" alt="" />
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <img src="/assets/images/icon/in-3.svg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="comment-area mb--40">
                <h2>{"Comment"}</h2>

                <div className="comment-box mb--30">
                  <div className="author">
                    <div className="image">
                      <img
                        src="/assets/images/testimonials/author-01.svg"
                        alt=""
                      />
                    </div>

                    <div className="content">
                      <h6>{"Jonathon Doe"}</h6>

                      <p>{"A Week Ago"}</p>
                    </div>
                  </div>

                  <p>
                    {
                      "I still have a lot of studying to do using this course and the other practice exams, but so far it's been great! I have not taken my Security+ exam as well, so I'll update this at a later time."
                    }
                  </p>

                  <a href="#" className="reply-btn">
                    <img src="/assets/images/icon/reply.svg" alt="" />
                    {"Reply"}
                  </a>
                </div>

                <div className="comment-box mb--30">
                  <div className="author">
                    <div className="image">
                      <img
                        src="/assets/images/testimonials/author-02.svg"
                        alt=""
                      />
                    </div>

                    <div className="content">
                      <h6>{"Jonathon Doe"}</h6>

                      <p>{"A Week Ago"}</p>
                    </div>
                  </div>

                  <p>
                    {
                      "I still have a lot of studying to do using this course and the other practice exams, but so far it's been great! I have not taken my Security+ exam as well, so I'll update this at a later time."
                    }
                  </p>

                  <a href="#" className="reply-btn">
                    <img src="/assets/images/icon/reply.svg" alt="" />
                    {"Reply"}
                  </a>
                </div>

                <div className="comment-form">
                  <h2 className="mb--30">{"Leave a Comment"}</h2>

                  <TemplateForm context="/blog-details">
                    <textarea
                      name="comment"
                      id="comment"
                      placeholder="Add a Comment"
                      required={true}
                      aria-label="Add a Comment"
                    ></textarea>

                    <button className="rts-btn radius-small btn-primary">
                      {"Submit Comment"}
                    </button>
                  </TemplateForm>
                </div>
              </div>

              <BlogDetailsBlog />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="sticky-top">
              <div className="right-side-bar">
                <div className="search-area side-box">
                  <h2>{"Cars Search"}</h2>

                  <TemplateForm context="/blog-details">
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
                          href={detailPath(
                            "blog",
                            "10-tips-for-first-time-car-what-you-need-to-know",
                          )}
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
                            href={detailPath(
                              "blog",
                              "10-tips-for-first-time-car-what-you-need-to-know",
                            )}
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
                          href={detailPath(
                            "blog",
                            "top-5-reasons-to-buy-a-for-pre-owned-vehicle",
                          )}
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
                            href={detailPath(
                              "blog",
                              "top-5-reasons-to-buy-a-for-pre-owned-vehicle",
                            )}
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
                          href={detailPath(
                            "blog",
                            "how-to-choose-the-perfect-car-for-your-lifestyle",
                          )}
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
                            href={detailPath(
                              "blog",
                              "how-to-choose-the-perfect-car-for-your-lifestyle",
                            )}
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
