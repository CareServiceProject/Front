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

const MateChatList: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* 햄버거버튼 */}
          <IonButtons slot="end">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Page Title</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">Mate Chat List</IonContent>
    </IonPage>
  );
};

export default MateChatList;
