import React, { useEffect, useState }  from 'react'
import './App.css'
import NavYousef from './Nav/NavYousef';
import Loading from './loading/Loading';


const App = () => {

  const [loading , setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    } , 3000)
  } , [])



  return (
    <>

        {
          loading ? <Loading /> : <NavYousef />
        }

      

    </>
  );
  
}

export default App;