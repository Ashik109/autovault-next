import TemplateForm from "@/components/TemplateForm";
export default function HomeTwoNewsletter() {
  return (
    <section className="rts-newsletter-area rts-section-gapBottom">
      <div className="container">
        <div className="newsletter-inner">
          <h2 className="title cw mb-0">{"Join Our Newsletter"}</h2>

          <TemplateForm context="/home-two">
            <div className="input-wrapper">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required={true}
                aria-label="Enter your email"
              />

              <button
                type="submit"
                className="rts-btn btn-primary radius-small"
              >
                {"Subscribe"}
              </button>
            </div>
          </TemplateForm>

          <img
            src="/assets/images/cta/shape-01.svg"
            alt=""
            className="shape one"
          />

          <img
            src="/assets/images/cta/shape-02.svg"
            alt=""
            className="shape two"
          />

          <img
            src="/assets/images/cta/shape-03.svg"
            alt=""
            className="shape three"
          />
        </div>
      </div>
    </section>
  );
}
