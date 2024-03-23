import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-item">
              <Link className="footer-logo" href="/">
                <img src="/assets/images/logo.png" alt="" />
              </Link>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
                fugiat autem obcaecati fugit praesentium{" "}
              </p>
              <ul className="footer-social-item">
                <li>
                  <Link href="#">
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaLinkedinIn />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaYoutube />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-item">
              <h2 className="footer-title">Our Services</h2>
              <div className="footer-service-list">
                <ul>
                  <li>
                    <Link href="/service-details">IT Management</Link>
                  </li>
                  <li>
                    <Link href="/service-details">Digital Marketing</Link>
                  </li>
                  <li>
                    <Link href="/service-details">Web Design</Link>
                  </li>
                  <li>
                    <Link href="/service-details">Web Development</Link>
                  </li>
                  <li>
                    <Link href="/service-details">App Development</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-item">
              <h2 className="footer-title">Newsletter</h2>
              <p>Sign Up For News & Get 30% Off in New User.</p>
              <form action="">
                <input type="text" className="footer-newsletter-input" />
                <button type="submit" className="custom-btn">
                  SUBSCRIBE NOW
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© All Copyright 2024 by monoj</p>
          <div className="footer-terms-item">
            <Link href="#">Terms & Condition</Link>
            <Link href="#">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
