import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { footerSocialIconsData } from './dummyData';

function Footer() {
  
  return (
    <div className='site-footer'>
      <div className='container footer'>
        <div className='footer__left'>
          <Link href="/" passHref>
            <Image width={156} height={38} src="/images/Home/footer__logo.svg" alt=""/>
          </Link>
          <p>We are always open to discuss your project and improve your online presence.</p>
          <div className='footer__left--contact'>
            <div className='footer__left--contact__email'>
              <h5>Email me at</h5>
              <h6>contact@website.com</h6>
            </div>
            <div className='footer__left--contact__call'>
              <h5>Call us</h5>
              <h6>0927 6277 28525</h6>
            </div>
          </div>
        </div>  
        <div className='footer__right'>
          <h2>Lets Talk</h2>
          <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
          <div className='footer__right--icons'>
            {footerSocialIconsData.map((icon, index) => (
              <a key={index} href={`https://www.${icon}.com"`}>
                <Image width={16} height={16} src={`/images/Home/footer__icon--${icon}.svg`} alt=""/>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
