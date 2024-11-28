import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
  return (
    <div class="container">
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2700,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={require("../../../../assets/images/web1.webp")} alt=""/></SwiperSlide>
        <SwiperSlide><img src={require("../../../../assets/images/web2.webp")} alt=""/></SwiperSlide>
        <SwiperSlide><img src={require("../../../../assets/images/web3.webp")} alt=""/></SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Banner;