import React from "react";
import { useContext } from "react";
import WatchContext from "../contexts/WatchContext";

export default function Footer() {
  const {watch} = useContext(WatchContext);
  return (
    <>
      <div id="footer" className="flexRow topmargin">
        {/* navigation provided in footer  */}
        <div id="footnav" className="flexCol">
          <h3>navigation</h3>
          <a href="nk">Home</a>
          <a href="nk">today's deal</a>
          <a href="nk">{watch}</a>
          <a href="nk">customer support</a>
        </div>

        <div id="footcategory" className="flexCol">
          <h3>Categories</h3>
          <a href="nk">Watches</a>
          <a href="nk">Laptop</a>
          <a href="nk">Mobiles</a>
          <a href="nk">Head Phones</a>
        </div>

        {/* location about physical stores  */}
        <div id="footlocation" className="flexCol">
          <h3>OUr stores</h3>
          <h4>Mumbai</h4>
          <h4>Delhi</h4>
          <h4>Los Angelos</h4>
          <h4>New Yourk</h4>
          <h4>Washington</h4>
        </div>
      </div>
    </>
  );
}
