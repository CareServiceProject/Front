import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
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
import { localToken } from "../../../utils/auth";
import { formatTimestamp } from "../../../utils/timeFormat";

const Chatting = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const roomCid = location.state.roomCid;
  const senderId = location.state.senderId;
  const history = location.state.history;

  const [text, setText] = useState("");
  const contentRef = useRef();

  const [messages, setMessages] = useState(history);
  const [stompClient, setStompClient] = useState(null);

  const token = {
    Authorization: `Bearer ${localToken.get()}`,
  };

  useEffect(() => {
    contentRef?.current?.scrollToBottom();
  }, []);

  useEffect(() => {
    const client = new Client({
      webSocketFactory: () => new SockJS("https://helpu-service.site/ws/chat"),
      headers: token,
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    setStompClient(client);

    client.onConnect = function (frame) {
      console.log("연결이 되었다");
      // Do something, all subscribes must be done is this callback
      // This is needed because this will be executed after a (re)connect
      client.subscribe(
        `/queue/chat/message/${roomCid}`,
        (chat) => {
          const recieved = JSON.parse(chat.body);
          console.log("mmmmm", recieved);
          setMessages((prev) => [...prev, recieved]);
        },
        token
      );
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
    if (text.trim() === "") {
      setText("");
      return;
    }
    const message = {
      message: text,
      sender: senderId,
    };

    stompClient?.publish({
      headers: {
        "content-type": "application/json",
        Authorization: localToken.get(),
      },

      destination: `/app/chat/message/${roomCid}`,
      body: JSON.stringify(message),
      skipContentLengthHeader: true,
    });
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
          {/* <IonTitle>Page Title</IonTitle> */}
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" scrollEvents={true} ref={contentRef}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100%",
            paddingBottom: "80px",
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
              return msg.sender === senderId ? (
                <div
                  key={index}
                  style={{
                    marginBottom: "6px",
                    display: "flex",
                    alignItems: "center",
                    alignSelf: "end",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "end" }}>
                    <span style={{ fontSize: "10px", color: "gray" }}>
                      {formatTimestamp(msg.timeStamp || msg.sendAt)}
                    </span>
                    <div
                      style={{
                        backgroundColor: "var(--ion-color-primary)",
                        padding: "6px",
                        borderRadius: "8px",
                        maxWidth: "200px",
                      }}
                    >
                      {msg.message || msg.content}
                    </div>
                  </div>
                  <img
                    src={msg.profileImage || DefaultAvatar}
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
                  }}
                >
                  <img
                    src={msg.profileImage || DefaultAvatar}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></img>
                  <div>
                    <span>{msg.sender}</span>
                    <div style={{ display: "flex", alignItems: "end" }}>
                      <div
                        style={{
                          display: "flex",
                          backgroundColor: "white",
                          padding: "6px",
                          borderRadius: "8px",
                          maxWidth: "200px",
                          marginTop: "3px",
                        }}
                      >
                        {msg.message || msg.content}
                      </div>
                      <span style={{ fontSize: "10px", color: "gray" }}>
                        {formatTimestamp(msg.timeStamp)}
                      </span>
                    </div>
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
