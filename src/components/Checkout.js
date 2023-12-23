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
        temp += product[i].price * product[i].ct;
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
            src={`${process.env.MY_IP}/${prod.images[0]}`.replace(/\\/g, "/")}
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

              {/* for address info */}
              <div id="checkoutDeliveryInput">
                {/* for first and last name  */}
                <div className="checkout2in1">
                  <div className="flexCol">
                    <label htmlFor="fname">First Name</label>
                    <input type="txt" id="fname" name="fname" placeholder="Navneetkumar"/>
                  </div>
                  <div className="flexCol">
                    <label htmlFor="lname">Last Name</label>
                    <input type="txt" id="lname" name="lname" placeholder="Thakor"/>
                  </div>
                </div>

                {/* for email and mobile */}
                <div className="checkout2in1">
                  <div className="flexCol">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="tnavneet86@gmail.com"/>
                  </div>
                  <div className="flexCol">
                    <label htmlFor="mobilen">Mobile No.</label>
                    <input type="number" id="mobilen" name="mobilen" placeholder="9966996699"/>
                  </div>
                </div>

                {/* for address */}
                <div className="flexCol checkout1in1">
                  <label htmlFor="address">Address</label>
                  <input type="txt" id="address" name="address" placeholder="1509, ramdevpura near khankuva, bhalej road"/>
                </div>

                {/* for city and state */}
                <div className="checkout2in1">
                  <div className="flexCol">
                    <label htmlFor="city">City</label>
                    <input type="txt" id="city" name="city" placeholder="Anand"/>
                  </div>
                  <div className="flexCol">
                    <label htmlFor="state">State</label>
                    <input type="txt" id="state" name="state" placeholder="Gujarat"/>
                  </div>
                </div>

                {/* for city and state */}
                <div className="checkout2in1">
                  <div className="flexCol">
                    <label htmlFor="country">Country</label>
                    <input type="txt" id="country" name="country" placeholder="India"/>
                  </div>
                  <div className="flexCol">
                    <label htmlFor="pincode">Pincode</label>
                    <input type="txt" id="pincode" name="pincode" placeholder="388205"/>
                  </div>
                </div>

              </div>
            </div>

            {/*------------------------------------------- payment----------------------------- */}
            <div id="checkoutPayment" className="checkoutShape">
              <h1 className="checkoutHeading">Payment</h1>

              {/* patment related content  */}
              <div id="checkoutPaymentInfo">
                <p htmlFor="selectPayment">Payment Method</p>
                
                <div id="checkoutRadioCont" className="flexCol">
                  <div className="flexRow">
                    <input id="r1" type="radio" name="payment"/>
                    <label htmlFor="r1">Credit/Debit Card</label>
                  </div>
                  <div className="flexRow">
                    <input id="r2" type="radio" name="payment"/>
                    <label htmlFor="r2">Net Banking</label>
                  </div>
                  <div className="flexRow">
                    <input id="r3" type="radio" name="payment"/>
                    <label htmlFor="r3">UPI</label>
                  </div>
                  <div className="flexRow">
                    <input id="r4" type="radio" name="payment"/>
                    <label htmlFor="r4">Cash On Delivery</label>
                  </div>

                </div>

                <button className="primButton">Proceed</button>
              </div>

            </div>

            {/* payment over */}
          </div>
        </div>
      </div>
    </>
  );
}
