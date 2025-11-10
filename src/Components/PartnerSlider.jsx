import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

const PartnerSlider = () => {
    return (
        <div className=''>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        autoplay={{
            delay: 0,
            disableOnInteraction: false
        }}
        speed={2000}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="flex items-center h-50">
            <img className='w-40 h-40 mx-auto' src="https://i.pinimg.com/474x/4a/a4/0e/4aa40e23496feb0fbac08748c01b1914.jpg" alt="" />
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className="flex items-center h-50">
            <img className='w-40 mx-auto' src="https://badc.portal.gov.bd/sites/default/files/files/badc.portal.gov.bd/page/b9a85233_710c_4047_a359_702ff601feca/badc%20logo%20png.png" alt="" />
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className="flex items-center h-50">
            <img className='w-40 mx-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgl2ZdnuyBdHvdE-WsMDjb5xvrPYNrgAwTJQ&s" alt="" />
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className="flex items-center h-50">
            <img className='w-40 mx-auto' src="https://www.nobelprize.org/images/grameen-13893-portrait-medium.jpg" alt="" />
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className="flex items-center h-50">
            <img className='w-40 mx-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhkk08V13-t9G1l0ZE4YCn0IEtflGr7_eDlg&s" alt="" />
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className="flex items-center h-50">
            <img className='w-40 mx-auto' src="https://lh5.googleusercontent.com/proxy/TsSmuViLLl2Qh5me_gOjVjYvGXIq4gb4LMMDU77GVkzMAGd7oDS1lbLkH47k5y_KtXfUMbawXMeFp3j0taBzi8k" alt="" />
            </div>
            </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default PartnerSlider;