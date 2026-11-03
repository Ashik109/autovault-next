import Link from "next/link";
export default function HomeThreeAboutAreaThree() {
  return (
    <section className="rts-about-area-three">
      <div className="left-image jarallax jara-mask-1">
        <img
          src="/assets/images/about/06.webp"
          width="678"
          className="jarallax-img"
          alt=""
        />
      </div>

      <div className="container">
        <div className="section-inner">
          <div className="row align-items-center justify-content-end">
            <div className="col-lg-8">
              <div className="about-content-area">
                <div className="section-title-area">
                  <p
                    className="sub-title"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="800"
                  >
                    {"About Us"}
                  </p>

                  <h2
                    className="section-title move-right"
                    data-aos="move-right"
                  >
                    {" Fuel Your Passion: Top "}
                    <span>{"Car"}</span>
                    {" Exclusive Offers, and Be A Expert Advice "}
                  </h2>
                </div>

                <div className="bottom-content d-flex">
                  <div className="image-area jarallax jara-mask-1">
                    <img
                      className="jarallax-img"
                      src="/assets/images/about/07.webp"
                      width="318"
                      alt=""
                    />
                  </div>

                  <div className="text">
                    <p className="desc">
                      {
                        "Welcome to Autovault where innovation drives every journey. Discover a range of designed to elevate your driving experience. "
                      }
                    </p>

                    <Link
                      prefetch={false}
                      href="/about"
                      className="rts-btn btn-primary radius-small"
                    >
                      {"Learn More"}
                    </Link>
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
