import React from "react";
import ColorContext from "../context/ColorContext";
import Grandperent from "./Grandperent";
import Child from "./Child";
import Parent from "./Parent";

function BoxModel() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "100%",
        // height: "50vh",
      }}
    >
      <ColorContext>
        <Grandperent />
        {/* <Child />
        <Parent /> */}
      </ColorContext>
    </div>
  );
}

export default BoxModel;
