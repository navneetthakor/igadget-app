import React from 'react';
import Iteam from './Iteam';

export default function SideGrid(props) {
  let {iteam} = props;
  iteam = Array.from(iteam);
  return (
    <>
      <div id='sideGrid'>
            {
                 iteam.map((a)=>{
                  return <Iteam key={a._id} title={a.title} dummyPrice={a.dummyPrice} price={a.price} image={a.images[0]} />
              })
            }
        </div>
    </>
  )
}
