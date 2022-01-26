import React from 'react';
import Testimonials from '../Testimonials';

function HomeTestimonials() {
  return (
    <div className='site-homeTestimonials s-padding'>
      <div className='container homeTestimonials'>
        <div className='homeTestimonials__heading'>
          <h3 className='sm-heading'>What our clients say about us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
        </div>
        <div className='homeTestimonials__carousel'>
          <Testimonials/>
        </div>
      </div>
    </div>
  )
}

export default HomeTestimonials;
