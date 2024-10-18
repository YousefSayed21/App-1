import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Projects from './../Projects/Projects';
import Home from './../Home';
import './NavYousef.css';

const NavYousef = () => {
  const [isOpen, setIsOpen] = useState(false);

  const smoothScroll = (el) => {
    scroller.scrollTo(el.id, {
      duration: 2000,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    document.body.style.overflowX = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'hidden';
    };
  }, [isOpen]);

  return (
    <BrowserRouter>
      <div className="w-full fixed top-0 left-0 flex justify-between items-center bg-black p-4 z-50">
        <div className="ml-20 my-1">
          <Link to="*">
            <img
              src="/images/618b5b33c589e179c2c8b27c_Shiloh New Logo-01-p-3200.png"
              alt="no validate"
              className="w-28"
            />
          </Link>
        </div>

        <div className="xl:hidden mr-20">
          <button onClick={toggleNavbar} className="btn btn-circle swap swap-rotate z-50 relative">
            <input type="checkbox" checked={isOpen} readOnly />
            <svg
              className={`swap-off fill-current ${isOpen ? 'hidden' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512">
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            <svg
              className={`swap-on fill-current ${isOpen ? '' : 'hidden'}`}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512">
              <polygon
                points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
            onClick={toggleNavbar}
          />
        )}

        <div className={`justify-center items-center gap-6 mr-20 hidden xl:flex`}>
          {['LatestBuilds', 'Process', 'Service', 'ContactUs'].map((item) => (
            <HashLink
              key={item}
              to={`/#${item}`}
              scroll={(el) => smoothScroll(el)}
              className="text-gray-200 md:text-xl lg:text-xl my-3"
            >
              {item}
            </HashLink>
          ))}
          <Link className="text-gray-200 md:text-xl lg:text-xl my-3" to="/Projects">
            Projects
          </Link>
        </div>

        <div className={`fixed top-0 right-0 h-full w-64 bg-black transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
          <div className="flex flex-col mt-20">
            {['LatestBuilds', 'Process', 'Service', 'ContactUs'].map((item) => (
              <HashLink
                key={item}
                to={`/#${item}`}
                scroll={(el) => smoothScroll(el)}
                className="text-gray-200 text-xl py-4 text-center"
                onClick={toggleNavbar}
              >
                {item}
              </HashLink>
            ))}
            <Link
              className="text-gray-200 text-xl py-4 text-center"
              to="/Projects"
              onClick={toggleNavbar}
            >
              Projects
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Routes>
          <Route path="/Projects" element={<Projects />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default NavYousef;
