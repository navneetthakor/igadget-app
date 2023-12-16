// this is for checkout page 
import React from 'react'

// to use store 
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/CartSlice";


export default function Checkout() {
    const product = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    //function to remove iteam from card
  const removeToCart = (prod) => {
    dispatch(remove(prod._id));
  };

    // to put iteams in checkoutIteamGrid 
    const placeIteams = product?.map((prod) => {
        return(
            <h1>hello</h1>
        );
    });

  return (
    <>
    <div className='flexCenter' id='chekoutOuterContainer'>

        {/* container which has all the parts in it  */}
        <div id='checkoutInnerContainer' className='flexRow'>

        {/* left container (it has only shiping info) */}
        <div id='checkoutShipping' className='checkoutShape flexCol'>
            <h1 className='checkoutHeading'>Shopping Cart</h1>

            {/* to place iteams  */}
            <div id='chekoutIteamGrid'>
                {placeIteams}
            </div>
        </div>

        {/* right container (it has delivery info and payment method) */}
        <div id='checkoutRightCont' className='flexCol'>
            {/* delivery */}
            <div id='chekcoutDelivery' className='checkoutShape'>
                <h1 className='checkoutHeading'>Delivery Info</h1>

            </div>

            {/* payment */}
            <div id='checkoutPayment' className='checkoutShape'>
                <h1 className='checkoutHeading'>Payment</h1>
            </div>
        </div>
        </div>

    </div>
      
    </>
  )
}
