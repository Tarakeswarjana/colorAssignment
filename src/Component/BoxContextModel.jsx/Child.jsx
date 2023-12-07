import React, { useContext, useState } from "react";
import { Colorcontext } from "../context/ColorContext";

function Child() {
  const color = useContext(Colorcontext);

  // console.log(childcolor);
  return (
    <div
      style={{
        background: color.childcolor,
        width: "100%",
        height: "100%",

        padding: "3rem",
      }}
    >
      <label>
        Enter Childcolor
        <input
          onChange={(e) => {
            color.seGrandcolor(e.target.value);
          }}
          type="color"
        ></input>
      </label>
    </div>
  );
}

export default Child;
