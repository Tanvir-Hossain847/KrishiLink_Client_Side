import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

const PartnerSlider = () => {
    return (
        <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i.pinimg.com/474x/4a/a4/0e/4aa40e23496feb0fbac08748c01b1914.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://badc.portal.gov.bd/sites/default/files/files/badc.portal.gov.bd/page/b9a85233_710c_4047_a359_702ff601feca/badc%20logo%20png.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgl2ZdnuyBdHvdE-WsMDjb5xvrPYNrgAwTJQ&s" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.nobelprize.org/images/grameen-13893-portrait-medium.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhkk08V13-t9G1l0ZE4YCn0IEtflGr7_eDlg&s" alt="" /></SwiperSlide>
        <SwiperSlide><img src="" alt="" /></SwiperSlide>
        <SwiperSlide><img src="" alt="" /></SwiperSlide>
        <SwiperSlide><img src="" alt="" /></SwiperSlide>
        <SwiperSlide><img src="" alt="" /></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default PartnerSlider;