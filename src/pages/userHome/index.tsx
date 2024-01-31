import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const UserHome: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>User Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">User Home</IonContent>
    </IonPage>
  );
};

export default UserHome;
