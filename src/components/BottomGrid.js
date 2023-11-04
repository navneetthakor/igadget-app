import React from 'react'
import Iteam from './Iteam';

export default function BottomGrid(props) {
    let {iteam} = props;
    iteam = Array.from(iteam);
  return (
    <>
    <div id='bottomGrid'>
        {
            iteam.map((a)=>{
                return <Iteam key={a._id} iteam={a} />
            })
        }
      
    </div>
    </>
  )
}
