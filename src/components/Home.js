import React from 'react';
import HomeBanner from './HomeBanner';
import HomeBanGrid from './HomeBanGrid';
import Iteam from './Iteam';

export default function Home() {
  const iteam = {
    title: "Vivo Y21s",
    price: 14500,
    dummyPrice: 18000
  }
  return (
    <div>
      <HomeBanner/>
      <HomeBanGrid/>
      <Iteam iteam={iteam}/>
      <HomeBanGrid></HomeBanGrid>
    </div>
  )
}
