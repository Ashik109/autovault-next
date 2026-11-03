import Link from "next/link";
export default function ServiceService() {
  return (
    <section className="rts-service-area inner two rts-section-gap">
      <div className="container">
        <div className="section-inner">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="service-image-wrapper">
                <img
                  src="/assets/images/service/service-07.webp"
                  width="616"
                  alt=""
                />

                <img
                  src="/assets/images/service/service-08.webp"
                  width="616"
                  alt=""
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="service-content-area">
                <div className="section-title-area">
                  <p
                    className="sub-title wow fadeInUp"
                    data-wow-delay=".1s"
                    data-wow-duration="1s"
                  >
                    {"Car Dealer Service"}
                  </p>

                  <h2 className="section-title wow move-right">
                    {"Autovault "}
                    <span>{"Service"}</span>
                    {" Center "}
                  </h2>
                </div>

                <p
                  className="desc wow fadeInUp"
                  data-wow-delay=".4s"
                  data-wow-duration="1s"
                >
                  {
                    "Welcome to Autovault where innovation drives every journey. Discover a range of designed to elevate your driving experience.Please arrive a few minutes early, and if you need to make any changes to your appointment, don't hesitate to give us a call at. We look forward to servicing your for vehicle and keeping it running smoothly. We look forward to providing it top-quality care for your vehicle!"
                  }
                </p>

                <div className="button-area">
                  <Link
                    prefetch={false}
                    href="/contact"
                    className="rts-btn btn-primary radius-small"
                  >
                    {"Contact Us"}
                  </Link>

                  <a
                    href="tel:+12505550199"
                    className="rts-btn call-btn wow fadeInUp"
                    data-wow-delay=".6s"
                    data-wow-duration="1s"
                  >
                    <span>
                      <i className="fa-regular fa-phone"></i>
                    </span>

                    <div className="content">
                      <h6>{"Call Us Now"}</h6>

                      <p>{"+12505550199"}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
