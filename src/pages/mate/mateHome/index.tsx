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

const MateHome: React.FC = () => {
  return (
    <IonPage id="main-menu">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>MateHome</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">MateHome</IonContent>
    </IonPage>
  );
};

export default MateHome;
