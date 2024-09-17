import React from 'react'
import { Link , BrowserRouter , Route , Routes } from 'react-router-dom'
import Yousef from './nav/Yousef'
import Sayed from './Sayed'
const App = () => {
  return (
      <BrowserRouter>
        <nav>
          <Link to="/">Yousef</Link>
          <Link to="/Sayed">Sayed</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Yousef />} />
            <Route path="/Sayed" element={<Sayed />} />
        </Routes>


      </BrowserRouter>
  )
}

export default App