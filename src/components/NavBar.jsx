import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";
import { homeOutline, chatbubblesOutline, happyOutline } from "ionicons/icons";
import { IonFooter, IonIcon, IonToolbar } from "@ionic/react";

const NavBar = () => {
  const location = useLocation();
  const prefix = location.pathname.split("/")[1];
  console.log("location", prefix);
  useEffect(() => {}, []);
  return (
    <nav>
      <div>
        <NavLink to={`/${prefix}/home`}>
          <IonIcon
            icon={homeOutline}
            style={{ width: "25px", height: "25px" }}
          ></IonIcon>
        </NavLink>
      </div>
      <div>
        <NavLink to={`/${prefix}/chat`}>
          <IonIcon icon={chatbubblesOutline}></IonIcon>
        </NavLink>
      </div>
      <div>
        <NavLink to={`/${prefix}/mypage`}>
          <IonIcon icon={happyOutline}></IonIcon>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
