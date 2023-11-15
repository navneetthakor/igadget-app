import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fremove } from "../store/FavoriteSlice";

export default function Cart() {
  const product = useSelector((state) => state.fav);
  const dispatch = useDispatch();

  //function to remove iteam from card
  const removeToCart = (prod) => {
    dispatch(fremove(prod));
  };

//------------------function add to cart-------------------
const handleAddToCart = () =>{
    
} 

  // function to display all the iteams that are in the cart
  const favs = product?.map((prodp) => {
    return (
      <div className="FCart flexRow">
        <div className="FCartProd flexRow" style={{ width: "50%", textAlign: "center" }}>
          <img
            src={`http://localhost:5000/${prodp.images[0]}`.replace(/\\/g, "/")}
            alt=""
          />
          <div>{prodp.title}</div>
        </div>
        <div className="FCartExt" style={{ width: "15%", textAlign: "center" }}>{prodp.ct}</div>
        <div className="FCartExt" style={{ width: "15%", textAlign: "center" }}>{prodp.price * prodp.ct}</div>
        <button className="PrimButton" onClick={() => removeToCart(prodp)}>
          Remove
        </button>

      </div>
    );
  });
  return (
    <>
      <h1 className="PrimHead"> Your Cart</h1>
      <div className="CartMain flexCol">
        {/* to add headings  */}
        <div className="CartHead flexRow" style={{fontWeight: "bold"}}>
          <div id="ptitle" style={{ width: "50%", textAlign: "center" }}>
            Product
          </div>
          <div id="pqty" style={{ width: "15%", textAlign: "center" }}>
            Quantity
          </div>
          <div id="price" style={{ width: "15%", textAlign: "center" }}>
            Price
          </div>
        </div>
        {favs}
      </div>

      {/* to proceed for chekout  */}
      <button className="PrimButton" style={{marginLeft: "48vw"}} onClick={handleAddToCart}>Add to Cart</button>
    </>
  );
}
