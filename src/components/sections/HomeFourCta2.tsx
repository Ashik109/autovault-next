export default function HomeFourCta2() {
  return (
    <div className="rts-cta-area area-3 rts-section-gapBottom">
      <div className="container">
        <div className="cta-inner">
          <h2 className="title">{"If you have any questions Please Call."}</h2>

          <div className="contact">
            <a href="tel:+16544521505">
              <img src="/assets/images/cta/call.svg" alt="" />
              {" +1-654-452-1505"}
            </a>
          </div>

          <img
            className="shape one"
            src="/assets/images/cta/round.svg"
            alt=""
          />

          <img className="shape two" src="/assets/images/cta/line.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
