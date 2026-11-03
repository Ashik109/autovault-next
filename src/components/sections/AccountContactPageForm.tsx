import TemplateForm from "@/components/TemplateForm";
export default function AccountContactPageForm() {
  return (
    <div className="rts-contact-page-form-area rts-section-gapNew rts-section-gap account">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="mian-wrapper-form">
              <div
                className="title-mid-wrapper-home-two sal-animate"
                data-sal="slide-up"
                data-sal-delay="150"
                data-sal-duration="800"
              >
                <h3 className="title">{"Login"}</h3>
              </div>

              <TemplateForm id="contact-form-contact" context="/account">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address or Username"
                  required={true}
                  aria-label="Email Address or Username"
                />

                <input
                  type="password"
                  name="name"
                  placeholder="Password"
                  required={true}
                  aria-label="Password"
                />

                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    defaultValue="lsRememberMe"
                    aria-label="rememberMe"
                  />

                  <label htmlFor="rememberMe">{"Remember me"}</label>
                </div>

                <button
                  type="submit"
                  className="rts-btn btn-primary radius-small"
                >
                  {"Log In"}
                </button>

                <div className="forgot-password">
                  <a href="#0">{"Forgot Your Password?"}</a>
                </div>
              </TemplateForm>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mian-wrapper-form">
              <div
                className="title-mid-wrapper-home-two sal-animate"
                data-sal="slide-up"
                data-sal-delay="150"
                data-sal-duration="800"
              >
                <h3 className="title">{"Registration"}</h3>
              </div>

              <TemplateForm id="contact-form-contact" context="/account">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required={true}
                  aria-label="Your Name"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required={true}
                  aria-label="Email Address"
                />

                <input
                  type="password"
                  name="name"
                  placeholder="New Password"
                  required={true}
                  aria-label="New Password"
                />

                <input
                  type="password"
                  name="name"
                  placeholder="Confirm Password"
                  required={true}
                  aria-label="Confirm Password"
                />

                <button
                  type="submit"
                  className="rts-btn btn-primary radius-small"
                >
                  {"Register"}
                </button>
              </TemplateForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
