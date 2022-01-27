import React from 'react';
import { teamSocialIconsData, teamData } from '../dummyData';

function Team() {
  return (
    <div className='site-team sl-padding'>
      <h2>Meet our team</h2>
      <div className='container team'>
        {teamData.map((item) => (
          <div className='team__block' key={item.id}>
            <div className='team__block--img'>
              <img className='team__block--img__main' src={`/images/about/team__${item.img}.svg`}/>
              <div className='team__block--img__links'>
                {teamSocialIconsData.map((icon, index) => (
                <a key={index} href={`https://www.${icon}.com"`} target="_blank">
                  <img src={`/images/home/footer__icon--${icon}.svg`} alt=""/>
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
