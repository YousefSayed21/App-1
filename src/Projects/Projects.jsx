import React, { useEffect, useState } from 'react'
import './Projects.css'
import axios from 'axios'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Projects = () => {

  const [images , setImages] = useState([])

  useEffect(() => {

    axios.get('data.json')
    .then((res) => {
      setImages(res.data.projects)
    })


  }, [])


  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  return (
    <>
    <br />
    <br />
    <br />
      <div>
        <div>
          <div className="allprojects sm:text-3xl md:text-5xl text-center">
            All Projects
          </div>
          <div className="ml-20 mr-20 grid sm:grid-cols-2 md:grid-cols-2 gap-9 xl:grid-cols-3 sm:mt-8 md:mt-12 xl:mt-16">
            {images.map((image) => (
              <div key={image.id}>
                <div className="bg-gray-900 rounded-md sm:p-5 md:p-5" data-aos="zoom-in">
                  <div>
                    <img
                      src={image.url}
                      alt="no validate"
                      className="rounded-md"
                    />
                  </div>
                  <div className="h-max">
                    <div className="font-semibold text-white sm:text-xl md:text-3xl  pt-2 pb-1">
                      {image.title}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {image.description}
                    </div>
                    <div className="mt-2">
                      <a className="mylink" href={image.link}>
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
    <br />
    <br />
    </>
  );
}

export default Projects