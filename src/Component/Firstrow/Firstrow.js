import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
const Firstrow = () =>{
    return(
        <div className='container'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        
       
        modules={[Autoplay,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='bg-dark text-light fs-6 py-1'><small>GET 10% OFF ON YOUR FIRST COFFEE PURCHASE,USE CODE - <span className='text-primary'>TRY10</span></small></SwiperSlide>
        <SwiperSlide className='bg-dark text-light fs-6 py-1'><small>BUY A COFFEE OF YOUR CHOICE AND GET A FRENCH PRESS AT 50% OFF.USE CODE:<span className='text-primary'>COMBOFPSO</span></small></SwiperSlide>
      </Swiper>
        </div>
    );
}
export default Firstrow;