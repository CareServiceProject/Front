import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const UserInfo: React.FC = () => {
  return (
    <IonPage id="main-menu">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>유저 정보</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">User Info</IonContent>
    </IonPage>
  );
};

export default UserInfo;
