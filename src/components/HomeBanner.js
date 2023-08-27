import React from 'react';
import homeBanner from '../photos/homeBanner.png';
import '../css/desktop.css'

export default function HomeBanner() {
  return (
    <>
    {/* <div className='container'> */}
      <div id='homeBanner'>
        <img src={homeBanner} alt=''/>
      </div>
    {/* </div> */}
    </>
  )
}
