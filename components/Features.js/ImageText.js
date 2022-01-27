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
            <img src={`/images/features/${img}__img.png`}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageText;
