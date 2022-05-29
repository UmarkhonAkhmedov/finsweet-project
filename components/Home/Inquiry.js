import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Inquiry() {
  return (
    <div className='container'>
      <div className='inquiry'>
        <div className='inquiry__heading'>
          <h1>Building stellar websites for early startups</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
        </div>
        <div className='inquiry__contact'>
          <div className='inquiry__contact--details'>
            <h3>Send inquiry</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <form>
              <input type="name" placeholder="Your Name"/>
              <input type="email" placeholder="Email"/>
              <input type="url" placeholder="Paste your Figma design URL"/>
              <button>Send an Inquiry</button>
            </form>
            <div className='inquiry__contact--details__link'>
              <Link href="/contact" passHref>Get in touch with us</Link>
              <Image width={24} height={15} src="/images/Home/send__arrow.svg" alt=""/>
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default Inquiry;
