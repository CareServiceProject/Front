import {
  IonAvatar,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import DefaultAvatar from "../../../assets/default_avatar.jpg";
import StatusCard from "../../../components/StatusCard";
import { useNavigate } from "react-router-dom";

const UserMy: React.FC = () => {
  return (
    <IonPage id="main-menu">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Page Title</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div style={{ display: "flex" }} className="ion-margin">
          <IonAvatar className="ion-margin-end">
            <img src={DefaultAvatar}></img>
          </IonAvatar>
          <h2>000님</h2>
        </div>
        <StatusCard></StatusCard>
      </IonContent>
    </IonPage>
  );
};

export default UserMy;
