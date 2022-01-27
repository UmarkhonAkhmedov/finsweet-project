import React from 'react';
import AboutUs from '../components/About/AboutUs';
import Mission from '../components/About/Mission';
import Process from '../components/About/Process';
import Team from '../components/About/Team';
import Vision from '../components/About/Vision';
import Who from '../components/About/Who';
import Brand from '../components/Brand';
import { featuresAboutData } from '../components/dummyData';
import Feature from '../components/Feature'

function About() {
  return (
    <div className=''>
      <AboutUs/>
      <Who/>
      <Process/>
      <div className='sl-padding vision--mission'>
        <Mission/>
        <Vision/>
      </div>
      <div className='sl-padding'>
        <h2 className='main__heading '>The main benefits of working with us</h2>
        <Feature data={featuresAboutData} color="#F4F6FC"/>
      </div>
      <Brand/>
      <Team/>
    </div>
  );
}

export default About;
