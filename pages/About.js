import React from 'react';
import AboutUs from '../components/About/AboutUs';
import Who from '../components/About/Who';
import { featuresAboutData } from '../components/dummyData';
import Feature from '../components/Feature'

function About() {
  return (
    <div className=''>
      <AboutUs/>
      <Who/>
      <div className='s-padding'>
        <h2 className='main__heading '>The benefits of working with us</h2>
        <Feature data={featuresAboutData} color="#F4F6FC"/>
      </div>
    </div>
  );
}

export default About;
