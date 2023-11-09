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
      <label>
        Enter Parentcolor
        <input
          onChange={(e) => {
            color.setchildcolor(e.target.value);
          }}
          type="color"
        ></input>
      </label>

      <Child />
    </div>
  );
}

export default Parent;
