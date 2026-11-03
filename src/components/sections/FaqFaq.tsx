export default function FaqFaq() {
  return (
    <section className="rts-faq-area inner rts-section-gap">
      <div className="container">
        <div className="section-title-area2">
          <p
            className="sub-title wow fadeInUp"
            data-wow-delay=".1s"
            data-wow-duration="1s"
          >
            {"FAQ"}
          </p>

          <h2 className="section-title wow move-right">
            {"Frequently Asked "}
            <span>{"Question"}</span>
          </h2>
        </div>

        <div className="section-inner mt--80">
          <div className="row g-5">
            <div className="col-xl-7 col-lg-6">
              <div className="rts-faq__accordion">
                <div className="accordion accordion-flush" id="rts-accordion">
                  <div className="accordion-item active">
                    <div className="accordion-header" id="first">
                      <button
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#item__one"
                        aria-expanded="true"
                        aria-controls="item__one"
                        type="button"
                      >
                        {" Are there mileage limits on the rental? "}
                      </button>
                    </div>

                    <div
                      id="item__one"
                      className="accordion-collapse collapse collapse show"
                      aria-labelledby="first"
                      data-bs-parent="#rts-accordion"
                    >
                      <div className="accordion-body">
                        {
                          " Nullam varius luctus pharetra ultrices volpat facilisis donec tortor, nibhkisys abitant curabitur at nunc nisl magna ac rhoncus vehicula sociis tortor nist hendrerit molestie integer.Nullam varius luctus. "
                        }
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <div className="accordion-header" id="two">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#item__two"
                        aria-expanded="false"
                        aria-controls="item__two"
                        type="button"
                      >
                        {" Can I get an estimate before you start the work? "}
                      </button>
                    </div>

                    <div
                      id="item__two"
                      className="accordion-collapse collapse"
                      aria-labelledby="two"
                      data-bs-parent="#rts-accordion"
                    >
                      <div className="accordion-body">
                        {
                          " Nullam varius luctus pharetra ultrices volpat facilisis donec tortor, nibhkisys abitant curabitur at nunc nisl magna ac rhoncus vehicula sociis tortor nist hendrerit molestie integer.Nullam varius luctus. "
                        }
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <div className="accordion-header" id="three">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#item__three"
                        aria-expanded="false"
                        aria-controls="item__three"
                        type="button"
                      >
                        {" What should I do if the rental car breaks down? "}
                      </button>
                    </div>

                    <div
                      id="item__three"
                      className="accordion-collapse collapse"
                      aria-labelledby="three"
                      data-bs-parent="#rts-accordion"
                    >
                      <div className="accordion-body">
                        {
                          " Nullam varius luctus pharetra ultrices volpat facilisis donec tortor, nibhkisys abitant curabitur at nunc nisl magna ac rhoncus vehicula sociis tortor nist hendrerit molestie integer.Nullam varius luctus. "
                        }
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <div className="accordion-header" id="four">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#item__four"
                        aria-expanded="false"
                        aria-controls="item__four"
                        type="button"
                      >
                        {" How do I modify or cancel my reservation? "}
                      </button>
                    </div>

                    <div
                      id="item__four"
                      className="accordion-collapse collapse"
                      aria-labelledby="four"
                      data-bs-parent="#rts-accordion"
                    >
                      <div className="accordion-body">
                        {
                          " Nullam varius luctus pharetra ultrices volpat facilisis donec tortor, nibhkisys abitant curabitur at nunc nisl magna ac rhoncus vehicula sociis tortor nist hendrerit molestie integer.Nullam varius luctus. "
                        }
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <div className="accordion-header" id="five">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#item__five"
                        aria-expanded="false"
                        aria-controls="item__four"
                        type="button"
                      >
                        {
                          " Can I pick up a car in one location and drop it off in another? "
                        }
                      </button>
                    </div>

                    <div
                      id="item__five"
                      className="accordion-collapse collapse"
                      aria-labelledby="five"
                      data-bs-parent="#rts-accordion"
                    >
                      <div className="accordion-body">
                        {
                          " Nullam varius luctus pharetra ultrices volpat facilisis donec tortor, nibhkisys abitant curabitur at nunc nisl magna ac rhoncus vehicula sociis tortor nist hendrerit molestie integer.Nullam varius luctus. "
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-5 col-lg-6 order-change">
              <div className="image-area">
                <img src="/assets/images/banner/faq.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
