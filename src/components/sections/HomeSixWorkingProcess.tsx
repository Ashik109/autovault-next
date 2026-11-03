export default function HomeSixWorkingProcess() {
  return (
    <section className="rts-working-process-area rts-section-gap">
      <div className="container">
        <div className="section-title-area2">
          <p
            className="sub-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            {"Our Work Process"}
          </p>

          <h2 className="section-title move-right" data-aos="move-right">
            {"Our Work "}
            <span>{"Process"}</span>
          </h2>
        </div>

        <div className="working-inner mt--80">
          <img className="shape" src="/assets/images/icon/line.svg" alt="" />

          <div className="working-process-wrapper">
            <div className="icon">
              <img src="/assets/images/icon/icon-01.svg" alt="" />
            </div>

            <h6 className="title">{"Issue Identification"}</h6>

            <p className="desc">
              {
                "The mechanic or service advisor talks to the customer to understand the problem noises, performance issues, warning lights"
              }
            </p>
          </div>

          <div className="working-process-wrapper">
            <div className="icon">
              <img src="/assets/images/icon/icon-02.svg" alt="" />
            </div>

            <h6 className="title">{"Quality Control & Testing"}</h6>

            <p className="desc">
              {
                "The mechanic or service advisor talks to the customer to understand the problem noises, performance issues, warning lights"
              }
            </p>
          </div>

          <div className="working-process-wrapper">
            <div className="icon">
              <img src="/assets/images/icon/icon-03.svg" alt="" />
            </div>

            <h6 className="title">{"Customer Notification & Handover"}</h6>

            <p className="desc">
              {
                "The mechanic or service advisor talks to the customer to understand the problem noises, performance issues, warning lights"
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
