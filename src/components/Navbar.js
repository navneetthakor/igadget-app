import React from 'react';
// css file styling defined 
import '../css/desktop.css';

// logo importing 
import logo from '../photos/igadgetnobg.png';
import searchicon from '../photos/searchIcon.svg';
import favorite from '../photos/favorite.png';
import shoppingcart from '../photos/shoppingcart.png';


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
        <div id='searchdiv'>
          <input type='text' id='searchbar' name='searchbar' placeholder='search gadgets' />
          <button type='btn'><img src={searchicon} alt=''/></button>
        </div>


        {/* icon devision  */}
        <div id='headicon'>
          <button type='btn'><img src={favorite} alt=''/></button>
          <button type='btn'><img src={shoppingcart} alt=''/></button>
        </div>

      </header>
    </>
  )
}
