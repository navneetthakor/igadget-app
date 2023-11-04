import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { remove } from "../store/CartSlice";

export default function Cart() {
  const product = useSelector((state) => state.cart);
  console.log("Hello" + product)
  const dispatch = useDispatch();

  //function to remove iteam from card
  const removeToCart = (prod) => {
    dispatch(remove(prod));
  };

  // function to display all the iteams that are in the cart
  const cards = product?.map((prodp) => {
    return (
      <div>
        <Card style={{ width: "300Px", height: "300px" }}>
          <Card.Img
            variant="top"
            src={`http://localhost:5000/${prodp.images[0]}`.replace(/\\/g, '/')}
            style={{ width: "80px", height: "100px" }}
          />
          <Card.Body>
            <Card.Title>{prodp.title}</Card.Title>
            <Card.Text>INR : {prodp.price}</Card.Text>
            <Button variant="primary" onClick={() => removeToCart(prodp)}>
              remove to card
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  });
  return(
    <>
    <div className="container">
      <h1 className="justify-content">
        Cart
      </h1>
        <div className="row">
        {cards}
        </div>
      </div>
    </>
  );
}
