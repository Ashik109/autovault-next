import Link from "next/link";
export default function ServiceService2() {
  return (
    <section className="rts-service-area bg-heading rts-section-gap">
      <div className="container">
        <div className="section-title-area2">
          <p
            className="sub-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            {"Our Service"}
          </p>

          <h2 className="section-title cw move-right" data-aos="move-right">
            {"Our Car "}
            <span>{"Service"}</span>
          </h2>
        </div>

        <div className="section-inner mt--80">
          <div className="service-wrapper-2">
            <span className="number">{"01"}</span>

            <div className="content">
              <h5 className="title cw">{"Precision Auto Care"}</h5>

              <p className="desc">
                {
                  "Exterior cleaning with soap and water, followed by a rinse and air dry."
                }
              </p>
            </div>

            <div className="image-area">
              <Link prefetch={false} href="/service">
                <img
                  src="/assets/images/service/service-04.webp"
                  width="396"
                  alt=""
                />
              </Link>
            </div>

            <div className="button-area">
              <a href="#">
                <i className="rt-icon-right-arrow-1"></i>
              </a>
            </div>
          </div>

          <div className="service-wrapper-2">
            <span className="number">{"02"}</span>

            <div className="content">
              <h5 className="title cw">{"DriveWell Auto Repair"}</h5>

              <p className="desc">
                {
                  "Exterior cleaning with soap and water, followed by a rinse and air dry."
                }
              </p>
            </div>

            <div className="image-area">
              <Link prefetch={false} href="/service">
                <img
                  src="/assets/images/service/service-05.webp"
                  width="396"
                  alt=""
                />
              </Link>
            </div>

            <div className="button-area">
              <a href="#">
                <i className="rt-icon-right-arrow-1"></i>
              </a>
            </div>
          </div>

          <div className="service-wrapper-2">
            <span className="number">{"03"}</span>

            <div className="content">
              <h5 className="title cw">{"Revive Auto Solutions"}</h5>

              <p className="desc">
                {
                  "Exterior cleaning with soap and water, followed by a rinse and air dry."
                }
              </p>
            </div>

            <div className="image-area">
              <Link prefetch={false} href="/service">
                <img
                  src="/assets/images/service/service-06.webp"
                  width="396"
                  alt=""
                />
              </Link>
            </div>

            <div className="button-area">
              <a href="#">
                <i className="rt-icon-right-arrow-1"></i>
              </a>
            </div>
          </div>
        </div>

        <a
          href="#"
          className="rts-btn radius-small btn-border load-more-btn cw"
        >
          {"See All Service"}
        </a>
      </div>
    </section>
  );
}
