import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner-wrapper">
          <h1 className="banner-title">About</h1>
          <ul>
            <li>
              <Link href="/">Home</Link>{" "}
            </li>
            <span>
              <MdKeyboardDoubleArrowRight />
            </span>
            <li>
              <Link href="/">About</Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Banner;
