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

const UserChatList: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* 햄버거버튼 */}
          <IonButtons slot="end">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>나의 채팅리스트</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">user Chat List</IonContent>
    </IonPage>
  );
};

export default UserChatList;
