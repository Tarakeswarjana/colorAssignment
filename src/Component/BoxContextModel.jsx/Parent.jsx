import React, { useContext } from "react";
import { Colorcontext } from "../context/ColorContext";
import Child from "./Child";

function Parent() {
  const color = useContext(Colorcontext);

  console.log("lbzdhgg", color);

  return (
    <div
      style={{
        // color: color.parentcolor,
        background: color.parentcolor,
        width: "100%",
        height: "100%",

        padding: "3rem",
      }}
    >
      <Child />
      Parent
    </div>
  );
}

export default Parent;
