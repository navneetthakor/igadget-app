import React, { useContext } from 'react'
import laptopBanner from '../photos/laptopGridBan.png';
import BottomGrid from './BottomGrid';
import LaptopContext from '../contexts/LaptopContext.js';
import LoadIndicator from './LoadIndicator';

export default function LaptopGrid() {
  let {laptop, load} = useContext(LaptopContext);
  laptop = Array.from(laptop);

  while(laptop === undefined)
    return (<><LoadIndicator/></>)

  return (
    <>
    { load ? (<div className='container topmargin flexCol'>
            <div className='GH1Image'>
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
