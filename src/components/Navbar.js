import React, { useContext, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';

// css file styling defined 
import '../css/desktop.css';

// photos importing 
import logo from '../photos/igadgetnobg.png';
import searchicon from '../photos/searchIcon.svg';
import favorite from '../photos/favorite.png';
import shoppingcart from '../photos/shoppingcart.png';
import acountIcon from '../photos/acountIcon.png';

// context import to use for search 
import CommonContext from '../contexts/CommonContext';

export default function Navbar() {

  // to navigate "/prods" page
  const navigate = useNavigate();

  // extracting setCommon from CommonContext 
  let {setCommon} = useContext(CommonContext);

  // for searching 
  const [search, setSearch] = useState("");

  const updateSearch = (event) => {
    setSearch(event.target.value);
  }
  const searchData = async()=>{
    // api call
    const url = `http://localhost:5000/storeproducts/fetchnamedprods?prodname=${search}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    });
    const data = await response.json();
    setCommon(data);
    navigate('/prods');
  }

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
          <input type='text' id='searchbar' name='searchbar' placeholder='search gadgets' onChange={updateSearch} />
          <button type='btn' onClick={searchData}><img src={searchicon} alt=''/></button>
        </div>


        {/* icon devision  */}
        <div id='headicon'>
          <Link to="/fav" as={Link} className='headbtn' id='fvrtIcon'><img src={favorite} alt=""/></Link>
          <Link to="/cart" as={Link} className='headbtn' id='shpIcon'><img src={shoppingcart} alt=""/></Link>
          <Link to="/useracnt" as={Link} className='headbtn' id='acntIcon'><img src={acountIcon} alt="" /></Link>
        </div>
      </header>
      
      <subheader>
        <Link to="/" as={Link}>Home</Link>
        <Link to="/fav" as={Link}>today's deal</Link>
        <Link to="/cart"  as={Link} >sell</Link>
        <Link to="/useracnt" as={Link}>customer support</Link>
      </subheader>
      {/* </nav> */}
    </>
  )
}
