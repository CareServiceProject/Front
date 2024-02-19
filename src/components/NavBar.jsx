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
  const prefix = location.pathname.split("/")[1];
  console.log("location", prefix);
  useEffect(() => {}, []);

  const [homeIcon, setHomeIcon] = useState(homeOutline);
  const [chatIcon, setChatIcon] = useState(chatbubblesOutline);
  const [happyIcon, setHappyIcon] = useState(happyOutline);

  const handleMouseEnter = (icon) => {
    switch (icon) {
      case "home":
        setHomeIcon(home);
        break;
      case "chatbubbles":
        setChatIcon(chatbubbles);
        break;
      case "happy":
        setHappyIcon(happy);
        break;
      default:
        break;
    }
  };

  const handleMouseLeave = (icon) => {
    switch (icon) {
      case "home":
        setHomeIcon(homeOutline);
        break;
      case "chatbubbles":
        setChatIcon(chatbubblesOutline);
        break;
      case "happy":
        setHappyIcon(happyOutline);
        break;
      default:
        break;
    }
  };

  return (
    <nav>
      <div>
        <NavLink
          to={`/${prefix}/home`}
          className="nav-link"
          onMouseEnter={() => handleMouseEnter("home")}
          onMouseLeave={() => handleMouseLeave("home")}
        >
          <div className="icon-label-container">
            <IonIcon
              className="icon"
              icon={homeIcon}
              style={{ width: "30px", height: "30px" }}
            ></IonIcon>
            <IonLabel className="label">홈</IonLabel>
          </div>
        </NavLink>
      </div>

      <div>
        <NavLink
          to={`/${prefix}/chat`}
          className="nav-link"
          onMouseEnter={() => handleMouseEnter("chatbubbles")}
          onMouseLeave={() => handleMouseLeave("chatbubbles")}
        >
          <div className="icon-label-container">
            <IonIcon
              className="icon"
              icon={chatIcon}
              style={{ width: "30px", height: "30px" }}
            ></IonIcon>
            <IonLabel className="label">채팅</IonLabel>
          </div>
        </NavLink>
      </div>

      <div>
        <NavLink
          to={`/${prefix}/mypage`}
          className="nav-link"
          onMouseEnter={() => handleMouseEnter("happy")}
          onMouseLeave={() => handleMouseLeave("happy")}
        >
          <div className="icon-label-container">
            <IonIcon
              className="icon"
              icon={happyIcon}
              style={{ width: "30px", height: "30px" }}
            ></IonIcon>
            <IonLabel className="label">마이</IonLabel>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
