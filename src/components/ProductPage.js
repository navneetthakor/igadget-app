import React, { useContext, useState } from "react";
import heart from "../photos/heart.png";
import LoadIndicator from "./LoadIndicator";
import ProdPageContext from "../contexts/ProdPageContext";
import { add } from "../store/CartSlice";
import { fadd } from "../store/FavoriteSlice";
import { useDispatch } from "react-redux";
import Navbar from "./Navbar";

export default function ProductPage() {
  const { prodp, load } = useContext(ProdPageContext);
  const [mainimg, setMainimg] = useState(prodp.images[0]);
  let dummyimg;

  // ----------to change main image--------------
  const setImg = () => {
    setMainimg(dummyimg);
  };

  // -------------quantity count------------------
  const [ct, setct] = useState(1);
  const handleMax = () => {
    let temp = ct + 1;
    setct(temp);
  };

  const handleMin = () => {
    if (ct === 1) return;
    let temp = ct - 1;
    setct(temp);
  };

  // ---------------------------add to cart--------------------------
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const updatedProd = { ...prodp, ct: ct };
    dispatch(add(updatedProd));
  };

  // --------------------------add to fav--------------------------
  const handleAddToFav = () => {
    const updatedProd = { ...prodp, ct: ct };
    dispatch(fadd(updatedProd));
  };

  // -------------actual component to be returned---------------------
  return (
    <>
      <Navbar />
      {load === false ? (
        <LoadIndicator />
      ) : (
        <>
          <div className="container flexRow FlexCol" id="prodMainDetl">
            {/* images devision */}
            <div id="prodImag" className="pmd1 flexCol">
              <div id="pimgbig">
                <img
                  src={`${process.env.REACT_APP_MY_IP}/${mainimg}`.replace(
                    /\\/g,
                    "/"
                  )}
                  alt=""
                />
              </div>
              <div id="pImgContainer" className="pmd1 flexRow">
                {prodp.images.map((image) => {
                  return (
                    <img
                      src={`${process.env.REACT_APP_MY_IP}/${image}`.replace(
                        /\\/g,
                        "/"
                      )}
                      alt=""
                      onClick={() => {
                        dummyimg = image;
                        setImg();
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* main details devision  */}
            <div id="pdetails" className="flexCol">
              <h1>{prodp.title} - leatest phone in the market</h1>

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
                typical price :{" "}
                <h3 className="dummyPrice">{prodp.dummyPrice}/-</h3>
              </div>
              <div className="flexRow">
                Our price : <h3 className="price">{prodp.price}/-</h3>
              </div>

              <div id="overview" className=" flexCol">
                <span>company : {prodp.company} </span>
                <span>Modal : {prodp.model} </span>
                <span>Height : {prodp.height} </span>
                <span>width : {prodp.width} </span>
              </div>

              <div id="pcounter" className="flexRow">
                <div id="min" onClick={handleMin}>
                  {" "}
                  -{" "}
                </div>
                <div id="pc"> {ct} </div>
                <div id="max" onClick={handleMax}>
                  +
                </div>
              </div>
              <div id="cart" className="flexRow">
                <div id="addFavorite" onClick={handleAddToFav}>
                  <img src={heart} alt="" />
                </div>
                <button style={{width: "40vw"}} className="disableCss DisBlockCss primButton" onClick={handleAddToCart}>Add To Cart</button>
                <div id="addToCart" className="DisableCss" onClick={handleAddToCart}>
                  Add to Cart
                </div>
              </div>
            </div>
          </div>

          {/* descrioption division  */}
          <div id="pDesc" className="container flexCol">
            <h2>Description :-</h2>
            <h3>{prodp.description}</h3>
          </div>
        </>
      )}
    </>
  );
}
