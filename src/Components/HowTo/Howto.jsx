import React from 'react'
import HOC from '../HOC/Hoc'
import "../../Assets/css/Howto.css";
import FollowStep from './FollowStep'

function Howto() {
  return (
    <>
      <FollowStep />
    </>
  )
}

export default HOC(Howto)