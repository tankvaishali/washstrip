import React from 'react';
import HOC from '../HOC/Hoc';
import "../../Assets/css/About.css";
import AboutUsSec from './AboutUsSec';
import Team from './Team';
import MissionVision from './MissionVision';
import Testimonial from './Testimonial';
import Faq from './Faq';


function About() {
  return (
    <>
    
      <AboutUsSec />
      <MissionVision />
      <Team />
      <Testimonial />
      <Faq />
    </>
  );
}

export default HOC(About);