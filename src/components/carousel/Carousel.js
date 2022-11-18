import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./carousel.css";
// Import Swiper styles
import "swiper/css";
import front from "../carousel/front.png";
import outside from "../carousel/outside.png";
import bar from "../carousel/bar.png";
export default function Carousel() {
  return (
    <div className="swiper-container">
      {" "}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img style={{ width: 400 }} src={front} alt="front" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img style={{ width: 400 }} src={bar} alt="front" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img style={{ width: 400 }} src={outside} alt="front" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
