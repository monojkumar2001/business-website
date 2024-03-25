import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import SocialMediaLinkItem from "./SocialMediaLink/SocialMediaLinkItem";
// import { LazyLoadImage } from "react-lazy-load-image-component";

function Header() {
  const [navActive, setNavActive] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const _toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    });
  }, [navActive]);

  // ----------connect wallet ======

  return (
    // <!-- =====================Navigation=========== -->
    <header id="sticky-header">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-5 col-md-12">
            <div className="mobile-flex">
              {/* <!-- Logo --> */}
              <div className="logo">
                <Link to="/">
                  <img src="/assets/images/logo.svg" />
                </Link>
              </div>
              {/* <!-- Mobile Hamburger Menu --> */}
              <div className="hamburger-menu" onClick={_toggleSidebar}>
                <img src="/assets/images/icons/menu.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className={`header-menu ${sidebarActive ? "active" : ""}`}>
              {/* <!-- Mobile Menu Close Button --> */}
              <div
                className="close-btn"
                onClick={() => setSidebarActive(false)}
              >
                <img src="/assets/images/icons/close.svg" alt="" />
              </div>
              <div className="header-right">
                <ul>
                  <li>
                    <Link className="sub-btn" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="sub-btn" to="/about-us">
                      About Us
                    </Link>
                  </li>
                  <li className="dropdown">
                    <Link className="dropbtn">
                      Services
                      <img
                        src="/assets/images/home/icons/bottom-arrow.svg"
                        alt=""
                      />
                    </Link>
                    <div className="dropdown-content">
                      <Link to="/services">Services</Link>
                      <Link to="/service-details">Services Details</Link>
                    </div>
                  </li>
                  <li>
                    <HashLink className="sub-btn" to="/#team">
                      Our Team
                    </HashLink>
                  </li>
                  <li>
                    <Link className="sub-btn" to="/contact-us">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <button className="custom-btn">Get now</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    // {/* <!-- =====================Navigation end =========== --> */}
  );
}
export default Header;
