import React from 'react';
import { teamSocialIconsData, teamData } from '../dummyData';
import Image from 'next/image';

function Team() {
  return (
    <div className='site-team sl-padding'>
      <h2>Meet our team</h2>
      <div className='container team'>
        {teamData.map((item) => (
          <div className='team__block' key={item.id}>
            <div className='team__block--img'>
              <div className='team__block--img__main'>
                <Image width={168} height={168} src={`/images/About/team__${item.img}.svg`} alt=""/>
              </div>
              <div className='team__block--img__links'>
                {teamSocialIconsData.map((icon, index) => (
                <a key={index} href={`https://www.${icon}.com"`}>
                  <Image width={13} height={13} src={`/images/Home/footer__icon--${icon}.svg`} alt=""/>
                </a>
                ))}
              </div>
            </div>
            <h5>{item.name}</h5>
            <h6>{item.job}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
