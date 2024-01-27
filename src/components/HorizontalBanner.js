import React from 'react'

export default function HorizontalBanner(props) {
    const {image} = props;
  return (
    <>
    <div className='bg1 DisableCss'>
        <div className='hbanner topmargin'>
            <img src={image} alt='' />
        </div>
    </div>
      
    </>
  )
}
