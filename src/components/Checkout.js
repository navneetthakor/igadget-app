// this is for checkout page
import React, { useState } from "react";

// to use store
import { useSelector} from "react-redux";


export default function Checkout() {
  const product = useSelector((state) => state.cart);

  // --------------------------  for total--------------------------------
  const [total,setTotal] = useState(0);
  const doTotal = () =>{
      let temp = 0;
    for(let i=0; i<product.length; i++){
        temp += product[i].price;
    } 
    setTotal(temp);
  }

  // ---------------to put iteams in checkoutIteamGrid------------------------
  const placeIteams = product?.map((prod) => {
    return (
      <div id="checkoutIteam" className="flexRow">
        {/* image division  */}
        <div id="checkoutIteamImg">
          <img
            src={`http://localhost:5000/${prod.images[0]}`.replace(/\\/g, "/")}
            alt=""
          />
        </div>

        {/* content division  */}
        <div className="checkoutIteamContent flexCol">
          <h2 className="checkoutSecHeading">{prod.title}</h2>
          <div>height: {prod.height}</div>
          <div>width: {prod.width}</div>
        </div>

        <div className="checkoutIteamContent flexCol">
          <h2 className="checkoutSecHeading">Price: {prod.ct * prod.price}</h2>
          <div>Qnt: {prod.ct}</div>
        </div>
      </div>
    );
  });


//   -----------------------------------------------------------------------------------
//   -----------------------------Main Function----------------------------------------
//   ----------------------------------------------------------------------------------
  return (
    <>
      <div className="flexCenter" id="chekoutOuterContainer" onLoad={doTotal}>
        {/* --------------------------container which has all the parts in it ------------------------ */}
        <div id="checkoutInnerContainer" className="flexRow">

          {/*---left container (it has only shiping info)--- */}
          <div id="checkoutShipping" className="checkoutShape flexCol">
            <h1 className="checkoutHeading">Shopping Cart</h1>

            {/* to place iteams  */}
            <div id="chekoutIteamGrid">{placeIteams}</div>

            {/* For printing subtotal  */}
            <div id="chekoutShippingTotal">
              <div>
                <h4>Subtotal</h4>
                <h4>{total}.00 Rs.</h4>
              </div>

              <div>
                <h4>Delivery</h4>
                <h4>0.00 Rs.</h4>
              </div>
            </div>

            {/* for printing total */}
            {/* For printing subtotal  */}
            <div id="chekoutShippingTotal" style={{border:"transparent"}}>
              <div>
                <h4>Total</h4>
                <h4>{total}.00 Rs.</h4>
              </div>
            </div>
          </div>

          {/*---right container (it has delivery info and payment method) ---*/}
          <div id="checkoutRightCont" className="flexCol">
            {/* delivery */}
            <div id="chekcoutDelivery" className="checkoutShape">
              <h1 className="checkoutHeading">Delivery Info</h1>
            </div>

            {/* payment */}
            <div id="checkoutPayment" className="checkoutShape">
              <h1 className="checkoutHeading">Payment</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
