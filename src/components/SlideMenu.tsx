import React from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonMenu,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const SlideMenu: React.FC = () => {
  return (
    <IonMenu side="end" contentId="main-menu">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu Content</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="full" fill="clear">
          Log Out
        </IonButton>
      </IonContent>
    </IonMenu>
  );
};

export default SlideMenu;
