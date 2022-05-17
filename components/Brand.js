import Image from 'next/image';
import React from 'react';
import { brandData } from './dummyData';

function Brand() {
  return (
    <div className='container'>
      <div className='brand'>
        {brandData.map((item, index) => (
          <Image key={index} width={120} height={60} src={`/images/about/brand__${item}.svg`} alt=""/>
        ))}
      </div>
    </div>
  );
}

export default Brand;
