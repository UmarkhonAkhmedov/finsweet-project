import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Projects({title, }) {
  return (
    <div className='site-projects s-padding'>
      <div className='container projects'>
        <div className='projects__heading'>
          <h2>View our projects</h2>
          <span>
            <Link href="/work" passHref>View More</Link>
            <Image width={24} height={15} src="/images/home/projects__icon-arrow.svg" alt=""/>
          </span>
        </div>
        <div className='projects__main'>
          <div className='projects__main--left'>
            <Image width={843} height={600} src="/images/home/project__main--large.png" alt=""/>
            <div>
              <h4>Workhub office Webflow Webflow Design</h4>
              <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
              <span>
                <Link href="/work" passHref>View project</Link>
                <Image width={24} height={15} src="/images/home/projects__icon-arrow__yellow.svg" alt=""/>
              </span>
            </div>
          </div>
          <div className='projects__main--right'>
            <div className='projects__main--right__top'>
              <Image width={405} height={284} src="/images/home/project__main--top.png" alt="" />
              <div>
                <h4>Unisaas Website Design</h4>
                <span>
                  <Link href="/work" passHref>View portfolio</Link>
                  <Image width={24} height={15} src="/images/home/projects__icon-arrow__yellow.svg" alt=""/>
                </span>
              </div>
            </div>
            <div className='projects__main--right__bottom'>
            <Image width={405} height={284} src="/images/home/project__main--top.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
