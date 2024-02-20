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

import { Link, useNavigate } from "react-router-dom";
import bodyImg from "../../../assets/logo-big-greenRed.png";

const UserHome: React.FC = () => {
  const navigate = useNavigate();
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
              width: "313px",
              height: "250px",
              backgroundColor: "#ffffff",
              margin: "23px auto 20px",
              textDecoration: "none",
              color: "black",
              border: "2px solid #ccc",
              borderRadius: "10px",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s ease",
            }}
            className="logo-container"
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0px 6px 12px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0px 4px 8px rgba(0, 0, 0, 0.1)";
            }}
          >
            <Link to="/user/home">
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
            onClick={() => navigate("/user/request")}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: "0% auto 0",
              backgroundColor: "#ffffff",
              width: "313px",
              height: "227px",
              cursor: "pointer",
              border: "2px solid #ccc",
              borderRadius: "10px",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s ease",
            }}
            className="apply-container"
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0px 6px 12px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0px 4px 8px rgba(0, 0, 0, 0.1)";
            }}
          >
            {/* <Link
              style={{
                textDecoration: 'none',
                color: '#fee0d4',
              }}
              to="/user/request"
            > */}
            <h1
              style={{
                fontFamily: "TmoneyRoundWind",
                color: "black",
              }}
              className="body-content"
            >
              {" "}
              동행 서비스
            </h1>
            {/* </Link> */}
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default UserHome;
