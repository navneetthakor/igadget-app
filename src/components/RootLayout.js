import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
    </>
  )
}
