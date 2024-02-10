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
import SlideMenu from "../../../components/SlideMenu";

const UserHome: React.FC = () => {
  return (
    <>
      <IonPage id="main-menu">
        <IonHeader>
          <IonToolbar>
            {/* 햄버거버튼 */}
            <IonButtons slot="end">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>User Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">User Home</IonContent>
      </IonPage>
    </>
  );
};

export default UserHome;
