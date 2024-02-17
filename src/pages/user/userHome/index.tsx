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

import { Link } from "react-router-dom";
import bodyImg from "../../../assets/logo-big-greenRed.png";

const UserHome: React.FC = () => {
  return (
    <>
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
              width: "auto",
              height: "250px",
              backgroundColor: "#ffffff",
              margin: "23px 30px 20px",
              textDecoration: "none",
              color: "black",
            }}
            className="logo-container"
          >
            <Link to="/other-page">
              <img
                src={bodyImg}
                alt="Logo"
                style={{
                  flexDirection: "column",
                  cursor: "pointer",
                  width: "200px",
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
              margin: "10% auto 0",
              backgroundColor: "#ffffff",
              width: "313px",
              height: "227px",
              cursor: "pointer",
            }}
            className="apply-container"
          >
            <Link
              style={{
                textDecoration: "none",
                color: "#fee0d4",
              }}
              to="/user/request"
            >
              <h1
                style={{
                  fontSize: "27px",
                  fontFamily: "Georgia, serif",
                  color: "black",
                }}
                className="body-content"
              >
                {" "}
                동행 서비스
              </h1>
            </Link>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default UserHome;
