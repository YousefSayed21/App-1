import React from 'react'
import { BrowserRouter, Routes , Route , Link } from 'react-router-dom'
import Projects from './../Projects/Projects';
import './Section.css'
import MySwiper from './MySwiper';

const Section3 = () => {
  return (
    <div className='md:mt-32' id='LatestBuilds'>
      <div className='flex items-end gap-10 ml-20 yousef9'>
        <div className='text-white text-4xl yousef8'>
          Latest builds.
        </div>
        <div className='yousef7'>
          <BrowserRouter>
            <nav><Link to='/Projects'>View Projects</Link></nav>
            <Routes>
              <Route path='/Projects' element={<Projects />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      <div className='mt-16 yousefswiper2'>
        <MySwiper />
      </div>
    </div>
  )
}

export default Section3