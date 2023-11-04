import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import ProdPageContext from '../contexts/ProdPageContext';

export default function Iteam(props) {
  const {iteam} = props;
  console.log(iteam);
  //to use nevigation facilities
  const navigate = useNavigate();
  const {setProdp} = useContext(ProdPageContext);

  const handleClic = () =>{
    setProdp(iteam);
    navigate('/prodpage');
  }
  return (
    <>
    <div id='IteamCard' className='link' onClick={handleClic}>
      <div id='iteamImage'>
        <img src={`http://localhost:5000/${iteam.images[0]}`.replace(/\\/g, '/')} alt=''/>
      </div>
      <div id='iteamDetails'>
        <h3>{iteam.title}</h3>
        <h4> <span>&#8377;{iteam.dummyPrice}</span> &#8377;{iteam.price}</h4>
      </div>
      </div>
    </>
  )
}
