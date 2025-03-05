import React from 'react';
import HOC from '../HOC/Hoc';
import "../../Assets/css/About.css";
import AboutUsSec from './AboutUsSec';
import Team from './Team';
import MissionVision from './MissionVision';


function About() {
  return (
    <>
      <AboutUsSec />
      <MissionVision />
      <Team />
     
    </>
  );
}

export default HOC(About);