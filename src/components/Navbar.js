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
import { Link } from 'react-router-dom';

// import { Link } from 'react-router-dom';


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
          <Link to="/fav" as={Link} className='headbtn' id='fvrtIcon'><img src={favorite} alt=""/></Link>
          <Link to="/cart" as={Link} className='headbtn' id='shpIcon'><img src={shoppingcart} alt=""/></Link>
          <Link  className='headbtn' id='acntIcon'><img src={acountIcon} alt="" /></Link>
        </div>
      </header>
      
      <subheader>
        <Link ot="/" as={Link}>Home</Link>
        <Link to="/fav" as={Link}>today's deal</Link>
        <Link to="/cart"  as={Link} >sell</Link>
        <Link >customer support</Link>
      </subheader>
      {/* </nav> */}
    </>
  )
}
