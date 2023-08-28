import React from "react";
import SideGrid from "./SideGrid";
import headPhone from "../photos/headPhone.png";

export default function HeadPhoneGrid() {
  return (
    <>
      <div className="container flexRow topmargin">
        {/* grid area for iteams */}
        <SideGrid />

        {/* image division  */}
        <div className="G1Image marginLeft">
          <img src={headPhone} alt="" />
        </div>
      </div>
    </>
  );
}
