import Link from "next/link";
export default function HomeFiveService() {
  return (
    <section id="service" className="rts-service-area rts-section-gap bg-gray">
      <div className="container">
        <div className="section-top d-flex justify-content-between align-items-end">
          <div className="section-title-area">
            <p
              className="sub-title wow fadeInUp"
              data-wow-delay=".1s"
              data-wow-duration=".8s"
            >
              {"Our Service"}
            </p>

            <h2 className="section-title wow move-right mb--0">
              {"Our Washing "}
              <span>{"Service"}</span>
            </h2>
          </div>

          <Link prefetch={false} href="/service" className="rts-btn btn-border">
            {"See All Service"}
          </Link>
        </div>

        <div className="section-inner mt--80">
          <div className="row g-10">
            <div className="col-lg-4">
              <div className="service-wrapper">
                <div className="image-area jarallax jara-mask-1">
                  <img
                    src="/assets/images/service/service-01.webp"
                    className="jarallax-img"
                    alt=""
                  />
                </div>

                <div className="content mt--30">
                  <h5 className="title">
                    <Link prefetch={false} href="/service">
                      {"Exterior Detailing"}
                    </Link>
                  </h5>

                  <p className="desc">
                    {
                      "Exterior cleaning with soap and water, followed by a rinse and air dry."
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="service-wrapper mid">
                <div className="content mb--30">
                  <h5 className="title">
                    <Link prefetch={false} href="/service">
                      {"The Supreme Wash "}
                    </Link>
                  </h5>

                  <p className="desc">
                    {
                      "Exterior cleaning with soap and water, followed by a rinse and air dry."
                    }
                  </p>
                </div>

                <div className="image-area jarallax jara-mask-1">
                  <img
                    src="/assets/images/service/service-02.webp"
                    className="jarallax-img"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="service-wrapper">
                <div className="image-area jarallax jara-mask-1">
                  <img
                    src="/assets/images/service/service-03.webp"
                    className="jarallax-img"
                    alt=""
                  />
                </div>

                <div className="content mt--30">
                  <h5 className="title">
                    <Link prefetch={false} href="/service">
                      {"Sparkle Shine Wash"}
                    </Link>
                  </h5>

                  <p className="desc">
                    {
                      "Exterior cleaning with soap and water, followed by a rinse and air dry."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
