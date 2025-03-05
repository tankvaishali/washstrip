import React from 'react'
import HOC from '../HOC/Hoc'
import "../../Assets/css/Home.css"
import HomeAbout from './HomeAbout'
import HomeCarousel from './HomeCarousel'
import Homeproduct from './Homeproduct'
import Homeservice from './Homeservice'
import Counter from './Counter'

function Home() {
  return (
    <>
      <HomeCarousel />
      <HomeAbout />
      <Counter/>
      <Homeservice/>
      <Homeproduct/>
    </>
  )
}

export default HOC(Home)