import React from "react";
import "./css/LandingPage.css";

export const LandingPage = () => {
  const [innerCircle, setInnerCircle] = React.useState(1);
  const [middleCircle, setMiddleCircle] = React.useState(1);
  const [outerCircle, setOuterCircle] = React.useState(1);

  React.useEffect(() => {
    setTimeout(() => {
      setInnerCircle(1.1);
      let circle1 = document.getElementById("circle1");
      circle1.style.visibility = "visible";
    }, 1000);

    setTimeout(() => {
      setMiddleCircle(1.1);
      let circle2 = document.getElementById("circle2");
      circle2.style.visibility = "visible";
    }, 2000);

    setTimeout(() => {
      setOuterCircle(1.1);
      let circle3 = document.getElementById("circle3");
      circle3.style.visibility = "visible";
    }, 3000);
  }, []);

  return (
    <div id="container">
      <div id="backgroundVideo">
        {/* <video autoPlay loop muted src="./src/uiAssets/loadingsteam.mp4"></video> */}
      </div>
      <div className="centeredCircles">
        <div id="circle1" style={{ transform: `scale(${innerCircle})` }}></div>
      </div>

      <div className="centeredCircles">
        <div id="circle2" style={{ transform: `scale(${middleCircle})` }}></div>
      </div>

      <div className="centeredCircles">
        <div id="circle3" style={{ transform: `scale(${outerCircle})` }}></div>
      </div>
    </div>
  );
};
