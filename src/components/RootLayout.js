import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/Store";
import WatchContext from "../contexts/WatchContext";
import HeadphContext from "../contexts/HeadphContext";
import LaptopContext from "../contexts/LaptopContext";
import MobileContext from "../contexts/MobileContext";
import LoadIndicator from "./LoadIndicator";
import ProdPageContext from "../contexts/ProdPageContext";

export default function RootLayout() {
  // ----------------------------------------------------------------------------------
  // ------------------------------CONTESXTS-------------------------------------------
  // ----------------------------------------------------------------------------------

  // ---------to indicate loading is done or not-----------
  const [load, setLoad] = useState(false);

  // -------WatchContext--------------
  const [watch, setWatch] = useState([]);

  // -------ProdPageContext--------------
  const [prodp, setProdp] = useState([]);

  const getWatch = async () => {
    // api call
    const url =
      "http://localhost:5000/storeproducts/fetchlimitprods?page=1&pageSize=6&prodname=watch";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjY0ZTA4MWQ5Yjk1OTk1YjgyZGI3ZTFkYSJ9LCJpYXQiOjE2OTQyNjA4OTZ9.GrZGoDU7ZeEdEhyYVYcIGOzRYpsOA0nxN1UKlpYZl2c",
        // "auth-token": localStorage.getItem('token')
      },
    });
    const data = await response.json();
    console.log(data);
    setWatch(data);
  };

  // -------MobileContext--------------
  const [mobile, setMobile] = useState([]);

  const getMobile = async () => {
    // api call
    const url =
      "http://localhost:5000/storeproducts/fetchlimitprods?page=1&pageSize=6&prodname=mobile";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjY0ZTA4MWQ5Yjk1OTk1YjgyZGI3ZTFkYSJ9LCJpYXQiOjE2OTQyNjA4OTZ9.GrZGoDU7ZeEdEhyYVYcIGOzRYpsOA0nxN1UKlpYZl2c",
      },
    });
    const data = await response.json();
    setMobile(data);
    console.log(data);
  };

  // -------LaptopContext--------------
  const [laptop, setLaptop] = useState([]);

  const getLaptop = async () => {
    // api call
    const url =
      "http://localhost:5000/storeproducts/fetchlimitprods?page=1&pageSize=6&prodname=laptop";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjY0ZTA4MWQ5Yjk1OTk1YjgyZGI3ZTFkYSJ9LCJpYXQiOjE2OTQyNjA4OTZ9.GrZGoDU7ZeEdEhyYVYcIGOzRYpsOA0nxN1UKlpYZl2c",
      },
    });
    const data = await response.json();
    setLaptop(data);
    console.log(data);
  };

  // -------HeadphContext--------------
  const [headph, setHeadph] = useState([]);

  const getHeadph = async () => {
    // api call
    const url =
      "http://localhost:5000/storeproducts/fetchlimitprods?page=1&pageSize=6&prodname=headph";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjY0ZTA4MWQ5Yjk1OTk1YjgyZGI3ZTFkYSJ9LCJpYXQiOjE2OTQyNjA4OTZ9.GrZGoDU7ZeEdEhyYVYcIGOzRYpsOA0nxN1UKlpYZl2c",
      },
    });
    const data = await response.json();
    setHeadph(data);
    console.log(data);
  };

  useEffect(() => {
    getWatch();
    getMobile();
    getHeadph();
    getLaptop();
    setLoad(true);
  }, []);

  return (
    <>
      {load ? (
        <Provider store={store}>
          <WatchContext.Provider value={{ watch, setWatch, load }}>
            <MobileContext.Provider value={{ mobile, setMobile, load }}>
              <HeadphContext.Provider value={{ headph, setHeadph, load }}>
                <LaptopContext.Provider value={{ laptop, setLaptop, load }}>
                  <ProdPageContext.Provider value={{ prodp, setProdp, load }}>
                    <main>
                      <Outlet />
                    </main>
                  </ProdPageContext.Provider>
                </LaptopContext.Provider>
              </HeadphContext.Provider>
            </MobileContext.Provider>
          </WatchContext.Provider>
        </Provider>
      ) : (
        <LoadIndicator />
      )}
    </>
  );
}
