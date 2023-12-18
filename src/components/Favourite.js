import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fremove } from "../store/FavoriteSlice";
import { add } from "../store/CartSlice";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const product = useSelector((state) => state.fav);
  const dispatch = useDispatch();

  //function to remove iteam from card
  const removeToCart = (prod) => {
    dispatch(fremove(prod._id));
  };

  // for navigation 
  const navigate = useNavigate();

//------------------function add to cart-------------------
const handleAddToCart = () =>{
    for(let i=0; i<product.length; i++){
      dispatch(add(product[i]));
    }

    navigate('/cart')
} 

  // function to display all the iteams that are in the cart
  const favs = product?.map((prodp) => {
    return (
      <div className="fCart flexRow">
        <div className="cartIteamImg">
          <img
            src={`http://localhost:5000/${prodp.images[0]}`.replace(/\\/g, "/")}
            alt=""
          />
        </div>

        <div className="cartIteamContent flexRow">
          <div className="cartIteamTitle flexCol">
            <h2 className="checkoutSecHeading">{prodp.title}</h2>
            <div>height: {prodp.height}</div>
            <div>width: {prodp.width}</div>
          </div>

          <div className="cartIteamTitle flexCol">
            <h2 className="fCartExt checkoutSecHeading">Price: {prodp.price * prodp.ct}</h2>
            <div className="fCartExt">Qnt: {prodp.ct}</div>
          </div>

          <button className="secButton" onClick={() => removeToCart(prodp)}>
            Remove
          </button>
        </div>
      </div>
    );
  });
  return (
    <>
      <Navbar/>
      <div id="cartPage" className=" checkoutShape">
        <div className="cartMain flexCol">
          <h1 className="checkoutHeading"> Your Favorites</h1>
          {/* to add headings  */}
          <div className="cartHead flexCol">
            {favs}
          </div>

          {/* to proceed for chekout  */}

          <button
            className="primButton"
            onClick={handleAddToCart}
            >
            Chekout
          </button>
        </div>
      </div>
    </>
  );
}
