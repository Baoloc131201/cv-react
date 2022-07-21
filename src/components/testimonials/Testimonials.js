import React from "react";
import "./testimonials.css";
import Data from "./DataTest";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <div className="testimonials container section">
      <h2 className="section__title">Clients & Reviews</h2>
      <Swiper
        className="testimonials__container grid"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {Data.map((item, index) => {
          return (
            <SwiperSlide className="testimonial__item" key={item.id}>
              <div className="thumb">
                <img src={item.image} alt="" />
              </div>
              <h3 className="testimonials__title">{item.title}</h3>
              <span className="subtitle">{item.subtitle}</span>
              <div className="comment">{item.comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
