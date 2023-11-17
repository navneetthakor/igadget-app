import React, {useState } from 'react'
import AdminLogin from './AdminLogin'

export default function AdminDash() {
    const [next, setNext] = useState(false);
    
    const handleLogout = () =>{
        localStorage.removeItem('admin');
        setNext(false)
    }

  return (
    <>

 
    {next ? 
    <h1>Welcome to dashboard</h1>: <AdminLogin iteam={{next,setNext}}/>
    }

    <button className='PrimButton' onClick={handleLogout}>logout</button>
      
    </>
  )
}
