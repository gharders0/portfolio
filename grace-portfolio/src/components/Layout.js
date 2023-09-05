import * as React from 'react';
import Navbar from './Navbar';
import '../styles/global.css';

export default function Layout({ children }) {
  return (
    <div className='layout'>
      <Navbar />
      <div className='content'>{children}</div>
      <footer>
        <p>Here is a footer</p>
      </footer>
    </div>
  );
}
