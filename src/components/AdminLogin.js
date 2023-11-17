import React, { useState } from 'react'
import { Form } from 'react-router-dom'

export default function AdminLogin(props) {
    const {setNext} = props;
    const [email,setEmail] = useState("");
    const [passwd, setPasswd] = useState("");

    const emailChange = (event) =>{
        setEmail(event.target.value);
    }

    const passwdChange = (event) => {
        setPasswd(event.target.value);
    }


    const findAdmin = (formData) => {
        

    }
  return (
    <div>
        <form onSubmit={findAdmin}>
            <input type='txt' name='email' onChange={emailChange} placeholder='email'/>
            <input type='password' name='password' onChange={passwdChange} placeholder='password'/>
            <button type='submit'> Search </button>
        </form>
      
    </div>
  )
}
