import React from 'react'
import logo from '../photos/igadget.png'

export default function Iteam(props) {
  const {iteam} = props;
  return (
    <>
    <div id='BGIteamCard' className='link'>
      <div id='iteamImage'>
        <img src={logo} alt=''/>
      </div>
      <div id='iteamDetails'>
        <h3>{iteam.title}</h3>
        <h4> <span>&#8377;{iteam.dummyPrice}</span> &#8377;{iteam.price}</h4>
      </div>
      </div>
    </>
  )
}
