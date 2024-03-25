import AboutUs from "../components/AboutUs";
import OurTeam from "../components/OurTeam";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";

const HomePage = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-wrapper">
          <div className="hero-left">
            <p className="banner-sub-title">TECHNOLOGY CONSULTANCY</p>
            <h1 className="hero-title">Make The Easiest Solution For You</h1>
            <p className="hero-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore id nulla, expedita ipsum perspiciatis aliquam.
            </p>
            <button className="custom-btn">Learn More</button>
          </div>
        </div>
      </section>

      {/* ========= About Us ================ */}
      <AboutUs/>

      {/* ================ Services ============ */}
      <Services/>
      {/* ============= Our Team ============= */}
      <OurTeam/>


    </>
  );
};

export default HomePage;
