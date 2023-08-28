import React from 'react';
import HomeBanner from './HomeBanner';
import WatchGrid from './WatchGrid';
import MobileGrid from './MobileGrid';
import HeadPhoneGrid from './HeadPhoneGrid';
import HorizontalBanner from './HorizontalBanner';

// image to provide in horizontalbanner component 
import laptopBanner from '../photos/laptopBanner.png'
import LaptopGrid from './LaptopGrid';
export default function Home() {
  
  return (
    <div>
      <HomeBanner/>
      <WatchGrid/>
      <MobileGrid/>
      <HeadPhoneGrid/>
      <HorizontalBanner image={laptopBanner}/>
      <LaptopGrid/>
      <HomeBanner/>
    </div>
  )
}
