import Image from 'next/image';
import React from 'react';
import { whoData } from '../dummyData';

function Who() {
  return (
    <div className='site-who sl-padding'>
      <div className='container who'>
        <div className='who__info'>
          <h5>Who we are</h5>
          <div className='who__info--text'>
            {whoData.map((element) => (
              <div key={element.id}>
                <h3>{element.title}</h3>
                <p>{element.text}</p>
              </div>
            ))}
          </div>
        </div>
        <Image width={1280} height={340} className='who__img' src="/images/about/who__img.png" alt="" />
      </div>
    </div>
  );
}

export default Who;
