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
                <button className='primButton'>Purchases</button>
                <button className='primButton'>Orders</button>
            </div>
            <div className='user2Btn checkout2in1'>
                <button className='primButton'>Edit</button>
                <button className='primButton'>Logout</button>
            </div>
        </div>
    </div>
      
    </>
  )
}
