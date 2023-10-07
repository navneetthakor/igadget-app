import React, { useContext } from 'react'
import laptopBanner from '../photos/laptopGridBan.png';
import BottomGrid from './BottomGrid';
import LaptopContext from '../contexts/LaptopContext.js';

export default function LaptopGrid() {
  const {laptop} = useContext(LaptopContext);
  return (
    <>
        <div className='container topmargin flexCol'>
            <div className='GH1Image'>
                <img src={laptopBanner} alt='' />
            </div>

            {/* gottom grid  */}
            <BottomGrid iteam={laptop}/>
        </div>
      
    </>
  )
}
