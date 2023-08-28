import React from 'react'
import laptopBanner from '../photos/laptopGridBan.png';
import BottomGrid from './BottomGrid';

export default function LaptopGrid() {
  return (
    <>
        <div className='container topmargin flexCol'>
            <div className='GH1Image'>
                <img src={laptopBanner} alt='' />
            </div>

            {/* gottom grid  */}
            <BottomGrid/>
        </div>
      
    </>
  )
}
