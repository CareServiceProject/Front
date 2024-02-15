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
import "./style.css";
import { Link } from "react-router-dom";

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
        <IonContent className="ion-padding">
          <div className="logo-container">
            <Link to="/other-page">
              <img src="logo.png" alt="Logo" className="logo-img" />
            </Link>
          </div>
          <div className="body-image-container">
            <Link to="/user/request">
              <img src="body-image.png" alt="Body Image" className="body-img" />
            </Link>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default UserHome;
