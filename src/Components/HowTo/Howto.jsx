import React from 'react'
import HOC from '../HOC/Hoc'
import "../../Assets/css/Howto.css";
import FollowStep from './FollowStep'
import Lendingsec from '../Lendingsec';

function Howto() {
  return (
    <>
      <Lendingsec Page={'How to'} />
      <FollowStep />
    </>
  )
}

export default HOC(Howto)