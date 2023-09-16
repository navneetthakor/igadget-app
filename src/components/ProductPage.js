import React, { useEffect, useState } from "react";
import img1 from "../photos/igadget.png";
import img2 from "../photos/laptop.png";
import img3 from "../photos/headPhone.png";
import Home from "./Home";
import LoadIndicator from "./LoadIndicator";

export default function ProductPage() {
  // const iteam = {
  //   title:
  //     "Vivo Y21s is the future of mobile phones so don't forgot to buy it!!!",
  //   price: 14500,
  //   dummyPrice: 18000,
  //   totrating: 4.5,
  //   description: {
  //     overview: {
  //       company: " Vivo Phones",
  //       modal: " Y21s ",
  //       height: " 7 Inches",
  //       width: " 4 Inches",
  //     },
  //     breif:
  //       "babel-preset-react-app is part of the create-react-app project, which is not maintianed anymore. It is thus unlikely that this bug will ever be fixed. Add @babel/plugin-proposal-private-property-in-object to your devDependencies to work around this error. This will make this message go away.",
  //   },
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
    // console.log(iteam[0].images[0])
    setTimeout(() => {
      setLoad(true)
      
    }, 5000);
  }

  useEffect(() => {
    getIteams();
  }, []);

  return (
    <>
    {load === false ?(
    <LoadIndicator/>
    ) : (
      <>
      <div className="container flexRow topmargin" id="prodMainDetl">
        {/* images devision */}
        <div id="prodImag" className="flexRow">
          <div id="pImgContainer" className="flexCol">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
          <div id="pimgbig">
            {/* <img src={`http://localhost:5000/public/images_1694855536372-823517338.png`} alt="" /> */}
            <img src={`http://localhost:5000/${iteam[0].images[0]}`.replace(/\\/g, '/')} alt="" />
          </div>
        </div>

        {/* main details devision  */}
        <div id="pdetails" className="flexCol">
          <h1 style={{ marginBottom: "3%" }}>{iteam[0].title}</h1>
          {/* rating division  */}
          <div id="totratings"></div>

          {/* overview division */}
          <div className="flexRow">
            typical price : <h3 className="dummyPrice">{iteam[0].dummyPrice}/-</h3>
          </div>
          <div className="flexRow">
            Our price : <h3 className="price">{iteam[0].price}/-</h3>
          </div>

          <div id="overview" className=" flexCol">
            <span>company : {iteam[0].company} </span>
            <span>Modal : {iteam[0].modal} </span>
            <span>Height : {iteam[0].height} </span>
            <span>width : {iteam[0].width} </span>
          </div>

          <div id="pcounter"></div>
          <div id="cart" className="flexRow">
            <div id="addFavorite"></div>
            <div id="addToCart"></div>
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
