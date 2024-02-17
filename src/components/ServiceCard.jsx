import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonLabel,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import DefaultAvatar from "../assets/default_avatar.jpg";
import { Modal, Rate } from "antd-mobile";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ data, role, status }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [rate, setRate] = useState(0);

  // status : 0 대기중, 1 진행중, 2 완료, 3 취소

  const Contens = ({ isDetail }) => {
    const label = isDetail
      ? ["내용", "일정", "위치", "성별", "금액"]
      : ["내용", "일정", "위치"];

    const contentShow = (item) => {
      switch (item) {
        case "내용":
          return data.content;
        case "일정":
          return data.date;
        case "위치":
          return data.location;
        case "성별":
          return data.content;
        case "금액":
          return data.content;
        default:
          return data.content;
      }
    };
    return (
      <IonCard>
        <IonCardHeader>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <IonAvatar className="ion-margin-end">
              <img src={DefaultAvatar}></img>
            </IonAvatar>
            {(status === "proceeding" || status === "completed") && (
              <IonButton
                fill="clear"
                onClick={() => navigate("/mate/chatting")}
              >
                채팅
              </IonButton>
            )}
          </div>
        </IonCardHeader>

        <IonCardContent>
          {label.map((item, index) => {
            return (
              <div
                key={index}
                style={{ display: "flex", alignItems: "center" }}
                className="ion-margin"
              >
                <IonLabel>{item}</IonLabel>

                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    borderRadius: "8px",
                    backgroundColor: "var(--ion-color-medium)",
                    padding: "5px",
                    color: "white",
                  }}
                  className="ion-margin-start"
                >
                  {contentShow(item)}
                </div>
              </div>
            );
          })}
        </IonCardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            flexWrap: "wrap",
          }}
          className="ion-margin"
        >
          {!isDetail && role === "mate" && (
            <IonButton fill="clear" onClick={() => setIsOpen(true)}>
              상세 내역
            </IonButton>
          )}

          {/* 유저 && 대기중 || 진행중 */}
          {((role === "user" && status === "waiting") ||
            status === "proceeding") && (
            <IonButton fill="clear">취소</IonButton>
          )}

          {/* 메이트 && 완료 */}
          {role === "mate" && status === "completed" && (
            <>
              <IonButton fill="clear">결제완료</IonButton>
              <IonButton fill="clear">결제미완</IonButton>
            </>
          )}

          {/* 메이트 && 대기중 */}
          {role === "mate" && status === "waiting" && (
            <IonButton fill="clear">수락</IonButton>
          )}

          {/* 유저 && 완료 */}
          {role === "user" && status === "completed" && (
            <IonButton
              fill="clear"
              onClick={() => {
                Modal.show({
                  title: "오늘 동행해드린 메이트는 어떠셨나요?",
                  header: "평가해주세요!",
                  content: (
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Rate
                        allowHalf
                        onChange={(v) => {
                          setRate(v);
                        }}
                      />
                    </div>
                  ),
                  closeOnMaskClick: true,
                  closeOnAction: true,
                  actions: [
                    {
                      key: "submit",
                      text: "제출하기",
                      primary: true,
                      onClick() {
                        console.log("rate submit");
                      },
                      style: {
                        backgroundColor: "var(--ion-color-primary)",
                        border: "none",
                      },
                    },
                  ],
                });
              }}
            >
              평가하기
            </IonButton>
          )}
        </div>
      </IonCard>
    );
  };

  return (
    <div>
      <Contens isDetail={false}></Contens>
      <IonModal isOpen={isOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Modal {data}</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <Contens isDetail={true}></Contens>
        </IonContent>
      </IonModal>
    </div>
  );
};

export default ServiceCard;
