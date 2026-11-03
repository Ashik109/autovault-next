import Link from "next/link";
export default function HomeTwoPortfolioArea2() {
  return (
    <section className="rts-portfolio-area2 rts-section-gap">
      <div className="container">
        <div className="section-top d-flex justify-content-between align-items-end">
          <div className="section-title-area">
            <p
              className="sub-title wow fadeInUp"
              data-wow-delay=".1s"
              data-wow-duration=".8s"
            >
              {"Select Car"}
            </p>

            <h2 className="section-title cw wow move-right">
              {"Our Amazing "}
              <span>{"Car"}</span>
            </h2>
          </div>

          <div className="tab-area">
            <ul className="nav nav-tabs" id="myTab2" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="all-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#all"
                  type="button"
                  role="tab"
                  aria-controls="all"
                  aria-selected="true"
                >
                  {"All"}
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
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
        </div>

        <div
          className="section-inner mt--80 wow fadeInUp"
          data-wow-delay=".3s"
          data-wow-duration="1s"
        >
          <div className=" tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="all"
              role="tabpanel"
              aria-labelledby="all-tab"
            >
              <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/04.webp" alt="" />
                      </Link>

                      <span className="tag">{"New"}</span>

                      <a href="/wishlist" className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>

                      <a
                        href="/assets/images/portfolio/04.webp"
                        className="gallery-image"
                      >
                        <img src="/assets/images/icon/image.svg" alt="" />
                        {" 5 "}
                      </a>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
                          {"Thunderbolt Car"}
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
                        <p className="cw">{"$5000"}</p>

                        <Link
                          prefetch={false}
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/05.webp" alt="" />
                      </Link>

                      <span className="tag">{"Featured"}</span>

                      <a href="/wishlist" className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>

                      <a
                        href="/assets/images/portfolio/05.webp"
                        className="gallery-image"
                      >
                        <img src="/assets/images/icon/image.svg" alt="" />
                        {" 7 "}
                      </a>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
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
                        <p className="cw">{"$9000"}</p>

                        <Link
                          prefetch={false}
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/06.webp" alt="" />
                      </Link>

                      <span className="tag">{"Used"}</span>

                      <a href="/wishlist" className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>

                      <a
                        href="/assets/images/portfolio/06.webp"
                        className="gallery-image"
                      >
                        <img src="/assets/images/icon/image.svg" alt="" />
                        {" 7 "}
                      </a>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
                          {"Ford Mustang Convertible"}
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
                        <p className="cw">{"$4500"}</p>

                        <Link
                          prefetch={false}
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/07.webp" alt="" />
                      </Link>

                      <span className="tag">{"Used"}</span>

                      <a href="/wishlist" className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>

                      <a
                        href="/assets/images/portfolio/07.webp"
                        className="gallery-image"
                      >
                        <img src="/assets/images/icon/image.svg" alt="" />
                        {" 5 "}
                      </a>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
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
                        <p className="cw">{"$2250"}</p>

                        <Link
                          prefetch={false}
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/08.webp" alt="" />
                      </Link>

                      <span className="tag">{"New"}</span>

                      <a href="/wishlist" className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>

                      <a
                        href="/assets/images/portfolio/08.webp"
                        className="gallery-image"
                      >
                        <img src="/assets/images/icon/image.svg" alt="" />
                        {" 4 "}
                      </a>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
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
                        <p className="cw">{"$4450"}</p>

                        <Link
                          prefetch={false}
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/09.webp" alt="" />
                      </Link>

                      <span className="tag">{"Featured"}</span>

                      <a href="/wishlist" className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>

                      <a
                        href="/assets/images/portfolio/09.webp"
                        className="gallery-image"
                      >
                        <img src="/assets/images/icon/image.svg" alt="" />
                        {" 6 "}
                      </a>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
                          {"Hyundai Veloster"}
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
                        <p className="cw">{"$6650"}</p>

                        <Link
                          prefetch={false}
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="new-cars"
              role="tabpanel"
              aria-labelledby="new-cars-tab"
            >
              <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/04.webp" alt="" />
                      </Link>

                      <span className="tag">{"New"}</span>

                      <a href="/wishlist" className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>

                      <a
                        href="/assets/images/portfolio/04.webp"
                        className="gallery-image"
                      >
                        <img src="/assets/images/icon/image.svg" alt="" />
                        {" 5 "}
                      </a>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
                          {"Thunderbolt Car"}
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
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/05.webp" alt="" />
                      </Link>

                      <span className="tag">{"New"}</span>

                      <a href="/wishlist" className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>

                      <a
                        href="/assets/images/portfolio/05.webp"
                        className="gallery-image"
                      >
                        <img src="/assets/images/icon/image.svg" alt="" />
                        {" 5 "}
                      </a>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
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
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/06.webp" alt="" />
                      </Link>

                      <span className="tag">{"New"}</span>

                      <a href="/wishlist" className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>

                      <a
                        href="/assets/images/portfolio/06.webp"
                        className="gallery-image"
                      >
                        <img src="/assets/images/icon/image.svg" alt="" />
                        {" 5 "}
                      </a>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
                          {"Ford Mustang Convertible"}
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
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/07.webp" alt="" />
                      </Link>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
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
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/08.webp" alt="" />
                      </Link>

                      <span className="tag">{"New"}</span>

                      <a href="/wishlist" className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>

                      <a
                        href="/assets/images/portfolio/08.webp"
                        className="gallery-image"
                      >
                        <img src="/assets/images/icon/image.svg" alt="" />
                        {" 5 "}
                      </a>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
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
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/09.webp" alt="" />
                      </Link>

                      <span className="tag">{"New"}</span>

                      <a href="/wishlist" className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>

                      <a
                        href="/assets/images/portfolio/09.webp"
                        className="gallery-image"
                      >
                        <img src="/assets/images/icon/image.svg" alt="" />
                        {" 5 "}
                      </a>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
                          {"Hyundai Veloster"}
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
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="used"
              role="tabpanel"
              aria-labelledby="used-tab"
            >
              <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/07.webp" alt="" />
                      </Link>

                      <span className="tag">{"Used"}</span>

                      <a href="/wishlist" className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>

                      <a
                        href="/assets/images/portfolio/07.webp"
                        className="gallery-image"
                      >
                        <img src="/assets/images/icon/image.svg" alt="" />
                        {" 5 "}
                      </a>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
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
                        <p className="cw">{"$6650"}</p>

                        <Link
                          prefetch={false}
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/08.webp" alt="" />
                      </Link>

                      <span className="tag">{"Used"}</span>

                      <a href="/wishlist" className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>

                      <a
                        href="/assets/images/portfolio/08.webp"
                        className="gallery-image"
                      >
                        <img src="/assets/images/icon/image.svg" alt="" />
                        {" 7 "}
                      </a>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
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
                        <p className="cw">{"$6650"}</p>

                        <Link
                          prefetch={false}
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/09.webp" alt="" />
                      </Link>

                      <span className="tag">{"New"}</span>

                      <a href="/wishlist" className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>

                      <a
                        href="/assets/images/portfolio/09.webp"
                        className="gallery-image"
                      >
                        <img src="/assets/images/icon/image.svg" alt="" />
                        {" 5 "}
                      </a>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
                          {"Hyundai Veloster"}
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
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/04.webp" alt="" />
                      </Link>

                      <span className="tag">{"New"}</span>

                      <a href="/wishlist" className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>

                      <a
                        href="/assets/images/portfolio/04.webp"
                        className="gallery-image"
                      >
                        <img src="/assets/images/icon/image.svg" alt="" />
                        {" 5 "}
                      </a>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
                          {"Thunderbolt Car"}
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
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/05.webp" alt="" />
                      </Link>

                      <span className="tag">{"New"}</span>

                      <a href="/wishlist" className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>

                      <a
                        href="/assets/images/portfolio/05.webp"
                        className="gallery-image"
                      >
                        <img src="/assets/images/icon/image.svg" alt="" />
                        {" 5 "}
                      </a>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
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
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/06.webp" alt="" />
                      </Link>

                      <span className="tag">{"New"}</span>

                      <a href="/wishlist" className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>

                      <a
                        href="/assets/images/portfolio/06.webp"
                        className="gallery-image"
                      >
                        <img src="/assets/images/icon/image.svg" alt="" />
                        {" 5 "}
                      </a>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
                          {"Ford Mustang Convertible"}
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
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="trending"
              role="tabpanel"
              aria-labelledby="trending-tab"
            >
              <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/04.webp" alt="" />
                      </Link>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
                          {"Thunderbolt Car"}
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
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/05.webp" alt="" />
                      </Link>

                      <span className="tag">{"Trending"}</span>

                      <a href="/wishlist" className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>

                      <a
                        href="/assets/images/portfolio/05.webp"
                        className="gallery-image"
                      >
                        <img src="/assets/images/icon/image.svg" alt="" />
                        {" 7 "}
                      </a>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
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
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/06.webp" alt="" />
                      </Link>

                      <span className="tag">{"Trending"}</span>

                      <a href="/wishlist" className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>

                      <a
                        href="/assets/images/portfolio/06.webp"
                        className="gallery-image"
                      >
                        <img src="/assets/images/icon/image.svg" alt="" />
                        {" 7 "}
                      </a>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
                          {"Ford Mustang Convertible"}
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
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/07.webp" alt="" />
                      </Link>

                      <span className="tag">{"Trending"}</span>

                      <a href="/wishlist" className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>

                      <a
                        href="/assets/images/portfolio/07.webp"
                        className="gallery-image"
                      >
                        <img src="/assets/images/icon/image.svg" alt="" />
                        {" 7 "}
                      </a>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
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
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/08.webp" alt="" />
                      </Link>

                      <span className="tag">{"Trending"}</span>

                      <a href="/wishlist" className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>

                      <a
                        href="/assets/images/portfolio/08.webp"
                        className="gallery-image"
                      >
                        <img src="/assets/images/icon/image.svg" alt="" />
                        {" 7 "}
                      </a>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
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
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/09.webp" alt="" />
                      </Link>

                      <span className="tag">{"Trending"}</span>

                      <a href="/wishlist" className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>

                      <a
                        href="/assets/images/portfolio/09.webp"
                        className="gallery-image"
                      >
                        <img src="/assets/images/icon/image.svg" alt="" />
                        {" 7 "}
                      </a>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
                          {"Hyundai Veloster"}
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
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="stocks"
              role="tabpanel"
              aria-labelledby="stocks-tab"
            >
              <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/07.webp" alt="" />
                      </Link>

                      <span className="tag">{"Stocks"}</span>

                      <a href="/wishlist" className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>

                      <a
                        href="/assets/images/portfolio/07.webp"
                        className="gallery-image"
                      >
                        <img src="/assets/images/icon/image.svg" alt="" />
                        {" 7 "}
                      </a>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
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
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/08.webp" alt="" />
                      </Link>

                      <span className="tag">{"Stocks"}</span>

                      <a href="/wishlist" className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>

                      <a
                        href="/assets/images/portfolio/08.webp"
                        className="gallery-image"
                      >
                        <img src="/assets/images/icon/image.svg" alt="" />
                        {" 7 "}
                      </a>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
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
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/09.webp" alt="" />
                      </Link>

                      <span className="tag">{"Stocks"}</span>

                      <a href="/wishlist" className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>

                      <a
                        href="/assets/images/portfolio/08.webp"
                        className="gallery-image"
                      >
                        <img src="/assets/images/icon/image.svg" alt="" />
                        {" 7 "}
                      </a>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
                          {"Hyundai Veloster"}
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
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/04.webp" alt="" />
                      </Link>

                      <span className="tag">{"Stocks"}</span>

                      <a href="/wishlist" className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>

                      <a
                        href="/assets/images/portfolio/04.webp"
                        className="gallery-image"
                      >
                        <img src="/assets/images/icon/image.svg" alt="" />
                        {" 7 "}
                      </a>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
                          {"Thunderbolt Car"}
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
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/05.webp" alt="" />
                      </Link>

                      <span className="tag">{"Stocks"}</span>

                      <a href="/wishlist" className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>

                      <a
                        href="/assets/images/portfolio/05.webp"
                        className="gallery-image"
                      >
                        <img src="/assets/images/icon/image.svg" alt="" />
                        {" 7 "}
                      </a>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
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
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="project-wrapper2">
                    <div className="image-area">
                      <Link prefetch={false} href="/portfolio-details">
                        <img src="/assets/images/portfolio/06.webp" alt="" />
                      </Link>

                      <span className="tag">{"Stocks"}</span>

                      <a href="/wishlist" className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>

                      <a
                        href="/assets/images/portfolio/06.webp"
                        className="gallery-image"
                      >
                        <img src="/assets/images/icon/image.svg" alt="" />
                        {" 7 "}
                      </a>
                    </div>

                    <span className="price">{"14,000$"}</span>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link prefetch={false} href="/portfolio-details">
                          {"Ford Mustang Convertible"}
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
                          href="/portfolio-details"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#"
            className="rts-btn radius-small btn-border load-more-btn cw"
          >
            {"Load More"}
          </a>
        </div>
      </div>
    </section>
  );
}
