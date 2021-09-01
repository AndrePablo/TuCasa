import React from "react";
import NavBar from "../components/NavBar";

export const LayOut = (props) => {
  return (
    <div>
      <NavBar />
      {props.children}
    </div>
  );
};

export default LayOut;
