import React from 'react';
import { featuresAboutData } from '../components/dummyData';
import Feature from '../components/Feature'

function About() {
  return (
    <div className='s-padding'>
      <h2 className='main__heading '>The benefits of working with usThe benefits of working with us</h2>
      <Feature data={featuresAboutData} color="#F4F6FC"/>
    </div>
  );
}

export default About;
