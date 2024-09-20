import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { BrowserRouter , Link , Routes , Route } from 'react-router-dom'
import Projects from './../Projects/Projects';
import './NavYousef.css';

const NavYousef = () => {
  return (
    <>
    <div className='flex justify-between items-center'>
      <div className='ml-20 my-1'>
        <img src="\images\618b5b33c589e179c2c8b27c_Shiloh New Logo-01-p-3200.png" alt="no validate" className="w-28" />  
      </div>
      <div className='flex justify-center items-center gap-6 mr-20'>
        <BrowserRouter>
            <HashLink className='text-gray-200 hidden md:block md:text-xl lg:text-xl my-3' to='/#LatestBuilds'>LatestBuilds</HashLink>
            <HashLink className='text-gray-200 hidden md:block md:text-xl lg:text-xl my-3' to='/#Process'>Process</HashLink>
            <HashLink className='text-gray-200 hidden md:block md:text-xl lg:text-xl my-3' to='/#Service'>Service</HashLink>
            <HashLink className='text-gray-200 hidden md:block md:text-xl lg:text-xl my-3' to='/#ContactUs'>ContactUs</HashLink>
           <nav><Link className='text-gray-200 hidden md:block md:text-xl lg:text-xl my-3' to="/Projects">Projects</Link></nav>
            
            <Routes>
                <Route path='/Projects' element={<Projects />} />
            </Routes>
        </BrowserRouter>
      </div>
    </div>
    </>
  )
}

export default NavYousef