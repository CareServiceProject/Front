import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";
import {
  home,
  homeOutline,
  chatbubbles,
  chatbubblesOutline,
  happy,
  happyOutline,
} from "ionicons/icons";
import { IonIcon, IonLabel } from "@ionic/react";

const NavBar = () => {
  const location = useLocation();
  const endPoint = location.pathname.split("/")[2];
  console.log(endPoint);
  const prefix = location.pathname.split("/")[1];
  console.log("location", prefix);
  useEffect(() => {}, []);

  // const handleMouseEnter = (icon) => {
  //   switch (icon) {
  //     case "home":
  //       setHomeIcon(home);
  //       break;
  //     case "chatbubbles":
  //       setChatIcon(chatbubbles);
  //       break;
  //     case "happy":
  //       setHappyIcon(happy);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // const handleMouseLeave = (icon) => {
  //   switch (icon) {
  //     case "home":
  //       setHomeIcon(homeOutline);
  //       break;
  //     case "chatbubbles":
  //       setChatIcon(chatbubblesOutline);
  //       break;
  //     case "happy":
  //       setHappyIcon(happyOutline);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  return (
    <nav>
      <div>
        <NavLink to={`/${prefix}/home`} className="nav-link">
          <div className="icon-label-container">
            {endPoint === "home" ? (
              <IonIcon
                className="icon"
                icon={home}
                style={{ width: "30px", height: "30px" }}
              ></IonIcon>
            ) : (
              <IonIcon
                className="icon"
                icon={homeOutline}
                style={{ width: "30px", height: "30px" }}
              ></IonIcon>
            )}

            <IonLabel className="label">홈</IonLabel>
          </div>
        </NavLink>
      </div>

      <div>
        <NavLink to={`/${prefix}/chat`} className="nav-link">
          <div className="icon-label-container">
            {endPoint === "chat" ? (
              <IonIcon
                className="icon"
                icon={chatbubbles}
                style={{ width: "30px", height: "30px" }}
              ></IonIcon>
            ) : (
              <IonIcon
                className="icon"
                icon={chatbubblesOutline}
                style={{ width: "30px", height: "30px" }}
              ></IonIcon>
            )}

            <IonLabel className="label">채팅</IonLabel>
          </div>
        </NavLink>
      </div>

      <div>
        <NavLink to={`/${prefix}/mypage`} className="nav-link">
          <div className="icon-label-container">
            {endPoint === "mypage" ? (
              <IonIcon
                className="icon"
                icon={happy}
                style={{ width: "30px", height: "30px" }}
              ></IonIcon>
            ) : (
              <IonIcon
                className="icon"
                icon={happyOutline}
                style={{ width: "30px", height: "30px" }}
              ></IonIcon>
            )}

            <IonLabel className="label">마이</IonLabel>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
