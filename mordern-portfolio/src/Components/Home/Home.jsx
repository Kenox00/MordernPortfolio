import React from 'react'
import Hero from './Hero/Hero'
import MyService from './MyService/MyService'
import Education from './Education/Education'
import Experience from './Experience/Experience'
import Portfolio from './Portfolio/Portfolio'
import Testimonials from './Testimonials/Testimonials'
import LatestBlog from './LatestBlog/LatestBlog'
import GetInTouch from './GetInTouch/GetInTouch'

const Home = () => {
  return (
    <>
      <Hero />
      <MyService /> 
      <Education />
      <Experience />
      <Portfolio />
      <Testimonials />
      <LatestBlog />
      <GetInTouch />
     
    </>
  )
}

export default Home