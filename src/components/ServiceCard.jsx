import {
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

const ServiceCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const Contens = ({ isDetail }) => {
    const label = isDetail
      ? ["내용", "일정", "위치", "성별", "금액"]
      : ["내용", "일정", "위치"];
    return (
      <IonCard>
        <IonCardHeader>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <IonAvatar className="ion-margin-end">
              <img src={DefaultAvatar}></img>
              <p>{data}</p>
            </IonAvatar>
            <IonButton fill="clear">채팅</IonButton>
          </div>
        </IonCardHeader>

        <IonCardContent>
          {label.map((item) => {
            return (
              <div
                style={{ display: "flex", alignItems: "center" }}
                className="ion-margin"
              >
                <IonLabel>{item}</IonLabel>

                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    backgroundColor: "pink",
                    padding: "5px",
                  }}
                  className="ion-margin-start"
                >
                  sjaskdjflskjflsjfls
                </div>
              </div>
            );
          })}
        </IonCardContent>
        <div
          style={{ display: "flex", justifyContent: "flex-end" }}
          className="ion-margin"
        >
          <IonButton fill="clear" onClick={() => setIsOpen(true)}>
            상세 내역
          </IonButton>
          <IonButton fill="clear">취소</IonButton>
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
