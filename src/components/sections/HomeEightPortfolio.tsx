import { detailPath } from "@/lib/detail-paths";
import Link from "next/link";
export default function HomeEightPortfolio() {
  return (
    <section className="rts-portfolio-area rts-section-gap">
      <div className="section-title-area2">
        <p
          className="sub-title"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          {"Select Car"}
        </p>

        <h2 className="section-title move-right" data-aos="move-right">
          {"Our Amazing "}
          <span>{"Car"}</span>
        </h2>
      </div>

      <div className="tab-area">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="new-cars-tab"
              data-bs-toggle="tab"
              data-bs-target="#new-cars"
              type="button"
              role="tab"
              aria-controls="new-cars"
              aria-selected="true"
            >
              {"New Cars"}
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="used-tab"
              data-bs-toggle="tab"
              data-bs-target="#used"
              type="button"
              role="tab"
              aria-controls="used"
              aria-selected="false"
            >
              {"Used Cars"}
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="trending-tab"
              data-bs-toggle="tab"
              data-bs-target="#trending"
              type="button"
              role="tab"
              aria-controls="trending"
              aria-selected="false"
            >
              {"Trending Cars"}
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="stocks-tab"
              data-bs-toggle="tab"
              data-bs-target="#stocks"
              type="button"
              role="tab"
              aria-controls="stocks"
              aria-selected="false"
            >
              {"In Stocks"}
            </button>
          </li>
        </ul>
      </div>

      <div
        className="section-inner mt--80"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <div className=" tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="new-cars"
            role="tabpanel"
            aria-labelledby="new-cars-tab"
          >
            <div className="slider-area">
              <div className="swiper projectSlider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="project-wrapper">
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href={detailPath("car", "thunderbolt-car")}
                        >
                          <img src="/assets/images/portfolio/01.webp" alt="" />
                        </Link>
                      </div>

                      <span className="price">{"14,000$"}</span>

                      <div className="content-area">
                        <h5 className="title">
                          <Link
                            prefetch={false}
                            href={detailPath("car", "thunderbolt-car")}
                          >
                            {"Thunderbolt Car"}
                          </Link>
                        </h5>

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

                        <Link
                          prefetch={false}
                          href={detailPath("car", "thunderbolt-car")}
                          className="rts-btn btn-primary radius-big"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="project-wrapper">
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href={detailPath("car", "volvo-1927")}
                        >
                          <img src="/assets/images/portfolio/02.webp" alt="" />
                        </Link>
                      </div>

                      <span className="price">{"14,300$"}</span>

                      <div className="content-area">
                        <h5 className="title">
                          <Link
                            prefetch={false}
                            href={detailPath("car", "volvo-1927")}
                          >
                            {"Volvo. 1927"}
                          </Link>
                        </h5>

                        <ul className="feature-area">
                          <li>
                            <img
                              src="/assets/images/portfolio/feature-icon/01.svg"
                              alt=""
                            />
                            {" 105 Miles "}
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

                        <Link
                          prefetch={false}
                          href={detailPath("car", "volvo-1927")}
                          className="rts-btn btn-primary radius-big"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="project-wrapper">
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href={detailPath("car", "volkswagen-1938")}
                        >
                          <img src="/assets/images/portfolio/03.webp" alt="" />
                        </Link>
                      </div>

                      <span className="price">{"14,500$"}</span>

                      <div className="content-area">
                        <h5 className="title">
                          <Link
                            prefetch={false}
                            href={detailPath("car", "volkswagen-1938")}
                          >
                            {"Volkswagen. 1938"}
                          </Link>
                        </h5>

                        <ul className="feature-area">
                          <li>
                            <img
                              src="/assets/images/portfolio/feature-icon/01.svg"
                              alt=""
                            />
                            {" 110 Miles "}
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

                        <Link
                          prefetch={false}
                          href={detailPath("car", "volkswagen-1938")}
                          className="rts-btn btn-primary radius-big"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="project-wrapper">
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href={detailPath("car", "thunderbolt-car")}
                        >
                          <img src="/assets/images/portfolio/01.webp" alt="" />
                        </Link>
                      </div>

                      <span className="price">{"14,000$"}</span>

                      <div className="content-area">
                        <h5 className="title">
                          <Link
                            prefetch={false}
                            href={detailPath("car", "thunderbolt-car")}
                          >
                            {"Thunderbolt Car"}
                          </Link>
                        </h5>

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

                        <Link
                          prefetch={false}
                          href={detailPath("car", "thunderbolt-car")}
                          className="rts-btn btn-primary radius-big"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="project-wrapper">
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href={detailPath("car", "volvo-1927")}
                        >
                          <img src="/assets/images/portfolio/02.webp" alt="" />
                        </Link>
                      </div>

                      <span className="price">{"14,300$"}</span>

                      <div className="content-area">
                        <h5 className="title">
                          <Link
                            prefetch={false}
                            href={detailPath("car", "volvo-1927")}
                          >
                            {"Volvo. 1927"}
                          </Link>
                        </h5>

                        <ul className="feature-area">
                          <li>
                            <img
                              src="/assets/images/portfolio/feature-icon/01.svg"
                              alt=""
                            />
                            {" 105 Miles "}
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

                        <Link
                          prefetch={false}
                          href={detailPath("car", "volvo-1927")}
                          className="rts-btn btn-primary radius-big"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="project-wrapper">
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href={detailPath("car", "volkswagen-1938")}
                        >
                          <img src="/assets/images/portfolio/03.webp" alt="" />
                        </Link>
                      </div>

                      <span className="price">{"14,500$"}</span>

                      <div className="content-area">
                        <h5 className="title">
                          <Link
                            prefetch={false}
                            href={detailPath("car", "volkswagen-1938")}
                          >
                            {"Volkswagen. 1938"}
                          </Link>
                        </h5>

                        <ul className="feature-area">
                          <li>
                            <img
                              src="/assets/images/portfolio/feature-icon/01.svg"
                              alt=""
                            />
                            {" 110 Miles "}
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

                        <Link
                          prefetch={false}
                          href={detailPath("car", "volkswagen-1938")}
                          className="rts-btn btn-primary radius-big"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-pagination-2"></div>
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="used"
            role="tabpanel"
            aria-labelledby="used-tab"
          >
            <div className="slider-area">
              <div className="swiper projectSlider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="project-wrapper">
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href={detailPath("car", "volvo-1927")}
                        >
                          <img src="/assets/images/portfolio/02.webp" alt="" />
                        </Link>
                      </div>

                      <span className="price">{"14,300$"}</span>

                      <div className="content-area">
                        <h5 className="title">
                          <Link
                            prefetch={false}
                            href={detailPath("car", "volvo-1927")}
                          >
                            {"Volvo. 1927"}
                          </Link>
                        </h5>

                        <ul className="feature-area">
                          <li>
                            <img
                              src="/assets/images/portfolio/feature-icon/01.svg"
                              alt=""
                            />
                            {" 105 Miles "}
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

                        <Link
                          prefetch={false}
                          href={detailPath("car", "volvo-1927")}
                          className="rts-btn btn-primary radius-big"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="project-wrapper">
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href={detailPath("car", "thunderbolt-car")}
                        >
                          <img src="/assets/images/portfolio/01.webp" alt="" />
                        </Link>
                      </div>

                      <span className="price">{"14,000$"}</span>

                      <div className="content-area">
                        <h5 className="title">
                          <Link
                            prefetch={false}
                            href={detailPath("car", "thunderbolt-car")}
                          >
                            {"Thunderbolt Car"}
                          </Link>
                        </h5>

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

                        <Link
                          prefetch={false}
                          href={detailPath("car", "thunderbolt-car")}
                          className="rts-btn btn-primary radius-big"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="project-wrapper">
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href={detailPath("car", "volkswagen-1938")}
                        >
                          <img src="/assets/images/portfolio/03.webp" alt="" />
                        </Link>
                      </div>

                      <span className="price">{"14,500$"}</span>

                      <div className="content-area">
                        <h5 className="title">
                          <Link
                            prefetch={false}
                            href={detailPath("car", "volkswagen-1938")}
                          >
                            {"Volkswagen. 1938"}
                          </Link>
                        </h5>

                        <ul className="feature-area">
                          <li>
                            <img
                              src="/assets/images/portfolio/feature-icon/01.svg"
                              alt=""
                            />
                            {" 110 Miles "}
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

                        <Link
                          prefetch={false}
                          href={detailPath("car", "volkswagen-1938")}
                          className="rts-btn btn-primary radius-big"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="project-wrapper">
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href={detailPath("car", "thunderbolt-car")}
                        >
                          <img src="/assets/images/portfolio/01.webp" alt="" />
                        </Link>
                      </div>

                      <span className="price">{"14,000$"}</span>

                      <div className="content-area">
                        <h5 className="title">
                          <Link
                            prefetch={false}
                            href={detailPath("car", "thunderbolt-car")}
                          >
                            {"Thunderbolt Car"}
                          </Link>
                        </h5>

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

                        <Link
                          prefetch={false}
                          href={detailPath("car", "thunderbolt-car")}
                          className="rts-btn btn-primary radius-big"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="project-wrapper">
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href={detailPath("car", "volvo-1927")}
                        >
                          <img src="/assets/images/portfolio/02.webp" alt="" />
                        </Link>
                      </div>

                      <span className="price">{"14,300$"}</span>

                      <div className="content-area">
                        <h5 className="title">
                          <Link
                            prefetch={false}
                            href={detailPath("car", "volvo-1927")}
                          >
                            {"Volvo. 1927"}
                          </Link>
                        </h5>

                        <ul className="feature-area">
                          <li>
                            <img
                              src="/assets/images/portfolio/feature-icon/01.svg"
                              alt=""
                            />
                            {" 105 Miles "}
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

                        <Link
                          prefetch={false}
                          href={detailPath("car", "volvo-1927")}
                          className="rts-btn btn-primary radius-big"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="project-wrapper">
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href={detailPath("car", "volkswagen-1938")}
                        >
                          <img src="/assets/images/portfolio/03.webp" alt="" />
                        </Link>
                      </div>

                      <span className="price">{"14,500$"}</span>

                      <div className="content-area">
                        <h5 className="title">
                          <Link
                            prefetch={false}
                            href={detailPath("car", "volkswagen-1938")}
                          >
                            {"Volkswagen. 1938"}
                          </Link>
                        </h5>

                        <ul className="feature-area">
                          <li>
                            <img
                              src="/assets/images/portfolio/feature-icon/01.svg"
                              alt=""
                            />
                            {" 110 Miles "}
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

                        <Link
                          prefetch={false}
                          href={detailPath("car", "volkswagen-1938")}
                          className="rts-btn btn-primary radius-big"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-pagination-2"></div>
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="trending"
            role="tabpanel"
            aria-labelledby="trending-tab"
          >
            <div className="slider-area">
              <div className="swiper projectSlider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="project-wrapper">
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href={detailPath("car", "volkswagen-1938")}
                        >
                          <img src="/assets/images/portfolio/03.webp" alt="" />
                        </Link>
                      </div>

                      <span className="price">{"14,500$"}</span>

                      <div className="content-area">
                        <h5 className="title">
                          <Link
                            prefetch={false}
                            href={detailPath("car", "volkswagen-1938")}
                          >
                            {"Volkswagen. 1938"}
                          </Link>
                        </h5>

                        <ul className="feature-area">
                          <li>
                            <img
                              src="/assets/images/portfolio/feature-icon/01.svg"
                              alt=""
                            />
                            {" 110 Miles "}
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

                        <Link
                          prefetch={false}
                          href={detailPath("car", "volkswagen-1938")}
                          className="rts-btn btn-primary radius-big"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="project-wrapper">
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href={detailPath("car", "thunderbolt-car")}
                        >
                          <img src="/assets/images/portfolio/01.webp" alt="" />
                        </Link>
                      </div>

                      <span className="price">{"14,000$"}</span>

                      <div className="content-area">
                        <h5 className="title">
                          <Link
                            prefetch={false}
                            href={detailPath("car", "thunderbolt-car")}
                          >
                            {"Thunderbolt Car"}
                          </Link>
                        </h5>

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

                        <Link
                          prefetch={false}
                          href={detailPath("car", "thunderbolt-car")}
                          className="rts-btn btn-primary radius-big"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="project-wrapper">
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href={detailPath("car", "volvo-1927")}
                        >
                          <img src="/assets/images/portfolio/02.webp" alt="" />
                        </Link>
                      </div>

                      <span className="price">{"14,300$"}</span>

                      <div className="content-area">
                        <h5 className="title">
                          <Link
                            prefetch={false}
                            href={detailPath("car", "volvo-1927")}
                          >
                            {"Volvo. 1927"}
                          </Link>
                        </h5>

                        <ul className="feature-area">
                          <li>
                            <img
                              src="/assets/images/portfolio/feature-icon/01.svg"
                              alt=""
                            />
                            {" 105 Miles "}
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

                          <li>
                            <img
                              src="/assets/images/portfolio/feature-icon/04.svg"
                              alt=""
                            />
                            {" 4 Person "}
                          </li>
                        </ul>

                        <Link
                          prefetch={false}
                          href={detailPath("car", "volvo-1927")}
                          className="rts-btn btn-primary radius-big"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="project-wrapper">
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href={detailPath("car", "thunderbolt-car")}
                        >
                          <img src="/assets/images/portfolio/01.webp" alt="" />
                        </Link>
                      </div>

                      <span className="price">{"14,000$"}</span>

                      <div className="content-area">
                        <h5 className="title">
                          <Link
                            prefetch={false}
                            href={detailPath("car", "thunderbolt-car")}
                          >
                            {"Thunderbolt Car"}
                          </Link>
                        </h5>

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

                        <Link
                          prefetch={false}
                          href={detailPath("car", "thunderbolt-car")}
                          className="rts-btn btn-primary radius-big"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="project-wrapper">
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href={detailPath("car", "volvo-1927")}
                        >
                          <img src="/assets/images/portfolio/02.webp" alt="" />
                        </Link>
                      </div>

                      <span className="price">{"14,300$"}</span>

                      <div className="content-area">
                        <h5 className="title">
                          <Link
                            prefetch={false}
                            href={detailPath("car", "volvo-1927")}
                          >
                            {"Volvo. 1927"}
                          </Link>
                        </h5>

                        <ul className="feature-area">
                          <li>
                            <img
                              src="/assets/images/portfolio/feature-icon/01.svg"
                              alt=""
                            />
                            {" 105 Miles "}
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

                          <li>
                            <img
                              src="/assets/images/portfolio/feature-icon/04.svg"
                              alt=""
                            />
                            {" 4 Person "}
                          </li>
                        </ul>

                        <Link
                          prefetch={false}
                          href={detailPath("car", "volvo-1927")}
                          className="rts-btn btn-primary radius-big"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="project-wrapper">
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href={detailPath("car", "volkswagen-1938")}
                        >
                          <img src="/assets/images/portfolio/03.webp" alt="" />
                        </Link>
                      </div>

                      <span className="price">{"14,500$"}</span>

                      <div className="content-area">
                        <h5 className="title">
                          <Link
                            prefetch={false}
                            href={detailPath("car", "volkswagen-1938")}
                          >
                            {"Volkswagen. 1938"}
                          </Link>
                        </h5>

                        <ul className="feature-area">
                          <li>
                            <img
                              src="/assets/images/portfolio/feature-icon/01.svg"
                              alt=""
                            />
                            {" 110 Miles "}
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

                        <Link
                          prefetch={false}
                          href={detailPath("car", "volkswagen-1938")}
                          className="rts-btn btn-primary radius-big"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-pagination-2"></div>
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="stocks"
            role="tabpanel"
            aria-labelledby="stocks-tab"
          >
            <div className="slider-area">
              <div className="swiper projectSlider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="project-wrapper">
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href={detailPath("car", "thunderbolt-car")}
                        >
                          <img src="/assets/images/portfolio/01.webp" alt="" />
                        </Link>
                      </div>

                      <span className="price">{"14,000$"}</span>

                      <div className="content-area">
                        <h5 className="title">
                          <Link
                            prefetch={false}
                            href={detailPath("car", "thunderbolt-car")}
                          >
                            {"Thunderbolt Car"}
                          </Link>
                        </h5>

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

                        <Link
                          prefetch={false}
                          href={detailPath("car", "thunderbolt-car")}
                          className="rts-btn btn-primary radius-big"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="project-wrapper">
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href={detailPath("car", "volvo-1927")}
                        >
                          <img src="/assets/images/portfolio/02.webp" alt="" />
                        </Link>
                      </div>

                      <span className="price">{"14,300$"}</span>

                      <div className="content-area">
                        <h5 className="title">
                          <Link
                            prefetch={false}
                            href={detailPath("car", "volvo-1927")}
                          >
                            {"Volvo. 1927"}
                          </Link>
                        </h5>

                        <ul className="feature-area">
                          <li>
                            <img
                              src="/assets/images/portfolio/feature-icon/01.svg"
                              alt=""
                            />
                            {" 105 Miles "}
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

                          <li>
                            <img
                              src="/assets/images/portfolio/feature-icon/04.svg"
                              alt=""
                            />
                            {" 4 Person "}
                          </li>
                        </ul>

                        <Link
                          prefetch={false}
                          href={detailPath("car", "volvo-1927")}
                          className="rts-btn btn-primary radius-big"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="project-wrapper">
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href={detailPath("car", "volkswagen-1938")}
                        >
                          <img src="/assets/images/portfolio/03.webp" alt="" />
                        </Link>
                      </div>

                      <span className="price">{"14,500$"}</span>

                      <div className="content-area">
                        <h5 className="title">
                          <Link
                            prefetch={false}
                            href={detailPath("car", "volkswagen-1938")}
                          >
                            {"Volkswagen. 1938"}
                          </Link>
                        </h5>

                        <ul className="feature-area">
                          <li>
                            <img
                              src="/assets/images/portfolio/feature-icon/01.svg"
                              alt=""
                            />
                            {" 110 Miles "}
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

                        <Link
                          prefetch={false}
                          href={detailPath("car", "volkswagen-1938")}
                          className="rts-btn btn-primary radius-big"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="project-wrapper">
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href={detailPath("car", "thunderbolt-car")}
                        >
                          <img src="/assets/images/portfolio/01.webp" alt="" />
                        </Link>
                      </div>

                      <span className="price">{"14,000$"}</span>

                      <div className="content-area">
                        <h5 className="title">
                          <Link
                            prefetch={false}
                            href={detailPath("car", "thunderbolt-car")}
                          >
                            {"Thunderbolt Car"}
                          </Link>
                        </h5>

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

                        <Link
                          prefetch={false}
                          href={detailPath("car", "thunderbolt-car")}
                          className="rts-btn btn-primary radius-big"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="project-wrapper">
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href={detailPath("car", "volvo-1927")}
                        >
                          <img src="/assets/images/portfolio/02.webp" alt="" />
                        </Link>
                      </div>

                      <span className="price">{"14,300$"}</span>

                      <div className="content-area">
                        <h5 className="title">
                          <Link
                            prefetch={false}
                            href={detailPath("car", "volvo-1927")}
                          >
                            {"Volvo. 1927"}
                          </Link>
                        </h5>

                        <ul className="feature-area">
                          <li>
                            <img
                              src="/assets/images/portfolio/feature-icon/01.svg"
                              alt=""
                            />
                            {" 105 Miles "}
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

                          <li>
                            <img
                              src="/assets/images/portfolio/feature-icon/04.svg"
                              alt=""
                            />
                            {" 4 Person "}
                          </li>
                        </ul>

                        <Link
                          prefetch={false}
                          href={detailPath("car", "volvo-1927")}
                          className="rts-btn btn-primary radius-big"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="project-wrapper">
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href={detailPath("car", "volkswagen-1938")}
                        >
                          <img src="/assets/images/portfolio/03.webp" alt="" />
                        </Link>
                      </div>

                      <span className="price">{"14,500$"}</span>

                      <div className="content-area">
                        <h5 className="title">
                          <Link
                            prefetch={false}
                            href={detailPath("car", "volkswagen-1938")}
                          >
                            {"Volkswagen. 1938"}
                          </Link>
                        </h5>

                        <ul className="feature-area">
                          <li>
                            <img
                              src="/assets/images/portfolio/feature-icon/01.svg"
                              alt=""
                            />
                            {" 110 Miles "}
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

                        <Link
                          prefetch={false}
                          href={detailPath("car", "volkswagen-1938")}
                          className="rts-btn btn-primary radius-big"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-pagination-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
