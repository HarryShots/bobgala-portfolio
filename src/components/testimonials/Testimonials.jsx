import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/Avatar 1.jpg'
import AVTR2 from '../../assets/Avatar 2.jpg'
import AVTR3 from '../../assets/Avatar 3.jpg'
import AVTR4 from '../../assets/Avatar 4.png'

// import Swiper core and required modules
import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const data = [
  {
    avatar: AVTR1,
    name: 'Kessy Durky',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae illo eius quis, omnis rem iste similique consequatur deleniti dolorem vero? Itaque, nam suscipit? Alias repudiandae voluptate maxime quam, expedita officia.'
  },
  {
    avatar: AVTR2,
    name: 'Brenda',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae illo eius quis, omnis rem iste similique consequatur deleniti dolorem vero? Itaque, nam suscipit? Alias repudiandae voluptate maxime quam, expedita officia.'
  },
  {
    avatar: AVTR3,
    name: 'Malando Tina',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae illo eius quis, omnis rem iste similique consequatur deleniti dolorem vero? Itaque, nam suscipit? Alias repudiandae voluptate maxime quam, expedita officia.'
  },
  {
    avatar: AVTR4,
    name: 'Makoun Glory',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae illo eius quis, omnis rem iste similique consequatur deleniti dolorem vero? Itaque, nam suscipit? Alias repudiandae voluptate maxime quam, expedita officia.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" // install Swiper modules
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      navigation>
        {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials