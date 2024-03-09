import React, { useContext, useState } from "react";
import heart from "../photos/heart.png";
import LoadIndicator from "./LoadIndicator";
import ProdPageContext from "../contexts/ProdPageContext";
import { add, remove } from "../store/CartSlice";
import { fadd, fremove } from "../store/FavoriteSlice";
import { useDispatch } from "react-redux";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function ProductPage() {
  const { prodp, load } = useContext(ProdPageContext);
  const [mainimg, setMainimg] = useState(prodp.images[0]);
  let dummyimg;
  let url = process.env.REACT_APP_MY_IP;

  // for navigation 
  const navigate = useNavigate();

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
  const handleAddToCart = async () => {
    if(!localStorage.getItem("custmrtoken")) {
      alert("please login first");
      navigate('/custmrlogin')
      return;
    }
    const updatedProd = { ...prodp, ct: ct };
    dispatch(add(updatedProd));

    url += "/cart/addToCart";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "custmrtoken": localStorage.getItem("custmrtoken")
      },
      body: JSON.stringify({ product_id: prodp._id, quantity: ct }),
    });
    const res = await response.json();

    if (res.signal === "red") {
      alert(res);
      dispatch(remove(prodp._id));
    }
  };

  // --------------------------add to fav--------------------------
  const handleAddToFav =  async () => {
    if(!localStorage.getItem("custmrtoken")) {
      alert("please login first");
      navigate('/custmrlogin')
      return;
    }

    const updatedProd = { ...prodp, ct: ct };
    dispatch(fadd(updatedProd));

    url += "/cart/addToFav";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "custmrtoken": localStorage.getItem("custmrtoken")
      },
      body: JSON.stringify({ product_id: prodp._id, quantity: ct }),
    });
    console.log(response);
    const res = await response.json();

    if (res.signal === "red") {
      alert(res);
      dispatch(fremove(prodp._id));
    }
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
                typical price : <h3 className="dummyPrice">{prodp.mrp}/-</h3>
              </div>
              <div className="flexRow">
                Our price : <h3 className="price">{prodp.sellprice}/-</h3>
              </div>

              <div id="overview" className=" flexCol">
                <span>company : {prodp.company} </span>
                <span>category : {prodp.category} </span>
                <span>dimension : {prodp.dimension} </span>
                <span>weight : {prodp.weight} </span>
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
                <button
                  style={{ width: "40vw" }}
                  className="disableCss DisBlockCss primButton"
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </button>
                <div
                  id="addToCart"
                  className="DisableCss"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </div>
              </div>
            </div>
          </div>

          {/* descrioption division  */}
          <div id="pDesc" className="container flexCol">
            <h2>Description :-</h2>
            <h3>{prodp.desc}</h3>
          </div>
        </>
      )}
    </>
  );
}
