import Link from "next/link";
import TemplateForm from "@/components/TemplateForm";
export default function Portfolio3Portfolio() {
  return (
    <div className="rts-portfolio-area inner rts-section-gapNew">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="sticky-top">
              <div className="left-side-bar">
                <div className="search-area side-box">
                  <h2>{"Cars Search"}</h2>

                  <TemplateForm context="/portfolio-3">
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

          <div className="col-lg-8">
            <div className="right">
              <div className="project-wrapper2 list-style mb--30">
                <div className="image-area">
                  <Link
                    prefetch={false}
                    href="/portfolio-details/honda-civic-hatchback"
                  >
                    <img
                      src="/assets/images/portfolio/08-sm.webp"
                      height="206"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="content-area">
                  <h6 className="title">
                    <Link
                      prefetch={false}
                      href="/portfolio-details/honda-civic-hatchback"
                    >
                      {"Honda Civic Hatchback"}
                    </Link>
                  </h6>

                  <ul className="feature-area">
                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/01.svg"
                        alt=""
                      />
                      {" 100 Miles "}
                    </li>

                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/02.svg"
                        alt=""
                      />
                      {" Petrol "}
                    </li>

                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/03.svg"
                        alt=""
                      />
                      {" Autometic "}
                    </li>
                  </ul>

                  <div className="button-area">
                    <p className="cw">{"$400"}</p>

                    <Link
                      prefetch={false}
                      href="/portfolio-details/honda-civic-hatchback"
                      className="rts-btn btn-primary radius-small"
                    >
                      {"View Details"}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="project-wrapper2 list-style mb--30">
                <div className="image-area">
                  <Link
                    prefetch={false}
                    href="/portfolio-details/mercedes-benz-e-class"
                  >
                    <img
                      src="/assets/images/portfolio/05-sm.webp"
                      height="206"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="content-area">
                  <h6 className="title">
                    <Link
                      prefetch={false}
                      href="/portfolio-details/mercedes-benz-e-class"
                    >
                      {"Mercedes-Benz E-Class"}
                    </Link>
                  </h6>

                  <ul className="feature-area">
                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/01.svg"
                        alt=""
                      />
                      {" 100 Miles "}
                    </li>

                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/02.svg"
                        alt=""
                      />
                      {" Petrol "}
                    </li>

                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/03.svg"
                        alt=""
                      />
                      {" Autometic "}
                    </li>
                  </ul>

                  <div className="button-area">
                    <p className="cw">{"$400"}</p>

                    <Link
                      prefetch={false}
                      href="/portfolio-details/mercedes-benz-e-class"
                      className="rts-btn btn-primary radius-small"
                    >
                      {"View Details"}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="project-wrapper2 list-style mb--30">
                <div className="image-area">
                  <Link
                    prefetch={false}
                    href="/portfolio-details/mazda-mx-5-miata"
                  >
                    <img
                      src="/assets/images/portfolio/07-sm.webp"
                      height="206"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="content-area">
                  <h6 className="title">
                    <Link
                      prefetch={false}
                      href="/portfolio-details/mazda-mx-5-miata"
                    >
                      {"Mazda MX-5 Miata"}
                    </Link>
                  </h6>

                  <ul className="feature-area">
                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/01.svg"
                        alt=""
                      />
                      {" 100 Miles "}
                    </li>

                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/02.svg"
                        alt=""
                      />
                      {" Petrol "}
                    </li>

                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/03.svg"
                        alt=""
                      />
                      {" Autometic "}
                    </li>
                  </ul>

                  <div className="button-area">
                    <p className="cw">{"$400"}</p>

                    <Link
                      prefetch={false}
                      href="/portfolio-details/mazda-mx-5-miata"
                      className="rts-btn btn-primary radius-small"
                    >
                      {"View Details"}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="project-wrapper2 list-style mb--30">
                <div className="image-area">
                  <Link
                    prefetch={false}
                    href="/portfolio-details/honda-civic-hatchback"
                  >
                    <img
                      src="/assets/images/portfolio/08-sm.webp"
                      height="206"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="content-area">
                  <h6 className="title">
                    <Link
                      prefetch={false}
                      href="/portfolio-details/honda-civic-hatchback"
                    >
                      {"Honda Civic Hatchback"}
                    </Link>
                  </h6>

                  <ul className="feature-area">
                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/01.svg"
                        alt=""
                      />
                      {" 100 Miles "}
                    </li>

                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/02.svg"
                        alt=""
                      />
                      {" Petrol "}
                    </li>

                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/03.svg"
                        alt=""
                      />
                      {" Autometic "}
                    </li>
                  </ul>

                  <div className="button-area">
                    <p className="cw">{"$400"}</p>

                    <Link
                      prefetch={false}
                      href="/portfolio-details/honda-civic-hatchback"
                      className="rts-btn btn-primary radius-small"
                    >
                      {"View Details"}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="project-wrapper2 list-style mb--30">
                <div className="image-area">
                  <Link
                    prefetch={false}
                    href="/portfolio-details/mercedes-benz-e-class"
                  >
                    <img
                      src="/assets/images/portfolio/05-sm.webp"
                      height="206"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="content-area">
                  <h6 className="title">
                    <Link
                      prefetch={false}
                      href="/portfolio-details/mercedes-benz-e-class"
                    >
                      {"Mercedes-Benz E-Class"}
                    </Link>
                  </h6>

                  <ul className="feature-area">
                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/01.svg"
                        alt=""
                      />
                      {" 100 Miles "}
                    </li>

                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/02.svg"
                        alt=""
                      />
                      {" Petrol "}
                    </li>

                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/03.svg"
                        alt=""
                      />
                      {" Autometic "}
                    </li>
                  </ul>

                  <div className="button-area">
                    <p className="cw">{"$400"}</p>

                    <Link
                      prefetch={false}
                      href="/portfolio-details/mercedes-benz-e-class"
                      className="rts-btn btn-primary radius-small"
                    >
                      {"View Details"}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="project-wrapper2 list-style mb--30">
                <div className="image-area">
                  <Link
                    prefetch={false}
                    href="/portfolio-details/mazda-mx-5-miata"
                  >
                    <img
                      src="/assets/images/portfolio/07-sm.webp"
                      height="206"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="content-area">
                  <h6 className="title">
                    <Link
                      prefetch={false}
                      href="/portfolio-details/mazda-mx-5-miata"
                    >
                      {"Mazda MX-5 Miata"}
                    </Link>
                  </h6>

                  <ul className="feature-area">
                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/01.svg"
                        alt=""
                      />
                      {" 100 Miles "}
                    </li>

                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/02.svg"
                        alt=""
                      />
                      {" Petrol "}
                    </li>

                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/03.svg"
                        alt=""
                      />
                      {" Autometic "}
                    </li>
                  </ul>

                  <div className="button-area">
                    <p className="cw">{"$400"}</p>

                    <Link
                      prefetch={false}
                      href="/portfolio-details/mazda-mx-5-miata"
                      className="rts-btn btn-primary radius-small"
                    >
                      {"View Details"}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="project-wrapper2 list-style mb--30">
                <div className="image-area">
                  <Link
                    prefetch={false}
                    href="/portfolio-details/honda-civic-hatchback"
                  >
                    <img
                      src="/assets/images/portfolio/08-sm.webp"
                      height="206"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="content-area">
                  <h6 className="title">
                    <Link
                      prefetch={false}
                      href="/portfolio-details/honda-civic-hatchback"
                    >
                      {"Honda Civic Hatchback"}
                    </Link>
                  </h6>

                  <ul className="feature-area">
                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/01.svg"
                        alt=""
                      />
                      {" 100 Miles "}
                    </li>

                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/02.svg"
                        alt=""
                      />
                      {" Petrol "}
                    </li>

                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/03.svg"
                        alt=""
                      />
                      {" Autometic "}
                    </li>
                  </ul>

                  <div className="button-area">
                    <p className="cw">{"$400"}</p>

                    <Link
                      prefetch={false}
                      href="/portfolio-details/honda-civic-hatchback"
                      className="rts-btn btn-primary radius-small"
                    >
                      {"View Details"}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="project-wrapper2 list-style mb--30">
                <div className="image-area">
                  <Link
                    prefetch={false}
                    href="/portfolio-details/mercedes-benz-e-class"
                  >
                    <img
                      src="/assets/images/portfolio/05-sm.webp"
                      height="206"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="content-area">
                  <h6 className="title">
                    <Link
                      prefetch={false}
                      href="/portfolio-details/mercedes-benz-e-class"
                    >
                      {"Mercedes-Benz E-Class"}
                    </Link>
                  </h6>

                  <ul className="feature-area">
                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/01.svg"
                        alt=""
                      />
                      {" 100 Miles "}
                    </li>

                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/02.svg"
                        alt=""
                      />
                      {" Petrol "}
                    </li>

                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/03.svg"
                        alt=""
                      />
                      {" Autometic "}
                    </li>
                  </ul>

                  <div className="button-area">
                    <p className="cw">{"$400"}</p>

                    <Link
                      prefetch={false}
                      href="/portfolio-details/mercedes-benz-e-class"
                      className="rts-btn btn-primary radius-small"
                    >
                      {"View Details"}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="project-wrapper2 list-style">
                <div className="image-area">
                  <Link
                    prefetch={false}
                    href="/portfolio-details/mazda-mx-5-miata"
                  >
                    <img
                      src="/assets/images/portfolio/07-sm.webp"
                      height="206"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="content-area">
                  <h6 className="title">
                    <Link
                      prefetch={false}
                      href="/portfolio-details/mazda-mx-5-miata"
                    >
                      {"Mazda MX-5 Miata"}
                    </Link>
                  </h6>

                  <ul className="feature-area">
                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/01.svg"
                        alt=""
                      />
                      {" 100 Miles "}
                    </li>

                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/02.svg"
                        alt=""
                      />
                      {" Petrol "}
                    </li>

                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/03.svg"
                        alt=""
                      />
                      {" Autometic "}
                    </li>
                  </ul>

                  <div className="button-area">
                    <p className="cw">{"$400"}</p>

                    <Link
                      prefetch={false}
                      href="/portfolio-details/mazda-mx-5-miata"
                      className="rts-btn btn-primary radius-small"
                    >
                      {"View Details"}
                    </Link>
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
