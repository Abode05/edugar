import React, { useState } from 'react';
import './SayClient.css';
import { clients } from '../../constant/data';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SayClient = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [swiperInstance, setSwiperInstance] = useState(null); 

  const handleArrowClick = (index) => {
    setCurrentIndex(index);
    swiperInstance.slideTo(index); 
  };

  return (
    <div className='container'>
      <img src="assets/background.svg" alt="" className='background' />

      <div className='content'>
        <h1>What our clients say</h1>
        <img src="/frame.svg" alt="" />
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
        <h4>{clients[currentIndex].name}</h4>
        <div className="clients">
          <img
            src="assets/arrow_left.svg"
            alt="arrow left"
            className='arrow_client'
            onClick={() => handleArrowClick((currentIndex === 0) ? clients.length - 1 : currentIndex - 1)}
          />
          <Swiper
            effect='coverflow'
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 100,
              depth: 200,
              modifier: 2,
              slideShadows: false,
            }}
            onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
            loop={true}
            modules={[EffectCoverflow]}
            className="swiper-container"
            onSwiper={(swiper) => setSwiperInstance(swiper)}
          >
            {clients.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src={item.img}
                  alt=""
                  className={`profile ${currentIndex === index ? 'active' : ''}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <img
            src="assets/arrow_right1.svg"
            alt="arrow right"
            className='arrow_client'
            onClick={() => handleArrowClick((currentIndex === clients.length - 1) ? 0 : currentIndex + 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default SayClient;
