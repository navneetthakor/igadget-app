// this is to load products searched in searchbar(present in Navbar)
import React, { useContext} from 'react'

// importing context 
import CommonContext from '../contexts/CommonContext'
import Navbar from './Navbar';

export default function Prods() {

    let {common} = useContext(CommonContext);
    
    const loadData = common?.map((prodp) => {
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
            <button className="PrimButton">
              Remove
            </button>
    
          </div>
        );
      });
  return (
    <>
           <Navbar/>
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
        {loadData}
      </div>

      {/* to proceed for chekout  */}
      <button className="PrimButton" style={{marginLeft: "48vw"}}>Chekout</button>
      
    </>
  )
}
