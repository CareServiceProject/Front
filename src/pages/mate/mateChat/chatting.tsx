import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { sendOutline } from "ionicons/icons";
import React, { useEffect, useRef, useState } from "react";
import DefaultAvatar from "../../../assets/default_avatar.jpg";
import { useNavigate } from "react-router-dom";

const Chatting: React.FC = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const contentRef = useRef();

  const onSendMsg = () => {
    setMessages((prev) => [...prev, { text: text, from: "me" }]);
    setText("");
    contentRef?.current?.scrollToBottom();
  };

  const onRecieveMsg = () => {
    setMessages((prev) => [...prev, { text: text, from: "other" }]);
    setText("");
    contentRef?.current?.scrollToBottom();
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" onClick={() => navigate(-1)}>
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Page Title</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" scrollEvents={true} ref={contentRef}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100%",
            paddingBottom: "60px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            {messages.map((msg) => {
              return msg.from === "me" ? (
                <div
                  style={{
                    marginBottom: "6px",
                    display: "flex",
                    alignItems: "center",
                    alignSelf: "end",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "var(--ion-color-secondary)",
                      padding: "6px",
                      borderRadius: "8px",
                      maxWidth: "200px",
                    }}
                  >
                    {msg.text}
                  </div>
                  <img
                    src={DefaultAvatar}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      marginLeft: "10px",
                    }}
                  ></img>
                </div>
              ) : (
                <div
                  style={{
                    marginBottom: "6px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={DefaultAvatar}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></img>
                  <div
                    style={{
                      backgroundColor: "var(--ion-color-medium)",
                      padding: "6px",
                      borderRadius: "8px",
                      maxWidth: "200px",
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              );
            })}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "fixed",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "60px",
              padding: "0 10px 0 10px",
              backgroundColor: "white",
            }}
          >
            <input
              placeholder="Enter text"
              style={{ width: "100%", height: "80% " }}
              value={text}
              onChange={(v) => setText(v.target.value)}
            ></input>
            <IonButton onClick={onSendMsg}>
              <IonIcon icon={sendOutline}></IonIcon>
            </IonButton>
            <button onClick={onRecieveMsg}>aaa</button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Chatting;
