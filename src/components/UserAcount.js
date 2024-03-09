import React, {  useState } from 'react'

// importing photo (this is just for sample)
import myprofile from '../photos/myprofile.jpg';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import CustomerLogin from './CustomerLogin';


export default function UserAcount() {
    // to store user data 
    const [user, setUser] = useState();

    const getUser = async() =>{
        const url = `${process.env.REACT_APP_MY_IP}/customer/getcustmr`;
        const response = await fetch(url, {
            method :"POST",
            headers: {
                "Content-Type": "application/json",
                "custmrtoken": localStorage.getItem('custmrtoken')
              },
        });
        const data = await response.json();
        setUser(data.custmr);
    }
    
    // for navigation 
    const navigate = useNavigate();
    const checkFirst = async() =>{
        alert("hello");
        if(!localStorage.getItem('custmrtoken')) {
            alert("please Login/signup first");
            navigate('/custmrlogin');
        }

        // if token is there then fetch user 
        await getUser();
    }


  return (
    <>
   {
    user?
   (<>
    <Navbar/>
    <div id='user2OuterCont' className='flexCenter'>
        <div id='user2Container' className='flexCol' onLoad={checkFirst}>
            <div id='user2ImgCont' className=' flexCenter'>
                <div className='flexCenter'>
                    {user.image !== null &&    <img  src={`${process.env.REACT_APP_MY_IP}/${user.image}`.replace(/\\/g,"/")} alt=''/>}
                    {user.image === null &&    <img  src={myprofile} alt=''/>}
                </div>
            </div>

            <h2 className='checkoutHeading' style={{marginInline: "auto"}}>{user.name}</h2>

            <div className='user2Btn checkout2in1'>
                <button className='primButton'>Purchases</button>
                <button className='primButton'>Orders</button>
            </div>
            <div className='user2Btn checkout2in1'>
                <button className='primButton'>Edit</button>
                <button className='primButton'>Logout</button>
            </div>
        </div>
    </div>
    </>):(<CustomerLogin setUser={setUser} />)}
      
    </>
  )
}
