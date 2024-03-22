import React, { useEffect } from "react";

export default function Success() {

  const checkoutSuccesful = async() => {
    const response2 = await fetch(`${process.env.REACT_APP_MY_IP}/chekoutCompleted`,{
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({session_id: localStorage.getItem('custmr_session_id'), custmrtoken: localStorage.getItem('custmrtoken')})
    });
    const data = response2.json();
    console.log(data);
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
