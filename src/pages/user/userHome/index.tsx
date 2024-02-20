import React from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import SlideMenu from "../../../components/SlideMenu";
import "./userHome.css";

import { Link } from "react-router-dom";
import bodyImg from "../../../assets/logo-big-greenRed.png";

const UserHome: React.FC = () => {
  return (
    <IonPage id="main-menu">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="userHome">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "280px",
            maxHeight: "40%",
            backgroundColor: "#FFFAF0",
            margin: "auto",
            textDecoration: "none",
            color: "black",
          }}
        >
          <Link to="/user/home">
            <img
              src={bodyImg}
              alt="Logo"
              style={{
                flexDirection: "column",
                cursor: "pointer",
                width: "350px",
                height: "100%",
                objectFit: "cover",
              }}
              className="logo-img"
            />
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            margin: "auto",
            backgroundColor: "#ffffff",
            maxWidth: "80%",
            width: "55%",
            maxHeight: "30%",
            height: "227px",
            cursor: "pointer",
            borderRadius: "10px",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s ease",
          }}
          className="apply-container"
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: "#fee0d4",
            }}
            to="/user/request"
          >
            <h2
              style={{
                color: "black",
              }}
              className="body-content"
            >
              {" "}
              동행 서비스
            </h2>
          </Link>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default UserHome;
