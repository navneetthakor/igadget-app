import React, { useContext } from "react";
import SideGrid from "./SideGrid";
import headPhone from "../photos/headPhone.png";
import HeadphContext from "../contexts/HeadphContext.js"
import LoadIndicator from "./LoadIndicator";

export default function HeadPhoneGrid() {
  // taking data from context 
  let {headph, load} = useContext(HeadphContext);
  headph = Array.from(headph);

  while(headph === undefined)
    return (<><LoadIndicator/></>)

  return (
    <>
    {load ? (<div className="container flexRow topmargin">
        {/* grid area for iteams */}
        <SideGrid iteam={headph} />

        {/* image division  */}
        <div className="GV1Image marginLeft">
          <img src={headPhone} alt="" />
        </div>
      </div>):(
        <LoadIndicator/>
      )}
      
    </>
  );
}
