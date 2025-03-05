import React from 'react';
import HOC from '../HOC/Hoc';
import "../../Assets/css/About.css";
import AboutUsSec from './AboutUsSec';
import Team from './Team';
import MissionVision from './MissionVision';
import QualityAssurance from './QualityAssurance';

function About() {
  return (
    <>
      <AboutUsSec />
      <Team />
      <MissionVision />
      <QualityAssurance />
    </>
  );
}

export default HOC(About);