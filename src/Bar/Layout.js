import React from 'react';
import "./Layout.css";
import {Outlet ,Link } from "react-router-dom";
export default function Layout() {
  return (
    
    <div>
      <h3 className='tx'>KEC</h3>
        <nav>
            <ul className='navbar'>
              
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
               
               
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}
