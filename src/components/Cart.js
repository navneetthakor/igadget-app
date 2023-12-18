import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/CartSlice";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const product = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  //function to remove iteam from card
  const removeToCart = (prod) => {
    dispatch(remove(prod._id));
  };

  // for navigation
  const navigate = useNavigate();

  // function to display all the iteams that are in the cart
  const cards = product?.map((prodp) => {
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
      <Navbar />
      <div id="cartPage" className=" checkoutShape">
        <div className="cartMain flexCol">
          <h1 className="checkoutHeading"> Your Cart</h1>
          {/* to add headings  */}
          <div className="cartHead flexCol">
            {cards}
          </div>

          {/* to proceed for chekout  */}

          <button
            className="primButton"
            onClick={() => navigate("/checkout")}
            >
            Chekout
          </button>
        </div>
      </div>
    </>
  );
}
