import  { useEffect, useState } from "react";
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
    <header className="header">
      <div className="container">
        <nav className="navigation">
          <div className="logo logo-nav">
            <Link to="/" className="logo-link">
              <img src="/images/logo.png" alt="" />
            </Link>
          </div>

          <div className={`menu ${sidebarActive ? "active" : ""}`}>
            <div className="close-menu" onClick={() => setSidebarActive(false)}>
              <img src="./images/close.svg" alt="" />
            </div>
            <ul className="menu-nav-ul">
              <div className="left-side d-flex algin-items-center">
                <li className="nav-list">
                  <HashLink
                    to="/mint"
                    className="nav-link"
                    onClick={_toggleSidebar}
                  >
                    Mint
                  </HashLink>
                </li>
                <li className="nav-list">
                  <Link
                    to="/whitelist"
                    className="nav-link"
                    onClick={_toggleSidebar}
                  >
                    Whitelist
                  </Link>
                </li>
                <li className="nav-list">
                  <Link
                    to="/userlist"
                    className="nav-link"
                    onClick={_toggleSidebar}
                  >
                    User list
                  </Link>
                </li>
                <li className="nav-list">
                  <HashLink
                    to="/gallery"
                    className="nav-link"
                    onClick={_toggleSidebar}
                  >
                    Gallery
                  </HashLink>
                </li>
                <li className="nav-list">
                  <HashLink
                    to="#faq"
                    className="nav-link"
                    onClick={_toggleSidebar}
                  >
                    Faq
                  </HashLink>
                </li>
              </div>
              <li className="nav-list-logos nav-list-logo">
                <Link to="/" className="logo-link">
                  <img src="/images/logo.png" alt="" className="logo-img" />
                </Link>
              </li>
              <div className="left-side d-flex algin-items-center justify-content-center">
                {/* <SocialMediaLinkItem /> */}
                <div className="nav-list mt-2">
                  <Link
                    to="/login"
                    className="nav-link"
                    onClick={_toggleSidebar}
                  >
                    Login
                  </Link>
                </div>
                {/* <button className="connect-wallet-btn" onClick={connectWallet}>
                  {walletConnected ? "CONNECTED" : "CONNECT WALLET"}
                </button> */}
              </div>
            </ul>
          </div>
          <div className="show-nav" onClick={_toggleSidebar}>
            <img src="./images/menu.svg" alt="" />
          </div>
        </nav>
      </div>
    </header>
    // {/* <!-- =====================Navigation end =========== --> */}
  );
}
export default Header;