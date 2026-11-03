export default function AboutCounterAreaTwo() {
  return (
    <section className="rts-counter-area-two">
      <div className="container">
        <div className="counter-inner">
          <div
            className="inner wow zoomIn"
            data-wow-delay=".2s"
            data-wow-duration="1s"
          >
            <div className="icon">
              <img src="/assets/images/counter/icon-01.svg" width="74" alt="" />
            </div>

            <div className="text">
              <h3 className="title">
                <span className="counter">{"320"}</span>
                <span>{"M"}</span>
              </h3>

              <p className="desc">{"Cars For Sale"}</p>
            </div>
          </div>

          <div
            className="inner wow zoomIn"
            data-wow-delay=".4s"
            data-wow-duration="1s"
          >
            <div className="icon">
              <img src="/assets/images/counter/icon-02.svg" alt="" />
            </div>

            <div className="text">
              <h3 className="title">
                <span className="counter">{"5500"}</span>
                <span>{"+"}</span>
              </h3>

              <p className="desc">{"Dealer Review"}</p>
            </div>
          </div>

          <div
            className="inner wow zoomIn"
            data-wow-delay=".6s"
            data-wow-duration="1s"
          >
            <div className="icon">
              <img src="/assets/images/counter/icon-03.svg" alt="" />
            </div>

            <div className="text">
              <h3 className="title">
                <span className="counter">{"300"}</span>
                <span>{"M"}</span>
              </h3>

              <p className="desc">{"Verified User"}</p>
            </div>
          </div>

          <div
            className="inner wow zoomIn"
            data-wow-delay=".8s"
            data-wow-duration="1s"
          >
            <div className="icon">
              <img src="/assets/images/counter/icon-04.svg" alt="" />
            </div>

            <div className="text">
              <h3 className="title">
                <span className="counter">{"10"}</span>
                <span>{"M"}</span>
              </h3>

              <p className="desc">{"Visitor Per Day"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
