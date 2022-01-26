import React from 'react';
import { brandData } from './dummyData';

function Brand() {
  return (
    <div className='container'>
      <div className='brand'>
        {brandData.map((item, index) => (
          <img src={`/images/about/brand__${item}.svg`}/>
        ))}
      </div>
    </div>
  );
}

export default Brand;
