import {
  IonIcon,
  IonLabel,
  IonList,
  IonListHeader,
  IonItem,
  IonAvatar,
} from "@ionic/react";
import {
  chevronForwardOutline,
  chevronForwardCircleOutline,
} from "ionicons/icons";
import React from "react";
import DefaultAvatar from "../assets/default_avatar.jpg";

const ChatList = () => {
  const history = [1, 2, 3, 4, 5];
  return (
    <IonList>
      <IonListHeader>
        <IonLabel>메이트와 실시간으로 채팅해보세요</IonLabel>
      </IonListHeader>
      {history.map((item) => {
        return (
          <IonItem>
            <IonAvatar className="ion-margin-end">
              <img src={DefaultAvatar}></img>
            </IonAvatar>
            <IonLabel>{item}</IonLabel>
            <IonIcon icon={chevronForwardOutline}></IonIcon>
          </IonItem>
        );
      })}
    </IonList>
  );
};

export default ChatList;
