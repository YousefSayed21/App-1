import axios from 'axios'
import React, { useEffect, useState , useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './Section.css';
import './Swiper.css'

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


const MySwiper = () => {

    const [ photos , setPhotos ] = useState([])

    useEffect(() => {
        axios.get("data.json")
        .then((res) => {
            setPhotos(res.data.projects)
        })
    } , [])



  return (
    <>
              <Swiper
        slidesPerView={3.5}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {
            photos.slice(1,7).map((photo) =><SwiperSlide key={photo.id}><a href={photo.link} target="_blank"><img className='yousefswiper rounded-md' src={photo.url}></img></a>  </SwiperSlide> )
        }
      </Swiper>

    </>
  )
}

export default MySwiper