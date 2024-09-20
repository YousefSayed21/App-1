import React from 'react'
import './Section.css'

const Section = () => {
  return (
    <div className='ml-20 flex justify-between items-center mt-20'>
        <div className=''>
            <div className='yousef sm:text-sm md:text-xl mb-2 md:mb-8'>
                WEB DESIGN <span className='text-white'>//</span> WEBFLOW <span className='text-white'>//</span> SEO
            </div>
            <div className='text-white sm:text-2xl mb-2 sm:font-semibold md:text-5xl md:mb-8'>
                Web Developer Portofolio .
            </div>
            <div className='text-gray-400 mb-2 md:mb-8'>
                We build marketing websites that help you sell on autopilot.
            </div>
            <div className='sayed text-sm md:text-xl w-28 rounded-md py-2 px-3 font-bold text-white cursor-pointer btn-1'>
                Let's talk
            </div>
        </div>

        <div className='w-3/6 img2 relative mr-20'>
        <img src="\images\623503637e979197919c6c03_Topology-1 (1).svg" className='w-full yousef3' alt="" />
        <div className='absolute inset-0 flex justify-center items-center yousef3'>
          <img src="\images\623a183aa76fb537cbc5dc0e_Group 8-p-500.png" alt="no validate" className='w-4/5 full' />
        </div>
      </div>

    </div>
  )
}

export default Section