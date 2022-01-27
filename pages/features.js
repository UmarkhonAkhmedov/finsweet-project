import React from 'react';
import Hero from '../components/Home/Hero';
import Brand from '../components/Brand'
import Feature from '../components/Feature';
import { featuresAboutData } from '../components/dummyData';
import InfoImg from '../components/InfoImg';
import FAQ from '../components/FAQ'

function features() {
  return (
    <div>
      <Hero heading="All the features you need" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." buttonMain="View Pricing" img="Features/hero__main.svg" link="/pricing" />
      <Brand/>
      <div className='bottom-padding'>
        <h2 className='main__heading'>The benefits of working with our team</h2>
        <Feature data={featuresAboutData} color="#F4F6FC"/>
      </div>
      <div className='container'>
        <InfoImg subTitle="Use Client-first" title="Top agencies and freelancers around the world use Client-first " text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation." img="/images/features/client__img.png"/>
      </div>
      <FAQ/>
    </div>
  );
}

export default features;
