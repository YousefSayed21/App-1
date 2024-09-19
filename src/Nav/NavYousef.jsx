import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { BrowserRouter , Link , Routes , Route } from 'react-router-dom'
import Projects from './Projects/Projects'

const NavYousef = () => {
  return (
    <div>
        <BrowserRouter>
            <HashLink to='/#LatestBuilds'>LatestBuilds</HashLink>
            <HashLink to='/#Process'>Process</HashLink>
            <HashLink to='/#Service'>Service</HashLink>
            <HashLink to='/#ContactUs'>ContactUs</HashLink>
            <Link to="/Projects">Projects</Link>
            <Routes>
                <Route to='Projects' element={<Projects />} />
            </Routes>
            <img src="\images\618b5b33c589e179c2c8b27c_Shiloh New Logo-01-p-3200.png" alt="no validate" />
        </BrowserRouter>
    </div>
  )
}

export default NavYousef