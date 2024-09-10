



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';


// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';



import './NavBar.css';


import React from 'react'



import {BrowserRouter , Routes , Route , Link } from 'react-router-dom';

import HOME from './HOME';
import PAGES from './PAGES';
import PORTOFOLIO from './PORTOFOLIO';
import BLOG from './BLOG';
import SHOP from './SHOP';
import ELEMENTS from './ELEMENTS';
import ICON from './ICON';
const NAVBAR = () => {
  return (
    <>
        <BrowserRouter>
                <nav>
                    <Link to="/">HOME</Link>
                    <Link to="/PAGES">PAGES</Link>
                    <Link to="/PORTOFOLIO">PORTOFOLIO</Link>
                    <Link to="/BLOG">BLOG</Link>
                    <Link to="/SHOP">SHOP</Link>
                    <Link to="/ELEMENTS">ELEMENTS</Link>
                    <Link to="/ICON">ICON</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<HOME />}/>
                    <Route path="/PAGES" element={<PAGES />}/>
                    <Route path="/PORTOFOLIO" element={<PORTOFOLIO />}/>
                    <Route path="/BLOG" element={<BLOG />}/>
                    <Route path="/SHOP" element={<SHOP />}/>
                    <Route path="/ELEMENTS" element={<ELEMENTS />}/>
                    <Route path="/ICON" element={<ICON />}/>
                </Routes>
        </BrowserRouter>
        <div>
                            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
            >
            <SwiperSlide><img src="\images\img12.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="\images\img12.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="\images\img12.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="\images\img12.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="\images\img12.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="\images\img12.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="\images\img12.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="\images\img12.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="\images\img12.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
        </>

  )
}

export default NAVBAR





