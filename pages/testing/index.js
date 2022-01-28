import Link from 'next/link';
import React from 'react';
import { templateData } from '../../components/dummyData';


function index() {
  return (
    <div>
      {templateData.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <Link href={`/testing/${item.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}

export default index;
