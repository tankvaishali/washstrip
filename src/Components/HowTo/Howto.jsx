import React from 'react'
import HOC from '../HOC/Hoc'
import "../../Assets/css/Howto.css";
import FollowStep from './FollowStep'
import Lendingsec from '../Lendingsec';
import ProductStep from './ProductStep';
import StripBenefits from './StripBenefits';

function Howto() {
  return (
    <>
      <Lendingsec Page={'Howto'} />
      <FollowStep />
      <ProductStep />
      <StripBenefits />
    </>
  )
}

export default HOC(Howto)