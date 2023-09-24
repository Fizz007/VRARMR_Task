import React from "react";
import "./css/NextPage.css";

export const NextPage = () => {
  return (
    <div>
      <div id="backgroundImage">
        <img src="./src/uiAssets/background.png" alt="" />
      </div>

      <div id="absolutePosition">
        <div id="lowerHalf">
          <div>
            <img src="./src/uiAssets/rightarrow.png" alt="" />
            <img src="./src/uiAssets/leftarrow.png" alt="" />
          </div>
          <div>
            <h2>Digital Interface</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              voluptate quidem aut similique quam enim harum, nostrum vitae
              veritatis voluptas delectus possimus earum, voluptatum, sapiente
              sunt. A nihil enim necessitatibus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
