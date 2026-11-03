import Link from "next/link";
export default function HomeFivePricing() {
  return (
    <section id="pricing" className="rts-pricing-area rts-section-gap">
      <div className="container">
        <div className="section-top">
          <div className="section-title-area2">
            <p
              className="sub-title"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              {"Pricing"}
            </p>

            <h2 className="section-title move-right" data-aos="move-right">
              {"Choose the Perfect "}
              <span>{"Plan"}</span>
            </h2>
          </div>

          <div className="tab-area mt--80">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="hatchback-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#hatchback"
                  type="button"
                  role="tab"
                  aria-controls="hatchback"
                  aria-selected="true"
                >
                  <img src="/assets/images/icon/car-01.svg" alt="" />
                  {"Hatchback"}
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="minivan-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#minivan"
                  type="button"
                  role="tab"
                  aria-controls="minivan"
                  aria-selected="false"
                >
                  <img src="/assets/images/icon/car-02.svg" alt="" />
                  {"Minivan"}
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="regular-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#regular"
                  type="button"
                  role="tab"
                  aria-controls="regular"
                  aria-selected="false"
                >
                  <img src="/assets/images/icon/car-03.svg" alt="" />
                  {"Regular Size Car"}
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="sedans-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#sedans"
                  type="button"
                  role="tab"
                  aria-controls="sedans"
                  aria-selected="false"
                >
                  <img src="/assets/images/icon/car-04.svg" alt="" />
                  {"Sedans"}
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="convertible-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#convertible"
                  type="button"
                  role="tab"
                  aria-controls="convertible"
                  aria-selected="false"
                >
                  <img src="/assets/images/icon/car-05.svg" alt="" />
                  {"Convertible"}
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="sports-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#sports"
                  type="button"
                  role="tab"
                  aria-controls="sports"
                  aria-selected="false"
                >
                  <img src="/assets/images/icon/car-06.svg" alt="" />
                  {"Sports Car"}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="tab-content mt--80" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="hatchback"
            role="tabpanel"
            aria-labelledby="hatchback-tab"
          >
            <div className="row g-5 align-items-center">
              <div className="col-lg-4 col-md-6">
                <div className="pricing-wrapper">
                  <div className="pricing-top">
                    <p className="sub-title">{"Basic Wash"}</p>

                    <div className="price">
                      {"$19.00/ "}
                      <span>{"month"}</span>
                    </div>

                    <p className="text">{"Perfect To Get Started"}</p>

                    <Link
                      prefetch={false}
                      href="/pricing"
                      className="rts-btn radius-small btn-border pricing-btn"
                    >
                      {"Choose Plan"}
                    </Link>
                  </div>

                  <ul className="pricing-list">
                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Exterior Wash"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Spot-Free Rinse"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Towel Dry"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Interior Vacuum"}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="pricing-wrapper mid">
                  <div className="pricing-top">
                    <p className="sub-title">{"Premium Wash"}</p>

                    <div className="price">
                      {"$59.00/ "}
                      <span>{"month"}</span>
                    </div>

                    <p className="text">{"Perfect To Get Started"}</p>

                    <Link
                      prefetch={false}
                      href="/pricing"
                      className="rts-btn radius-small btn-border pricing-btn"
                    >
                      {"Choose Plan"}
                    </Link>
                  </div>

                  <ul className="pricing-list">
                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Exterior Wash"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Spot-Free Rinse"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Towel Dry"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Interior Vacuum"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Air Freshener"}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="pricing-wrapper">
                  <div className="pricing-top">
                    <p className="sub-title">{"Deluxe Wash"}</p>

                    <div className="price">
                      {"$29.00/ "}
                      <span>{"month"}</span>
                    </div>

                    <p className="text">{"Perfect To Get Started"}</p>

                    <Link
                      prefetch={false}
                      href="/pricing"
                      className="rts-btn radius-small btn-border pricing-btn"
                    >
                      {"Choose Plan"}
                    </Link>
                  </div>

                  <ul className="pricing-list">
                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Exterior Wash"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Spot-Free Rinse"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Towel Dry"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Interior Vacuum"}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="minivan"
            role="tabpanel"
            aria-labelledby="minivan-tab"
          >
            <div className="row g-5 align-items-center">
              <div className="col-lg-4 col-md-6">
                <div className="pricing-wrapper">
                  <div className="pricing-top">
                    <p className="sub-title">{"Basic Wash"}</p>

                    <div className="price">
                      {"$19.00/ "}
                      <span>{"month"}</span>
                    </div>

                    <p className="text">{"Perfect To Get Started"}</p>

                    <Link
                      prefetch={false}
                      href="/pricing"
                      className="rts-btn radius-small btn-border pricing-btn"
                    >
                      {"Choose Plan"}
                    </Link>
                  </div>

                  <ul className="pricing-list">
                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Exterior Wash"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Spot-Free Rinse"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Towel Dry"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Interior Vacuum"}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="pricing-wrapper mid">
                  <div className="pricing-top">
                    <p className="sub-title">{"Premium Wash"}</p>

                    <div className="price">
                      {"$59.00/ "}
                      <span>{"month"}</span>
                    </div>

                    <p className="text">{"Perfect To Get Started"}</p>

                    <Link
                      prefetch={false}
                      href="/pricing"
                      className="rts-btn radius-small btn-border pricing-btn"
                    >
                      {"Choose Plan"}
                    </Link>
                  </div>

                  <ul className="pricing-list">
                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Exterior Wash"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Spot-Free Rinse"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Towel Dry"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Interior Vacuum"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Air Freshener"}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="pricing-wrapper">
                  <div className="pricing-top">
                    <p className="sub-title">{"Deluxe Wash"}</p>

                    <div className="price">
                      {"$29.00/ "}
                      <span>{"month"}</span>
                    </div>

                    <p className="text">{"Perfect To Get Started"}</p>

                    <Link
                      prefetch={false}
                      href="/pricing"
                      className="rts-btn radius-small btn-border pricing-btn"
                    >
                      {"Choose Plan"}
                    </Link>
                  </div>

                  <ul className="pricing-list">
                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Exterior Wash"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Spot-Free Rinse"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Towel Dry"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Interior Vacuum"}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="regular"
            role="tabpanel"
            aria-labelledby="regular-tab"
          >
            <div className="row g-5 align-items-center">
              <div className="col-lg-4 col-md-6">
                <div className="pricing-wrapper">
                  <div className="pricing-top">
                    <p className="sub-title">{"Basic Wash"}</p>

                    <div className="price">
                      {"$19.00/ "}
                      <span>{"month"}</span>
                    </div>

                    <p className="text">{"Perfect To Get Started"}</p>

                    <Link
                      prefetch={false}
                      href="/pricing"
                      className="rts-btn radius-small btn-border pricing-btn"
                    >
                      {"Choose Plan"}
                    </Link>
                  </div>

                  <ul className="pricing-list">
                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Exterior Wash"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Spot-Free Rinse"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Towel Dry"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Interior Vacuum"}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="pricing-wrapper mid">
                  <div className="pricing-top">
                    <p className="sub-title">{"Premium Wash"}</p>

                    <div className="price">
                      {"$59.00/ "}
                      <span>{"month"}</span>
                    </div>

                    <p className="text">{"Perfect To Get Started"}</p>

                    <Link
                      prefetch={false}
                      href="/pricing"
                      className="rts-btn radius-small btn-border pricing-btn"
                    >
                      {"Choose Plan"}
                    </Link>
                  </div>

                  <ul className="pricing-list">
                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Exterior Wash"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Spot-Free Rinse"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Towel Dry"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Interior Vacuum"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Air Freshener"}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="pricing-wrapper">
                  <div className="pricing-top">
                    <p className="sub-title">{"Deluxe Wash"}</p>

                    <div className="price">
                      {"$29.00/ "}
                      <span>{"month"}</span>
                    </div>

                    <p className="text">{"Perfect To Get Started"}</p>

                    <Link
                      prefetch={false}
                      href="/pricing"
                      className="rts-btn radius-small btn-border pricing-btn"
                    >
                      {"Choose Plan"}
                    </Link>
                  </div>

                  <ul className="pricing-list">
                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Exterior Wash"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Spot-Free Rinse"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Towel Dry"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Interior Vacuum"}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="sedans"
            role="tabpanel"
            aria-labelledby="sedans-tab"
          >
            <div className="row g-5 align-items-center">
              <div className="col-lg-4 col-md-6">
                <div className="pricing-wrapper">
                  <div className="pricing-top">
                    <p className="sub-title">{"Basic Wash"}</p>

                    <div className="price">
                      {"$19.00/ "}
                      <span>{"month"}</span>
                    </div>

                    <p className="text">{"Perfect To Get Started"}</p>

                    <Link
                      prefetch={false}
                      href="/pricing"
                      className="rts-btn radius-small btn-border pricing-btn"
                    >
                      {"Choose Plan"}
                    </Link>
                  </div>

                  <ul className="pricing-list">
                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Exterior Wash"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Spot-Free Rinse"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Towel Dry"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Interior Vacuum"}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="pricing-wrapper mid">
                  <div className="pricing-top">
                    <p className="sub-title">{"Premium Wash"}</p>

                    <div className="price">
                      {"$59.00/ "}
                      <span>{"month"}</span>
                    </div>

                    <p className="text">{"Perfect To Get Started"}</p>

                    <Link
                      prefetch={false}
                      href="/pricing"
                      className="rts-btn radius-small btn-border pricing-btn"
                    >
                      {"Choose Plan"}
                    </Link>
                  </div>

                  <ul className="pricing-list">
                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Exterior Wash"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Spot-Free Rinse"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Towel Dry"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Interior Vacuum"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Air Freshener"}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="pricing-wrapper">
                  <div className="pricing-top">
                    <p className="sub-title">{"Deluxe Wash"}</p>

                    <div className="price">
                      {"$29.00/ "}
                      <span>{"month"}</span>
                    </div>

                    <p className="text">{"Perfect To Get Started"}</p>

                    <Link
                      prefetch={false}
                      href="/pricing"
                      className="rts-btn radius-small btn-border pricing-btn"
                    >
                      {"Choose Plan"}
                    </Link>
                  </div>

                  <ul className="pricing-list">
                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Exterior Wash"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Spot-Free Rinse"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Towel Dry"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Interior Vacuum"}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="convertible"
            role="tabpanel"
            aria-labelledby="convertible-tab"
          >
            <div className="row g-5 align-items-center">
              <div className="col-lg-4 col-md-6">
                <div className="pricing-wrapper">
                  <div className="pricing-top">
                    <p className="sub-title">{"Basic Wash"}</p>

                    <div className="price">
                      {"$19.00/ "}
                      <span>{"month"}</span>
                    </div>

                    <p className="text">{"Perfect To Get Started"}</p>

                    <Link
                      prefetch={false}
                      href="/pricing"
                      className="rts-btn radius-small btn-border pricing-btn"
                    >
                      {"Choose Plan"}
                    </Link>
                  </div>

                  <ul className="pricing-list">
                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Exterior Wash"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Spot-Free Rinse"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Towel Dry"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Interior Vacuum"}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="pricing-wrapper mid">
                  <div className="pricing-top">
                    <p className="sub-title">{"Premium Wash"}</p>

                    <div className="price">
                      {"$59.00/ "}
                      <span>{"month"}</span>
                    </div>

                    <p className="text">{"Perfect To Get Started"}</p>

                    <Link
                      prefetch={false}
                      href="/pricing"
                      className="rts-btn radius-small btn-border pricing-btn"
                    >
                      {"Choose Plan"}
                    </Link>
                  </div>

                  <ul className="pricing-list">
                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Exterior Wash"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Spot-Free Rinse"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Towel Dry"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Interior Vacuum"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Air Freshener"}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="pricing-wrapper">
                  <div className="pricing-top">
                    <p className="sub-title">{"Deluxe Wash"}</p>

                    <div className="price">
                      {"$29.00/ "}
                      <span>{"month"}</span>
                    </div>

                    <p className="text">{"Perfect To Get Started"}</p>

                    <Link
                      prefetch={false}
                      href="/pricing"
                      className="rts-btn radius-small btn-border pricing-btn"
                    >
                      {"Choose Plan"}
                    </Link>
                  </div>

                  <ul className="pricing-list">
                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Exterior Wash"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Spot-Free Rinse"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Towel Dry"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Interior Vacuum"}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="sports"
            role="tabpanel"
            aria-labelledby="sports-tab"
          >
            <div className="row g-5 align-items-center">
              <div className="col-lg-4 col-md-6">
                <div className="pricing-wrapper">
                  <div className="pricing-top">
                    <p className="sub-title">{"Basic Wash"}</p>

                    <div className="price">
                      {"$19.00/ "}
                      <span>{"month"}</span>
                    </div>

                    <p className="text">{"Perfect To Get Started"}</p>

                    <Link
                      prefetch={false}
                      href="/pricing"
                      className="rts-btn radius-small btn-border pricing-btn"
                    >
                      {"Choose Plan"}
                    </Link>
                  </div>

                  <ul className="pricing-list">
                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Exterior Wash"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Spot-Free Rinse"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Towel Dry"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Interior Vacuum"}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="pricing-wrapper mid">
                  <div className="pricing-top">
                    <p className="sub-title">{"Premium Wash"}</p>

                    <div className="price">
                      {"$59.00/ "}
                      <span>{"month"}</span>
                    </div>

                    <p className="text">{"Perfect To Get Started"}</p>

                    <Link
                      prefetch={false}
                      href="/pricing"
                      className="rts-btn radius-small btn-border pricing-btn"
                    >
                      {"Choose Plan"}
                    </Link>
                  </div>

                  <ul className="pricing-list">
                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Exterior Wash"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Spot-Free Rinse"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Towel Dry"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Interior Vacuum"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Air Freshener"}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="pricing-wrapper">
                  <div className="pricing-top">
                    <p className="sub-title">{"Deluxe Wash"}</p>

                    <div className="price">
                      {"$29.00/ "}
                      <span>{"month"}</span>
                    </div>

                    <p className="text">{"Perfect To Get Started"}</p>

                    <Link
                      prefetch={false}
                      href="/pricing"
                      className="rts-btn radius-small btn-border pricing-btn"
                    >
                      {"Choose Plan"}
                    </Link>
                  </div>

                  <ul className="pricing-list">
                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Exterior Wash"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Spot-Free Rinse"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Towel Dry"}
                    </li>

                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      {" Interior Vacuum"}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
