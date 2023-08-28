import React from 'react';
import HomeBanner from './HomeBanner';
import WatchGrid from './WatchGrid';
import MobileGrid from './MobileGrid';

export default function Home() {
  
  return (
    <div>
      <HomeBanner/>
      <WatchGrid/>
      <MobileGrid/>
      <HomeBanner/>
    </div>
  )
}
