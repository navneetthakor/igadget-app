import React, { useEffect, useState } from 'react'
import { Form } from 'react-router-dom'

export default function AdminLogin(props) {
    const { setNext } = props.iteam;
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");

    const emailChange = (event) => {
        setEmail(event.target.value);
    }

    const passwdChange = (event) => {
        setPasswd(event.target.value);
    }


    const findAdmin = async (formData) => {
        // api call
        const url =
            "http://localhost:5000/storeadmin/login";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"email":email, "password":passwd})
        });
        const data = await response.json();

        localStorage.setItem('admin', data.authtoken);
        // console.log(data);

        if(data.signal === "green")
        setNext(true);
        else
        alert("Invalid Credentials");

    }


    const autoLogin = async () => {
        const url =
            "http://localhost:5000/storeadmin/getadmin";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authtoken": localStorage.getItem('admin')
            }
        });
        const data = await response.json();
        console.log(data)
        if(data.signal === "green")
        setNext(true);

    }

    useEffect(()=>{
        console.log("admin")
        if(localStorage.getItem('admin')) autoLogin();
    })


    return (
        <div className='flexCenter'>
            <div className='admlgnContainer flexCol'>
                <p className='PrimHead'>Welcome Admin</p>
                <input type='txt' name='email' onChange={emailChange} placeholder='email' />
                <input type='password' name='password' onChange={passwdChange} placeholder='password' />
                <button type='submit' onClick={findAdmin} className='PrimButton'> Submit </button>
            </div>

        </div>
    )
}
