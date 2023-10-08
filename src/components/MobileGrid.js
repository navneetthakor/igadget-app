import React, { useContext } from 'react'
import SideGrid from './SideGrid'
import mobilePhone from '../photos/mobilePhone.jpg'
import MobileContext from '../contexts/MobileContext.js';
import LoadIndicator from './LoadIndicator';

export default function MobileGrid() {

  let {mobile, load} = useContext(MobileContext);
  console.log(mobile[0] + " " + load)
  mobile = Array.from(mobile);

  while(mobile === undefined)
    return (<><LoadIndicator/></>)
    
  return (
    <>
    {load ? (<div className='container topmargin flexRow'>
        {/* banner division  */}
        <div className='GV1Image marginRight'>
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
