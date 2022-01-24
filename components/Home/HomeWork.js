import React from 'react';
import Link from 'next/link';
import { homeWorkData } from "../dummyData"

function HomeWork() {
  return (
    <div className='site-work'>
      <div className='container work'>
        <div className='work__heading'>
          <h2>How we work</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          <div className='work__heading--link'>
            <Link href="/contact">Get in touch with us</Link>
            <img src="/images/home/work__icon--arrow.svg" alt="" />
          </div>
        </div>
        <div className='work__info'>
          {homeWorkData.map((element) => (
            <div className='work__info--block' key={element.id}>
              <img src={`/images/Home/work__icon--${element.img}.svg`}/>
              <h3>{element.title}</h3>
              <p>{element.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeWork;
