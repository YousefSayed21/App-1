import React from 'react'



import {BrowserRouter , Routes , Route , Link } from 'react-router-dom';

import Home from './Home';
import Pages from './Pages';
import Portofolio from './Portofolio';
import Blog from './Blog';
import Shop from './Shop';
import Elements from './Elements';
import Icon1 from './Icon1';



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';


// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// Import Swiper styles


import './NavBar.css';

const NavBar = () => {
  return (
        <BrowserRouter>
                <nav>
                    <Link to="/">HOME</Link>
                    <Link to="/Pages">PAGES</Link>
                    <Link to="/Portofolio">PORTOFOLIO</Link>
                    <Link to="/Blog">BLOG</Link>
                    <Link to="/Shop">SHOP</Link>
                    <Link to="/Elements">ELEMENTS</Link>
                    <Link to="/Icon">ICON</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/Pages" element={<Pages />}/>
                    <Route path="/Portofolio" element={<Portofolio />}/>
                    <Route path="/Blog" element={<Blog />}/>
                    <Route path="/Shop" element={<Shop />}/>
                    <Route path="/Elements" element={<Elements />}/>
                    <Route path="/Icon1" element={<Icon1 />}/>
                </Routes>
        </BrowserRouter>

  )
}

export default NavBar





                /* <Swiper
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
            </Swiper> */