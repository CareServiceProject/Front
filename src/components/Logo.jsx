import React from "react";

import LogoPic from "../assets/Logo.jpg";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={LogoPic} style={{ width: "300px", height: "200px" }}></img>
    </div>
  );
};

export default Logo;
