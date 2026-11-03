import CopyrightYear from "@/components/CopyrightYear";
export default function HomeSixFooter() {
  return (
    <div className="rts-footer-area footer-five bg-white" id="rts-footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <div className="footer-content-box">
                <div className="icon">
                  <img src="/assets/images/footer/icon-01.svg" alt="" />
                </div>

                <h6 className="title">{"Call Us Now"}</h6>

                <p>
                  <a href="tel:+12505550199">{"+12505550199"}</a>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-content-box">
                <div className="icon">
                  <img src="/assets/images/footer/icon-02.svg" alt="" />
                </div>

                <h6 className="title">{"Our Location"}</h6>

                <p>{"M5T 2L9 Toronto, Canada"}</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-content-box">
                <div className="icon">
                  <img src="/assets/images/footer/icon-03.svg" alt="" />
                </div>

                <h6 className="title">{"Send US Email"}</h6>

                <p>
                  <a href="mailto:autovault@gmail.com">
                    {"autovault@gmail.com"}
                  </a>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-content-box">
                <div className="icon">
                  <img src="/assets/images/footer/icon-04.svg" alt="" />
                </div>

                <h6 className="title">{"Working Hours"}</h6>

                <p>{"Monday – Friday: 10 am – 8 pm"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright-area-inner d-flex align-items-center justify-content-between">
                <p>
                  {"Copyright © "}
                  <CopyrightYear />
                  {" All Rights Reserved by Autovalut "}
                </p>

                <div className="social-area-transparent">
                  <ul className="d-flex align-items-center">
                    <li>
                      <a href="#">
                        <img src="/assets/images/icon/x-2.svg" alt="" />
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <img src="/assets/images/icon/Insta-2.svg" alt="" />
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <img src="/assets/images/icon/f-2.svg" alt="" />
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <img src="/assets/images/icon/in-2.svg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
