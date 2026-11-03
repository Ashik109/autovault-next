import Link from "next/link";
import TemplateForm from "@/components/TemplateForm";
import QuantityInput from "@/components/QuantityInput";
export default function ShopDetailsPortfolio() {
  return (
    <div className="rts-portfolio-area shop-single inner rts-section-gapTop">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="portfolio-slider-area2 mb--40">
              <div className="swiper projectSlider4">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="image">
                      <img src="/assets/images/portfolio/36.webp" alt="" />
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="image">
                      <img src="/assets/images/portfolio/37.webp" alt="" />
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="image">
                      <img src="/assets/images/portfolio/38.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="slider-pagination-area shop-single">
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="ms-single-product__content">
              <p className="sub-title">
                <Link prefetch={false} href="/">
                  {"Home"}
                </Link>
                {" Power Steering Pump"}
              </p>

              <h3 className="ms-single-product_title">
                {"Power Steering Pump"}
              </h3>

              <div className="woocommerce-product-details__short-description">
                <p>
                  {
                    "At Autovault Repair, the goal is to provide top-notch automotive to keep your vehicle running smoothly. Whether it’s a routine oil change, brake replacement, or complex engine repair, the skilled technicians at Max Auto are equipped with the latest tools and knowledge to vehicles, from sedans to SUVs. "
                  }
                </p>
              </div>

              <div className="ms-woocommerce-product-rating woocommerce-product-rating">
                <ul className="ms-rating-icon">
                  <li>
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </li>

                  <li>
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </li>

                  <li>
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </li>

                  <li>
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </li>

                  <li>
                    <i className="fa-solid fa-star-half-stroke"></i>
                  </li>
                </ul>

                <a
                  href="#reviews"
                  className="woocommerce-review-link"
                  rel="nofollow"
                >
                  {"(1.1k Reviews)"}
                </a>
              </div>

              <div className="woocommerce-Price-amount amount">
                <bdi>
                  <span className="woocommerce-Price-currencySymbol">
                    {"$"}
                  </span>
                  {"599"}
                </bdi>
              </div>

              <div className="quantity-area">
                <div className="cart-edit">
                  <QuantityInput initialValue={2} />
                </div>

                <Link
                  prefetch={false}
                  href="/cart"
                  className="rts-btn btn-primary radius-small"
                >
                  {"Add to cart"}
                </Link>
              </div>

              <div className="product_meta">
                <ul>
                  <li className="posted_in">
                    {"Categories :"}
                    <span>{"Mercedes-Benz "}</span>
                  </li>

                  <li className="sku_wrapper">
                    {"Parts Model :"}
                    <span>{"Chevrolet"}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-12 tab-area">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  {"Description"}
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  {"Delivery Info"}
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="messages-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#messages"
                  type="button"
                  role="tab"
                  aria-controls="messages"
                  aria-selected="false"
                >
                  {"Reviews"}
                </button>
              </li>
            </ul>

            <div className="tab-content">
              <div
                className="tab-pane active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabIndex={0}
              >
                {
                  "Credibly Welcome to your trusted destination for quality new and pre-owned vehicles. We pride ourselves on offering an extensive inventory of cars, trucks, and SUVs from top , tailored to fit every lifestyle and budget. At Career right career path can be daunting. destination for quality new and pre-owned vehicles. We pride ourselves on offering an extensive inventory of cars, trucks, and SUVs from top , tailored to fit every lifestyle and budget. At Career right career path can be daunting. That's why we offer a wealth of resources to empower you on your journey. "
                }
                <br />

                <br />
                {
                  " Welcome to your trusted destination for quality new and pre-owned vehicles. We pride ourselves on offering an extensive inventory of cars, trucks, and SUVs from top , tailored to fit every lifestyle and budget. At Career right career path can be daunting. That's why we offer a wealth of resources to empower you on your journey. From resume writing tips and for interview techniques to networking advice and skill-building strategies, our expert you’re looking for the latest models or certified used vehicles, our friendly and knowledgeable team. "
                }
              </div>

              <div
                className="tab-pane"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabIndex={0}
              >
                <div className="ms-section-title">
                  <h3 className="ms-heading-title">{" Delivery Info"}</h3>

                  <ul>
                    <li>
                      <i className="fa-regular fa-circle-check"></i>
                      {
                        "At AutoTech Supplies, we offer fast and reliable delivery parts and accessories "
                      }
                    </li>

                    <li>
                      <i className="fa-regular fa-circle-check"></i>
                      {
                        "Orders placed before 2 PM are typically the same day,ranging business days. "
                      }
                    </li>

                    <li>
                      <i className="fa-regular fa-circle-check"></i>
                      {
                        "Expedited shipping options are available for urgent needs, day delivery locations. "
                      }
                    </li>

                    <li>
                      <i className="fa-regular fa-circle-check"></i>
                      {
                        "At AutoTech Supplies, we offer fast and reliable delivery parts and accessories "
                      }
                    </li>

                    <li>
                      <i className="fa-regular fa-circle-check"></i>
                      {
                        "Orders placed before 2 PM are typically the same day,ranging business days. "
                      }
                    </li>

                    <li>
                      <i className="fa-regular fa-circle-check"></i>
                      {
                        "Expedited shipping options are available for urgent needs, day delivery locations. "
                      }
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="tab-pane"
                id="messages"
                role="tabpanel"
                aria-labelledby="messages-tab"
                tabIndex={0}
              >
                <div id="reviews" className="woocommerce-Reviews">
                  <div className="reveiw">
                    <h2>{"Reveiw"}</h2>

                    <div className="reveiw-box mb--30">
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

                      <ul className="star-rating">
                        <li>
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </li>

                        <li>
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </li>

                        <li>
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </li>

                        <li>
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </li>

                        <li>
                          <i className="fa-light fa-star"></i>
                        </li>
                      </ul>
                    </div>

                    <div className="reveiw-box">
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

                      <ul className="star-rating">
                        <li>
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </li>

                        <li>
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </li>

                        <li>
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </li>

                        <li>
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </li>

                        <li>
                          <i className="fa-light fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="reveiw-form">
                    <h2 className="mb--30">{"Add a Review"}</h2>

                    <TemplateForm context="/shop-details">
                      <div className="single-wrapper">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          required={true}
                          aria-label="Your Name"
                        />

                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          required={true}
                          aria-label="Your Email"
                        />
                      </div>

                      <textarea
                        name="comment"
                        id="comment"
                        placeholder="Add a Comment"
                        required={true}
                        aria-label="Add a Comment"
                      ></textarea>

                      <div className="rating">
                        <h5>{"Your Rating "}</h5>

                        <ul>
                          <li>
                            <i className="fa-sharp fa-solid fa-star"></i>
                          </li>

                          <li>
                            <i className="fa-sharp fa-solid fa-star"></i>
                          </li>

                          <li>
                            <i className="fa-sharp fa-solid fa-star"></i>
                          </li>

                          <li>
                            <i className="fa-sharp fa-solid fa-star"></i>
                          </li>

                          <li>
                            <i className="fa-light fa-star"></i>
                          </li>
                        </ul>
                      </div>

                      <button className="rts-btn radius-small btn-primary">
                        {"Submit A Review"}
                      </button>
                    </TemplateForm>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
