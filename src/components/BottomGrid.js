import React from "react";
import Iteam from "./Iteam";

export default function BottomGrid(props) {
  let { iteam } = props;
  iteam = Array.from(iteam);
  return (
    <>
      {/* --desktop--- */}
      <div id="" className="bottomGrid">
        {iteam.map((a) => {
          return <Iteam key={a._id} iteam={a} />;
        })}
      </div>

      {/* ---Mobile--- */}
      {/* <div id="Slider" className="disableCss DisBlockCss">
        
        <input type="radio" name="slider" id="Slider1" />
        <input type="radio" name="slider" id="Slider2" />
        <input type="radio" name="slider" id="Slider3" />
        <input type="radio" name="slider" id="Slider4" />
        <input type="radio" name="slider" id="Slider5" />
        <input type="radio" name="slider" id="Slider6" />

        <div id="Slides" className="bottomGrid">
          <div id="overflow">
            <div id="inner">
              {iteam.map((a) => {
                return <Iteam key={a._id} iteam={a} />;
              })}
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
