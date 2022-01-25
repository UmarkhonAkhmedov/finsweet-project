import React from 'react';
import Feature from '../Feature';
import { featuresHomeData } from '../dummyData';

function HomeFeatures() {
  return (
    <div className='homeFeatures s-padding'>
      <div className='homeFeatures__heading'>
        <span>Features</span>
        <h2>Design that solves problems, one product at a time</h2>
      </div>
      <Feature data={featuresHomeData} color="white"/>
    </div>
  );
}

export default HomeFeatures;
