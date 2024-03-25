import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import Banner from "../components/Banner";

const ContactPage = () => {
  return (
    <>
      <Banner title="Contact" />
      <section className="contact-us cpy-6">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact-us-list">
                <ul>
                  <li>
                    <div className="contact-us-list-item">
                      <span>
                        <IoLocationOutline />
                      </span>
                    </div>
                    <div className="contact-us-list-item">
                      <p>location</p>
                      <h4>4554 Dhaka, Bangladesh</h4>
                    </div>
                  </li>
                  <li>
                    <div className="contact-us-list-item">
                      <span>
                        <FiPhoneCall />
                      </span>
                    </div>
                    <div className="contact-us-list-item">
                      <p>Call Us 7/24</p>
                      <h4>+208-555-0112</h4>
                    </div>
                  </li>
                  <li>
                    <div className="contact-us-list-item">
                      <span>
                        <MdOutlineMail />
                      </span>
                    </div>
                    <div className="contact-us-list-item">
                      <p>Make A quote</p>
                      <h4>Info@monoj.com</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <form action="">
                <div className="contact-us-form">
                  <div className="form-title">
                    <h4 className="inner-text">LET’S TALK</h4>
                    <h1 className="section-title">Let’s Get in Touch</h1>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="contact-input-fuild">
                        <label htmlFor="name">Your Name*</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Your Name*"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-input-fuild">
                        <label htmlFor="email">Your Email*</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Your Email*"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-input-fuild">
                        <label htmlFor="phone">Your Phone*</label>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          placeholder="Your Phone*"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-input-fuild">
                        <label htmlFor="subject">Subject*</label>
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          placeholder="Subject*"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="contact-input-fuild">
                        <label htmlFor="message">Your Message*</label>
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="5"
                          placeholder="Write Message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <button className="custom-btn mt-5" type="submit">
                        SEND NOW
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
