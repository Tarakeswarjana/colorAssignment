import React, { createContext, useState } from "react";
const Colorcontext = createContext();
function ColorContext({ children }) {
  const [Grandcolor, seGrandcolor] = useState("red");
  const [parentcolor, setparentcolor] = useState("blue");
  const [childcolor, setchildcolor] = useState("yellow");

  return (
    <Colorcontext.Provider
      value={{
        Grandcolor,
        parentcolor,
        childcolor,
        seGrandcolor,
        setparentcolor,
        setchildcolor,
      }}
    >
      {children}
    </Colorcontext.Provider>
  );
}

export default ColorContext;
export { Colorcontext };
