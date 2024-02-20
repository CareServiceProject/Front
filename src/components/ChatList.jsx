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
import DefaultAvatar from "../assets/default_avatar.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { mateChatList, userChatList } from "../api/chatApi";

const ChatList = ({ role }) => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  const getUserChatList = () => {
    userChatList().then((res) => {
      console.log(res);
      setList(res);
    });
  };
  const getMateChatList = () => {
    mateChatList().then((res) => {
      console.log(res);
      setList(res);
    });
  };
  useEffect(() => {
    role === "mate" ? getMateChatList() : getUserChatList;
  });
  return (
    <IonList>
      <IonListHeader>
        <IonLabel>실시간으로 채팅해보세요!</IonLabel>
      </IonListHeader>
      {list.map((item, index) => {
        return (
          <IonItem
            key={index}
            onClick={() => {
              role === "mate"
                ? navigate("/mate/chatting")
                : navigate("/user/chatting");
            }}
          >
            <IonAvatar className="ion-margin-end">
              <img src={DefaultAvatar}></img>
            </IonAvatar>
            <IonLabel>zz</IonLabel>
            <IonIcon icon={chevronForwardOutline}></IonIcon>
          </IonItem>
        );
      })}
    </IonList>
  );
};

export default ChatList;
