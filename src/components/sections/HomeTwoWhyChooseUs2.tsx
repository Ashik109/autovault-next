export default function HomeTwoWhyChooseUs2() {
  return (
    <section className="rts-why-choose-us2 rts-section-gap">
      <div className="container">
        <div className="section-inner">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-side-content">
                <div className="section-title-area">
                  <p
                    className="sub-title wow fadeInUp"
                    data-wow-delay=".1s"
                    data-wow-duration=".8s"
                  >
                    {"Why Choose Us"}
                  </p>

                  <h2 className="section-title cw wow move-right">
                    {"Why Choose "}
                    <span>{"Us"}</span>
                  </h2>
                </div>

                <ul
                  className="why-choose-feature-list wow fadeInUp"
                  data-wow-delay=".4s"
                  data-wow-duration=".8s"
                >
                  <li>
                    <i className="rt-icon-check-circle"></i>
                    {"Exceptional Selection"}
                  </li>

                  <li>
                    <i className="rt-icon-check-circle"></i>
                    {"Unbeatable Prices"}
                  </li>

                  <li>
                    <i className="rt-icon-check-circle"></i>
                    {"Hassle-Free Financing"}
                  </li>

                  <li>
                    <i className="rt-icon-check-circle"></i>
                    {"Outstanding Car Service"}
                  </li>

                  <li>
                    <i className="rt-icon-check-circle"></i>
                    {"Trusted by the Community"}
                  </li>

                  <li>
                    <i className="rt-icon-check-circle"></i>
                    {"Comprehensive Service"}
                  </li>

                  <li>
                    <i className="rt-icon-check-circle"></i>
                    {"Trade-In and Upgrade"}
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 order-change">
              <div className="right-side-image">
                <img
                  className="wow scaleIn"
                  data-wow-delay=".2s"
                  data-wow-duration="1s"
                  src="/assets/images/why-choose/01.webp"
                  width="308"
                  alt=""
                />

                <img
                  className="wow scaleIn"
                  data-wow-delay=".2s"
                  data-wow-duration="1s"
                  src="/assets/images/why-choose/02.webp"
                  width="308"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
