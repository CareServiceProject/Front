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
import SlideMenu from "../../components/SlideMenu";

const Admin: React.FC = () => {
  return (
    <>
      <SlideMenu></SlideMenu>
      <IonPage id="main-menu">
        <IonHeader>
          <IonToolbar>
            {/* 햄버거버튼 */}
            <IonButtons slot="end">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Admin</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">Admin Main Page</IonContent>
      </IonPage>
    </>
  );
};

export default Admin;
