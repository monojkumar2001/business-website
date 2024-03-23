import { Link } from "react-router-dom";

const WhyChoose = () => {
  return (
    <div className="why-choose">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="why-choose-left">
            <h4 className="section-inner-text">
                WHY CHOOSE US
            </h4>
            <h1 className="section-title"> What Make Us Different</h1>
    
    <div className="why-choose-item">
        <div className="why-choose-item-icon">
            <img src="/assets/images/icons/icon-4.png" alt="" />
        </div>
        <div className="why-choose-list-content">
            <Link href="/service-details">
            Commercial Service
            </Link>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro autem voluptate aperiam consectetur dicta.</p>
        </div>
        <div className="why-choose-list-content">
            <Link href="/service-details">
            Commercial Service
            </Link>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro autem voluptate aperiam consectetur dicta.</p>
        </div>
        <div className="why-choose-list-content">
            <Link href="/service-details">
            Commercial Service
            </Link>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro autem voluptate aperiam consectetur dicta.</p>
        </div>
    </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="why-choose-right">
                <div className="why-choose-img">
                    <img src="/assets/images/choose-1.png" alt="" />
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="why-choose-bg">
        <img src="/assets/images/choose-bg.png" alt="" />
      </div>
    </div>
  );
};

export default WhyChoose;
