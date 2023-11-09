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
        {" "}
        <Parent />
      </div>
      Grandperent
    </div>
  );
}

export default Grandperent;
