import {
  IonMenuButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const MateInfo: React.FC = () => {
  return (
    <IonPage id="main">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>메이트 정보</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">MateInfo!!!!!</IonContent>
    </IonPage>
  );
};

export default MateInfo;
