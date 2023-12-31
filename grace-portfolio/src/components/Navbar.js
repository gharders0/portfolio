import { Link } from 'gatsby';
import * as React from 'react';

export default function Navbar() {
  return (
    <nav>
      <h1>Grace</h1>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
      </div>
    </nav>
  );
}
