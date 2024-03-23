import { IoMdBusiness } from "react-icons/io";
import { GrTechnology } from "react-icons/gr";
const AboutUs = () => {
  return (
    <div className="about-us">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="about-left">
                        <div className="about-img">
                            <img src="/assets/images/about-1.jpg" alt="" />
                        </div>
                        <div className="about-img-2">
                            <img src="/assets/images/about-2.jpg" alt="" />
                        </div>
                        <div className="about-years">
                            <h4>25 Years</h4>
                            <p>Working Experience</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="about-right">
                        <h4>ABOUT US</h4>
                        <h1 className="section-title mt-2">Selecting the Finest IT Service Provider</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut necessitatibus inventore praesentium? Quibusdam adipisci obcaecati culpa expedita fugiat. Animi quaerat</p>

                        <div className="about-list-item">
                            <div className="about-list-icon">
                                <span><IoMdBusiness /></span>
                            </div>
                            <div className="about-list-content">
                                <h4>Business Growth</h4>
                                <p>Embarrassing hidden in the middle All the Lorem Ipsum generators on the Internet repeat predefined chunks</p>
                            </div>
                        </div>
                        <div className="about-list-item">
                            <div className="about-list-icon">
                                <span><GrTechnology /></span>
                            </div>
                            <div className="about-list-content">
                                <h4>Technology Consultancy</h4>
                                <p>Embarrassing hidden in the middle All the Lorem Ipsum generators on the Internet repeat predefined chunks</p>
                            </div>
                        </div>
                        <div className="custom-btn">
                            ABOUT US
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs