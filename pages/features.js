import React from 'react';
import Hero from '../components/Home/Hero';
import Brand from '../components/Brand'
import Feature from '../components/Feature';
import { featuresAboutData } from '../components/dummyData';
import InfoImg from '../components/InfoImg';
import FAQ from '../components/FAQ'
import ImageText from '../components/Features.js/ImageText';

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
      <ImageText color="#F4F6FC" subtitle="Free Revision Rounds" title="Get free Revisions and one week of free maintenance" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." img="revision"/>
      <div className='container'>
        <InfoImg subTitle="24/7 Support" title="Working with us, you will be getting 24/7 priority support" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." img="/images/features/support__img.png"/>
      </div>
      <ImageText color="#FFFBF2" subtitle="Quick Delivery" title="Guranteed 1 week delivery for standard five pager website" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." img="delivery"/>
      <div className='d-margin'></div>
      <FAQ/>
    </div>
  );
}

export default features;
