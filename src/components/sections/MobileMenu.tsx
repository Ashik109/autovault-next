import Link from "next/link";
export default function MobileMenu() {
  return (
    <div id="side-bar" className="side-bar header-two">
      <button className="close-icon-menu">{"X"}</button>

      <div className="mobile-menu-main">
        <nav className="nav-main mainmenu-nav mt--30">
          <ul className="mainmenu metismenu" id="mobile-menu-active">
            <li className="has-droupdown">
              <a href="#" className="main">
                {"Home"}
              </a>

              <ul className="submenu mm-collapse">
                <li>
                  <Link prefetch={false} className="mobile-menu-link" href="/">
                    {"Dealer One"}
                  </Link>
                </li>

                <li>
                  <Link
                    prefetch={false}
                    className="mobile-menu-link"
                    href="/home-two"
                  >
                    {"Dealer Two"}
                  </Link>
                </li>

                <li>
                  <Link
                    prefetch={false}
                    className="mobile-menu-link"
                    href="/home-three"
                  >
                    {"Dealer Three"}
                  </Link>
                </li>

                <li>
                  <Link
                    prefetch={false}
                    className="mobile-menu-link"
                    href="/home-four"
                  >
                    {"Shop Demo"}
                  </Link>
                </li>

                <li>
                  <Link
                    prefetch={false}
                    className="mobile-menu-link"
                    href="/home-five"
                  >
                    {"Wash Demo"}
                  </Link>
                </li>

                <li>
                  <Link
                    prefetch={false}
                    className="mobile-menu-link"
                    href="/home-six"
                  >
                    {"Repair Demo"}
                  </Link>
                </li>

                <li>
                  <Link
                    prefetch={false}
                    className="mobile-menu-link"
                    href="/home-seven"
                  >
                    {"Dealer Slider"}
                  </Link>
                </li>

                <li>
                  <Link
                    prefetch={false}
                    className="mobile-menu-link"
                    href="/home-eight"
                  >
                    {"Dealer Video"}
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link prefetch={false} href="/about" className="main">
                {"About"}
              </Link>
            </li>

            <li className="has-droupdown">
              <a href="#" className="main">
                {"Listing"}
              </a>

              <ul className="submenu mm-collapse">
                <li>
                  <Link
                    prefetch={false}
                    className="mobile-menu-link"
                    href="/portfolio"
                  >
                    {"Car One"}
                  </Link>
                </li>

                <li>
                  <Link
                    prefetch={false}
                    className="mobile-menu-link"
                    href="/portfolio-2"
                  >
                    {"Car Two"}
                  </Link>
                </li>

                <li>
                  <Link
                    prefetch={false}
                    className="mobile-menu-link"
                    href="/portfolio-3"
                  >
                    {"Car Three"}
                  </Link>
                </li>

                <li>
                  <Link
                    prefetch={false}
                    className="mobile-menu-link"
                    href="/portfolio-details/mercedes-benz-e-class"
                  >
                    {"Car Single"}
                  </Link>
                </li>

                <li>
                  <Link
                    prefetch={false}
                    className="mobile-menu-link"
                    href="/portfolio-details-2/mercedes-benz-e-class"
                  >
                    {"Car Single Two"}
                  </Link>
                </li>
              </ul>
            </li>

            <li className="has-droupdown">
              <a href="#" className="main">
                {"Pages"}
              </a>

              <ul className="submenu mm-collapse">
                <li>
                  <Link prefetch={false} href="/service">
                    {"Service"}
                  </Link>
                </li>

                <li>
                  <Link prefetch={false} href="/pricing">
                    {"Pricing"}
                  </Link>
                </li>

                <li>
                  <Link prefetch={false} href="/faq">
                    {"FAQ"}
                  </Link>
                </li>

                <li>
                  <Link prefetch={false} href="/sold-car">
                    {"Sold Car"}
                  </Link>
                </li>

                <li>
                  <Link prefetch={false} href="/calculator">
                    {"Calculator"}
                  </Link>
                </li>

                <li>
                  <Link prefetch={false} href="/blog">
                    {"Blog"}
                  </Link>
                </li>

                <li>
                  <Link prefetch={false} href="/blog-2">
                    {"Blog Two"}
                  </Link>
                </li>

                <li>
                  <Link
                    prefetch={false}
                    href="/blog-details/seasonal-car-care-tips-to-keep-your-vehicle-running-smoothly"
                  >
                    {"Blog Single"}
                  </Link>
                </li>

                <li>
                  <Link prefetch={false} href="/team">
                    {"Team"}
                  </Link>
                </li>
              </ul>
            </li>

            <li className="has-droupdown">
              <a href="#" className="main">
                {"Shop"}
              </a>

              <ul className="submenu mm-collapse">
                <li>
                  <Link
                    prefetch={false}
                    className="mobile-menu-link"
                    href="/shop"
                  >
                    {"Shop"}
                  </Link>
                </li>

                <li>
                  <Link
                    prefetch={false}
                    className="mobile-menu-link"
                    href="/shop-2"
                  >
                    {"Shop Two"}
                  </Link>
                </li>

                <li>
                  <Link
                    prefetch={false}
                    className="mobile-menu-link"
                    href="/shop-3"
                  >
                    {"Shop Three"}
                  </Link>
                </li>

                <li>
                  <Link
                    prefetch={false}
                    className="mobile-menu-link"
                    href="/shop-details/power-steering-pump"
                  >
                    {"Shop Single"}
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link prefetch={false} href="/contact" className="main">
                {"Contact"}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="rts-social-style-one pl--20 mt--50">
          <ul>
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
