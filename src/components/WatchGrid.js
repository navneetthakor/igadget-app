import React from 'react'
import BottomGrid from './BottomGrid'
import maleWatch from '../photos/maleWatch.png';
import femaleWatch from '../photos/femaleWatch.png';

export default function WatchGrid() {
  return (
    <>
      <div className='container'>
        {/* upper 2 images */}
        <div id='WGUpperImg'>
            <img src={maleWatch}  className='link' alt=''/>
            <img src={femaleWatch} className='link' id='femaleWatch' alt=''/>
        </div>
        <BottomGrid/>
     </div>
    </>
  )
}
