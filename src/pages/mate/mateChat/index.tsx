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
import ChatList from "../../../components/ChatList";

const MateChatList: React.FC = () => {
  return (
    <IonPage id="main-menu">
      <IonHeader>
        <IonToolbar>
          {/* 햄버거버튼 */}
          <IonButtons slot="end">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Page Title</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <ChatList></ChatList>
      </IonContent>
    </IonPage>
  );
};

export default MateChatList;
