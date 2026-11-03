export default function HomeSixAward() {
  return (
    <section className="rts-award-area bg-gray">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div
              className="left"
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <img src="/assets/images/about/11.webp" width="478" alt="" />
            </div>
          </div>

          <div className="col-lg-7">
            <div className="right">
              <div className="section-title-area">
                <p
                  className="sub-title"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  {"Award"}
                </p>

                <h2 className="section-title move-right" data-aos="move-right">
                  {
                    "Best in Repair and Service of Excellence Provider Winners for "
                  }
                  <span>{"2024"}</span>
                </h2>
              </div>

              <div className="achievement-area">
                <ul>
                  <li>
                    <img src="/assets/images/about/achievement-01.svg" alt="" />
                  </li>

                  <li>
                    <img src="/assets/images/about/achievement-02.svg" alt="" />
                  </li>

                  <li>
                    <img src="/assets/images/about/achievement-03.svg" alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
