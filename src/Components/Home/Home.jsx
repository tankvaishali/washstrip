import React from 'react'
import HOC from '../HOC/Hoc'
import "../../Assets/css/Home.css"
import HomeAbout from './HomeAbout'
import HomeCarousel from './HomeCarousel'
import Homeproduct from './Homeproduct'
import Homeservice from './Homeservice'

function Home() {
  return (
    <>
      <HomeCarousel />
      <HomeAbout />
      <Homeservice/>
      <Homeproduct/>
    </>
  )
}

export default HOC(Home)