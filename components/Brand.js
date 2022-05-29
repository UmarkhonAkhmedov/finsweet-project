import Image from 'next/image';
import React from 'react';
import { brandData } from './dummyData';

function Brand() {
  return (
    <div className='container'>
      <div className='brand'>
        {brandData.map((item, index) => (
          <div>
            <Image key={index} width={130} height={60} src={`/images/About/brand__${item}.svg`} alt=""/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brand;
