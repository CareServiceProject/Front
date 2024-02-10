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

const ServiceCard = () => {
  const content = ["내용", "일정", "위치"];

  return (
    <div>
      <IonCard>
        <IonCardHeader>
          <IonAvatar className="ion-margin-end">
            <img src={DefaultAvatar}></img>
          </IonAvatar>
        </IonCardHeader>

        <IonCardContent>
          {content.map((item) => {
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
          <IonButton fill="clear" id="open-modal">
            상세 내역
          </IonButton>
          <IonButton fill="clear">취소</IonButton>
        </div>
      </IonCard>
    </div>
  );
};

export default ServiceCard;
