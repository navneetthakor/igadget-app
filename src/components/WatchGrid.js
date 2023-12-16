import React, {  useContext } from 'react'
import BottomGrid from './BottomGrid'
import maleWatch from '../photos/maleWatch.png';
import femaleWatch from '../photos/femaleWatch.png';
import LoadIndicator from './LoadIndicator';
import WatchContext from '../contexts/WatchContext';
import { useNavigate } from 'react-router-dom';
import CommonContext from '../contexts/CommonContext';

export default function WatchGrid() {

  let {watch, load} = useContext(WatchContext);
  watch = Array.from(watch);
  
    // to navigate "/prods" page
    const navigate = useNavigate();

    // extracting setCommon from CommonContext 
    let {setCommon} = useContext(CommonContext);
  
    const searchData = async()=>{
      // api call
      const url = `http://localhost:5000/storeproducts/fetchnamedprods?prodname=watch`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await response.json();
      setCommon(data);
      navigate('/prods');
    }

  while(watch === undefined)
    return (<><LoadIndicator/></>)

  return (
    <>
    {
      load ? (
      <div className='container'>
      {/* upper 2 images */}
      <div id='WGUpperImg' onClick={searchData}>
          <img src={maleWatch}  className='link' alt=''/>
          <img src={femaleWatch} className='link' id='femaleWatch' alt=''/>
      </div>
      <BottomGrid iteam={watch}/>
   </div>
   
   ):(<LoadIndicator/>)
    }
      
    </>
  )
}
