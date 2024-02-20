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
import { enterChattingRoom, mateChatList, userChatList } from "../api/chatApi";
import { formatTimestamp } from "../utils/timeFormat";

const ChatList = ({ role }) => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  const getUserChatList = () => {
    userChatList().then((res) => {
      setList(res);
    });
  };
  const getMateChatList = () => {
    mateChatList().then((res) => {
      console.log(res);
      setList(res);
    });
  };

  const onChat = (item) => {
    enterChattingRoom(item.chatRoomCid).then((res) => {
      navigate(role === "mate" ? "/mate/chatting" : "/user/chatting", {
        state: { roomCid: item.chatRoomCid, senderId: item.myId, history: res },
      });
    });
  };
  useEffect(() => {
    role === "mate" ? getMateChatList() : getUserChatList();
  }, []);
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
              onChat(item);
            }}
            style={{ height: "60px" }}
          >
            <IonAvatar className="ion-margin-end">
              <img src={item.profileImage || DefaultAvatar}></img>
            </IonAvatar>
            <IonLabel>{item.name}</IonLabel>
            <span style={{ fontSize: "10px", color: "gray" }}>
              {formatTimestamp(item.time)}
            </span>
            {/* <IonIcon icon={chevronForwardOutline}></IonIcon> */}
          </IonItem>
        );
      })}
    </IonList>
  );
};

export default ChatList;
