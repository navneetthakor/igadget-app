import React from 'react';
import HomeBanner from './HomeBanner';
import WatchGrid from './WatchGrid';
import MobileGrid from './MobileGrid';
import HeadPhoneGrid from './HeadPhoneGrid';

export default function Home() {
  
  return (
    <div>
      <HomeBanner/>
      <WatchGrid/>
      <MobileGrid/>
      <HeadPhoneGrid/>
      <HomeBanner/>
    </div>
  )
}
