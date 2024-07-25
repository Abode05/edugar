import React, { useState } from 'react'
import "./TopCategory.css"
import { topcategory } from '../../constant/data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
const TopCategory = () => {

   
  return (
       <div className='top-category'>
      <h1>Explore Top Categories</h1>
      <p>Click on the categories and explore all courses</p>
      <div className="category">
        <img src="assets/category.png" alt="background" className='background' />
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next ',
            prevEl: '.swiper-button-prev ',
            hideOnClick: true,
          }}
          className="card-category"
            breakpoints={{
            300: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {topcategory.map((item, index) => (
            <SwiperSlide key={index} className='ix'>
              <div className='item'>
                <div className="shape">
                  <img src={item.img} alt={item.title} />
                </div>
                <p>{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next btn-slider"></div>
        <div className="swiper-button-prev btn-slider"></div>
      </div>
    </div>
  )
}
 

export default TopCategory
