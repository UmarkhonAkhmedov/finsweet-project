import React from 'react';
import Hero from '../components/Home/Hero';
import Brand from '../components/Brand'
import Feature from '../components/Feature';
import { featuresAboutData } from '../components/dummyData';

function features() {
  return (
    <div>
      <Hero heading="All the features you need" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." buttonMain="View Pricing" img="Features/hero__main.svg" link="/pricing" />
      <Brand/>
      <div className=''>
        <h2 className='main__heading'>The benefits of working with our team</h2>
        <Feature data={featuresAboutData} color="#F4F6FC"/>
      </div>
      
    </div>
  );
}

export default features;
