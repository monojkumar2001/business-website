import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import { Link } from "react-router-dom";

const Banner = ({ title }) => {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner-wrapper">
          <h1 className="section-title">{title}</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>{" "}
            </li>
            <span>
              <MdKeyboardDoubleArrowRight />
            </span>
            <li className="banner-color">
              <Link to="/about-us">{title}</Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Banner;
