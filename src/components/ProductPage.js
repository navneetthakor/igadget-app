import React, { useEffect, useState } from "react";
import heart from "../photos/heart.png";
import Home from "./Home";
import LoadIndicator from "./LoadIndicator";

export default function ProductPage() {

  const noteInitial = [];
  const [iteam, setIteam] = useState(noteInitial);
  const [load, setLoad] = useState(false);

  // get note {fetching is performed in Home.js}
  const getIteams = async() => {
    // api call 
    console.log("Started")
    const url = 'http://localhost:5000/storeproducts/fetchallprods';
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjY0ZTA4MWQ5Yjk1OTk1YjgyZGI3ZTFkYSJ9LCJpYXQiOjE2OTQyNjA4OTZ9.GrZGoDU7ZeEdEhyYVYcIGOzRYpsOA0nxN1UKlpYZl2c"
        // "auth-token": localStorage.getItem('token')
      }
    });
    console.log("fetched")
    const data = await response.json();
    console.log(data)
    setIteam(data)
    setTimeout(() => {
      setLoad(true);
    }, 1000);
  }

  useEffect(() => {
    getIteams();
  }, []);

  // -------------quantity count------------------ 
  const [ct, setct] = useState(1);
  const handleMax = () => {
    let temp = ct + 1;
    setct(temp);
  }

  const handleMin = () => {
    if(ct === 1)
      return;
    let temp = ct - 1;
    setct(temp)
  }

// -------------actual component to be returned---------------------
  return (
    <>
    {load === false ?(
    <LoadIndicator/>
    ) : (
      <>
      <div className="container flexRow" id="prodMainDetl">
        {/* images devision */}
        <div id="prodImag" className="flexCol">
        <div id="pimgbig">
            <img src={`http://localhost:5000/${iteam[0].images[0]}`.replace(/\\/g, '/')} alt="" />
          </div>
          <div id="pImgContainer"  className="flexRow">
            {iteam[0].images.map((image)=>{
              return <img src={`http://localhost:5000/${image}`.replace(/\\/g, '/')} alt=""/>
            })}
          </div>
          
        </div>

        {/* main details devision  */}
        <div id="pdetails" className="flexCol">
          <h1 >{iteam[0].title} - leatest phone in the market</h1>

          {/* rating division  */}
          <div id="totratings">
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
          </div>

          {/* overview division */}
          <div className="flexRow">
            typical price : <h3 className="dummyPrice">{iteam[0].dummyPrice}/-</h3>
          </div>
          <div className="flexRow">
            Our price : <h3 className="price">{iteam[0].price}/-</h3>
          </div>

          <div id="overview" className=" flexCol">
            <span>company : {iteam[0].company} </span>
            <span>Modal   : {iteam[0].model} </span>
            <span>Height  : {iteam[0].height} </span>
            <span>width   : {iteam[0].width} </span>
          </div>

          <div id="pcounter" className="flexRow">
            <div id="min" onClick={handleMin}> - </div>
            <div id="pc"> {ct} </div>
            <div id="max" onClick={handleMax}>+</div>
          </div>
          <div id="cart" className="flexRow">
            <div id="addFavorite">
              <img src={heart} alt="" />
            </div>
            <div id="addToCart">
              Add to Cart
            </div>
          </div>
        </div>
      </div>
        
      {/* descrioption division  */}
      <div id="pDesc" className="container flexCol">
        <h2>
            Description :-
        </h2>
        <h3>{iteam[0].description}</h3>
      </div>
      <Home />
      </>
    )}
    </>
  );
}
