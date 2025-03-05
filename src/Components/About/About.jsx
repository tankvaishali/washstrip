import React from 'react';
import HOC from '../HOC/Hoc';
import "../../Assets/css/About.css";
import AboutUsSec from './AboutUsSec';
import Team from './Team';

function About() {
  return (
    <>
      <AboutUsSec />
      <Team />
    </>
  );
}

export default HOC(About);