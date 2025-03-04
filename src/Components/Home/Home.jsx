import React from 'react'
import HOC from '../HOC/Hoc'
import "../../Assets/css/Home.css"
import HomeAbout from './HomeAbout'
import HomeCarousel from './HomeCarousel'

function Home() {
  return (
    <>
      <HomeCarousel />
      <HomeAbout />
    </>
  )
}

export default HOC(Home)