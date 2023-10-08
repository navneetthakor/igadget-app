import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Iteam(props) {
  const {title, dummyPrice, price, image} = props;

  //to use nevigation facilities
  const navigate = useNavigate();
  const handleClic = () =>{
    navigate('/prodpage');
  }
  return (
    <>
    <div id='IteamCard' className='link' onClick={handleClic}>
      <div id='iteamImage'>
        <img src={`http://localhost:5000/${image}`.replace(/\\/g, '/')} alt=''/>
      </div>
      <div id='iteamDetails'>
        <h3>{title}</h3>
        <h4> <span>&#8377;{dummyPrice}</span> &#8377;{price}</h4>
      </div>
      </div>
    </>
  )
}
