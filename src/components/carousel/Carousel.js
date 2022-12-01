import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./carousel.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import front from "../carousel/front.png";
import outside from "../carousel/outside.png";
import bar from "../carousel/bar.png";
export default function Carousel() {
  return (
    <div className="swiper-container">
      {" "}
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={front} alt="front" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={bar} alt="front" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={outside} alt="front" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
