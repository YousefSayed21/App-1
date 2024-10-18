import React from 'react'
import { Routes , Route , Link } from 'react-router-dom'
import Projects from './../Projects/Projects';
import './Section.css'
import MySwiper from './MySwiper';

const Section3 = () => {
  return (
    <>
    <div id='LatestBuilds'></div>
    <div>
      <div className='flex items-end gap-10 ml-20 yousef9 mt-32'  data-aos="fade-down">
        <div className='text-white text-4xl yousef8'>
          Latest builds.
        </div>
        <div className='yousef7'>
            <nav><Link to='/Projects'>View Projects</Link></nav>
            <Routes>
              <Route path='/Projects' element={<Projects />} />
            </Routes>
        </div>
      </div>
      <div className='mt-16 yousefswiper2'  data-aos="fade-up">
        <MySwiper />
      </div>
    </div>
    </>
  )
}

export default Section3