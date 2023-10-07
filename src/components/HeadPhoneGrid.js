import React, { useContext } from "react";
import SideGrid from "./SideGrid";
import headPhone from "../photos/headPhone.png";
import HeadphContext from "../contexts/HeadphContext.js"

export default function HeadPhoneGrid() {
  // taking data from context 
  const {headph} = useContext(HeadphContext);
  return (
    <>
      <div className="container flexRow topmargin">
        {/* grid area for iteams */}
        <SideGrid iteam={headph} />

        {/* image division  */}
        <div className="GV1Image marginLeft">
          <img src={headPhone} alt="" />
        </div>
      </div>
    </>
  );
}
