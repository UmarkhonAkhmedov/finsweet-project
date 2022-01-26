import React from 'react';

function InfoImg({subTitle, title, text, img}) {
  return (
    <div className='infoImg'>
      <div className='infoImg__info'>
        <h5>{subTitle}</h5>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className='infoImg__img'>
        <img src={img}/>
      </div>
    </div>
  );
}

export default InfoImg;
