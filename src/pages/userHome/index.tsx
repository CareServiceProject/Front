import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const UserHome: React.FC = () => {
  return (
    <IonPage id="main-menu">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>User Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">User Home</IonContent>
    </IonPage>
  );
};

export default UserHome;
