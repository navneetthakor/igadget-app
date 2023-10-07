import React, { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import WatchContext from "../contexts/WatchContext";

export default function RootLayout() {
  // ----------------------------------------------------------------------------------
  // ------------------------------CONTESXTS-------------------------------------------
  // ----------------------------------------------------------------------------------

  // -------watchContext--------------
  const [watch, setWatch] = useState("Navneetkumar");

  // -------MobileContext--------------
  const [mobile, setMobile] = useState("Navneetkumar");

  // -------LaptopContext--------------
  const [laptop, setLaptop] = useState("Navneetkumar");

  // -------HeadphContext--------------
  const [headph, setHeadph] = useState("Navneetkumar");

  return (
    <>
      <WatchContext.Provider value={{ watch, setWatch }}>
        <MobileContext.Provider value={{ mobile, setMobile }}>
          <HeadphContext.Provider value={{ headph, setHeadph }}>
            <LaptopContext.Provider value={{ laptop, setLaptop }}>
              <Navbar />
              <main>
                <Outlet />
              </main>
            </LaptopContext.Provider>
          </HeadphContext.Provider>
        </MobileContext.Provider>
      </WatchContext.Provider>
    </>
  );
}
