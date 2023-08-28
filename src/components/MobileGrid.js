import React from 'react'
import SideGrid from './SideGrid'
import mobilePhone from '../photos/mobilePhone.jpg'
export default function MobileGrid() {

  return (
    <>
    <div className='container topmargin flexRow'>
        {/* banner division  */}
        <div className='G1Image marginRight'>
            <img src={mobilePhone} alt='' />
        </div>

        {/* iteam division */}
        <SideGrid/>
    </div>
      
    </>
  )
}
