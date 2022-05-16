import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Article() {
  return (
    <div className='container'>
      <div className='article s-padding'>
        <h2>A UX Case Study on Creating a Studious Environment for Students</h2>
        <span>Andrew Jonson Posted on 27th January 2021</span>
        <Image width={1280} height={477} src="/images/blog/article__img.png" alt=""/>
        <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
        <Link href="/blog/case">Read more</Link>
      </div>
    </div>
  );
}

export default Article;
