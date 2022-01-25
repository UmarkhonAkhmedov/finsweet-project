import Link from 'next/link';
import React from 'react';

function Projects({title, }) {
  return (
    <div className='site-projects s-padding'>
      <div className='container projects'>
        <div className='projects__heading'>
          <h2>View our projects</h2>
          <span>
            <Link href="/work">View More</Link>
            <img src="/images/home/projects__icon-arrow.svg" alt=""/>
          </span>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default Projects;
