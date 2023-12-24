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
      const url = `${process.env.REACT_APP_MY_IP}/storeproducts/fetchnamedprods?prodname=watch`;
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
      <div id='WGContainer' className='container'>
      {/* upper 2 images */}
      <div id='wGBanner' className='wGUpperImg DisableCss' onClick={searchData}>
          <img src={maleWatch}  className='link DisableCss' alt=''/>
          <img src={femaleWatch} className='link femaleWatch DisableCss' alt=''/>
      </div>

      {/* -------for mobile------------- */}
      <div id='WGBanner'  className='disableCss' onClick={searchData}>
        <div id='Wrapper' className='FlexRow'>
          <img src={maleWatch} id='Ban1'  className='disableCss' alt=''/>
          <img src={femaleWatch} id='Ban2' className='disableCss' alt=''/>
        </div>
      </div>
      <BottomGrid iteam={watch}/>
   </div>
   
   ):(<LoadIndicator/>)
    }
      
    </>
  )
}
