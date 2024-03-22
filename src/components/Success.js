import React, { useEffect } from "react";

export default function Success() {

  const checkoutSuccesful = async() => {
    if(localStorage.getItem("custmr_session_id")){

      const response2 = await fetch(`${process.env.REACT_APP_MY_IP}/payment/updatePayment`,{
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({session_id: localStorage.getItem('custmr_session_id'), custmrtoken: localStorage.getItem('custmrtoken')})
      });
      const data = await response2.json();
      
      if(data.signal === "green") localStorage.removeItem("custmr_session_id");
    }
  }
  useEffect( () => {
    checkoutSuccesful();
  });
  return (
  <>
  <div>Successful</div>
  </>
  );
}
