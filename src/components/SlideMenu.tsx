import React from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonMenu,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useNavigate } from "react-router-dom";

const SlideMenu: React.FC = () => {
  const navigate = useNavigate();
  const doLogout = () => {
    navigate("/");
  };
  return (
    <IonMenu side="end" contentId="main-menu">
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Menu Content</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent className="ion-padding">
        <IonButton expand="full" fill="clear" onClick={doLogout}>
          Log Out
        </IonButton>
      </IonContent>
    </IonMenu>
  );
};

export default SlideMenu;
