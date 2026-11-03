import Link from "next/link";
import CopyrightYear from "@/components/CopyrightYear";
export default function HomeFiveFooter() {
  return (
    <div className="rts-footer-area footer-bg-1 wash" id="rts-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-wrapper-style-between">
              <div className="single-wized">
                <h6 className="title">{"Corporate "}</h6>

                <div className="body">
                  <ul className="nav-bottom">
                    <li>
                      <a href="#">{"History"}</a>
                    </li>

                    <li>
                      <a href="#">{"Awards"}</a>
                    </li>

                    <li>
                      <a href="#">{"Vehicle history "}</a>
                    </li>

                    <li>
                      <a href="#">{"Networks"}</a>
                    </li>

                    <li>
                      <a href="#">{"Affiliates"}</a>
                    </li>

                    <li>
                      <a href="#">{"Car Buying Guide"}</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="single-wized">
                <h6 className="title">{"Contact & legal "}</h6>

                <div className="body">
                  <ul className="nav-bottom">
                    <li>
                      <a href="#">{"Legal"}</a>
                    </li>

                    <li>
                      <a href="#">{"Privacy policy"}</a>
                    </li>

                    <li>
                      <a href="#">{"Cookies policy "}</a>
                    </li>

                    <li>
                      <a href="#">{"Disclaimer"}</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="single-wized">
                <h6 className="title">{"Quick Links"}</h6>

                <div className="body">
                  <ul className="nav-bottom">
                    <li>
                      <Link prefetch={false} href="/service">
                        {"Get In Touch"}
                      </Link>
                    </li>

                    <li>
                      <Link prefetch={false} href="/service">
                        {"Car Reviews"}
                      </Link>
                    </li>

                    <li>
                      <Link prefetch={false} href="/service">
                        {"Maintenance Tips "}
                      </Link>
                    </li>

                    <li>
                      <Link prefetch={false} href="/service">
                        {"Contact Us"}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="single-wized">
                <h6 className="title">{"Contact Us"}</h6>

                <div className="body">
                  <p className="phone d-flex align-items-center">
                    <i className="rt-icon-phone-flip"></i>

                    <a href="tel:12505550199">{"+12505550199"}</a>
                  </p>

                  <p className="email d-flex align-items-center">
                    <i className="rt-icon-envelope"></i>

                    <a href="mailto:autovault@gmail.com">
                      {"autovault@gmail.com"}
                    </a>
                  </p>
                </div>
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
                        <img src="/assets/images/icon/x-w.svg" alt="" />
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <img src="/assets/images/icon/in-w.svg" alt="" />
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <img src="/assets/images/icon/f-w.svg" alt="" />
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
