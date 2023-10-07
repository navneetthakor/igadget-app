import React, { useContext } from 'react'
import SideGrid from './SideGrid'
import mobilePhone from '../photos/mobilePhone.jpg'
import MobileContext from '../contexts/MobileContext.js';

export default function MobileGrid() {

  const {mobile} = useContext(MobileContext);

  return (
    <>
    <div className='container topmargin flexRow'>
        {/* banner division  */}
        <div className='GV1Image marginRight'>
            <img src={mobilePhone} alt='' />
        </div>

        {/* iteam division */}
        <SideGrid iteam={mobile} />
    </div>
      
    </>
  )
}
