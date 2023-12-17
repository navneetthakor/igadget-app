import React from 'react'

// importing photo (this is just for sample)
import myprofile from '../photos/myprofile.jpg';
import Navbar from './Navbar';

export default function UserAcount() {
  return (
    <>
    <Navbar/>
    <div id='user2OuterCont' className='flexCenter'>
        <div id='user2Container' className='flexCol'>
            <div id='user2ImgCont' className=' flexCenter'>
                <div className='flexCenter'>
                    <img src={myprofile} alt=''/>
                </div>
            </div>

            <h2 className='checkoutHeading' style={{marginInline: "auto"}}>Navneet Kumar</h2>

            <div className='user2Btn checkout2in1'>
                <button className='PrimButton'>Purchases</button>
                <button className='PrimButton'>Orders</button>
            </div>
            <div className='user2Btn checkout2in1'>
                <button className='PrimButton'>Edit</button>
                <button className='PrimButton'>Logout</button>
            </div>
        </div>
    </div>
      
    </>
  )
}
