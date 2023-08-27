import React from 'react';
// css file styling defined 
import '../css/desktop.css';
// import { Link } from 'react-router-dom'

// logo importing 
import logo from '../photos/igadgetnobg.png';
import searchicon from '../photos/searchIcon.svg';
import favorite from '../photos/favorite.png';
import shoppingcart from '../photos/shoppingcart.png';
import acountIcon from '../photos/acountIcon.png';


export default function Navbar() {
  return (
    <>
    {/* this is navbar which always remian present on all the pages  */}
    {/* <nav> */}
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
          <button type="btn" id='fvrtIcon'><img src={favorite} alt=""/></button>
          <button type="btn" id='shpIcon'><img src={shoppingcart} alt=""/></button>
          <button type="btn" id='acntIcon'><img src={acountIcon} alt="" /></button>
        </div>
      </header>
      
      <subheader>
        <a href="/home" >Home</a>
        <a href="/toddeal" >today's deal</a>
        <a href="/sell" >sell</a>
        <a href="/custsuport" >customer support</a>
      </subheader>
      {/* </nav> */}
    </>
  )
}
