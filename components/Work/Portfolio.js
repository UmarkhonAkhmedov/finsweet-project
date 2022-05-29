import Image from 'next/image';
import React from 'react';

const portfolioIconsData = ["facebook", "twitter", "instagram", "linkedin"]
function Portfolio() {
  return (
    <div className='s-padding site-portfolio'>
      <div className='container'> 
        <div className='portfolio'>
          <h6>What we created</h6>
          <h2>Our Work Portfolio</h2>
          <p>We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.</p>
          <div className='portfolio__icons'>
            {portfolioIconsData.map((item, id) => (
              <a key={id} href={`https://www.${item}.com`}>
                <Image width={16} height={16} src={`/images/Work/portfolio__icon--${item}.svg`} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
