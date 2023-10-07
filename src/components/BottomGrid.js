import React from 'react'
import Iteam from './Iteam';

export default function BottomGrid(props) {
    const {iteam} = props;
  return (
    <>
    <div id='bottomGrid'>
        {
            iteam.map((a)=>{
                return <Iteam iteam={a}/>
            })
        }
      
    </div>
    </>
  )
}
