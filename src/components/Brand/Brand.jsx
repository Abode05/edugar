import React from 'react';
import "./Brand.css";
import { brandData } from '../../constant/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Brand = () => {
  return (
    <div className='brand'>
      <div className="brand-content">
        <Swiper 
          slidesPerView={3} 
          spaceBetween={30}
          pagination={{ clickable: true }} 
          navigation={true}
          modules={[Navigation]} 
          className="mySwiper"
           breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {
            brandData.map((brand, index) => (
              <SwiperSlide key={index}>
                <img src={brand.brand} alt="brand" className='ic' />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div> 
    </div>
  );
}

export default Brand;
