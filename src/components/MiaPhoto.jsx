//Mia photo
import React, { Suspense, useEffect, useState } from "react";
import { styles } from "../styles";

const MiaPhoto = () => {
  //   const isMobile = window.innerWidth < 500; // Check if the screen size is smaller than 500px
  const isMobile = window.matchMedia("(max-width: 500px)");

  return (
    <div>
      <img
        src={isMobile ? "Mia.png" : "Mia.png"}
        alt="Image"
        // style={{ height: 350 }}
        style={{ width: 350 }}
      />
    </div>
  );
};
export default MiaPhoto;
