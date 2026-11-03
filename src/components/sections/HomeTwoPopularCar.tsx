import Link from "next/link";
export default function HomeTwoPopularCar() {
  return (
    <section className="rts-popular-car rts-section-gap">
      <div className="container">
        <div className="section-top d-flex justify-content-between align-items-end">
          <div className="section-title-area">
            <p
              className="sub-title wow fadeInUp"
              data-wow-delay=".1s"
              data-wow-duration=".8s"
            >
              {"Popular Car"}
            </p>

            <h2 className="section-title cw wow move-right">
              {"Popular "}
              <span>{"Makes"}</span>
            </h2>
          </div>

          <div className="tab-area">
            <ul className="nav nav-tabs" id="myTab3" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="bmw-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#bmw"
                  type="button"
                  role="tab"
                  aria-controls="bmw"
                  aria-selected="true"
                >
                  <img src="/assets/images/brand/04.svg" alt="" />
                  {"BMW"}
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="mazda-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#mazda"
                  type="button"
                  role="tab"
                  aria-controls="mazda"
                  aria-selected="false"
                >
                  <img src="/assets/images/brand/03.svg" alt="" />
                  {"Mazda"}
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="honda-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#honda"
                  type="button"
                  role="tab"
                  aria-controls="honda"
                  aria-selected="false"
                >
                  <img src="/assets/images/brand/05.svg" alt="" />
                  {"Honda"}
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="nissan-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nissan"
                  type="button"
                  role="tab"
                  aria-controls="nissan"
                  aria-selected="false"
                >
                  <img src="/assets/images/brand/07.svg" alt="" />
                  {"Nissan"}
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
          <div className=" tab-content" id="myTabContent2">
            <div
              className="tab-pane fade show active"
              id="bmw"
              role="tabpanel"
              aria-labelledby="bmw-tab"
            >
              <div className="row g-5">
                <div className="col-lg-6">
                  <div className="project-wrapper2 long">
                    <div className="image-area">
                      <Link
                        prefetch={false}
                        href="/portfolio-details/thunderbolt-car"
                      >
                        <img
                          src="/assets/images/portfolio/04-big.webp"
                          alt=""
                        />
                      </Link>
                    </div>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link
                          prefetch={false}
                          href="/portfolio-details/thunderbolt-car"
                        >
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
                          href="/portfolio-details/thunderbolt-car"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
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
                      <h6 className="title cw">
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
                      <h6 className="title cw">
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
                      <h6 className="title cw">
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
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="mazda"
              role="tabpanel"
              aria-labelledby="mazda-tab"
            >
              <div className="row g-5">
                <div className="col-lg-6">
                  <div className="project-wrapper2 long">
                    <div className="image-area">
                      <Link
                        prefetch={false}
                        href="/portfolio-details/ford-mustang-convertible"
                      >
                        <img
                          src="/assets/images/portfolio/06-big.webp"
                          alt=""
                        />
                      </Link>
                    </div>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link
                          prefetch={false}
                          href="/portfolio-details/ford-mustang-convertible"
                        >
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
                          href="/portfolio-details/ford-mustang-convertible"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
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
                      <h6 className="title cw">
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
                      <h6 className="title cw">
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
                      <h6 className="title cw">
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
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="honda"
              role="tabpanel"
              aria-labelledby="honda-tab"
            >
              <div className="row g-5">
                <div className="col-lg-6">
                  <div className="project-wrapper2 long">
                    <div className="image-area">
                      <Link
                        prefetch={false}
                        href="/portfolio-details/thunderbolt-car"
                      >
                        <img
                          src="/assets/images/portfolio/04-big.webp"
                          alt=""
                        />
                      </Link>
                    </div>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link
                          prefetch={false}
                          href="/portfolio-details/thunderbolt-car"
                        >
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
                          href="/portfolio-details/thunderbolt-car"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
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
                      <h6 className="title cw">
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
                      <h6 className="title cw">
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
                      <h6 className="title cw">
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
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="nissan"
              role="tabpanel"
              aria-labelledby="nissan-tab"
            >
              <div className="row g-5">
                <div className="col-lg-6">
                  <div className="project-wrapper2 long">
                    <div className="image-area">
                      <Link
                        prefetch={false}
                        href="/portfolio-details/thunderbolt-car"
                      >
                        <img
                          src="/assets/images/portfolio/06-big.webp"
                          alt=""
                        />
                      </Link>
                    </div>

                    <div className="content-area">
                      <h6 className="title cw">
                        <Link
                          prefetch={false}
                          href="/portfolio-details/thunderbolt-car"
                        >
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
                          href="/portfolio-details/thunderbolt-car"
                          className="rts-btn btn-primary radius-small"
                        >
                          {"View Details"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
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
                      <h6 className="title cw">
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
                      <h6 className="title cw">
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
                      <h6 className="title cw">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
