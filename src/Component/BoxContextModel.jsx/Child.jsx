import React, { useContext } from "react";
import { Colorcontext } from "../context/ColorContext";

function Child() {
  const color = useContext(Colorcontext);
  return (
    <div
      style={{
        // color: color.parentcolor,
        background: color.childcolor,
        width: "100%",
        height: "100%",

        padding: "3rem",
      }}
    >
      Child
    </div>
  );
}

export default Child;
