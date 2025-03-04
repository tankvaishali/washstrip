import React from 'react'
import HOC from '../HOC/Hoc'
import "../../Assets/css/Home.css"
import HomeAbout from './HomeAbout'

function Home() {
  return (
  <>
  <HomeAbout/>
  </>
  )
}

export default HOC(Home)