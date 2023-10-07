import React from 'react';
import Iteam from './Iteam';

export default function SideGrid(props) {
  const {iteam} = props;
  return (
    <>
      <div id='sideGrid'>
            {
                iteam.map((it)=>{
                    return <Iteam iteam={it}/>
                })
            }
        </div>
    </>
  )
}
