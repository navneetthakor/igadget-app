import React from 'react';
// css file styling defined 
import '../css/desktop.css';

// logo importing 
import logo from '../photos/igadgetnobg.png';


export default function Navbar() {
  return (
    <>
    {/* this is navbar which always remian present on all the pages  */}
      <header>
        {/* logo division */}
        <div id="logodiv">
          <img src={logo} alt=""/>
        </div>
        {/* search-bar division  */}

        {/* icon devision  */}

      </header>
    </>
  )
}
