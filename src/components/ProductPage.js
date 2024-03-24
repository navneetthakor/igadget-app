import React, { useContext, useEffect, useState } from "react";
import heart from "../photos/heart.png";
import LoadIndicator from "./LoadIndicator";
import ProdPageContext from "../contexts/ProdPageContext";
import { add, remove } from "../store/CartSlice";
import { fadd, fremove } from "../store/FavoriteSlice";
import { useDispatch } from "react-redux";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import sampleImg from "../photos/avtar.svg";
import { GiCancel } from "react-icons/gi";

export default function ProductPage() {
  const { prodp, load } = useContext(ProdPageContext);
  const [mainimg, setMainimg] = useState(prodp.images[0]);
  let dummyimg;

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
    if (!localStorage.getItem("custmrtoken")) {
      alert("please login first");
      navigate("/custmrlogin");
      return;
    }
    const updatedProd = { prod: prodp, ct: ct };
    console.log(updatedProd);
    dispatch(add(updatedProd));

    let url = process.env.REACT_APP_MY_IP;
    url += "/cart/addToCart";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        custmrtoken: localStorage.getItem("custmrtoken"),
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
  const handleAddToFav = async () => {
    if (!localStorage.getItem("custmrtoken")) {
      alert("please login first");
      navigate("/custmrlogin");
      return;
    }

    const updatedProd = { prod: prodp, ct: ct };
    dispatch(fadd(updatedProd));

    let url = process.env.REACT_APP_MY_IP;
    url += "/cart/addToFav";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        custmrtoken: localStorage.getItem("custmrtoken"),
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

  // ----------fetching reviews ---------------
  const [rating, setRating] = useState([]);
  const [totRating, setTotRating] = useState(parseInt(5));
  let tempRating = [];

  const fetchReviews = async () => {
    const url = `${process.env.REACT_APP_MY_IP}/rating/getRating`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product_id: prodp._id }),
    });

    const res = await response.json();
    setRating(() => {return res.rating;});
    tempRating = res.rating;
  };

  // stating up the total rating
  const countRating = () => {
    let temp = 5;
    for (let i of tempRating) {
      temp = temp + parseInt(i.rate);
    }
    temp = temp / (tempRating.length + 1);
    setTotRating(() => {
      return parseInt(temp);
    });
  };

  useEffect(() => {
    fetchReviews();
    setTimeout(() => {
      countRating();
    }, 1000);
  }, []);

  // ---------------Reivew box related logic ---------
  // to hold values of review related data (enterd by user )
  const [userReview, setUserReview] = useState({
    rate: 0,
    desc: "",
  });

  const handleRateChange = (value) =>{
        setUserReview({...userReview, rate: value});
  }
  const handleDescChange = (event) =>{
        setUserReview({...userReview, desc: event.target.value});
  }

  // to toggle add review box
  const toggleReviewBlock = () => {
    document.getElementById("reviewBlock").classList.toggle("disableCss");
  };

  //to submit review
  const addReview = async () => {
    const url = `${process.env.REACT_APP_MY_IP}/rating/addReview`;
    const response = await fetch(url,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        custmrtoken: localStorage.getItem("custmrtoken"),
      },
      body: JSON.stringify({ product_id: prodp._id, rate: userReview.rate, desc: userReview.desc }),
    });

    const result = await response.json();
    if(result.signal === "red") {
      alert(`internal server error: ${result.error || "please try later"}`);
      toggleReviewBlock();
      return;
    }
    else{
      alert("review added");
    }
    fetchReviews();
    setTimeout(() => {
      countRating();
    }, 1000);
    toggleReviewBlock();
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
                      key={image}
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
              <div
                style={{
                  zIndex: "-1",
                  display: "flex",
                  alignItems: "center",
                  gap: "5%",
                }}
              >
                <Rating
                  initialRating={totRating}
                  emptySymbol={<FaRegStar size={30} />}
                  fullSymbol={<FaStar style={{ color: "#e8e337" }} size={30} />}
                />

                <button
                  onClick={() => alert(totRating)}
                  style={{
                    color: "orangered",
                    fontSize: "13px",
                    border: "1px solid orangered",
                    borderRadius: "2px",
                    padding: "3px",
                    cursor: "pointer",
                  }}
                >
                  all ratings &darr;
                </button>
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
                  // onClick={() => alert(totRating)}
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

          {/* Reviews  */}
          <div
            style={{
              border: "2px solid lightgray",
              padding: "5%",
            }}
            className="container flexCol"
          >
            <h2>Customer reviews</h2>
            <div
              style={{
                minHeight: "50%",
                marginTop: "3%",
              }}
            >
              {rating?.map((review) => {
                return (
                  <div
                    className="flexRow"
                    style={{ marginTop: "2%" }}
                    key={review}
                  >
                    <div
                      style={{
                        border: "1px solid blue",
                        height: "50px",
                        width: "50px",
                        borderRadius: "50%",
                        overflow: "hidden",
                      }}
                    >
                      <img src={sampleImg} height="100%" width="100%" alt="" />
                    </div>
                    <div className="flexCol" style={{ marginLeft: "3%" }}>
                      <h4>{review.name}</h4>
                      <div style={{ marginTop: "2%" }}>
                        <Rating
                          readonly
                          initialRating={review.rate}
                          emptySymbol={<FaRegStar size={20} />}
                          fullSymbol={
                            <FaStar style={{ color: "#e8e337" }} size={20} />
                          }
                        />
                      </div>
                      <div>{review.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* to add review */}
            <button className="primButton" onClick={toggleReviewBlock}>
              Add review
            </button>
          </div>
          <div
            id="reviewBlock"
            className="disableCss"
            style={{
              paddingLeft: "5%",
              borderRadius: "8px",
              position: "fixed",
              top: 150,
              left: 200,
              height: "500px",
              width: "70%",
              zIndex: "100000",
              boxShadow: "2px 2px 500px black",
              backgroundColor: "white",
            }}
          >
            <GiCancel
              style={{ cursor: "pointer", marginLeft: "95%", marginTop: "2%" }}
              color="royalblue"
              size={25}
              onClick={toggleReviewBlock}
            />
            <div>
              <h2 style={{ marginBottom: "1%" }}>How you rate this Product?</h2>
              <Rating
                initialRating={userReview.rate}
                emptySymbol={<FaRegStar size={34} />}
                fullSymbol={<FaStar size={35} style={{ color: "#e8e337" }} />}
                onChange={handleRateChange}
              />
            </div>
            <div style={{ marginTop: "3%" }}>
              <h2 style={{ marginBottom: "1%" }}>
                Share your valueable experience with us?
              </h2>
              <textarea
              name="desc"
              value={userReview.desc}
                style={{ padding: "8px" }}
                placeholder="Very useful product"
                rows={10}
                cols={55}
                onChange={handleDescChange}
              />
            </div>
            <button
              style={{ marginTop: "3%" }}
              className="primButton"
              onClick={addReview}
            >
              Submit
            </button>
          </div>
        </>
      )}
    </>
  );
}
