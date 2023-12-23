import React, { useContext } from 'react'
import SideGrid from './SideGrid'
import mobilePhone from '../photos/mobilePhone.jpg'
import MobileContext from '../contexts/MobileContext.js';
import LoadIndicator from './LoadIndicator';
import { useNavigate } from 'react-router-dom';
import CommonContext from '../contexts/CommonContext.js';

export default function MobileGrid() {

  let {mobile, load} = useContext(MobileContext);
  mobile = Array.from(mobile);

  // to navigate "/prods" page
  const navigate = useNavigate();

  // extracting setCommon from CommonContext 
  let {setCommon} = useContext(CommonContext);

  const searchData = async()=>{
    // api call
    const url = `${process.env.MY_IP}/storeproducts/fetchnamedprods?prodname=mobile`;
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

  while(mobile === undefined)
    return (<><LoadIndicator/></>)
    
  return (
    <>
    {load ? (<div className='container topmargin flexRow'>
        {/* banner division  */}
        <div className='gV1Image marginRight' onClick={searchData}>
            <img src={mobilePhone} alt='' />
        </div>

        {/* iteam division */}
        <SideGrid iteam={mobile} />
    </div>):(
      <LoadIndicator/>
    )}
    
      
    </>
  )
}
