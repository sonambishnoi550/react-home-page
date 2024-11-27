import React from 'react'
import { Autoplay, Pagination, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/pagination';
import swiper1 from '../../assets/png/slick1.png'
import swiper2 from '../../assets/png/slick2.png'
import swiper3 from '../../assets/png/slick3.png'



const Slider = () => {
    return (
        <div className='pt-20'>
            <div className='container max-w-[1140px] mx-auto'>
                <div>
                    <h1 className='font-bold text-7xl pb-5 text-green-600 text-center'>swiper slider</h1>
                </div>
                <Swiper
                    modules={[Pagination, Autoplay]}
   
                    pagination={{ clickable: true }}
                    autoplay={{ autoplay: true }}
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><img src={swiper1} alt="swiper" /></SwiperSlide>
                    <SwiperSlide><img src={swiper2} alt="swiper" /></SwiperSlide>
                    <SwiperSlide><img src={swiper3} alt="swiper" /></SwiperSlide>
                    <SwiperSlide><img src={swiper1} alt="swiper" /></SwiperSlide>
                    <SwiperSlide><img src={swiper2} alt="swiper" /></SwiperSlide>
                    <SwiperSlide><img src={swiper3} alt="swiper" /></SwiperSlide>
                    <SwiperSlide><img src={swiper1} alt="swiper" /></SwiperSlide>

                </Swiper>
           </div>
      </div>
    )
}

export default Slider
