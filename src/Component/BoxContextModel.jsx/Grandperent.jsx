import React, { useContext } from "react";
import { Colorcontext } from "../context/ColorContext";
import Parent from "./Parent";
function Grandperent() {
  const color = useContext(Colorcontext);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",

        padding: "3rem",
        // height: "50vh",
        background: color.Grandcolor,
      }}
    >
      <div>
        <label>
          Enter Grandperentcolor
          <input
            onChange={(e) => {
              color.setparentcolor(e.target.value);
            }}
            type="color"
          ></input>
        </label>
        <Parent />
      </div>
    </div>
  );
}

export default Grandperent;
