import React from "react";
import img1 from "../photos/igadget.png";
import img2 from "../photos/laptop.png";
import img3 from "../photos/headPhone.png";
import Home from "./Home";

export default function ProductPage() {
  const iteam = {
    title:
      "Vivo Y21s is the future of mobile phones so don't forgot to buy it!!!",
    price: 14500,
    dummyPrice: 18000,
    totrating: 4.5,
    description: {
      overview: {
        company: " Vivo Phones",
        modal: " Y21s ",
        height: " 7 Inches",
        width: " 4 Inches",
      },
      breif:
        "babel-preset-react-app is part of the create-react-app project, which is not maintianed anymore. It is thus unlikely that this bug will ever be fixed. Add @babel/plugin-proposal-private-property-in-object to your devDependencies to work around this error. This will make this message go away.",
    },
  };
  return (
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
            <img src={img1} alt="" />
          </div>
        </div>

        {/* main details devision  */}
        <div id="pdetails" className="flexCol">
          <h1 style={{ marginBottom: "3%" }}>{iteam.title}</h1>
          {/* rating division  */}
          <div id="totratings"></div>

          {/* overview division */}
          <h4 className="flexRow">
            typical price : <h3 className="dummyPrice">{iteam.dummyPrice}/-</h3>
          </h4>
          <h4 className="flexRow">
            Our price : <h3 className="price">{iteam.price}/-</h3>
          </h4>

          <div id="overview" className=" flexCol">
            <span>company : {iteam.description.overview.company} </span>
            <span>Modal : {iteam.description.overview.modal} </span>
            <span>Height : {iteam.description.overview.height} </span>
            <span>width : {iteam.description.overview.width} </span>
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
        <h3>{iteam.description.breif}</h3>
      </div>
      <Home />
    </>
  );
}
