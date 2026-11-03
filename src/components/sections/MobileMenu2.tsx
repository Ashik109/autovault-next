export default function MobileMenu2() {
  return (
    <div id="side-bar" className="side-bar header-two">
      <button className="close-icon-menu">{"X"}</button>

      <div className="mobile-menu-main onepage">
        <nav className="nav-main mainmenu-nav mt--30">
          <ul className="mainmenu metismenu" id="mobile-menu-active">
            <li>
              <a href="#home" className="main">
                {"Home"}
              </a>
            </li>

            <li>
              <a href="#about" className="main">
                {"About"}
              </a>
            </li>

            <li>
              <a href="#feature" className="main">
                {"Feature"}
              </a>
            </li>

            <li>
              <a href="#service" className="main">
                {"Service"}
              </a>
            </li>

            <li>
              <a href="#pricing" className="main">
                {"Pricing"}
              </a>
            </li>

            <li>
              <a href="#team" className="main">
                {"Team"}
              </a>
            </li>

            <li>
              <a href="#contact" className="main">
                {"Contact"}
              </a>
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
