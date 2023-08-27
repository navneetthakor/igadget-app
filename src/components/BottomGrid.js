import React from 'react'
import Iteam from './Iteam';

export default function BottomGrid() {
    let arr = [1,2,3,4,5,6];
    const iteam = {
        title: "Vivo Y21s",
        price: 14500,
        dummyPrice: 18000
      }
  return (
    <div id='bottomGrid'>
        {
            arr.map((a)=>{
                return <Iteam iteam={iteam}/>
            })
        }
      
    </div>
  )
}
