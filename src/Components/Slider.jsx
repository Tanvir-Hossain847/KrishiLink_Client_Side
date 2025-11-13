import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

const Slider = () => {
    return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        fadeEffect={{crossFade: true}}
        navigation={true}
        loop={true}
        speed={800}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper lg:w-150 md:120 rounded-4xl"
      >
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/8939267/pexels-photo-8939267.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/916406/pexels-photo-916406.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/95425/pexels-photo-95425.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/8540212/pexels-photo-8540212.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/8633675/pexels-photo-8633675.jpeg" />
        </SwiperSlide>
      </Swiper>
    </>
    );
};

export default Slider;