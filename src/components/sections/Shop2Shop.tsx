import { detailPath } from "@/lib/detail-paths";
import Link from "next/link";
import TemplateForm from "@/components/TemplateForm";
export default function Shop2Shop() {
  return (
    <div className="rts-shop-area inner two rts-section-gapTop">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">
            <div className="sticky-top">
              <div className="left-side-bar">
                <div className="search-area side-box">
                  <h2>{"Cars Search"}</h2>

                  <TemplateForm context="/shop-2">
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

                  <span className="cross">
                    <i className="fa-light fa-xmark"></i>
                  </span>
                </div>

                <div className="car-make side-box">
                  <h2>{"Car Make"}</h2>

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

                  <span className="cross">
                    <i className="fa-light fa-xmark"></i>
                  </span>
                </div>

                <div className="car-make side-box">
                  <h2>{"Car Model"}</h2>

                  <ul className="checkbox-list">
                    <li className="checkbox-item">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          defaultChecked={true}
                          aria-label="Enter a value"
                        />

                        <span>{"Chevrolet"}</span>
                      </label>

                      <span>{"(64)"}</span>
                    </li>

                    <li className="checkbox-item">
                      <label className="checkbox-label">
                        <input type="checkbox" aria-label="Enter a value" />

                        <span>{"Ford"}</span>
                      </label>

                      <span>{"(199)"}</span>
                    </li>

                    <li className="checkbox-item">
                      <label className="checkbox-label">
                        <input type="checkbox" aria-label="Enter a value" />

                        <span>{"Tesla"}</span>
                      </label>

                      <span>{"(59)"}</span>
                    </li>

                    <li className="checkbox-item">
                      <label className="checkbox-label">
                        <input type="checkbox" aria-label="Enter a value" />

                        <span>{"BMW"}</span>
                      </label>

                      <span>{"(230)"}</span>
                    </li>

                    <li className="checkbox-item">
                      <label className="checkbox-label">
                        <input type="checkbox" aria-label="Enter a value" />

                        <span>{"Audi"}</span>
                      </label>

                      <span>{"(30)"}</span>
                    </li>
                  </ul>

                  <span className="cross">
                    <i className="fa-light fa-xmark"></i>
                  </span>
                </div>

                <div className="price-box side-box">
                  <h2>{"Price"}</h2>

                  <div className="slider-container">
                    <div className="histogram">
                      <div
                        className="histogram-bar"
                        style={{ height: "67px" }}
                      ></div>

                      <div
                        className="histogram-bar"
                        style={{ height: "86px" }}
                      ></div>

                      <div
                        className="histogram-bar"
                        style={{ height: "52px" }}
                      ></div>

                      <div
                        className="histogram-bar"
                        style={{ height: "86px" }}
                      ></div>

                      <div
                        className="histogram-bar"
                        style={{ height: "99px" }}
                      ></div>

                      <div
                        className="histogram-bar"
                        style={{ height: "86px" }}
                      ></div>

                      <div
                        className="histogram-bar"
                        style={{ height: "75px" }}
                      ></div>

                      <div
                        className="histogram-bar"
                        style={{ height: "93px" }}
                      ></div>

                      <div
                        className="histogram-bar"
                        style={{ height: "86px" }}
                      ></div>

                      <div
                        className="histogram-bar"
                        style={{ height: "99px" }}
                      ></div>

                      <div
                        className="histogram-bar"
                        style={{ height: "86px" }}
                      ></div>

                      <div
                        className="histogram-bar"
                        style={{ height: "75px" }}
                      ></div>

                      <div
                        className="histogram-bar"
                        style={{ height: "93px" }}
                      ></div>

                      <div
                        className="histogram-bar"
                        style={{ height: "93px" }}
                      ></div>

                      <div
                        className="histogram-bar"
                        style={{ height: "75px" }}
                      ></div>

                      <div
                        className="histogram-bar"
                        style={{ height: "98px" }}
                      ></div>

                      <div
                        className="histogram-bar"
                        style={{ height: "86px" }}
                      ></div>

                      <div
                        className="histogram-bar"
                        style={{ height: "107px" }}
                      ></div>

                      <div
                        className="histogram-bar"
                        style={{ height: "75px" }}
                      ></div>

                      <div
                        className="histogram-bar"
                        style={{ height: "93px" }}
                      ></div>

                      <div
                        className="histogram-bar"
                        style={{ height: "102px" }}
                      ></div>

                      <div
                        className="histogram-bar"
                        style={{ height: "52px" }}
                      ></div>

                      <div
                        className="histogram-bar"
                        style={{ height: "86px" }}
                      ></div>

                      <div
                        className="histogram-bar"
                        style={{ height: "94px" }}
                      ></div>

                      <div
                        className="histogram-bar"
                        style={{ height: "75px" }}
                      ></div>

                      <div
                        className="histogram-bar"
                        style={{ height: "86px" }}
                      ></div>
                    </div>

                    <div className="range-slider">
                      <div className="track"></div>

                      <div className="range" id="range"></div>

                      <input
                        type="range"
                        id="minRange"
                        min="0"
                        max="100"
                        defaultValue="20"
                        aria-label="minRange"
                      />

                      <input
                        type="range"
                        id="maxRange"
                        min="0"
                        max="100"
                        defaultValue="80"
                        aria-label="maxRange"
                      />
                    </div>

                    <div className="price-labels">
                      <span id="minPrice">{"$500"}</span>

                      <span id="maxPrice">{"$5000"}</span>
                    </div>
                  </div>

                  <span className="cross">
                    <i className="fa-light fa-xmark"></i>
                  </span>
                </div>

                <div className="car-make side-box">
                  <h2>{"Car Seats"}</h2>

                  <ul className="checkbox-list">
                    <li className="checkbox-item">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          defaultChecked={true}
                          aria-label="Enter a value"
                        />

                        <span>{"2 seats"}</span>
                      </label>

                      <span>{"(30)"}</span>
                    </li>

                    <li className="checkbox-item">
                      <label className="checkbox-label">
                        <input type="checkbox" aria-label="Enter a value" />

                        <span>{"3 seats"}</span>
                      </label>

                      <span>{"(23)"}</span>
                    </li>

                    <li className="checkbox-item">
                      <label className="checkbox-label">
                        <input type="checkbox" aria-label="Enter a value" />

                        <span>{"4 seats"}</span>
                      </label>

                      <span>{"(179)"}</span>
                    </li>

                    <li className="checkbox-item">
                      <label className="checkbox-label">
                        <input type="checkbox" aria-label="Enter a value" />

                        <span>{"5 seats"}</span>
                      </label>

                      <span>{"(40)"}</span>
                    </li>

                    <li className="checkbox-item">
                      <label className="checkbox-label">
                        <input type="checkbox" aria-label="Enter a value" />

                        <span>{"6 seats"}</span>
                      </label>

                      <span>{"(120)"}</span>
                    </li>
                  </ul>

                  <span className="cross">
                    <i className="fa-light fa-xmark"></i>
                  </span>
                </div>

                <div className="car-make side-box">
                  <h2>{"Car Color"}</h2>

                  <ul className="checkbox-list">
                    <li className="checkbox-item">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          defaultChecked={true}
                          aria-label="Enter a value"
                        />

                        <span>{"Matte Black"}</span>
                      </label>

                      <span>{"(30)"}</span>
                    </li>

                    <li className="checkbox-item">
                      <label className="checkbox-label">
                        <input type="checkbox" aria-label="Enter a value" />

                        <span>{"Orange"}</span>
                      </label>

                      <span>{"(23)"}</span>
                    </li>

                    <li className="checkbox-item">
                      <label className="checkbox-label">
                        <input type="checkbox" aria-label="Enter a value" />

                        <span>{"Black"}</span>
                      </label>

                      <span>{"(179)"}</span>
                    </li>

                    <li className="checkbox-item">
                      <label className="checkbox-label">
                        <input type="checkbox" aria-label="Enter a value" />

                        <span>{"Yellow"}</span>
                      </label>

                      <span>{"(40)"}</span>
                    </li>

                    <li className="checkbox-item">
                      <label className="checkbox-label">
                        <input type="checkbox" aria-label="Enter a value" />

                        <span>{"Neon Colors"}</span>
                      </label>

                      <span>{"(120)"}</span>
                    </li>
                  </ul>

                  <span className="cross">
                    <i className="fa-light fa-xmark"></i>
                  </span>
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

                  <span className="cross">
                    <i className="fa-light fa-xmark"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-10">
            <div className="right">
              <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper4">
                    <div className="image-area">
                      <Link
                        prefetch={false}
                        href={detailPath(
                          "product",
                          "car-parts-gears-and-equipment",
                        )}
                      >
                        <img src="/assets/images/portfolio/11.webp" alt="" />
                      </Link>
                    </div>

                    <div className="content-area">
                      <ul className="star-rating">
                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star-sharp-half-stroke"></i>
                        </li>
                      </ul>

                      <h6 className="title ">
                        <Link
                          prefetch={false}
                          href={detailPath(
                            "product",
                            "car-parts-gears-and-equipment",
                          )}
                        >
                          {"Car Parts Gears and Equipment"}
                        </Link>
                      </h6>

                      <div className="button-area">
                        <p className="">{"$400"}</p>

                        <Link
                          prefetch={false}
                          href="/cart"
                          className="rts-btn btn-primary radius-big icon"
                        >
                          {" Add To Cart "}
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1201_1501)">
                              <path
                                d="M3.22189 6.46492H3.22235C3.22273 6.46492 3.22311 6.46484 3.22349 6.46484H8.53515C8.66592 6.46484 8.78089 6.37809 8.81683 6.25236L9.9887 2.1508C10.014 2.06238 9.99625 1.96731 9.94094 1.89392C9.88555 1.82053 9.79896 1.77734 9.70702 1.77734H2.54623L2.33681 0.834885C2.30697 0.700836 2.18811 0.605469 2.05078 0.605469H0.292969C0.131149 0.605469 0 0.736618 0 0.898437C0 1.06026 0.131149 1.19141 0.292969 1.19141H1.81579C1.85287 1.35841 2.81799 5.70152 2.87353 5.95138C2.56218 6.08673 2.34375 6.39717 2.34375 6.75781C2.34375 7.24243 2.73804 7.63671 3.22265 7.63671H8.53515C8.69697 7.63671 8.82812 7.50557 8.82812 7.34375C8.82812 7.18193 8.69697 7.05078 8.53515 7.05078H3.22265C3.06114 7.05078 2.92969 6.91932 2.92969 6.75781C2.92969 6.59652 3.06068 6.4653 3.22189 6.46492ZM9.31861 2.36328L8.31413 5.8789H3.45764L2.67639 2.36328H9.31861Z"
                                fill="white"
                              ></path>

                              <path
                                d="M2.92969 8.51562C2.92969 9.00024 3.32397 9.39453 3.80859 9.39453C4.29321 9.39453 4.6875 9.00024 4.6875 8.51562C4.6875 8.03101 4.29321 7.63672 3.80859 7.63672C3.32397 7.63672 2.92969 8.03101 2.92969 8.51562ZM3.80859 8.22266C3.97011 8.22266 4.10156 8.35411 4.10156 8.51562C4.10156 8.67714 3.97011 8.80859 3.80859 8.80859C3.64708 8.80859 3.51562 8.67714 3.51562 8.51562C3.51562 8.35411 3.64708 8.22266 3.80859 8.22266Z"
                                fill="white"
                              ></path>

                              <path
                                d="M7.07031 8.51562C7.07031 9.00024 7.4646 9.39453 7.94922 9.39453C8.43384 9.39453 8.82812 9.00024 8.82812 8.51562C8.82812 8.03101 8.43384 7.63672 7.94922 7.63672C7.4646 7.63672 7.07031 8.03101 7.07031 8.51562ZM7.94922 8.22266C8.11073 8.22266 8.24219 8.35411 8.24219 8.51562C8.24219 8.67714 8.11073 8.80859 7.94922 8.80859C7.7877 8.80859 7.65625 8.67714 7.65625 8.51562C7.65625 8.35411 7.7877 8.22266 7.94922 8.22266Z"
                                fill="white"
                              ></path>
                            </g>

                            <defs>
                              <clipPath>
                                <rect
                                  width="10"
                                  height="10"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper4">
                    <div className="image-area">
                      <Link
                        prefetch={false}
                        href={detailPath("product", "power-steering-pump")}
                      >
                        <img src="/assets/images/portfolio/12.webp" alt="" />
                      </Link>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <ul className="star-rating">
                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star-sharp-half-stroke"></i>
                        </li>
                      </ul>

                      <h6 className="title ">
                        <Link
                          prefetch={false}
                          href={detailPath("product", "power-steering-pump")}
                        >
                          {"Power Steering Pump"}
                        </Link>
                      </h6>

                      <div className="button-area">
                        <p className="">{"$599"}</p>

                        <Link
                          prefetch={false}
                          href="/cart"
                          className="rts-btn btn-primary radius-big icon"
                        >
                          {" Add To Cart "}
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1201_1501)">
                              <path
                                d="M3.22189 6.46492H3.22235C3.22273 6.46492 3.22311 6.46484 3.22349 6.46484H8.53515C8.66592 6.46484 8.78089 6.37809 8.81683 6.25236L9.9887 2.1508C10.014 2.06238 9.99625 1.96731 9.94094 1.89392C9.88555 1.82053 9.79896 1.77734 9.70702 1.77734H2.54623L2.33681 0.834885C2.30697 0.700836 2.18811 0.605469 2.05078 0.605469H0.292969C0.131149 0.605469 0 0.736618 0 0.898437C0 1.06026 0.131149 1.19141 0.292969 1.19141H1.81579C1.85287 1.35841 2.81799 5.70152 2.87353 5.95138C2.56218 6.08673 2.34375 6.39717 2.34375 6.75781C2.34375 7.24243 2.73804 7.63671 3.22265 7.63671H8.53515C8.69697 7.63671 8.82812 7.50557 8.82812 7.34375C8.82812 7.18193 8.69697 7.05078 8.53515 7.05078H3.22265C3.06114 7.05078 2.92969 6.91932 2.92969 6.75781C2.92969 6.59652 3.06068 6.4653 3.22189 6.46492ZM9.31861 2.36328L8.31413 5.8789H3.45764L2.67639 2.36328H9.31861Z"
                                fill="white"
                              ></path>

                              <path
                                d="M2.92969 8.51562C2.92969 9.00024 3.32397 9.39453 3.80859 9.39453C4.29321 9.39453 4.6875 9.00024 4.6875 8.51562C4.6875 8.03101 4.29321 7.63672 3.80859 7.63672C3.32397 7.63672 2.92969 8.03101 2.92969 8.51562ZM3.80859 8.22266C3.97011 8.22266 4.10156 8.35411 4.10156 8.51562C4.10156 8.67714 3.97011 8.80859 3.80859 8.80859C3.64708 8.80859 3.51562 8.67714 3.51562 8.51562C3.51562 8.35411 3.64708 8.22266 3.80859 8.22266Z"
                                fill="white"
                              ></path>

                              <path
                                d="M7.07031 8.51562C7.07031 9.00024 7.4646 9.39453 7.94922 9.39453C8.43384 9.39453 8.82812 9.00024 8.82812 8.51562C8.82812 8.03101 8.43384 7.63672 7.94922 7.63672C7.4646 7.63672 7.07031 8.03101 7.07031 8.51562ZM7.94922 8.22266C8.11073 8.22266 8.24219 8.35411 8.24219 8.51562C8.24219 8.67714 8.11073 8.80859 7.94922 8.80859C7.7877 8.80859 7.65625 8.67714 7.65625 8.51562C7.65625 8.35411 7.7877 8.22266 7.94922 8.22266Z"
                                fill="white"
                              ></path>
                            </g>

                            <defs>
                              <clipPath>
                                <rect
                                  width="10"
                                  height="10"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper4">
                    <div className="image-area">
                      <Link
                        prefetch={false}
                        href={detailPath("product", "high-performance-tires")}
                      >
                        <img src="/assets/images/portfolio/13.webp" alt="" />
                      </Link>
                    </div>

                    <div className="content-area">
                      <ul className="star-rating">
                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star-sharp-half-stroke"></i>
                        </li>
                      </ul>

                      <h6 className="title ">
                        <Link
                          prefetch={false}
                          href={detailPath("product", "high-performance-tires")}
                        >
                          {"High-Performance Tires"}
                        </Link>
                      </h6>

                      <div className="button-area">
                        <p className="">{"$399"}</p>

                        <Link
                          prefetch={false}
                          href="/cart"
                          className="rts-btn btn-primary radius-big icon"
                        >
                          {" Add To Cart "}
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1201_1501)">
                              <path
                                d="M3.22189 6.46492H3.22235C3.22273 6.46492 3.22311 6.46484 3.22349 6.46484H8.53515C8.66592 6.46484 8.78089 6.37809 8.81683 6.25236L9.9887 2.1508C10.014 2.06238 9.99625 1.96731 9.94094 1.89392C9.88555 1.82053 9.79896 1.77734 9.70702 1.77734H2.54623L2.33681 0.834885C2.30697 0.700836 2.18811 0.605469 2.05078 0.605469H0.292969C0.131149 0.605469 0 0.736618 0 0.898437C0 1.06026 0.131149 1.19141 0.292969 1.19141H1.81579C1.85287 1.35841 2.81799 5.70152 2.87353 5.95138C2.56218 6.08673 2.34375 6.39717 2.34375 6.75781C2.34375 7.24243 2.73804 7.63671 3.22265 7.63671H8.53515C8.69697 7.63671 8.82812 7.50557 8.82812 7.34375C8.82812 7.18193 8.69697 7.05078 8.53515 7.05078H3.22265C3.06114 7.05078 2.92969 6.91932 2.92969 6.75781C2.92969 6.59652 3.06068 6.4653 3.22189 6.46492ZM9.31861 2.36328L8.31413 5.8789H3.45764L2.67639 2.36328H9.31861Z"
                                fill="white"
                              ></path>

                              <path
                                d="M2.92969 8.51562C2.92969 9.00024 3.32397 9.39453 3.80859 9.39453C4.29321 9.39453 4.6875 9.00024 4.6875 8.51562C4.6875 8.03101 4.29321 7.63672 3.80859 7.63672C3.32397 7.63672 2.92969 8.03101 2.92969 8.51562ZM3.80859 8.22266C3.97011 8.22266 4.10156 8.35411 4.10156 8.51562C4.10156 8.67714 3.97011 8.80859 3.80859 8.80859C3.64708 8.80859 3.51562 8.67714 3.51562 8.51562C3.51562 8.35411 3.64708 8.22266 3.80859 8.22266Z"
                                fill="white"
                              ></path>

                              <path
                                d="M7.07031 8.51562C7.07031 9.00024 7.4646 9.39453 7.94922 9.39453C8.43384 9.39453 8.82812 9.00024 8.82812 8.51562C8.82812 8.03101 8.43384 7.63672 7.94922 7.63672C7.4646 7.63672 7.07031 8.03101 7.07031 8.51562ZM7.94922 8.22266C8.11073 8.22266 8.24219 8.35411 8.24219 8.51562C8.24219 8.67714 8.11073 8.80859 7.94922 8.80859C7.7877 8.80859 7.65625 8.67714 7.65625 8.51562C7.65625 8.35411 7.7877 8.22266 7.94922 8.22266Z"
                                fill="white"
                              ></path>
                            </g>

                            <defs>
                              <clipPath>
                                <rect
                                  width="10"
                                  height="10"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper4">
                    <div className="image-area">
                      <Link
                        prefetch={false}
                        href={detailPath(
                          "product",
                          "micrometer-with-check-ring",
                        )}
                      >
                        <img src="/assets/images/portfolio/14.webp" alt="" />
                      </Link>
                    </div>

                    <div className="content-area">
                      <ul className="star-rating">
                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star-sharp-half-stroke"></i>
                        </li>
                      </ul>

                      <h6 className="title ">
                        <Link
                          prefetch={false}
                          href={detailPath(
                            "product",
                            "micrometer-with-check-ring",
                          )}
                        >
                          {"Micrometer with check ring"}
                        </Link>
                      </h6>

                      <div className="button-area">
                        <p className="">{"$790"}</p>

                        <Link
                          prefetch={false}
                          href="/cart"
                          className="rts-btn btn-primary radius-big icon"
                        >
                          {" Add To Cart "}
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1201_1501)">
                              <path
                                d="M3.22189 6.46492H3.22235C3.22273 6.46492 3.22311 6.46484 3.22349 6.46484H8.53515C8.66592 6.46484 8.78089 6.37809 8.81683 6.25236L9.9887 2.1508C10.014 2.06238 9.99625 1.96731 9.94094 1.89392C9.88555 1.82053 9.79896 1.77734 9.70702 1.77734H2.54623L2.33681 0.834885C2.30697 0.700836 2.18811 0.605469 2.05078 0.605469H0.292969C0.131149 0.605469 0 0.736618 0 0.898437C0 1.06026 0.131149 1.19141 0.292969 1.19141H1.81579C1.85287 1.35841 2.81799 5.70152 2.87353 5.95138C2.56218 6.08673 2.34375 6.39717 2.34375 6.75781C2.34375 7.24243 2.73804 7.63671 3.22265 7.63671H8.53515C8.69697 7.63671 8.82812 7.50557 8.82812 7.34375C8.82812 7.18193 8.69697 7.05078 8.53515 7.05078H3.22265C3.06114 7.05078 2.92969 6.91932 2.92969 6.75781C2.92969 6.59652 3.06068 6.4653 3.22189 6.46492ZM9.31861 2.36328L8.31413 5.8789H3.45764L2.67639 2.36328H9.31861Z"
                                fill="white"
                              ></path>

                              <path
                                d="M2.92969 8.51562C2.92969 9.00024 3.32397 9.39453 3.80859 9.39453C4.29321 9.39453 4.6875 9.00024 4.6875 8.51562C4.6875 8.03101 4.29321 7.63672 3.80859 7.63672C3.32397 7.63672 2.92969 8.03101 2.92969 8.51562ZM3.80859 8.22266C3.97011 8.22266 4.10156 8.35411 4.10156 8.51562C4.10156 8.67714 3.97011 8.80859 3.80859 8.80859C3.64708 8.80859 3.51562 8.67714 3.51562 8.51562C3.51562 8.35411 3.64708 8.22266 3.80859 8.22266Z"
                                fill="white"
                              ></path>

                              <path
                                d="M7.07031 8.51562C7.07031 9.00024 7.4646 9.39453 7.94922 9.39453C8.43384 9.39453 8.82812 9.00024 8.82812 8.51562C8.82812 8.03101 8.43384 7.63672 7.94922 7.63672C7.4646 7.63672 7.07031 8.03101 7.07031 8.51562ZM7.94922 8.22266C8.11073 8.22266 8.24219 8.35411 8.24219 8.51562C8.24219 8.67714 8.11073 8.80859 7.94922 8.80859C7.7877 8.80859 7.65625 8.67714 7.65625 8.51562C7.65625 8.35411 7.7877 8.22266 7.94922 8.22266Z"
                                fill="white"
                              ></path>
                            </g>

                            <defs>
                              <clipPath>
                                <rect
                                  width="10"
                                  height="10"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper4">
                    <div className="image-area">
                      <Link
                        prefetch={false}
                        href={detailPath(
                          "product",
                          "car-parts-mufflers-and-pipes",
                        )}
                      >
                        <img src="/assets/images/portfolio/15.webp" alt="" />
                      </Link>
                    </div>

                    <div className="content-area">
                      <ul className="star-rating">
                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star-sharp-half-stroke"></i>
                        </li>
                      </ul>

                      <h6 className="title ">
                        <Link
                          prefetch={false}
                          href={detailPath(
                            "product",
                            "car-parts-mufflers-and-pipes",
                          )}
                        >
                          {"Car Parts Mufflers And Pipes"}
                        </Link>
                      </h6>

                      <div className="button-area">
                        <p className="">{"$270"}</p>

                        <Link
                          prefetch={false}
                          href="/cart"
                          className="rts-btn btn-primary radius-big icon"
                        >
                          {" Add To Cart "}
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1201_1501)">
                              <path
                                d="M3.22189 6.46492H3.22235C3.22273 6.46492 3.22311 6.46484 3.22349 6.46484H8.53515C8.66592 6.46484 8.78089 6.37809 8.81683 6.25236L9.9887 2.1508C10.014 2.06238 9.99625 1.96731 9.94094 1.89392C9.88555 1.82053 9.79896 1.77734 9.70702 1.77734H2.54623L2.33681 0.834885C2.30697 0.700836 2.18811 0.605469 2.05078 0.605469H0.292969C0.131149 0.605469 0 0.736618 0 0.898437C0 1.06026 0.131149 1.19141 0.292969 1.19141H1.81579C1.85287 1.35841 2.81799 5.70152 2.87353 5.95138C2.56218 6.08673 2.34375 6.39717 2.34375 6.75781C2.34375 7.24243 2.73804 7.63671 3.22265 7.63671H8.53515C8.69697 7.63671 8.82812 7.50557 8.82812 7.34375C8.82812 7.18193 8.69697 7.05078 8.53515 7.05078H3.22265C3.06114 7.05078 2.92969 6.91932 2.92969 6.75781C2.92969 6.59652 3.06068 6.4653 3.22189 6.46492ZM9.31861 2.36328L8.31413 5.8789H3.45764L2.67639 2.36328H9.31861Z"
                                fill="white"
                              ></path>

                              <path
                                d="M2.92969 8.51562C2.92969 9.00024 3.32397 9.39453 3.80859 9.39453C4.29321 9.39453 4.6875 9.00024 4.6875 8.51562C4.6875 8.03101 4.29321 7.63672 3.80859 7.63672C3.32397 7.63672 2.92969 8.03101 2.92969 8.51562ZM3.80859 8.22266C3.97011 8.22266 4.10156 8.35411 4.10156 8.51562C4.10156 8.67714 3.97011 8.80859 3.80859 8.80859C3.64708 8.80859 3.51562 8.67714 3.51562 8.51562C3.51562 8.35411 3.64708 8.22266 3.80859 8.22266Z"
                                fill="white"
                              ></path>

                              <path
                                d="M7.07031 8.51562C7.07031 9.00024 7.4646 9.39453 7.94922 9.39453C8.43384 9.39453 8.82812 9.00024 8.82812 8.51562C8.82812 8.03101 8.43384 7.63672 7.94922 7.63672C7.4646 7.63672 7.07031 8.03101 7.07031 8.51562ZM7.94922 8.22266C8.11073 8.22266 8.24219 8.35411 8.24219 8.51562C8.24219 8.67714 8.11073 8.80859 7.94922 8.80859C7.7877 8.80859 7.65625 8.67714 7.65625 8.51562C7.65625 8.35411 7.7877 8.22266 7.94922 8.22266Z"
                                fill="white"
                              ></path>
                            </g>

                            <defs>
                              <clipPath>
                                <rect
                                  width="10"
                                  height="10"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper4">
                    <div className="image-area">
                      <Link
                        prefetch={false}
                        href={detailPath("product", "car-gears-machine-part")}
                      >
                        <img src="/assets/images/portfolio/16.webp" alt="" />
                      </Link>
                    </div>

                    <div className="content-area">
                      <ul className="star-rating">
                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star-sharp-half-stroke"></i>
                        </li>
                      </ul>

                      <h6 className="title ">
                        <Link
                          prefetch={false}
                          href={detailPath("product", "car-gears-machine-part")}
                        >
                          {"Car Gears Machine part"}
                        </Link>
                      </h6>

                      <div className="button-area">
                        <p className="">{"$699"}</p>

                        <Link
                          prefetch={false}
                          href="/cart"
                          className="rts-btn btn-primary radius-big icon"
                        >
                          {" Add To Cart "}
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1201_1501)">
                              <path
                                d="M3.22189 6.46492H3.22235C3.22273 6.46492 3.22311 6.46484 3.22349 6.46484H8.53515C8.66592 6.46484 8.78089 6.37809 8.81683 6.25236L9.9887 2.1508C10.014 2.06238 9.99625 1.96731 9.94094 1.89392C9.88555 1.82053 9.79896 1.77734 9.70702 1.77734H2.54623L2.33681 0.834885C2.30697 0.700836 2.18811 0.605469 2.05078 0.605469H0.292969C0.131149 0.605469 0 0.736618 0 0.898437C0 1.06026 0.131149 1.19141 0.292969 1.19141H1.81579C1.85287 1.35841 2.81799 5.70152 2.87353 5.95138C2.56218 6.08673 2.34375 6.39717 2.34375 6.75781C2.34375 7.24243 2.73804 7.63671 3.22265 7.63671H8.53515C8.69697 7.63671 8.82812 7.50557 8.82812 7.34375C8.82812 7.18193 8.69697 7.05078 8.53515 7.05078H3.22265C3.06114 7.05078 2.92969 6.91932 2.92969 6.75781C2.92969 6.59652 3.06068 6.4653 3.22189 6.46492ZM9.31861 2.36328L8.31413 5.8789H3.45764L2.67639 2.36328H9.31861Z"
                                fill="white"
                              ></path>

                              <path
                                d="M2.92969 8.51562C2.92969 9.00024 3.32397 9.39453 3.80859 9.39453C4.29321 9.39453 4.6875 9.00024 4.6875 8.51562C4.6875 8.03101 4.29321 7.63672 3.80859 7.63672C3.32397 7.63672 2.92969 8.03101 2.92969 8.51562ZM3.80859 8.22266C3.97011 8.22266 4.10156 8.35411 4.10156 8.51562C4.10156 8.67714 3.97011 8.80859 3.80859 8.80859C3.64708 8.80859 3.51562 8.67714 3.51562 8.51562C3.51562 8.35411 3.64708 8.22266 3.80859 8.22266Z"
                                fill="white"
                              ></path>

                              <path
                                d="M7.07031 8.51562C7.07031 9.00024 7.4646 9.39453 7.94922 9.39453C8.43384 9.39453 8.82812 9.00024 8.82812 8.51562C8.82812 8.03101 8.43384 7.63672 7.94922 7.63672C7.4646 7.63672 7.07031 8.03101 7.07031 8.51562ZM7.94922 8.22266C8.11073 8.22266 8.24219 8.35411 8.24219 8.51562C8.24219 8.67714 8.11073 8.80859 7.94922 8.80859C7.7877 8.80859 7.65625 8.67714 7.65625 8.51562C7.65625 8.35411 7.7877 8.22266 7.94922 8.22266Z"
                                fill="white"
                              ></path>
                            </g>

                            <defs>
                              <clipPath>
                                <rect
                                  width="10"
                                  height="10"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper4">
                    <div className="image-area">
                      <Link
                        prefetch={false}
                        href={detailPath(
                          "product",
                          "car-parts-gears-and-equipment",
                        )}
                      >
                        <img src="/assets/images/portfolio/11.webp" alt="" />
                      </Link>
                    </div>

                    <div className="content-area">
                      <ul className="star-rating">
                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star-sharp-half-stroke"></i>
                        </li>
                      </ul>

                      <h6 className="title ">
                        <Link
                          prefetch={false}
                          href={detailPath(
                            "product",
                            "car-parts-gears-and-equipment",
                          )}
                        >
                          {"Car Parts Gears and Equipment"}
                        </Link>
                      </h6>

                      <div className="button-area">
                        <p className="">{"$400"}</p>

                        <Link
                          prefetch={false}
                          href="/cart"
                          className="rts-btn btn-primary radius-big icon"
                        >
                          {" Add To Cart "}
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1201_1501)">
                              <path
                                d="M3.22189 6.46492H3.22235C3.22273 6.46492 3.22311 6.46484 3.22349 6.46484H8.53515C8.66592 6.46484 8.78089 6.37809 8.81683 6.25236L9.9887 2.1508C10.014 2.06238 9.99625 1.96731 9.94094 1.89392C9.88555 1.82053 9.79896 1.77734 9.70702 1.77734H2.54623L2.33681 0.834885C2.30697 0.700836 2.18811 0.605469 2.05078 0.605469H0.292969C0.131149 0.605469 0 0.736618 0 0.898437C0 1.06026 0.131149 1.19141 0.292969 1.19141H1.81579C1.85287 1.35841 2.81799 5.70152 2.87353 5.95138C2.56218 6.08673 2.34375 6.39717 2.34375 6.75781C2.34375 7.24243 2.73804 7.63671 3.22265 7.63671H8.53515C8.69697 7.63671 8.82812 7.50557 8.82812 7.34375C8.82812 7.18193 8.69697 7.05078 8.53515 7.05078H3.22265C3.06114 7.05078 2.92969 6.91932 2.92969 6.75781C2.92969 6.59652 3.06068 6.4653 3.22189 6.46492ZM9.31861 2.36328L8.31413 5.8789H3.45764L2.67639 2.36328H9.31861Z"
                                fill="white"
                              ></path>

                              <path
                                d="M2.92969 8.51562C2.92969 9.00024 3.32397 9.39453 3.80859 9.39453C4.29321 9.39453 4.6875 9.00024 4.6875 8.51562C4.6875 8.03101 4.29321 7.63672 3.80859 7.63672C3.32397 7.63672 2.92969 8.03101 2.92969 8.51562ZM3.80859 8.22266C3.97011 8.22266 4.10156 8.35411 4.10156 8.51562C4.10156 8.67714 3.97011 8.80859 3.80859 8.80859C3.64708 8.80859 3.51562 8.67714 3.51562 8.51562C3.51562 8.35411 3.64708 8.22266 3.80859 8.22266Z"
                                fill="white"
                              ></path>

                              <path
                                d="M7.07031 8.51562C7.07031 9.00024 7.4646 9.39453 7.94922 9.39453C8.43384 9.39453 8.82812 9.00024 8.82812 8.51562C8.82812 8.03101 8.43384 7.63672 7.94922 7.63672C7.4646 7.63672 7.07031 8.03101 7.07031 8.51562ZM7.94922 8.22266C8.11073 8.22266 8.24219 8.35411 8.24219 8.51562C8.24219 8.67714 8.11073 8.80859 7.94922 8.80859C7.7877 8.80859 7.65625 8.67714 7.65625 8.51562C7.65625 8.35411 7.7877 8.22266 7.94922 8.22266Z"
                                fill="white"
                              ></path>
                            </g>

                            <defs>
                              <clipPath>
                                <rect
                                  width="10"
                                  height="10"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper4">
                    <div className="image-area">
                      <Link
                        prefetch={false}
                        href={detailPath("product", "power-steering-pump")}
                      >
                        <img src="/assets/images/portfolio/12.webp" alt="" />
                      </Link>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <ul className="star-rating">
                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star-sharp-half-stroke"></i>
                        </li>
                      </ul>

                      <h6 className="title ">
                        <Link
                          prefetch={false}
                          href={detailPath("product", "power-steering-pump")}
                        >
                          {"Power Steering Pump"}
                        </Link>
                      </h6>

                      <div className="button-area">
                        <p className="">{"$599"}</p>

                        <Link
                          prefetch={false}
                          href="/cart"
                          className="rts-btn btn-primary radius-big icon"
                        >
                          {" Add To Cart "}
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1201_1501)">
                              <path
                                d="M3.22189 6.46492H3.22235C3.22273 6.46492 3.22311 6.46484 3.22349 6.46484H8.53515C8.66592 6.46484 8.78089 6.37809 8.81683 6.25236L9.9887 2.1508C10.014 2.06238 9.99625 1.96731 9.94094 1.89392C9.88555 1.82053 9.79896 1.77734 9.70702 1.77734H2.54623L2.33681 0.834885C2.30697 0.700836 2.18811 0.605469 2.05078 0.605469H0.292969C0.131149 0.605469 0 0.736618 0 0.898437C0 1.06026 0.131149 1.19141 0.292969 1.19141H1.81579C1.85287 1.35841 2.81799 5.70152 2.87353 5.95138C2.56218 6.08673 2.34375 6.39717 2.34375 6.75781C2.34375 7.24243 2.73804 7.63671 3.22265 7.63671H8.53515C8.69697 7.63671 8.82812 7.50557 8.82812 7.34375C8.82812 7.18193 8.69697 7.05078 8.53515 7.05078H3.22265C3.06114 7.05078 2.92969 6.91932 2.92969 6.75781C2.92969 6.59652 3.06068 6.4653 3.22189 6.46492ZM9.31861 2.36328L8.31413 5.8789H3.45764L2.67639 2.36328H9.31861Z"
                                fill="white"
                              ></path>

                              <path
                                d="M2.92969 8.51562C2.92969 9.00024 3.32397 9.39453 3.80859 9.39453C4.29321 9.39453 4.6875 9.00024 4.6875 8.51562C4.6875 8.03101 4.29321 7.63672 3.80859 7.63672C3.32397 7.63672 2.92969 8.03101 2.92969 8.51562ZM3.80859 8.22266C3.97011 8.22266 4.10156 8.35411 4.10156 8.51562C4.10156 8.67714 3.97011 8.80859 3.80859 8.80859C3.64708 8.80859 3.51562 8.67714 3.51562 8.51562C3.51562 8.35411 3.64708 8.22266 3.80859 8.22266Z"
                                fill="white"
                              ></path>

                              <path
                                d="M7.07031 8.51562C7.07031 9.00024 7.4646 9.39453 7.94922 9.39453C8.43384 9.39453 8.82812 9.00024 8.82812 8.51562C8.82812 8.03101 8.43384 7.63672 7.94922 7.63672C7.4646 7.63672 7.07031 8.03101 7.07031 8.51562ZM7.94922 8.22266C8.11073 8.22266 8.24219 8.35411 8.24219 8.51562C8.24219 8.67714 8.11073 8.80859 7.94922 8.80859C7.7877 8.80859 7.65625 8.67714 7.65625 8.51562C7.65625 8.35411 7.7877 8.22266 7.94922 8.22266Z"
                                fill="white"
                              ></path>
                            </g>

                            <defs>
                              <clipPath>
                                <rect
                                  width="10"
                                  height="10"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper4">
                    <div className="image-area">
                      <Link
                        prefetch={false}
                        href={detailPath("product", "high-performance-tires")}
                      >
                        <img src="/assets/images/portfolio/13.webp" alt="" />
                      </Link>
                    </div>

                    <div className="content-area">
                      <ul className="star-rating">
                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star-sharp-half-stroke"></i>
                        </li>
                      </ul>

                      <h6 className="title ">
                        <Link
                          prefetch={false}
                          href={detailPath("product", "high-performance-tires")}
                        >
                          {"High-Performance Tires"}
                        </Link>
                      </h6>

                      <div className="button-area">
                        <p className="">{"$399"}</p>

                        <Link
                          prefetch={false}
                          href="/cart"
                          className="rts-btn btn-primary radius-big icon"
                        >
                          {" Add To Cart "}
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1201_1501)">
                              <path
                                d="M3.22189 6.46492H3.22235C3.22273 6.46492 3.22311 6.46484 3.22349 6.46484H8.53515C8.66592 6.46484 8.78089 6.37809 8.81683 6.25236L9.9887 2.1508C10.014 2.06238 9.99625 1.96731 9.94094 1.89392C9.88555 1.82053 9.79896 1.77734 9.70702 1.77734H2.54623L2.33681 0.834885C2.30697 0.700836 2.18811 0.605469 2.05078 0.605469H0.292969C0.131149 0.605469 0 0.736618 0 0.898437C0 1.06026 0.131149 1.19141 0.292969 1.19141H1.81579C1.85287 1.35841 2.81799 5.70152 2.87353 5.95138C2.56218 6.08673 2.34375 6.39717 2.34375 6.75781C2.34375 7.24243 2.73804 7.63671 3.22265 7.63671H8.53515C8.69697 7.63671 8.82812 7.50557 8.82812 7.34375C8.82812 7.18193 8.69697 7.05078 8.53515 7.05078H3.22265C3.06114 7.05078 2.92969 6.91932 2.92969 6.75781C2.92969 6.59652 3.06068 6.4653 3.22189 6.46492ZM9.31861 2.36328L8.31413 5.8789H3.45764L2.67639 2.36328H9.31861Z"
                                fill="white"
                              ></path>

                              <path
                                d="M2.92969 8.51562C2.92969 9.00024 3.32397 9.39453 3.80859 9.39453C4.29321 9.39453 4.6875 9.00024 4.6875 8.51562C4.6875 8.03101 4.29321 7.63672 3.80859 7.63672C3.32397 7.63672 2.92969 8.03101 2.92969 8.51562ZM3.80859 8.22266C3.97011 8.22266 4.10156 8.35411 4.10156 8.51562C4.10156 8.67714 3.97011 8.80859 3.80859 8.80859C3.64708 8.80859 3.51562 8.67714 3.51562 8.51562C3.51562 8.35411 3.64708 8.22266 3.80859 8.22266Z"
                                fill="white"
                              ></path>

                              <path
                                d="M7.07031 8.51562C7.07031 9.00024 7.4646 9.39453 7.94922 9.39453C8.43384 9.39453 8.82812 9.00024 8.82812 8.51562C8.82812 8.03101 8.43384 7.63672 7.94922 7.63672C7.4646 7.63672 7.07031 8.03101 7.07031 8.51562ZM7.94922 8.22266C8.11073 8.22266 8.24219 8.35411 8.24219 8.51562C8.24219 8.67714 8.11073 8.80859 7.94922 8.80859C7.7877 8.80859 7.65625 8.67714 7.65625 8.51562C7.65625 8.35411 7.7877 8.22266 7.94922 8.22266Z"
                                fill="white"
                              ></path>
                            </g>

                            <defs>
                              <clipPath>
                                <rect
                                  width="10"
                                  height="10"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper4">
                    <div className="image-area">
                      <Link
                        prefetch={false}
                        href={detailPath(
                          "product",
                          "micrometer-with-check-ring",
                        )}
                      >
                        <img src="/assets/images/portfolio/14.webp" alt="" />
                      </Link>
                    </div>

                    <div className="content-area">
                      <ul className="star-rating">
                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star-sharp-half-stroke"></i>
                        </li>
                      </ul>

                      <h6 className="title ">
                        <Link
                          prefetch={false}
                          href={detailPath(
                            "product",
                            "micrometer-with-check-ring",
                          )}
                        >
                          {"Micrometer with check ring"}
                        </Link>
                      </h6>

                      <div className="button-area">
                        <p className="">{"$790"}</p>

                        <Link
                          prefetch={false}
                          href="/cart"
                          className="rts-btn btn-primary radius-big icon"
                        >
                          {" Add To Cart "}
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1201_1501)">
                              <path
                                d="M3.22189 6.46492H3.22235C3.22273 6.46492 3.22311 6.46484 3.22349 6.46484H8.53515C8.66592 6.46484 8.78089 6.37809 8.81683 6.25236L9.9887 2.1508C10.014 2.06238 9.99625 1.96731 9.94094 1.89392C9.88555 1.82053 9.79896 1.77734 9.70702 1.77734H2.54623L2.33681 0.834885C2.30697 0.700836 2.18811 0.605469 2.05078 0.605469H0.292969C0.131149 0.605469 0 0.736618 0 0.898437C0 1.06026 0.131149 1.19141 0.292969 1.19141H1.81579C1.85287 1.35841 2.81799 5.70152 2.87353 5.95138C2.56218 6.08673 2.34375 6.39717 2.34375 6.75781C2.34375 7.24243 2.73804 7.63671 3.22265 7.63671H8.53515C8.69697 7.63671 8.82812 7.50557 8.82812 7.34375C8.82812 7.18193 8.69697 7.05078 8.53515 7.05078H3.22265C3.06114 7.05078 2.92969 6.91932 2.92969 6.75781C2.92969 6.59652 3.06068 6.4653 3.22189 6.46492ZM9.31861 2.36328L8.31413 5.8789H3.45764L2.67639 2.36328H9.31861Z"
                                fill="white"
                              ></path>

                              <path
                                d="M2.92969 8.51562C2.92969 9.00024 3.32397 9.39453 3.80859 9.39453C4.29321 9.39453 4.6875 9.00024 4.6875 8.51562C4.6875 8.03101 4.29321 7.63672 3.80859 7.63672C3.32397 7.63672 2.92969 8.03101 2.92969 8.51562ZM3.80859 8.22266C3.97011 8.22266 4.10156 8.35411 4.10156 8.51562C4.10156 8.67714 3.97011 8.80859 3.80859 8.80859C3.64708 8.80859 3.51562 8.67714 3.51562 8.51562C3.51562 8.35411 3.64708 8.22266 3.80859 8.22266Z"
                                fill="white"
                              ></path>

                              <path
                                d="M7.07031 8.51562C7.07031 9.00024 7.4646 9.39453 7.94922 9.39453C8.43384 9.39453 8.82812 9.00024 8.82812 8.51562C8.82812 8.03101 8.43384 7.63672 7.94922 7.63672C7.4646 7.63672 7.07031 8.03101 7.07031 8.51562ZM7.94922 8.22266C8.11073 8.22266 8.24219 8.35411 8.24219 8.51562C8.24219 8.67714 8.11073 8.80859 7.94922 8.80859C7.7877 8.80859 7.65625 8.67714 7.65625 8.51562C7.65625 8.35411 7.7877 8.22266 7.94922 8.22266Z"
                                fill="white"
                              ></path>
                            </g>

                            <defs>
                              <clipPath>
                                <rect
                                  width="10"
                                  height="10"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper4">
                    <div className="image-area">
                      <Link
                        prefetch={false}
                        href={detailPath(
                          "product",
                          "car-parts-mufflers-and-pipes",
                        )}
                      >
                        <img src="/assets/images/portfolio/15.webp" alt="" />
                      </Link>
                    </div>

                    <div className="content-area">
                      <ul className="star-rating">
                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star-sharp-half-stroke"></i>
                        </li>
                      </ul>

                      <h6 className="title ">
                        <Link
                          prefetch={false}
                          href={detailPath(
                            "product",
                            "car-parts-mufflers-and-pipes",
                          )}
                        >
                          {"Car Parts Mufflers And Pipes"}
                        </Link>
                      </h6>

                      <div className="button-area">
                        <p className="">{"$270"}</p>

                        <Link
                          prefetch={false}
                          href="/cart"
                          className="rts-btn btn-primary radius-big icon"
                        >
                          {" Add To Cart "}
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1201_1501)">
                              <path
                                d="M3.22189 6.46492H3.22235C3.22273 6.46492 3.22311 6.46484 3.22349 6.46484H8.53515C8.66592 6.46484 8.78089 6.37809 8.81683 6.25236L9.9887 2.1508C10.014 2.06238 9.99625 1.96731 9.94094 1.89392C9.88555 1.82053 9.79896 1.77734 9.70702 1.77734H2.54623L2.33681 0.834885C2.30697 0.700836 2.18811 0.605469 2.05078 0.605469H0.292969C0.131149 0.605469 0 0.736618 0 0.898437C0 1.06026 0.131149 1.19141 0.292969 1.19141H1.81579C1.85287 1.35841 2.81799 5.70152 2.87353 5.95138C2.56218 6.08673 2.34375 6.39717 2.34375 6.75781C2.34375 7.24243 2.73804 7.63671 3.22265 7.63671H8.53515C8.69697 7.63671 8.82812 7.50557 8.82812 7.34375C8.82812 7.18193 8.69697 7.05078 8.53515 7.05078H3.22265C3.06114 7.05078 2.92969 6.91932 2.92969 6.75781C2.92969 6.59652 3.06068 6.4653 3.22189 6.46492ZM9.31861 2.36328L8.31413 5.8789H3.45764L2.67639 2.36328H9.31861Z"
                                fill="white"
                              ></path>

                              <path
                                d="M2.92969 8.51562C2.92969 9.00024 3.32397 9.39453 3.80859 9.39453C4.29321 9.39453 4.6875 9.00024 4.6875 8.51562C4.6875 8.03101 4.29321 7.63672 3.80859 7.63672C3.32397 7.63672 2.92969 8.03101 2.92969 8.51562ZM3.80859 8.22266C3.97011 8.22266 4.10156 8.35411 4.10156 8.51562C4.10156 8.67714 3.97011 8.80859 3.80859 8.80859C3.64708 8.80859 3.51562 8.67714 3.51562 8.51562C3.51562 8.35411 3.64708 8.22266 3.80859 8.22266Z"
                                fill="white"
                              ></path>

                              <path
                                d="M7.07031 8.51562C7.07031 9.00024 7.4646 9.39453 7.94922 9.39453C8.43384 9.39453 8.82812 9.00024 8.82812 8.51562C8.82812 8.03101 8.43384 7.63672 7.94922 7.63672C7.4646 7.63672 7.07031 8.03101 7.07031 8.51562ZM7.94922 8.22266C8.11073 8.22266 8.24219 8.35411 8.24219 8.51562C8.24219 8.67714 8.11073 8.80859 7.94922 8.80859C7.7877 8.80859 7.65625 8.67714 7.65625 8.51562C7.65625 8.35411 7.7877 8.22266 7.94922 8.22266Z"
                                fill="white"
                              ></path>
                            </g>

                            <defs>
                              <clipPath>
                                <rect
                                  width="10"
                                  height="10"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper4">
                    <div className="image-area">
                      <Link
                        prefetch={false}
                        href={detailPath("product", "car-gears-machine-part")}
                      >
                        <img src="/assets/images/portfolio/16.webp" alt="" />
                      </Link>
                    </div>

                    <div className="content-area">
                      <ul className="star-rating">
                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star-sharp-half-stroke"></i>
                        </li>
                      </ul>

                      <h6 className="title ">
                        <Link
                          prefetch={false}
                          href={detailPath("product", "car-gears-machine-part")}
                        >
                          {"Car Gears Machine part"}
                        </Link>
                      </h6>

                      <div className="button-area">
                        <p className="">{"$699"}</p>

                        <Link
                          prefetch={false}
                          href="/cart"
                          className="rts-btn btn-primary radius-big icon"
                        >
                          {" Add To Cart "}
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1201_1501)">
                              <path
                                d="M3.22189 6.46492H3.22235C3.22273 6.46492 3.22311 6.46484 3.22349 6.46484H8.53515C8.66592 6.46484 8.78089 6.37809 8.81683 6.25236L9.9887 2.1508C10.014 2.06238 9.99625 1.96731 9.94094 1.89392C9.88555 1.82053 9.79896 1.77734 9.70702 1.77734H2.54623L2.33681 0.834885C2.30697 0.700836 2.18811 0.605469 2.05078 0.605469H0.292969C0.131149 0.605469 0 0.736618 0 0.898437C0 1.06026 0.131149 1.19141 0.292969 1.19141H1.81579C1.85287 1.35841 2.81799 5.70152 2.87353 5.95138C2.56218 6.08673 2.34375 6.39717 2.34375 6.75781C2.34375 7.24243 2.73804 7.63671 3.22265 7.63671H8.53515C8.69697 7.63671 8.82812 7.50557 8.82812 7.34375C8.82812 7.18193 8.69697 7.05078 8.53515 7.05078H3.22265C3.06114 7.05078 2.92969 6.91932 2.92969 6.75781C2.92969 6.59652 3.06068 6.4653 3.22189 6.46492ZM9.31861 2.36328L8.31413 5.8789H3.45764L2.67639 2.36328H9.31861Z"
                                fill="white"
                              ></path>

                              <path
                                d="M2.92969 8.51562C2.92969 9.00024 3.32397 9.39453 3.80859 9.39453C4.29321 9.39453 4.6875 9.00024 4.6875 8.51562C4.6875 8.03101 4.29321 7.63672 3.80859 7.63672C3.32397 7.63672 2.92969 8.03101 2.92969 8.51562ZM3.80859 8.22266C3.97011 8.22266 4.10156 8.35411 4.10156 8.51562C4.10156 8.67714 3.97011 8.80859 3.80859 8.80859C3.64708 8.80859 3.51562 8.67714 3.51562 8.51562C3.51562 8.35411 3.64708 8.22266 3.80859 8.22266Z"
                                fill="white"
                              ></path>

                              <path
                                d="M7.07031 8.51562C7.07031 9.00024 7.4646 9.39453 7.94922 9.39453C8.43384 9.39453 8.82812 9.00024 8.82812 8.51562C8.82812 8.03101 8.43384 7.63672 7.94922 7.63672C7.4646 7.63672 7.07031 8.03101 7.07031 8.51562ZM7.94922 8.22266C8.11073 8.22266 8.24219 8.35411 8.24219 8.51562C8.24219 8.67714 8.11073 8.80859 7.94922 8.80859C7.7877 8.80859 7.65625 8.67714 7.65625 8.51562C7.65625 8.35411 7.7877 8.22266 7.94922 8.22266Z"
                                fill="white"
                              ></path>
                            </g>

                            <defs>
                              <clipPath>
                                <rect
                                  width="10"
                                  height="10"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper4">
                    <div className="image-area">
                      <Link
                        prefetch={false}
                        href={detailPath(
                          "product",
                          "car-parts-gears-and-equipment",
                        )}
                      >
                        <img src="/assets/images/portfolio/11.webp" alt="" />
                      </Link>
                    </div>

                    <div className="content-area">
                      <ul className="star-rating">
                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star-sharp-half-stroke"></i>
                        </li>
                      </ul>

                      <h6 className="title ">
                        <Link
                          prefetch={false}
                          href={detailPath(
                            "product",
                            "car-parts-gears-and-equipment",
                          )}
                        >
                          {"Car Parts Gears and Equipment"}
                        </Link>
                      </h6>

                      <div className="button-area">
                        <p className="">{"$400"}</p>

                        <Link
                          prefetch={false}
                          href="/cart"
                          className="rts-btn btn-primary radius-big icon"
                        >
                          {" Add To Cart "}
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1201_1501)">
                              <path
                                d="M3.22189 6.46492H3.22235C3.22273 6.46492 3.22311 6.46484 3.22349 6.46484H8.53515C8.66592 6.46484 8.78089 6.37809 8.81683 6.25236L9.9887 2.1508C10.014 2.06238 9.99625 1.96731 9.94094 1.89392C9.88555 1.82053 9.79896 1.77734 9.70702 1.77734H2.54623L2.33681 0.834885C2.30697 0.700836 2.18811 0.605469 2.05078 0.605469H0.292969C0.131149 0.605469 0 0.736618 0 0.898437C0 1.06026 0.131149 1.19141 0.292969 1.19141H1.81579C1.85287 1.35841 2.81799 5.70152 2.87353 5.95138C2.56218 6.08673 2.34375 6.39717 2.34375 6.75781C2.34375 7.24243 2.73804 7.63671 3.22265 7.63671H8.53515C8.69697 7.63671 8.82812 7.50557 8.82812 7.34375C8.82812 7.18193 8.69697 7.05078 8.53515 7.05078H3.22265C3.06114 7.05078 2.92969 6.91932 2.92969 6.75781C2.92969 6.59652 3.06068 6.4653 3.22189 6.46492ZM9.31861 2.36328L8.31413 5.8789H3.45764L2.67639 2.36328H9.31861Z"
                                fill="white"
                              ></path>

                              <path
                                d="M2.92969 8.51562C2.92969 9.00024 3.32397 9.39453 3.80859 9.39453C4.29321 9.39453 4.6875 9.00024 4.6875 8.51562C4.6875 8.03101 4.29321 7.63672 3.80859 7.63672C3.32397 7.63672 2.92969 8.03101 2.92969 8.51562ZM3.80859 8.22266C3.97011 8.22266 4.10156 8.35411 4.10156 8.51562C4.10156 8.67714 3.97011 8.80859 3.80859 8.80859C3.64708 8.80859 3.51562 8.67714 3.51562 8.51562C3.51562 8.35411 3.64708 8.22266 3.80859 8.22266Z"
                                fill="white"
                              ></path>

                              <path
                                d="M7.07031 8.51562C7.07031 9.00024 7.4646 9.39453 7.94922 9.39453C8.43384 9.39453 8.82812 9.00024 8.82812 8.51562C8.82812 8.03101 8.43384 7.63672 7.94922 7.63672C7.4646 7.63672 7.07031 8.03101 7.07031 8.51562ZM7.94922 8.22266C8.11073 8.22266 8.24219 8.35411 8.24219 8.51562C8.24219 8.67714 8.11073 8.80859 7.94922 8.80859C7.7877 8.80859 7.65625 8.67714 7.65625 8.51562C7.65625 8.35411 7.7877 8.22266 7.94922 8.22266Z"
                                fill="white"
                              ></path>
                            </g>

                            <defs>
                              <clipPath>
                                <rect
                                  width="10"
                                  height="10"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper4">
                    <div className="image-area">
                      <Link
                        prefetch={false}
                        href={detailPath("product", "power-steering-pump")}
                      >
                        <img src="/assets/images/portfolio/12.webp" alt="" />
                      </Link>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <ul className="star-rating">
                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star-sharp-half-stroke"></i>
                        </li>
                      </ul>

                      <h6 className="title ">
                        <Link
                          prefetch={false}
                          href={detailPath("product", "power-steering-pump")}
                        >
                          {"Power Steering Pump"}
                        </Link>
                      </h6>

                      <div className="button-area">
                        <p className="">{"$599"}</p>

                        <Link
                          prefetch={false}
                          href="/cart"
                          className="rts-btn btn-primary radius-big icon"
                        >
                          {" Add To Cart "}
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1201_1501)">
                              <path
                                d="M3.22189 6.46492H3.22235C3.22273 6.46492 3.22311 6.46484 3.22349 6.46484H8.53515C8.66592 6.46484 8.78089 6.37809 8.81683 6.25236L9.9887 2.1508C10.014 2.06238 9.99625 1.96731 9.94094 1.89392C9.88555 1.82053 9.79896 1.77734 9.70702 1.77734H2.54623L2.33681 0.834885C2.30697 0.700836 2.18811 0.605469 2.05078 0.605469H0.292969C0.131149 0.605469 0 0.736618 0 0.898437C0 1.06026 0.131149 1.19141 0.292969 1.19141H1.81579C1.85287 1.35841 2.81799 5.70152 2.87353 5.95138C2.56218 6.08673 2.34375 6.39717 2.34375 6.75781C2.34375 7.24243 2.73804 7.63671 3.22265 7.63671H8.53515C8.69697 7.63671 8.82812 7.50557 8.82812 7.34375C8.82812 7.18193 8.69697 7.05078 8.53515 7.05078H3.22265C3.06114 7.05078 2.92969 6.91932 2.92969 6.75781C2.92969 6.59652 3.06068 6.4653 3.22189 6.46492ZM9.31861 2.36328L8.31413 5.8789H3.45764L2.67639 2.36328H9.31861Z"
                                fill="white"
                              ></path>

                              <path
                                d="M2.92969 8.51562C2.92969 9.00024 3.32397 9.39453 3.80859 9.39453C4.29321 9.39453 4.6875 9.00024 4.6875 8.51562C4.6875 8.03101 4.29321 7.63672 3.80859 7.63672C3.32397 7.63672 2.92969 8.03101 2.92969 8.51562ZM3.80859 8.22266C3.97011 8.22266 4.10156 8.35411 4.10156 8.51562C4.10156 8.67714 3.97011 8.80859 3.80859 8.80859C3.64708 8.80859 3.51562 8.67714 3.51562 8.51562C3.51562 8.35411 3.64708 8.22266 3.80859 8.22266Z"
                                fill="white"
                              ></path>

                              <path
                                d="M7.07031 8.51562C7.07031 9.00024 7.4646 9.39453 7.94922 9.39453C8.43384 9.39453 8.82812 9.00024 8.82812 8.51562C8.82812 8.03101 8.43384 7.63672 7.94922 7.63672C7.4646 7.63672 7.07031 8.03101 7.07031 8.51562ZM7.94922 8.22266C8.11073 8.22266 8.24219 8.35411 8.24219 8.51562C8.24219 8.67714 8.11073 8.80859 7.94922 8.80859C7.7877 8.80859 7.65625 8.67714 7.65625 8.51562C7.65625 8.35411 7.7877 8.22266 7.94922 8.22266Z"
                                fill="white"
                              ></path>
                            </g>

                            <defs>
                              <clipPath>
                                <rect
                                  width="10"
                                  height="10"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper4">
                    <div className="image-area">
                      <Link
                        prefetch={false}
                        href={detailPath("product", "high-performance-tires")}
                      >
                        <img src="/assets/images/portfolio/13.webp" alt="" />
                      </Link>
                    </div>

                    <div className="content-area">
                      <ul className="star-rating">
                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star-sharp-half-stroke"></i>
                        </li>
                      </ul>

                      <h6 className="title ">
                        <Link
                          prefetch={false}
                          href={detailPath("product", "high-performance-tires")}
                        >
                          {"High-Performance Tires"}
                        </Link>
                      </h6>

                      <div className="button-area">
                        <p className="">{"$399"}</p>

                        <Link
                          prefetch={false}
                          href="/cart"
                          className="rts-btn btn-primary radius-big icon"
                        >
                          {" Add To Cart "}
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1201_1501)">
                              <path
                                d="M3.22189 6.46492H3.22235C3.22273 6.46492 3.22311 6.46484 3.22349 6.46484H8.53515C8.66592 6.46484 8.78089 6.37809 8.81683 6.25236L9.9887 2.1508C10.014 2.06238 9.99625 1.96731 9.94094 1.89392C9.88555 1.82053 9.79896 1.77734 9.70702 1.77734H2.54623L2.33681 0.834885C2.30697 0.700836 2.18811 0.605469 2.05078 0.605469H0.292969C0.131149 0.605469 0 0.736618 0 0.898437C0 1.06026 0.131149 1.19141 0.292969 1.19141H1.81579C1.85287 1.35841 2.81799 5.70152 2.87353 5.95138C2.56218 6.08673 2.34375 6.39717 2.34375 6.75781C2.34375 7.24243 2.73804 7.63671 3.22265 7.63671H8.53515C8.69697 7.63671 8.82812 7.50557 8.82812 7.34375C8.82812 7.18193 8.69697 7.05078 8.53515 7.05078H3.22265C3.06114 7.05078 2.92969 6.91932 2.92969 6.75781C2.92969 6.59652 3.06068 6.4653 3.22189 6.46492ZM9.31861 2.36328L8.31413 5.8789H3.45764L2.67639 2.36328H9.31861Z"
                                fill="white"
                              ></path>

                              <path
                                d="M2.92969 8.51562C2.92969 9.00024 3.32397 9.39453 3.80859 9.39453C4.29321 9.39453 4.6875 9.00024 4.6875 8.51562C4.6875 8.03101 4.29321 7.63672 3.80859 7.63672C3.32397 7.63672 2.92969 8.03101 2.92969 8.51562ZM3.80859 8.22266C3.97011 8.22266 4.10156 8.35411 4.10156 8.51562C4.10156 8.67714 3.97011 8.80859 3.80859 8.80859C3.64708 8.80859 3.51562 8.67714 3.51562 8.51562C3.51562 8.35411 3.64708 8.22266 3.80859 8.22266Z"
                                fill="white"
                              ></path>

                              <path
                                d="M7.07031 8.51562C7.07031 9.00024 7.4646 9.39453 7.94922 9.39453C8.43384 9.39453 8.82812 9.00024 8.82812 8.51562C8.82812 8.03101 8.43384 7.63672 7.94922 7.63672C7.4646 7.63672 7.07031 8.03101 7.07031 8.51562ZM7.94922 8.22266C8.11073 8.22266 8.24219 8.35411 8.24219 8.51562C8.24219 8.67714 8.11073 8.80859 7.94922 8.80859C7.7877 8.80859 7.65625 8.67714 7.65625 8.51562C7.65625 8.35411 7.7877 8.22266 7.94922 8.22266Z"
                                fill="white"
                              ></path>
                            </g>

                            <defs>
                              <clipPath>
                                <rect
                                  width="10"
                                  height="10"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper4">
                    <div className="image-area">
                      <Link
                        prefetch={false}
                        href={detailPath(
                          "product",
                          "micrometer-with-check-ring",
                        )}
                      >
                        <img src="/assets/images/portfolio/14.webp" alt="" />
                      </Link>
                    </div>

                    <div className="content-area">
                      <ul className="star-rating">
                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star-sharp-half-stroke"></i>
                        </li>
                      </ul>

                      <h6 className="title ">
                        <Link
                          prefetch={false}
                          href={detailPath(
                            "product",
                            "micrometer-with-check-ring",
                          )}
                        >
                          {"Micrometer with check ring"}
                        </Link>
                      </h6>

                      <div className="button-area">
                        <p className="">{"$790"}</p>

                        <Link
                          prefetch={false}
                          href="/cart"
                          className="rts-btn btn-primary radius-big icon"
                        >
                          {" Add To Cart "}
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1201_1501)">
                              <path
                                d="M3.22189 6.46492H3.22235C3.22273 6.46492 3.22311 6.46484 3.22349 6.46484H8.53515C8.66592 6.46484 8.78089 6.37809 8.81683 6.25236L9.9887 2.1508C10.014 2.06238 9.99625 1.96731 9.94094 1.89392C9.88555 1.82053 9.79896 1.77734 9.70702 1.77734H2.54623L2.33681 0.834885C2.30697 0.700836 2.18811 0.605469 2.05078 0.605469H0.292969C0.131149 0.605469 0 0.736618 0 0.898437C0 1.06026 0.131149 1.19141 0.292969 1.19141H1.81579C1.85287 1.35841 2.81799 5.70152 2.87353 5.95138C2.56218 6.08673 2.34375 6.39717 2.34375 6.75781C2.34375 7.24243 2.73804 7.63671 3.22265 7.63671H8.53515C8.69697 7.63671 8.82812 7.50557 8.82812 7.34375C8.82812 7.18193 8.69697 7.05078 8.53515 7.05078H3.22265C3.06114 7.05078 2.92969 6.91932 2.92969 6.75781C2.92969 6.59652 3.06068 6.4653 3.22189 6.46492ZM9.31861 2.36328L8.31413 5.8789H3.45764L2.67639 2.36328H9.31861Z"
                                fill="white"
                              ></path>

                              <path
                                d="M2.92969 8.51562C2.92969 9.00024 3.32397 9.39453 3.80859 9.39453C4.29321 9.39453 4.6875 9.00024 4.6875 8.51562C4.6875 8.03101 4.29321 7.63672 3.80859 7.63672C3.32397 7.63672 2.92969 8.03101 2.92969 8.51562ZM3.80859 8.22266C3.97011 8.22266 4.10156 8.35411 4.10156 8.51562C4.10156 8.67714 3.97011 8.80859 3.80859 8.80859C3.64708 8.80859 3.51562 8.67714 3.51562 8.51562C3.51562 8.35411 3.64708 8.22266 3.80859 8.22266Z"
                                fill="white"
                              ></path>

                              <path
                                d="M7.07031 8.51562C7.07031 9.00024 7.4646 9.39453 7.94922 9.39453C8.43384 9.39453 8.82812 9.00024 8.82812 8.51562C8.82812 8.03101 8.43384 7.63672 7.94922 7.63672C7.4646 7.63672 7.07031 8.03101 7.07031 8.51562ZM7.94922 8.22266C8.11073 8.22266 8.24219 8.35411 8.24219 8.51562C8.24219 8.67714 8.11073 8.80859 7.94922 8.80859C7.7877 8.80859 7.65625 8.67714 7.65625 8.51562C7.65625 8.35411 7.7877 8.22266 7.94922 8.22266Z"
                                fill="white"
                              ></path>
                            </g>

                            <defs>
                              <clipPath>
                                <rect
                                  width="10"
                                  height="10"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper4">
                    <div className="image-area">
                      <Link
                        prefetch={false}
                        href={detailPath(
                          "product",
                          "car-parts-mufflers-and-pipes",
                        )}
                      >
                        <img src="/assets/images/portfolio/15.webp" alt="" />
                      </Link>
                    </div>

                    <div className="content-area">
                      <ul className="star-rating">
                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star-sharp-half-stroke"></i>
                        </li>
                      </ul>

                      <h6 className="title ">
                        <Link
                          prefetch={false}
                          href={detailPath(
                            "product",
                            "car-parts-mufflers-and-pipes",
                          )}
                        >
                          {"Car Parts Mufflers And Pipes"}
                        </Link>
                      </h6>

                      <div className="button-area">
                        <p className="">{"$270"}</p>

                        <Link
                          prefetch={false}
                          href="/cart"
                          className="rts-btn btn-primary radius-big icon"
                        >
                          {" Add To Cart "}
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1201_1501)">
                              <path
                                d="M3.22189 6.46492H3.22235C3.22273 6.46492 3.22311 6.46484 3.22349 6.46484H8.53515C8.66592 6.46484 8.78089 6.37809 8.81683 6.25236L9.9887 2.1508C10.014 2.06238 9.99625 1.96731 9.94094 1.89392C9.88555 1.82053 9.79896 1.77734 9.70702 1.77734H2.54623L2.33681 0.834885C2.30697 0.700836 2.18811 0.605469 2.05078 0.605469H0.292969C0.131149 0.605469 0 0.736618 0 0.898437C0 1.06026 0.131149 1.19141 0.292969 1.19141H1.81579C1.85287 1.35841 2.81799 5.70152 2.87353 5.95138C2.56218 6.08673 2.34375 6.39717 2.34375 6.75781C2.34375 7.24243 2.73804 7.63671 3.22265 7.63671H8.53515C8.69697 7.63671 8.82812 7.50557 8.82812 7.34375C8.82812 7.18193 8.69697 7.05078 8.53515 7.05078H3.22265C3.06114 7.05078 2.92969 6.91932 2.92969 6.75781C2.92969 6.59652 3.06068 6.4653 3.22189 6.46492ZM9.31861 2.36328L8.31413 5.8789H3.45764L2.67639 2.36328H9.31861Z"
                                fill="white"
                              ></path>

                              <path
                                d="M2.92969 8.51562C2.92969 9.00024 3.32397 9.39453 3.80859 9.39453C4.29321 9.39453 4.6875 9.00024 4.6875 8.51562C4.6875 8.03101 4.29321 7.63672 3.80859 7.63672C3.32397 7.63672 2.92969 8.03101 2.92969 8.51562ZM3.80859 8.22266C3.97011 8.22266 4.10156 8.35411 4.10156 8.51562C4.10156 8.67714 3.97011 8.80859 3.80859 8.80859C3.64708 8.80859 3.51562 8.67714 3.51562 8.51562C3.51562 8.35411 3.64708 8.22266 3.80859 8.22266Z"
                                fill="white"
                              ></path>

                              <path
                                d="M7.07031 8.51562C7.07031 9.00024 7.4646 9.39453 7.94922 9.39453C8.43384 9.39453 8.82812 9.00024 8.82812 8.51562C8.82812 8.03101 8.43384 7.63672 7.94922 7.63672C7.4646 7.63672 7.07031 8.03101 7.07031 8.51562ZM7.94922 8.22266C8.11073 8.22266 8.24219 8.35411 8.24219 8.51562C8.24219 8.67714 8.11073 8.80859 7.94922 8.80859C7.7877 8.80859 7.65625 8.67714 7.65625 8.51562C7.65625 8.35411 7.7877 8.22266 7.94922 8.22266Z"
                                fill="white"
                              ></path>
                            </g>

                            <defs>
                              <clipPath>
                                <rect
                                  width="10"
                                  height="10"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper4">
                    <div className="image-area">
                      <Link
                        prefetch={false}
                        href={detailPath("product", "car-gears-machine-part")}
                      >
                        <img src="/assets/images/portfolio/16.webp" alt="" />
                      </Link>
                    </div>

                    <div className="content-area">
                      <ul className="star-rating">
                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star"></i>
                        </li>

                        <li>
                          <i className="rt-icon-star-sharp-half-stroke"></i>
                        </li>
                      </ul>

                      <h6 className="title ">
                        <Link
                          prefetch={false}
                          href={detailPath("product", "car-gears-machine-part")}
                        >
                          {"Car Gears Machine part"}
                        </Link>
                      </h6>

                      <div className="button-area">
                        <p className="">{"$699"}</p>

                        <Link
                          prefetch={false}
                          href="/cart"
                          className="rts-btn btn-primary radius-big icon"
                        >
                          {" Add To Cart "}
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1201_1501)">
                              <path
                                d="M3.22189 6.46492H3.22235C3.22273 6.46492 3.22311 6.46484 3.22349 6.46484H8.53515C8.66592 6.46484 8.78089 6.37809 8.81683 6.25236L9.9887 2.1508C10.014 2.06238 9.99625 1.96731 9.94094 1.89392C9.88555 1.82053 9.79896 1.77734 9.70702 1.77734H2.54623L2.33681 0.834885C2.30697 0.700836 2.18811 0.605469 2.05078 0.605469H0.292969C0.131149 0.605469 0 0.736618 0 0.898437C0 1.06026 0.131149 1.19141 0.292969 1.19141H1.81579C1.85287 1.35841 2.81799 5.70152 2.87353 5.95138C2.56218 6.08673 2.34375 6.39717 2.34375 6.75781C2.34375 7.24243 2.73804 7.63671 3.22265 7.63671H8.53515C8.69697 7.63671 8.82812 7.50557 8.82812 7.34375C8.82812 7.18193 8.69697 7.05078 8.53515 7.05078H3.22265C3.06114 7.05078 2.92969 6.91932 2.92969 6.75781C2.92969 6.59652 3.06068 6.4653 3.22189 6.46492ZM9.31861 2.36328L8.31413 5.8789H3.45764L2.67639 2.36328H9.31861Z"
                                fill="white"
                              ></path>

                              <path
                                d="M2.92969 8.51562C2.92969 9.00024 3.32397 9.39453 3.80859 9.39453C4.29321 9.39453 4.6875 9.00024 4.6875 8.51562C4.6875 8.03101 4.29321 7.63672 3.80859 7.63672C3.32397 7.63672 2.92969 8.03101 2.92969 8.51562ZM3.80859 8.22266C3.97011 8.22266 4.10156 8.35411 4.10156 8.51562C4.10156 8.67714 3.97011 8.80859 3.80859 8.80859C3.64708 8.80859 3.51562 8.67714 3.51562 8.51562C3.51562 8.35411 3.64708 8.22266 3.80859 8.22266Z"
                                fill="white"
                              ></path>

                              <path
                                d="M7.07031 8.51562C7.07031 9.00024 7.4646 9.39453 7.94922 9.39453C8.43384 9.39453 8.82812 9.00024 8.82812 8.51562C8.82812 8.03101 8.43384 7.63672 7.94922 7.63672C7.4646 7.63672 7.07031 8.03101 7.07031 8.51562ZM7.94922 8.22266C8.11073 8.22266 8.24219 8.35411 8.24219 8.51562C8.24219 8.67714 8.11073 8.80859 7.94922 8.80859C7.7877 8.80859 7.65625 8.67714 7.65625 8.51562C7.65625 8.35411 7.7877 8.22266 7.94922 8.22266Z"
                                fill="white"
                              ></path>
                            </g>

                            <defs>
                              <clipPath>
                                <rect
                                  width="10"
                                  height="10"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a href="#" className="rts-btn load-more-btn btn-border">
                {"Load More"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
