import React from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonMenu,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";

const SlideMenu: React.FC = () => {
  const router = useIonRouter();
  const doLogout = () => {
    router.push("/", "root");
  };
  return (
    <IonMenu side="end" contentId="main-menu">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu Content</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="full" fill="clear" onClick={doLogout}>
          Log Out
        </IonButton>
      </IonContent>
    </IonMenu>
  );
};

export default SlideMenu;
