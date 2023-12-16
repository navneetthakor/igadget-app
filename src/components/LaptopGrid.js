import React, { useContext } from 'react'
import laptopBanner from '../photos/laptopGridBan.png';
import BottomGrid from './BottomGrid';
import LaptopContext from '../contexts/LaptopContext.js';
import LoadIndicator from './LoadIndicator';
import { useNavigate } from 'react-router-dom';
import CommonContext from '../contexts/CommonContext.js';

export default function LaptopGrid() {
  let {laptop, load} = useContext(LaptopContext);
  laptop = Array.from(laptop);

  // to navigate "/prods" page
  const navigate = useNavigate();

  // extracting setCommon from CommonContext 
  let {setCommon} = useContext(CommonContext);

  const searchData = async()=>{
    // api call
    const url = `http://localhost:5000/storeproducts/fetchnamedprods?prodname=laptop`;
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

  while(laptop === undefined)
    return (<><LoadIndicator/></>)

  return (
    <>
    { load ? (<div className='container topmargin flexCol'>
            <div className='GH1Image' onClick={searchData}>
                <img src={laptopBanner} alt='' />
            </div>

            {/* gottom grid  */}
            <BottomGrid iteam={laptop}/>
        </div>):(
          <LoadIndicator/>
        )}
        
      
    </>
  )
}
