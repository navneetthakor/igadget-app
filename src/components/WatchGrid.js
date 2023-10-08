import React, {  useContext } from 'react'
import BottomGrid from './BottomGrid'
import maleWatch from '../photos/maleWatch.png';
import femaleWatch from '../photos/femaleWatch.png';
import LoadIndicator from './LoadIndicator';
import WatchContext from '../contexts/WatchContext';

export default function WatchGrid() {

  let {watch, load} = useContext(WatchContext);
  watch = Array.from(watch);
  
  // const [watch, setWatch] = useState([]);
  // const [load, setLoad] = useState(false);

  // const getData = async() =>{
  //   // api call 
  //   const url = 'http://localhost:5000/storeproducts/fetchallprods';
  //   const response = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjY0ZTA4MWQ5Yjk1OTk1YjgyZGI3ZTFkYSJ9LCJpYXQiOjE2OTQyNjA4OTZ9.GrZGoDU7ZeEdEhyYVYcIGOzRYpsOA0nxN1UKlpYZl2c"
  //       // "auth-token": localStorage.getItem('token')
  //     }
  //   });
  //   console.log("fetched")
  //   const data = await response.json();
  //   console.log(data)
  //   setWatch(data)
  //   setTimeout(() => {
  //     setLoad(true);
  //   }, 1000);
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  while(watch === undefined)
    return (<><LoadIndicator/></>)

  return (
    <>
    {
      load ? (
      <div className='container'>
      {/* upper 2 images */}
      <div id='WGUpperImg'>
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
