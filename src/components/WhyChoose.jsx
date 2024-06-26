import { Link } from "react-router-dom";

const WhyChoose = () => {
  return (
    <section className="why-choose cpy-6">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="why-choose-left">
              <h4 className="section-inner-text">WHY CHOOSE US</h4>
              <h1 className="section-title"> What Make Us Different</h1>

              <div className="why-choose-item">
                <div className="why-choose-item-icon">
                  <img src="/assets/images/icons/icon-4.png" alt="" />
                </div>
                <div className="why-choose-list-content">
                  <Link href="/service-details">Commercial Service</Link>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Porro autem voluptate aperiam consectetur dicta.
                  </p>
                </div>
                <div className="why-choose-list-content">
                  <Link href="/service-details">Commercial Service</Link>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Porro autem voluptate aperiam consectetur dicta.
                  </p>
                </div>
                <div className="why-choose-list-content">
                  <Link href="/service-details">Commercial Service</Link>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Porro autem voluptate aperiam consectetur dicta.
                  </p>
                </div>
              </div>
              <div className="why-choose-item">
                <div className="why-choose-item-icon">
                  <img src="/assets/images/icons/icon-5.png" alt="" />
                </div>

                <div className="why-choose-list-content">
                  <Link href="/service-details">Commercial Service</Link>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Porro autem voluptate aperiam consectetur dicta.
                  </p>
                </div>
              </div>
              <div className="why-choose-item">
                <div className="why-choose-item-icon">
                  <img src="/assets/images/icons/icon-6.png" alt="" />
                </div>

                <div className="why-choose-list-content">
                  <Link href="/service-details">Commercial Service</Link>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Porro autem voluptate aperiam consectetur dicta.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="why-choose-right">
              <div className="why-choose-img">
                <img src="/assets/images/choose-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default WhyChoose;
