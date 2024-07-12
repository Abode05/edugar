import React from 'react'
import "./Brand.css"
import { brandData } from '../../constant/data'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const Brand = () => {
  return (
      <div className='brand'>
          <div className="brand-content">
      
            <Swiper 
            slidesPerView={3} spaceBetween={30}
              pagination={{
             clickable: true,
              }} navigation={true}
              modules={[Navigation]} className="mySwiper">
          {
           brandData.map((brand, index) => (
         
           <SwiperSlide  key={index}><img src={brand.brand} alt="brand" className='ic' /></SwiperSlide>
        
    
                
            ))
          }
            </Swiper>
      </div> 
      
    </div>
  )
}

export default Brand