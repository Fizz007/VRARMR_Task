import React from "react";
import "./css/LandingPage.css";

export const LandingPage = () => {
  const [innerCircle, setInnerCircle] = React.useState(1);
  const [middleCircle, setMiddleCircle] = React.useState(1);
  const [outerCircle, setOuterCircle] = React.useState(1);

  const [innerCircleVisiblity, setInnerCircleVisiblity] = React.useState('hidden');
  const [middleCircleVisiblity, setMiddleCircleVisiblity] = React.useState('hidden');
  const [outerCircleVisiblity, setOuterCircleVisiblity] = React.useState('hidden');

  React.useEffect(() => {
    //----------------inhale timeout functions----------------
    setTimeout(() => {
      setInnerCircle(1.1);
      setInnerCircleVisiblity('visible')
    }, 1000);

    setTimeout(() => {
      setMiddleCircle(1.1);
      setMiddleCircleVisiblity('visible')
    }, 2000);

    setTimeout(() => {
      setOuterCircle(1.1);
      setOuterCircleVisiblity('visible')
    }, 3000);

    //---------------exhale timeout functions----------------
    setTimeout(() => {
      setInnerCircle(1);
    }, 9000);

    setTimeout(()=>{
      setInnerCircleVisiblity('hidden')
    },9200)

    setTimeout(() => {
      setMiddleCircle(1);
    }, 8000);

    setTimeout(()=>{
      setMiddleCircleVisiblity('hidden')
    },8200)

    setTimeout(() => {
      setOuterCircle(1);
      setOuterCircleVisiblity('hidden')
    }, 7000);
  
  }, []);

  return (
    <div id="container">
      <div id="backgroundVideo">
        {/* <video autoPlay loop muted src="./src/uiAssets/loadingsteam.mp4"></video> */}
      </div>
      <div className="centeredCircles">
        <div id="circle1" style={{ transform: `scale(${innerCircle})`,visibility:innerCircleVisiblity }}></div>
      </div>

      <div className="centeredCircles">
        <div id="circle2" style={{ transform: `scale(${middleCircle})`,visibility:middleCircleVisiblity }}></div>
      </div>

      <div className="centeredCircles">
        <div id="circle3" style={{ transform: `scale(${outerCircle})`,visibility:outerCircleVisiblity }}></div>
      </div>
    </div>
  );
};
