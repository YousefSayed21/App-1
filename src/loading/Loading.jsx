import React from 'react'
import { HashLoader } from 'react-spinners';
import './Loading.css';
const Loading = () => {
  return (
    <>
    <div className='HashLoader'>
        <HashLoader color="#f17510"  size={200} />
    </div>
    </>
  )
}

export default Loading