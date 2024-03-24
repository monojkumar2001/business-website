import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="service">
      <div className="container">
        <div className="service-title">
          <h1 className="section-title">Our Service</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            veritatis, culpa qui reiciendis cum sapiente!
          </p>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            360: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          //   modules={[Pagination]}
          className="mySwiper"
        >
          {serviceData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="service-card-item">
                <div className="service-img">
                  <img src={item.img} alt="" />
                </div>
                <div className="service-content">
                  <Link to="/service-details" className="service-name">
                    {item.title}
                  </Link>
                  <p>{item.text}</p>
                  <Link to="/service-details" className="service-read-more">
                    <p>Read More</p>
                    <span>
                      <MdKeyboardDoubleArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
// Define serviceData before using it
const serviceData = [
  {
    id: 1,
    img: "/assets/images/service-1.jpg",
    title: "App Development",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit sapiente quaerat doloribus ipsa, repudiandae fuga!",
  },
  {
    id: 2,
    img: "/assets/images/service-2.jpg",
    title: "Web Development",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit sapiente quaerat doloribus ipsa, repudiandae fuga!",
  },
  {
    id: 3,
    img: "/assets/images/service-3.jpg",
    title: "Digital Marketing",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit sapiente quaerat doloribus ipsa, repudiandae fuga!",
  },
  {
    id: 4,
    img: "/assets/images/service-1.jpg",
    title: "App Development",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit sapiente quaerat doloribus ipsa, repudiandae fuga!",
  },
  {
    id: 5,
    img: "/assets/images/service-2.jpg",
    title: "Web Development",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit sapiente quaerat doloribus ipsa, repudiandae fuga!",
  },
  {
    id: 6,
    img: "/assets/images/service-3.jpg",
    title: "Digital Marketing",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit sapiente quaerat doloribus ipsa, repudiandae fuga!",
  },
];
