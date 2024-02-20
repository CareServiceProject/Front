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
import { sendOutline as vvvv } from "ionicons/icons";
import React, { useEffect, useRef, useState } from "react";
import DefaultAvatar from "../../../assets/default_avatar.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client/dist/sockjs.min.js";
import "./style.css";
import { localToken } from "../../../utils/auth";

const Chatting = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const roomCid = location.state.roomCid;
  console.log();

  const [text, setText] = useState("");
  const contentRef = useRef();

  const [messages, setMessages] = useState([]);
  const [stompClient, setStompClient] = useState(null);

  useEffect(() => {
    const client = new Client({
      webSocketFactory: () => new SockJS("https://helpu-service.site/ws/chat"),
      // brokerURL: "wss://https://helpu-service.site/ws/chat",
      connectHeaders: {
        Authorization: localToken.get(),
      },
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    setStompClient(client);

    client.onConnect = function (frame) {
      console.log("Connected to WebSocket");
      // Do something, all subscribes must be done is this callback
      // This is needed because this will be executed after a (re)connect
      client.subscribe(`/queue/chat/message/${roomCid}`, (message) => {
        console.log("mmmmm", message);
        const newMessages = [...messages, JSON.parse(message.body)];
        setMessages(newMessages);
      });
    };

    client.onStompError = function (frame) {
      // Will be invoked in case of error encountered at Broker
      // Bad login/passcode typically will cause an error
      // Complaint brokers will set `message` header with a brief message. Body may contain details.
      // Compliant brokers will terminate the connection after any error
      console.log("Broker reported error: " + frame.headers["message"]);
      console.log("Additional details: " + frame.body);
    };

    client.activate();

    return () => {
      client.deactivate();
    };
  }, []);

  const sendMessage = () => {
    const message = {
      message: text,
      sender: "me",
    };

    stompClient?.publish({
      Authorization: localToken.get(),
      destination: `/app/chat/message/${roomCid}`,
      body: message,
      skipContentLengthHeader: true,
    });
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
          className="aaaaaa"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            {messages.map((msg, index) => {
              return msg.sender === "me" ? (
                <div
                  key={index}
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
                    {msg.message}
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
                  key={index}
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
                    {msg.message}
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
            <IonButton onClick={sendMessage}>
              <IonIcon icon={vvvv}></IonIcon>
            </IonButton>
            {/* <button onClick={onRecieveMsg}>aaa</button> */}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Chatting;
