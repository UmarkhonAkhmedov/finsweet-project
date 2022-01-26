import Link from 'next/link';
import React from 'react';
import { navbarItems } from "./Navbar"

function Copyright() {
  return (
    <div className='container'>
      <div className='copyright'>
        <div className='copyright__heading'>
          <p>Copyright 2022, Umarkhon</p>
        </div>
        <ul className="copyright__list">
          <li>
            <Link className="nav__main--list__link" href="/">Home</Link>
          </li>
          {navbarItems.map((item, id) => (
            <li key={id}>
              <Link className="nav__main--list__link" href={`/${item}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Copyright;
