import React from 'react'
import './Section.css'


const Section2 = () => {
  return (
    <div className='flex justify-between ml-20 mr-20 gap-6 items-center yousef4'>
      <div className='w-2/3 img2 relative'>
        <img src="\images\623503637e979197919c6c03_Topology-1 (1).svg" className='w-full yousef3' alt="" />
        <div className='absolute inset-0 flex justify-end items-center yousef3'>
          <img src="\images\6297dd8a74746c61110b1aaa_undraw_team_collaboration_re_ow29 1 (2).svg" alt="no validate" className='w-4/5' />
        </div>
      </div>

      <div>
        <div className='text-white yousef2 rounded-md py-2 px-4 w-28 mb-2 btn-2'>
          the dream
        </div>
        <div className='text-white text-xl'>
          Imagine having your sales team on the job 24/7,
        </div>
        <div className='text-white text-xl'>
          interacting with an endless stream of ready-to-buy
        </div>
        <div className='text-white text-xl'>
          visitor.
        </div>
      </div>
    </div>
  )
}

export default Section2