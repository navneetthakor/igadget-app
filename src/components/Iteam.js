import React from 'react'
import logo from '../photos/igadget.png'
import {useNavigate} from 'react-router-dom'

export default function Iteam(props) {
  const {iteam} = props;

  //to use nevigation facilities
  const navigate = useNavigate();
  const handleClic = () =>{
    navigate('/prodpage');
  }
  return (
    <>
    <div id='IteamCard' className='link' onClick={handleClic}>
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
