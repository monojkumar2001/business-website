import AboutUs from "../components/AboutUs";
import Services from "../components/Services";

const HomePage = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-wrapper">
          <div className="hero-left">
            <p>TECHNOLOGY CONSULTANCY</p>
            <h1 className="hero-title">Make The Easiest Solution For You</h1>
            <p className="hero-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore id nulla, expedita ipsum perspiciatis aliquam.
            </p>
            <button className="custom-btn">Learn More</button>
          </div>
        </div>
      </div>

      {/* ========= About Us ================ */}
      <AboutUs/>

      {/* ================ Services ============ */}
      <Services/>
    </>
  );
};

export default HomePage;
