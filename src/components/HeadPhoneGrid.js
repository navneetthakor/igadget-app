import React, { useContext } from "react";
import SideGrid from "./SideGrid";
import headPhone from "../photos/headPhone.png";
import HeadphContext from "../contexts/HeadphContext.js"
import LoadIndicator from "./LoadIndicator";
import { useNavigate } from "react-router-dom";
import CommonContext from "../contexts/CommonContext.js";

export default function HeadPhoneGrid() {
  // taking data from context 
  let {headph, load} = useContext(HeadphContext);
  headph = Array.from(headph);

  // to navigate "/prods" page
  const navigate = useNavigate();

  // extracting setCommon from CommonContext 
  let {setCommon} = useContext(CommonContext);

  const searchData = async()=>{
    // api call
    const url = `http://localhost:5000/storeproducts/fetchnamedprods?prodname=headph`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    });
    const data = await response.json();
    setCommon(data);
    navigate('/prods');
  }

  while(headph === undefined)
    return (<><LoadIndicator/></>)

  return (
    <>
    {load ? (<div className="container flexRow topmargin">
        {/* grid area for iteams */}
        <SideGrid iteam={headph} />

        {/* image division  */}
        <div className="GV1Image marginLeft" onClick={searchData}>
          <img src={headPhone} alt="" />
        </div>
      </div>):(
        <LoadIndicator/>
      )}
      
    </>
  );
}
