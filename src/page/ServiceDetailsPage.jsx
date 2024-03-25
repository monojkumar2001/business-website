import { Link } from "react-router-dom";
import Banner from "../components/Banner";

const ServiceDetailsPage = () => {
  return (
    <>
      <Banner title={"Service Details"} />
      <section className="service-details cpt-7">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="service-details-left">
                <div className="service-details-img mb-4">
                  <img src="/assets/images/service-details-1.jpg" alt="" />
                </div>
                <h1 className="section-title mb-4">IT Management</h1>
                <p>
                  The is ipsum dolor sit amet consectetur adipiscing elit. Fusce
                  is eleifend porta arcu In hac habitasse the platea thelorem
                  turpoi dictumst. In lacus libero faucibus malesuada sagittis
                  placerat eros sed istincidunt augue ac ante rutrum sed the is
                  sodales augue consequat.
                </p>
                <p className="mt-4">
                  lacus sed pretium pretium justo. Integer is vitae venenatis
                  lorem. Maecenas lacinia turpis the in nunc quam hendrerit
                  scelerisque at finibus enim sagittis. Aliquam erat is volutpat
                  nam nec purus at is orci volutpat semper vel id turpis In a
                  malesuada arcu ac hendrerit.
                </p>
                <div className="service-details-img mt-4">
                  <img src="/assets/images/service-details-2.jpg" alt="" />
                  <img src="/assets/images/service-details-3.jpg" alt="" />
                </div>
                <p className="mb-5 mt-4">
                  Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore of magna aliqua. Ut enim ad minim veniam,
                  made of owl the quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea dolor commodo consequat. Duis aute irure and
                  dolor in reprehenderit.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-details-right">
                <h2>Main Services</h2>
                <ul>
                  <li>
                    <Link to="#">Database Security</Link>
                  </li>
                  <li>
                    <Link to="#">IT Consultancy</Link>
                  </li>
                  <li>
                    <Link to="#">App Development</Link>
                  </li>
                  <li>
                    <Link to="#">UI/UX Design</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsPage;
