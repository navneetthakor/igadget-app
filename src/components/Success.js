import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  // for navigation 
  const navigate = useNavigate();

  const checkoutSuccesful = async() => {
    if(localStorage.getItem("custmr_session_id")){

      const response2 = await fetch(`${process.env.REACT_APP_MY_IP}/payment/updatePayment`,{
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({session_id: localStorage.getItem('custmr_session_id'), status: 'Completed'})
      });
      const data = await response2.json();
      
      if(data.signal === "green") localStorage.removeItem("custmr_session_id");
    }
  }
  useEffect( () => {
    checkoutSuccesful();
    setTimeout(() => {
      navigate('/');
    }, 3000);
  });
  return (
  <>
  <div>Successful</div>
  </>
  );
}
