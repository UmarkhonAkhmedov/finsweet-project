import Image from 'next/image';
import React from 'react';

function ImageText({subtitle, title, text, color, img}) {
  return (
    <div className='site-imageText' style={{backgroundColor: `${color}`}}>
      <div className="container">
        <div className='imageText'>
          <div className='imageText__info'>
            <h5>{subtitle}</h5>
            <h2 className="h2-heading">{title}</h2>
            <p>{text}</p>
          </div>
          <div className='imageText__img'>
            <Image width={639} height={409} src={`/images/Features/${img}__img.png`} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageText;
