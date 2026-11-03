export default function HomeFourCta() {
  return (
    <div className="rts-cta-area">
      <div className="container">
        <div className="section-inner">
          <div className="row g-5">
            <div className="col-lg-6 col-md-12">
              <div className="cta-wrapper">
                <div className="image-area jarallax jara-mask-1">
                  <img
                    src="/assets/images/cta/01.webp"
                    className="jarallax-img"
                    alt=""
                  />
                </div>

                <div className="content">
                  <span className="tag radius-big">{"30% Off"}</span>

                  <h4 className="title cw">{"For Online Order"}</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="cta-wrapper">
                <div className="image-area jarallax jara-mask-1">
                  <img
                    src="/assets/images/cta/02.webp"
                    className="jarallax-img"
                    alt=""
                  />
                </div>

                <div className="content">
                  <span className="tag radius-big">{"30% Off"}</span>

                  <h4 className="title cw">{"Our Trending Product"}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
