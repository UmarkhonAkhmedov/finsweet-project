import React from 'react';
import { templateData } from '../../components/dummyData';
import Image from 'next/image';

function ReadBlog() {

  return (
    <div className='container'>
      <h1>{templateData[1].title}</h1>
      <div className='readBlog s-padding'>
      <div className='article'>
        <h2>A UX Case Study on Creating a Studious Environment for Students</h2>
        <span>Andrew Jonson Posted on 27th January 2021</span>
        <Image width={1280} height={477} src="/images/blog/article__img.png" alt=''/>
      </div>
      <div className='readBlog__info'>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        <p className='readBlog__info--text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h3>Ut enim ad minim veniam, quis nostrud.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <ul>
          <li><Image width={5} height={5} src="/images/work/work__id--about__circle.svg" alt=""/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
          <li><Image width={5} height={5} src="/images/work/work__id--about__circle.svg" alt=""/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
          <li><Image width={5} height={5} src="/images/work/work__id--about__circle.svg" alt=""/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
        </ul>
        <p className='readBlog__info--text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Image width={841} height={311} className='readBlog__info--smImg' src="/images/blog/readBlog__img.png" alt="" />
        <h3>Ut enim ad minim veniam, quis nostrud.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      </div>
    </div>
  );
}

export default ReadBlog;
