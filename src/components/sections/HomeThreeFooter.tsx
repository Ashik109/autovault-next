import Link from "next/link";
import TemplateForm from "@/components/TemplateForm";
import CopyrightYear from "@/components/CopyrightYear";
export default function HomeThreeFooter() {
  return (
    <div className="rts-footer-area footer-three" id="rts-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-wrapper-style-between">
              <div className="single-wized logo-area">
                <Link prefetch={false} href="/" className="logo">
                  <img src="/assets/images/logo/logo.svg" width="99" alt="" />
                </Link>

                <p className="desc">
                  {
                    "Don’t miss out on the latest updates, exclusive offers, and insider news. Join our community and get everything"
                  }
                </p>

                <TemplateForm context="/home-three">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required={true}
                    aria-label="Enter your email"
                  />

                  <button
                    type="submit"
                    className="rts-btn radius-small btn-primary"
                  >
                    {"Subscribe"}
                  </button>
                </TemplateForm>
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
                <h6 className="title">{"Download App"}</h6>

                <div className="body d-flex gap-3">
                  <a href="#">
                    <img src="/assets/images/about/app-store.svg" alt="" />
                  </a>

                  <a href="#">
                    <img src="/assets/images/about/play-store.svg" alt="" />
                  </a>
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
                        <img src="/assets/images/icon/x.svg" alt="" />
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <img src="/assets/images/icon/in.svg" alt="" />
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <img src="/assets/images/icon/f.svg" alt="" />
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
